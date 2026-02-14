# Test the prediction model with some examples
print("=== T20I MATCH PREDICTION EXAMPLES ===\n")

# Example 1: India vs Australia (top-ranked teams)
prediction1 = predictor.predict_match_outcome(
    team1='India', 
    team2='Australia',
    pitch_condition='batting_friendly',
    weather_condition='sunny',
    venue='india',
    toss_winner='India'
)

print("🏏 MATCH 1: India vs Australia")
print(f"Venue: India (Home advantage for India)")
print(f"Pitch: Batting-friendly")
print(f"Weather: Sunny")
print(f"Toss Winner: India")
print(f"")
print(f"🔮 PREDICTION:")
print(f"• {prediction1['team1']}: {prediction1['team1_win_probability']}%")
print(f"• {prediction1['team2']}: {prediction1['team2_win_probability']}%")
print(f"• Predicted Winner: {prediction1['predicted_winner']}")
print(f"• Confidence Level: {prediction1['confidence']}%")
print(f"• Expected Scores: {prediction1['team1']} {prediction1['team1_expected_score']}, {prediction1['team2']} {prediction1['team2_expected_score']}")
print(f"")
print(f"📊 Key Factors:")
for factor, value in prediction1['key_factors'].items():
    print(f"  - {factor.replace('_', ' ').title()}: {value}")
print("\n" + "="*60 + "\n")

# Example 2: England vs Pakistan with challenging conditions
prediction2 = predictor.predict_match_outcome(
    team1='England',
    team2='Pakistan', 
    pitch_condition='bowling_friendly',
    weather_condition='overcast',
    team1_injuries='key_player_injured',
    venue='neutral'
)

print("🏏 MATCH 2: England vs Pakistan")
print(f"Venue: Neutral")
print(f"Pitch: Bowling-friendly")
print(f"Weather: Overcast")
print(f"Injuries: England has key player injured")
print(f"")
print(f"🔮 PREDICTION:")
print(f"• {prediction2['team1']}: {prediction2['team1_win_probability']}%")
print(f"• {prediction2['team2']}: {prediction2['team2_win_probability']}%")
print(f"• Predicted Winner: {prediction2['predicted_winner']}")
print(f"• Confidence Level: {prediction2['confidence']}%")
print(f"• Expected Scores: {prediction2['team1']} {prediction2['team1_expected_score']}, {prediction2['team2']} {prediction2['team2_expected_score']}")
print(f"")
print(f"📊 Key Factors:")
for factor, value in prediction2['key_factors'].items():
    print(f"  - {factor.replace('_', ' ').title()}: {value}")
print("\n" + "="*60 + "\n")

# Example 3: New Zealand vs South Africa with spin-friendly conditions
prediction3 = predictor.predict_match_outcome(
    team1='New Zealand',
    team2='South Africa',
    pitch_condition='spin_friendly',
    weather_condition='humid',
    venue='new zealand',
    toss_winner='South Africa'
)

print("🏏 MATCH 3: New Zealand vs South Africa")
print(f"Venue: New Zealand (Home advantage for NZ)")
print(f"Pitch: Spin-friendly")
print(f"Weather: Humid")
print(f"Toss Winner: South Africa")
print(f"")
print(f"🔮 PREDICTION:")
print(f"• {prediction3['team1']}: {prediction3['team1_win_probability']}%")
print(f"• {prediction3['team2']}: {prediction3['team2_win_probability']}%")
print(f"• Predicted Winner: {prediction3['predicted_winner']}")
print(f"• Confidence Level: {prediction3['confidence']}%")
print(f"• Expected Scores: {prediction3['team1']} {prediction3['team1_expected_score']}, {prediction3['team2']} {prediction3['team2_expected_score']}")
print(f"")
print(f"📊 Key Factors:")
for factor, value in prediction3['key_factors'].items():
    print(f"  - {factor.replace('_', ' ').title()}: {value}")
print("\n" + "="*60)