# Create injury/player availability dataset
injury_impact = {
    'key_player_injured': -8,  # Impact on win probability when key player is injured
    'multiple_injuries': -15,  # Impact when multiple key players are injured
    'bowler_injury': -5,       # Specific impact when key bowler is injured
    'batsman_injury': -6,      # Specific impact when key batsman is injured
    'all_rounder_injury': -7,  # Impact when all-rounder is injured
    'no_injuries': 0           # No impact when team is fully fit
}

# Generate synthetic recent form data (last 5 matches)
recent_form_data = {}
for team in teams_df['team']:
    # Generate last 5 match results (W=Win, L=Loss)
    wins = np.random.binomial(5, teams_df[teams_df['team']==team]['win_percentage'].iloc[0]/100)
    form = ['W'] * wins + ['L'] * (5-wins)
    np.random.shuffle(form)
    recent_form_data[team] = {
        'last_5_matches': form,
        'recent_win_rate': wins/5,
        'momentum_score': wins * 2 - (5-wins)  # Ranges from -5 to 5
    }

print("Recent Form Data (Sample):")
for team, form in list(recent_form_data.items())[:5]:
    print(f"{team}: {form['last_5_matches']} (Win Rate: {form['recent_win_rate']:.1%}, Momentum: {form['momentum_score']})")

print("\nInjury Impact Factors:")
for injury_type, impact in injury_impact.items():
    print(f"{injury_type}: {impact} percentage points")