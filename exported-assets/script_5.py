# Fix the head-to-head data structure and method
head_to_head_data_fixed = {
    ('India', 'Australia'): {'matches': 24, 'india_wins': 16, 'australia_wins': 7, 'tied': 1, 'avg_margin': 23.4},
    ('India', 'England'): {'matches': 29, 'india_wins': 17, 'england_wins': 12, 'tied': 0, 'avg_margin': 18.7},
    ('India', 'Pakistan'): {'matches': 12, 'india_wins': 11, 'pakistan_wins': 1, 'tied': 0, 'avg_margin': 28.9},
    ('India', 'New Zealand'): {'matches': 22, 'india_wins': 16, 'new_zealand_wins': 6, 'tied': 0, 'avg_margin': 21.5},
    ('India', 'South Africa'): {'matches': 18, 'india_wins': 12, 'south_africa_wins': 6, 'tied': 0, 'avg_margin': 19.8},
    ('Australia', 'England'): {'matches': 25, 'australia_wins': 14, 'england_wins': 11, 'tied': 0, 'avg_margin': 16.2},
    ('Australia', 'New Zealand'): {'matches': 16, 'australia_wins': 11, 'new_zealand_wins': 5, 'tied': 0, 'avg_margin': 22.1},
    ('England', 'Pakistan'): {'matches': 28, 'england_wins': 16, 'pakistan_wins': 12, 'tied': 0, 'avg_margin': 15.3},
    ('Pakistan', 'New Zealand'): {'matches': 14, 'pakistan_wins': 8, 'new_zealand_wins': 6, 'tied': 0, 'avg_margin': 17.4},
    ('South Africa', 'Australia'): {'matches': 15, 'south_africa_wins': 7, 'australia_wins': 8, 'tied': 0, 'avg_margin': 19.6},
}

# Updated prediction class
class T20MatchPredictor:
    def __init__(self, teams_data, h2h_data, pitch_conditions, weather_conditions, injury_impact, recent_form):
        self.teams_data = teams_data
        self.h2h_data = h2h_data
        self.pitch_conditions = pitch_conditions
        self.weather_conditions = weather_conditions
        self.injury_impact = injury_impact
        self.recent_form = recent_form
        
    def get_team_strength(self, team_name):
        """Get team strength metrics"""
        team_data = self.teams_data[self.teams_data['team'] == team_name]
        if team_data.empty:
            return None
        return team_data.iloc[0].to_dict()
    
    def get_head_to_head_advantage(self, team1, team2):
        """Calculate head-to-head advantage"""
        # Check both possible orderings of teams
        matchup = None
        team1_key = team1.lower().replace(' ', '_')
        team2_key = team2.lower().replace(' ', '_')
        
        for key in self.h2h_data.keys():
            if (team1 in key and team2 in key):
                matchup = key
                break
        
        if not matchup:
            return 0  # No historical data
            
        h2h = self.h2h_data[matchup]
        
        # Get wins for each team
        team1_wins = h2h.get(f'{team1_key}_wins', 0)
        if team1_wins == 0:
            # Try alternative key format
            for key in h2h.keys():
                if team1.lower() in key and 'wins' in key:
                    team1_wins = h2h[key]
                    break
        
        team2_wins = h2h.get(f'{team2_key}_wins', 0)
        if team2_wins == 0:
            # Try alternative key format
            for key in h2h.keys():
                if team2.lower() in key and 'wins' in key:
                    team2_wins = h2h[key]
                    break
        
        if team1_wins + team2_wins == 0:
            return 0
            
        advantage = (team1_wins - team2_wins) / h2h['matches'] * 100
        return advantage
    
    def calculate_pitch_impact(self, team_strength, pitch_condition):
        """Calculate how pitch conditions affect team performance"""
        pitch_effects = self.pitch_conditions[pitch_condition]
        
        # Adjust team strength based on pitch
        adjusted_strength = team_strength.copy()
        
        # Batting strength adjustment
        adjusted_strength['batting_strength'] = (
            team_strength['avg_runs_scored'] + pitch_effects['avg_score_increase']
        )
        
        # Bowling strength adjustment
        spin_strength = team_strength['spin_effectiveness'] * pitch_effects['spin_effectiveness_factor']
        pace_strength = team_strength['pace_effectiveness'] * pitch_effects['pace_effectiveness_factor']
        adjusted_strength['bowling_strength'] = spin_strength + pace_strength
        
        # Chase ability adjustment
        adjusted_strength['chase_ability'] = (
            team_strength['chase_success_rate'] * pitch_effects['chase_success_factor']
        )
        
        return adjusted_strength
    
    def calculate_weather_impact(self, team_strength, weather_condition):
        """Calculate how weather affects team performance"""
        weather_effects = self.weather_conditions[weather_condition]
        
        adjusted_strength = team_strength.copy()
        adjusted_strength['score_adjustment'] = weather_effects['score_impact']
        adjusted_strength['swing_bowling_boost'] = weather_effects['swing_factor']
        
        return adjusted_strength
    
    def apply_injury_impact(self, team_strength, injury_status):
        """Apply injury impact to team strength"""
        if injury_status == 'no_injuries':
            return team_strength
            
        impact = self.injury_impact[injury_status]
        adjusted_strength = team_strength.copy()
        adjusted_strength['injury_adjusted_rating'] = team_strength['rating'] * (1 + impact/100)
        
        return adjusted_strength
    
    def predict_match_outcome(self, team1, team2, pitch_condition='neutral', 
                            weather_condition='sunny', team1_injuries='no_injuries', 
                            team2_injuries='no_injuries', venue='neutral', toss_winner=None):
        """Main prediction function"""
        
        # Get base team strengths
        team1_strength = self.get_team_strength(team1)
        team2_strength = self.get_team_strength(team2)
        
        if not team1_strength or not team2_strength:
            return {"error": "Team not found in database"}
        
        # Calculate head-to-head advantage
        h2h_advantage = self.get_head_to_head_advantage(team1, team2)
        
        # Apply pitch conditions
        team1_adjusted = self.calculate_pitch_impact(team1_strength, pitch_condition)
        team2_adjusted = self.calculate_pitch_impact(team2_strength, pitch_condition)
        
        # Apply weather conditions
        team1_adjusted = self.calculate_weather_impact(team1_adjusted, weather_condition)
        team2_adjusted = self.calculate_weather_impact(team2_adjusted, weather_condition)
        
        # Apply injury impacts
        team1_adjusted = self.apply_injury_impact(team1_adjusted, team1_injuries)
        team2_adjusted = self.apply_injury_impact(team2_adjusted, team2_injuries)
        
        # Get recent form
        team1_form = self.recent_form[team1]['momentum_score'] if team1 in self.recent_form else 0
        team2_form = self.recent_form[team2]['momentum_score'] if team2 in self.recent_form else 0
        
        # Calculate base win probabilities
        rating_diff = team1_adjusted.get('injury_adjusted_rating', team1_strength['rating']) - \
                     team2_adjusted.get('injury_adjusted_rating', team2_strength['rating'])
        
        # Base probability calculation (sigmoid function)
        base_prob_team1 = 1 / (1 + np.exp(-rating_diff / 50))
        
        # Adjust for various factors
        adjustments = 0
        
        # Head-to-head adjustment (max ±10%)
        adjustments += np.clip(h2h_advantage, -10, 10) / 100
        
        # Recent form adjustment (max ±8%)
        form_diff = (team1_form - team2_form) / 10  # Normalize to ±1
        adjustments += np.clip(form_diff * 8, -8, 8) / 100
        
        # Home advantage (if applicable)
        if venue == team1.lower():
            adjustments += team1_strength['home_advantage'] / 100
        elif venue == team2.lower():
            adjustments -= team2_strength['home_advantage'] / 100
        
        # Toss advantage (typically 5-8% in T20s)
        if toss_winner == team1:
            adjustments += 0.06
        elif toss_winner == team2:
            adjustments -= 0.06
        
        # Final probability
        final_prob_team1 = np.clip(base_prob_team1 + adjustments, 0.05, 0.95)
        final_prob_team2 = 1 - final_prob_team1
        
        # Determine winner
        winner = team1 if final_prob_team1 > final_prob_team2 else team2
        confidence = max(final_prob_team1, final_prob_team2)
        
        # Calculate expected scores
        team1_expected_score = team1_adjusted.get('batting_strength', team1_strength['avg_runs_scored'])
        team2_expected_score = team2_adjusted.get('batting_strength', team2_strength['avg_runs_scored'])
        
        return {
            'team1': team1,
            'team2': team2,
            'team1_win_probability': round(final_prob_team1 * 100, 1),
            'team2_win_probability': round(final_prob_team2 * 100, 1),
            'predicted_winner': winner,
            'confidence': round(confidence * 100, 1),
            'team1_expected_score': round(team1_expected_score),
            'team2_expected_score': round(team2_expected_score),
            'key_factors': {
                'rating_difference': round(rating_diff, 1),
                'head_to_head_advantage': f"{team1} +{h2h_advantage:.1f}%" if h2h_advantage > 0 else f"{team2} +{abs(h2h_advantage):.1f}%",
                'recent_form': f"{team1}: {team1_form}, {team2}: {team2_form}",
                'pitch_condition': pitch_condition,
                'weather_condition': weather_condition,
                'injuries': f"{team1}: {team1_injuries}, {team2}: {team2_injuries}"
            }
        }

# Initialize the updated predictor
predictor = T20MatchPredictor(teams_df, head_to_head_data_fixed, pitch_conditions, 
                             weather_conditions, injury_impact, recent_form_data)

print("Updated T20I Cricket Match Prediction Model initialized successfully!")
print("Ready to make predictions!")