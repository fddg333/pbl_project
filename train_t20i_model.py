import pandas as pd
import numpy as np
import kagglehub
import os
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import classification_report

print("1. Downloading International T20 Dataset from Kaggle...")
path = kagglehub.dataset_download('goyalashish/dataset-for-t20-international-matches')

# Load both innings
df_1 = pd.read_csv(os.path.join(path, "1st Innings T20.csv"))
df_2 = pd.read_csv(os.path.join(path, "2nd Innings T20.csv"))

print("2. Preprocessing & Aggregating Ball-by-Ball Data into Match Winners...")

# Clean data: find the total runs scored in 1st innings per match
df_1['matchId'] = df_1['matchId'].astype(str).str.replace('_1', '')
runs_1 = df_1.groupby(['matchId', 'battingTeam', 'bowlingTeam', 'tossWinner', 'venue'])['runs'].sum().reset_index()
runs_1 = runs_1.rename(columns={'runs': 'team1_runs', 'battingTeam': 'team1', 'bowlingTeam': 'team2'})

# find the total runs scored in 2nd innings per match
df_2['matchId'] = df_2['matchId'].astype(str).str.replace('_2', '')
runs_2 = df_2.groupby(['matchId'])['runs'].sum().reset_index()
runs_2 = runs_2.rename(columns={'runs': 'team2_runs'})

# Merge to get final match scores
matches = pd.merge(runs_1, runs_2, on='matchId', how='inner')

# Determine the winner
def get_winner(row):
    if row['team1_runs'] > row['team2_runs']:
        return row['team1']
    elif row['team1_runs'] < row['team2_runs']:
        return row['team2']
    else:
        return 'Tie'

matches['winner'] = matches.apply(get_winner, axis=1)

# Drop any ties to keep classification clean
matches = matches[matches['winner'] != 'Tie'].copy()

# Set Target Variable: Did Team 1 Win? (1 = Yes, 0 = No)
matches['team1_win'] = (matches['winner'] == matches['team1']).astype(int)

# Extract final feature columns
features_df = matches[['team1', 'team2', 'tossWinner', 'venue']].copy()

print("3. Encoding Teams and Venues...")
le_team = LabelEncoder()
le_venue = LabelEncoder()

# Fit encoder on all teams
all_teams = pd.concat([features_df['team1'], features_df['team2']]).unique()
le_team.fit(all_teams)

features_df['Team1_Encoded'] = le_team.transform(features_df['team1'])
features_df['Team2_Encoded'] = le_team.transform(features_df['team2'])
features_df['Toss_Winner_Encoded'] = le_team.transform(features_df['tossWinner'])
features_df['Venue_Encoded'] = le_venue.fit_transform(features_df['venue'])

X = features_df[['Team1_Encoded', 'Team2_Encoded', 'Toss_Winner_Encoded', 'Venue_Encoded']]
y = matches['team1_win']

print(f"\n4. Train-Test Split (Total T20I Matches: {len(X)})...")
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print("\n5. Training Random Forest ML Model...")
model = RandomForestClassifier(n_estimators=100, max_depth=10, random_state=42)
model.fit(X_train, y_train)

print("\n6. Running Cross-Validation & Statistics...")
cv_scores = cross_val_score(model, X, y, cv=5)
print(f"-> 5-Fold Cross Validation Accuracy Scores: {[f'{score*100:.1f}%' for score in cv_scores]}")
print(f"-> Mean Validation Accuracy: {cv_scores.mean() * 100:.2f}%\n")

y_pred = model.predict(X_test)
print("=== Classification Report ===")
print(classification_report(y_test, y_pred))

print("\n🔥 Extracted Feature Importances:")
importances = model.feature_importances_
importance_dict = dict(zip(['Team1 Strength', 'Team2 Strength', 'Toss Winner', 'Venue Impact'], importances))
for k, v in importance_dict.items():
    print(f"   {k}: {v*100:.1f}%")

print("\n7. Saving cleanly aggregated Data to CSV...")
matches.to_csv("cleaned_t20i_dataset.csv", index=False)
print("✅ Saved as 'cleaned_t20i_dataset.csv'! Ready for PBL presentation.")
