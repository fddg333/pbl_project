# Create historical head-to-head matchup data
head_to_head_data = {
    ('India', 'Australia'): {'matches': 24, 'india_wins': 16, 'aus_wins': 7, 'tied': 1, 'avg_margin': 23.4},
    ('India', 'England'): {'matches': 29, 'india_wins': 17, 'eng_wins': 12, 'tied': 0, 'avg_margin': 18.7},
    ('India', 'Pakistan'): {'matches': 12, 'india_wins': 11, 'pak_wins': 1, 'tied': 0, 'avg_margin': 28.9},
    ('India', 'New Zealand'): {'matches': 22, 'india_wins': 16, 'nz_wins': 6, 'tied': 0, 'avg_margin': 21.5},
    ('India', 'South Africa'): {'matches': 18, 'india_wins': 12, 'sa_wins': 6, 'tied': 0, 'avg_margin': 19.8},
    ('Australia', 'England'): {'matches': 25, 'aus_wins': 14, 'eng_wins': 11, 'tied': 0, 'avg_margin': 16.2},
    ('Australia', 'New Zealand'): {'matches': 16, 'aus_wins': 11, 'nz_wins': 5, 'tied': 0, 'avg_margin': 22.1},
    ('England', 'Pakistan'): {'matches': 28, 'eng_wins': 16, 'pak_wins': 12, 'tied': 0, 'avg_margin': 15.3},
    ('Pakistan', 'New Zealand'): {'matches': 14, 'pak_wins': 8, 'nz_wins': 6, 'tied': 0, 'avg_margin': 17.4},
    ('South Africa', 'Australia'): {'matches': 15, 'sa_wins': 7, 'aus_wins': 8, 'tied': 0, 'avg_margin': 19.6},
}

# Create pitch condition effects data
pitch_conditions = {
    'batting_friendly': {
        'description': 'Flat pitch with good bounce, favors batsmen',
        'avg_score_increase': 25,
        'spin_effectiveness_factor': 0.8,
        'pace_effectiveness_factor': 0.9,
        'chase_success_factor': 1.2
    },
    'bowling_friendly': {
        'description': 'Green pitch with seam/swing movement, favors bowlers',
        'avg_score_increase': -20,
        'spin_effectiveness_factor': 0.9,
        'pace_effectiveness_factor': 1.3,
        'chase_success_factor': 0.8
    },
    'spin_friendly': {
        'description': 'Dry pitch with turn, favors spinners',
        'avg_score_increase': -10,
        'spin_effectiveness_factor': 1.4,
        'pace_effectiveness_factor': 0.7,
        'chase_success_factor': 0.9
    },
    'neutral': {
        'description': 'Balanced conditions for both bat and ball',
        'avg_score_increase': 0,
        'spin_effectiveness_factor': 1.0,
        'pace_effectiveness_factor': 1.0,
        'chase_success_factor': 1.0
    }
}

# Weather condition effects
weather_conditions = {
    'sunny': {
        'description': 'Clear skies, good visibility',
        'swing_factor': 0.8,
        'visibility_factor': 1.0,
        'score_impact': 5
    },
    'overcast': {
        'description': 'Cloudy conditions, aids swing bowling',
        'swing_factor': 1.3,
        'visibility_factor': 0.9,
        'score_impact': -8
    },
    'humid': {
        'description': 'High humidity, ball swings more',
        'swing_factor': 1.2,
        'visibility_factor': 0.95,
        'score_impact': -5
    },
    'windy': {
        'description': 'Strong winds affect ball flight',
        'swing_factor': 1.1,
        'visibility_factor': 0.9,
        'score_impact': -10
    }
}

def print_summary(sample_count: int = 5) -> None:
    """Print a short summary of head-to-head, pitch and weather data.

    sample_count: how many head-to-head matchups to display (default 5)
    """
    print("Head-to-Head Sample:")
    for matchup, stats in list(head_to_head_data.items())[:sample_count]:
        print(f"{matchup[0]} vs {matchup[1]}: {stats}")

    print("\nPitch Conditions:")
    for condition, effects in pitch_conditions.items():
        print(f"{condition}: {effects['description']}")

    print("\nWeather Conditions:")
    for condition, effects in weather_conditions.items():
        print(f"{condition}: {effects['description']}")


if __name__ == "__main__":
    # Run the summary when executed as a script
    print_summary()