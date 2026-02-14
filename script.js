
        // Team data
        const teamsData = {
            "India": {
                rating: 272, matches: 64, win_percentage: 75.0, avg_runs_scored: 165.5,
                avg_runs_conceded: 138.2, powerplay_runs: 48.5, death_over_runs: 52.3,
                avg_wickets_taken: 7.2, spin_effectiveness: 8.2, pace_effectiveness: 7.8,
                boundary_percentage: 38.5, chase_success_rate: 68.5, home_advantage: 15.2
            },
            "Australia": {
                rating: 268, matches: 39, win_percentage: 71.8, avg_runs_scored: 168.2,
                avg_runs_conceded: 142.5, powerplay_runs: 49.2, death_over_runs: 54.1,
                avg_wickets_taken: 6.8, spin_effectiveness: 6.5, pace_effectiveness: 8.3,
                boundary_percentage: 41.2, chase_success_rate: 72.3, home_advantage: 12.8
            },
            "England": {
                rating: 257, matches: 44, win_percentage: 65.9, avg_runs_scored: 162.8,
                avg_runs_conceded: 145.8, powerplay_runs: 47.8, death_over_runs: 51.7,
                avg_wickets_taken: 6.5, spin_effectiveness: 6.8, pace_effectiveness: 7.9,
                boundary_percentage: 39.8, chase_success_rate: 65.8, home_advantage: 18.5
            },
            "New Zealand": {
                rating: 251, matches: 48, win_percentage: 62.5, avg_runs_scored: 158.9,
                avg_runs_conceded: 147.3, powerplay_runs: 46.3, death_over_runs: 50.2,
                avg_wickets_taken: 6.7, spin_effectiveness: 7.1, pace_effectiveness: 7.6,
                boundary_percentage: 37.6, chase_success_rate: 61.2, home_advantage: 14.6
            },
            "South Africa": {
                rating: 243, matches: 45, win_percentage: 60.0, avg_runs_scored: 155.4,
                avg_runs_conceded: 149.1, powerplay_runs: 45.9, death_over_runs: 48.9,
                avg_wickets_taken: 6.9, spin_effectiveness: 7.4, pace_effectiveness: 8.1,
                boundary_percentage: 36.9, chase_success_rate: 59.7, home_advantage: 13.9
            },
            "West Indies": {
                rating: 235, matches: 54, win_percentage: 55.6, avg_runs_scored: 159.7,
                avg_runs_conceded: 152.4, powerplay_runs: 48.1, death_over_runs: 52.8,
                avg_wickets_taken: 6.3, spin_effectiveness: 7.8, pace_effectiveness: 6.8,
                boundary_percentage: 40.1, chase_success_rate: 62.1, home_advantage: 11.4
            },
            "Pakistan": {
                rating: 233, matches: 65, win_percentage: 52.3, avg_runs_scored: 158.1,
                avg_runs_conceded: 154.2, powerplay_runs: 46.7, death_over_runs: 50.1,
                avg_wickets_taken: 6.4, spin_effectiveness: 8.5, pace_effectiveness: 6.9,
                boundary_percentage: 37.2, chase_success_rate: 58.9, home_advantage: 16.7
            },
            "Sri Lanka": {
                rating: 230, matches: 43, win_percentage: 53.5, avg_runs_scored: 152.3,
                avg_runs_conceded: 156.8, powerplay_runs: 44.2, death_over_runs: 47.6,
                avg_wickets_taken: 6.6, spin_effectiveness: 8.7, pace_effectiveness: 6.4,
                boundary_percentage: 35.4, chase_success_rate: 55.4, home_advantage: 12.1
            },
            "Bangladesh": {
                rating: 225, matches: 61, win_percentage: 49.2, avg_runs_scored: 148.7,
                avg_runs_conceded: 159.3, powerplay_runs: 43.8, death_over_runs: 46.3,
                avg_wickets_taken: 6.1, spin_effectiveness: 7.9, pace_effectiveness: 6.2,
                boundary_percentage: 34.8, chase_success_rate: 52.8, home_advantage: 14.8
            },
            "Afghanistan": {
                rating: 217, matches: 41, win_percentage: 58.5, avg_runs_scored: 151.2,
                avg_runs_conceded: 148.9, powerplay_runs: 45.5, death_over_runs: 48.7,
                avg_wickets_taken: 6.8, spin_effectiveness: 8.9, pace_effectiveness: 6.3,
                boundary_percentage: 36.7, chase_success_rate: 63.2, home_advantage: 22.3
            }
        };

        // Head-to-head data
        const headToHeadData = {
            "india_australia": { matches: 24, india_wins: 16, australia_wins: 7, tied: 1, avg_margin: 23.4 },
            "india_england": { matches: 29, india_wins: 17, england_wins: 12, tied: 0, avg_margin: 18.7 },
            "india_pakistan": { matches: 12, india_wins: 11, pakistan_wins: 1, tied: 0, avg_margin: 28.9 },
            "india_newzealand": { matches: 22, india_wins: 16, newzealand_wins: 6, tied: 0, avg_margin: 21.5 },
            "india_southafrica": { matches: 18, india_wins: 12, southafrica_wins: 6, tied: 0, avg_margin: 19.8 }
        };

        // Pitch conditions data
        const pitchConditions = {
            "batting_friendly": { avg_score_increase: 25, spin_effectiveness_factor: 0.8, pace_effectiveness_factor: 0.9, chase_success_factor: 1.2 },
            "bowling_friendly": { avg_score_increase: -20, spin_effectiveness_factor: 0.9, pace_effectiveness_factor: 1.3, chase_success_factor: 0.8 },
            "spin_friendly": { avg_score_increase: -10, spin_effectiveness_factor: 1.4, pace_effectiveness_factor: 0.7, chase_success_factor: 0.9 },
            "neutral": { avg_score_increase: 0, spin_effectiveness_factor: 1.0, pace_effectiveness_factor: 1.0, chase_success_factor: 1.0 }
        };

        // Weather conditions data
        const weatherConditions = {
            "sunny": { swing_factor: 0.8, visibility_factor: 1.0, score_impact: 5 },
            "overcast": { swing_factor: 1.3, visibility_factor: 0.9, score_impact: -8 },
            "humid": { swing_factor: 1.2, visibility_factor: 0.95, score_impact: -5 },
            "windy": { swing_factor: 1.1, visibility_factor: 0.9, score_impact: -10 }
        };

        // Injury impact data
        const injuryImpact = {
            "key_player_injured": -8,
            "multiple_injuries": -15,
            "bowler_injury": -5,
            "batsman_injury": -6,
            "all_rounder_injury": -7,
            "no_injuries": 0
        };

        // Recent form data
        const recentForm = {
            "India": { last_5_matches: ["W", "W", "W", "W", "W"], recent_win_rate: 1.0, momentum_score: 10 },
            "Australia": { last_5_matches: ["W", "W", "W", "W", "W"], recent_win_rate: 1.0, momentum_score: 10 },
            "England": { last_5_matches: ["W", "W", "L", "W", "W"], recent_win_rate: 0.8, momentum_score: 7 },
            "New Zealand": { last_5_matches: ["W", "W", "W", "L", "W"], recent_win_rate: 0.8, momentum_score: 7 },
            "South Africa": { last_5_matches: ["W", "L", "L", "L", "L"], recent_win_rate: 0.2, momentum_score: -2 },
            "West Indies": { last_5_matches: ["W", "L", "W", "L", "W"], recent_win_rate: 0.6, momentum_score: 3 },
            "Pakistan": { last_5_matches: ["L", "W", "L", "W", "L"], recent_win_rate: 0.4, momentum_score: 1 },
            "Sri Lanka": { last_5_matches: ["L", "L", "W", "L", "W"], recent_win_rate: 0.4, momentum_score: 0 },
            "Bangladesh": { last_5_matches: ["L", "L", "L", "W", "L"], recent_win_rate: 0.2, momentum_score: -3 },
            "Afghanistan": { last_5_matches: ["W", "W", "L", "W", "W"], recent_win_rate: 0.8, momentum_score: 6 }
        };

        // Prediction algorithm
        function calculatePrediction() {
            const team1 = document.getElementById('team1').value;
            const team2 = document.getElementById('team2').value;
            
            if (!team1 || !team2 || team1 === team2) {
                document.getElementById('predictionResults').style.display = 'none';
                document.getElementById('teamStats').style.display = 'none';
                return;
            }

            const pitch = document.getElementById('pitch').value;
            const weather = document.getElementById('weather').value;
            const venue = document.getElementById('venue').value;
            const toss = document.getElementById('toss').value;
            const team1Injury = document.getElementById('team1_injury').value;
            const team2Injury = document.getElementById('team2_injury').value;

            // Get team data
            const team1Data = teamsData[team1];
            const team2Data = teamsData[team2];

            // Base strength calculation
            let team1Strength = (team1Data.rating * 0.3) + (team1Data.win_percentage * 0.2) + (team1Data.avg_runs_scored * 0.15) + ((200 - team1Data.avg_runs_conceded) * 0.15) + (team1Data.avg_wickets_taken * 5) + (team1Data.boundary_percentage * 0.5);
            let team2Strength = (team2Data.rating * 0.3) + (team2Data.win_percentage * 0.2) + (team2Data.avg_runs_scored * 0.15) + ((200 - team2Data.avg_runs_conceded) * 0.15) + (team2Data.avg_wickets_taken * 5) + (team2Data.boundary_percentage * 0.5);

            // Pitch condition adjustments
            const pitchData = pitchConditions[pitch];
            if (pitch === 'spin_friendly') {
                team1Strength += (team1Data.spin_effectiveness - 7) * 5;
                team2Strength += (team2Data.spin_effectiveness - 7) * 5;
            } else if (pitch === 'bowling_friendly') {
                team1Strength += (team1Data.pace_effectiveness - 7) * 5;
                team2Strength += (team2Data.pace_effectiveness - 7) * 5;
            }

            // Weather adjustments
            const weatherData = weatherConditions[weather];
            team1Strength += weatherData.score_impact * 0.5;
            team2Strength += weatherData.score_impact * 0.5;

            // Venue advantage
            if (venue === 'team1_home') {
                team1Strength += team1Data.home_advantage;
            } else if (venue === 'team2_home') {
                team2Strength += team2Data.home_advantage;
            }

            // Injury impacts
            team1Strength += injuryImpact[team1Injury];
            team2Strength += injuryImpact[team2Injury];

            // Recent form
            team1Strength += recentForm[team1].momentum_score;
            team2Strength += recentForm[team2].momentum_score;

            // Toss advantage
            if (toss === 'team1') {
                team1Strength += 5;
            } else if (toss === 'team2') {
                team2Strength += 5;
            }

            // Head-to-head factor
            const h2hKey = getHeadToHeadKey(team1, team2);
            if (headToHeadData[h2hKey]) {
                const h2hData = headToHeadData[h2hKey];
                const team1H2HWins = h2hData[team1.toLowerCase() + '_wins'] || h2hData[team2.toLowerCase() + '_wins'] ? h2hData.matches - h2hData[team2.toLowerCase() + '_wins'] - h2hData.tied : 0;
                const winRatio = team1H2HWins / h2hData.matches;
                team1Strength += (winRatio - 0.5) * 20;
                team2Strength += ((1 - winRatio) - 0.5) * 20;
            }

            // Calculate probabilities
            const totalStrength = team1Strength + team2Strength;
            const team1Probability = Math.max(10, Math.min(90, (team1Strength / totalStrength) * 100));
            const team2Probability = 100 - team1Probability;

            // Expected scores
            const team1Score = Math.round(team1Data.avg_runs_scored + pitchData.avg_score_increase + weatherData.score_impact + (team1Probability - 50) * 0.3);
            const team2Score = Math.round(team2Data.avg_runs_scored + pitchData.avg_score_increase + weatherData.score_impact + (team2Probability - 50) * 0.3);

            // Confidence calculation
            const probDiff = Math.abs(team1Probability - team2Probability);
            let confidence = 'Medium';
            let confidenceClass = 'confidence-medium';
            if (probDiff > 30) {
                confidence = 'High';
                confidenceClass = 'confidence-high';
            } else if (probDiff < 15) {
                confidence = 'Low';
                confidenceClass = 'confidence-low';
            }

            updatePredictionDisplay(team1, team2, team1Probability, team2Probability, team1Score, team2Score, confidence, confidenceClass, pitch, weather, venue, toss, team1Injury, team2Injury);
            updateTeamStats(team1, team2);
        }

        function getHeadToHeadKey(team1, team2) {
            const teams = [team1.toLowerCase().replace(' ', ''), team2.toLowerCase().replace(' ', '')];
            teams.sort();
            return teams.join('_');
        }

        function updatePredictionDisplay(team1, team2, team1Prob, team2Prob, team1Score, team2Score, confidence, confidenceClass, pitch, weather, venue, toss, team1Injury, team2Injury) {
            const winner = team1Prob > team2Prob ? team1 : team2;
            
            document.getElementById('predictedWinner').textContent = `🏆 ${winner} is predicted to win!`;
            document.getElementById('confidenceLevel').textContent = confidence;
            document.getElementById('confidenceLevel').className = `confidence-level ${confidenceClass}`;
            
            document.getElementById('team1Name').textContent = team1;
            document.getElementById('team2Name').textContent = team2;
            document.getElementById('team1Probability').style.width = `${team1Prob}%`;
            document.getElementById('team2Probability').style.width = `${team2Prob}%`;
            document.getElementById('team1Percentage').textContent = `${team1Prob.toFixed(1)}%`;
            document.getElementById('team2Percentage').textContent = `${team2Prob.toFixed(1)}%`;
            
            document.getElementById('team1Score').textContent = team1Score;
            document.getElementById('team2Score').textContent = team2Score;
            document.getElementById('team1ScoreLabel').textContent = `${team1} Expected Score`;
            document.getElementById('team2ScoreLabel').textContent = `${team2} Expected Score`;
            
            // Key factors
            const factors = [];
            if (pitch !== 'neutral') factors.push({ factor: `${pitch.replace('_', ' ')} pitch`, impact: 'Moderate' });
            if (weather !== 'sunny') factors.push({ factor: `${weather} weather`, impact: 'Minor' });
            if (venue !== 'neutral') factors.push({ factor: 'Home advantage', impact: 'Significant' });
            if (team1Injury !== 'no_injuries') factors.push({ factor: `${team1} injuries`, impact: 'Negative' });
            if (team2Injury !== 'no_injuries') factors.push({ factor: `${team2} injuries`, impact: 'Negative' });
            if (toss !== 'not_decided') factors.push({ factor: 'Toss advantage', impact: 'Minor' });
            
            const factorsHtml = factors.map(f => {
                const impactClass = f.impact === 'Significant' ? 'impact-positive' : 
                                  f.impact === 'Negative' ? 'impact-negative' : 'impact-neutral';
                return `<div class="factor-item">
                    <span>${f.factor}</span>
                    <span class="factor-impact ${impactClass}">${f.impact}</span>
                </div>`;
            }).join('');
            
            document.getElementById('factorsList').innerHTML = factorsHtml || '<div class="factor-item"><span>Standard conditions</span><span class="factor-impact impact-neutral">Neutral</span></div>';
            
            document.getElementById('predictionResults').style.display = 'block';
        }

        function updateTeamStats(team1, team2) {
            const team1Data = teamsData[team1];
            const team2Data = teamsData[team2];
            
            document.getElementById('team1StatsTitle').textContent = `${team1} Statistics`;
            document.getElementById('team2StatsTitle').textContent = `${team2} Statistics`;
            
            // Team 1 stats
            document.getElementById('team1Stats').innerHTML = createTeamStatsHtml(team1Data);
            document.getElementById('team2Stats').innerHTML = createTeamStatsHtml(team2Data);
            
            // Head-to-head
            const h2hKey = getHeadToHeadKey(team1, team2);
            const h2hData = headToHeadData[h2hKey];
            let h2hHtml = '<div class="stat-item"><span class="stat-label">No historical data available</span></div>';
            if (h2hData) {
                const team1Wins = h2hData[team1.toLowerCase() + '_wins'] || (h2hData.matches - h2hData[team2.toLowerCase() + '_wins'] - h2hData.tied);
                const team2Wins = h2hData[team2.toLowerCase() + '_wins'] || (h2hData.matches - team1Wins - h2hData.tied);
                h2hHtml = `
                    <div class="stat-item"><span class="stat-label">Total Matches</span><span class="stat-value">${h2hData.matches}</span></div>
                    <div class="stat-item"><span class="stat-label">${team1} Wins</span><span class="stat-value">${team1Wins}</span></div>
                    <div class="stat-item"><span class="stat-label">${team2} Wins</span><span class="stat-value">${team2Wins}</span></div>
                    <div class="stat-item"><span class="stat-label">Tied</span><span class="stat-value">${h2hData.tied}</span></div>
                    <div class="stat-item"><span class="stat-label">Avg Victory Margin</span><span class="stat-value">${h2hData.avg_margin} runs</span></div>
                `;
            }
            document.getElementById('headToHeadStats').innerHTML = h2hHtml;
            
            // Recent form
            const team1Form = recentForm[team1];
            const team2Form = recentForm[team2];
            const recentFormHtml = `
                <div style="margin-bottom: 16px;">
                    <h5>${team1} Last 5 Matches</h5>
                    <div class="recent-form">
                        ${team1Form.last_5_matches.map(result => 
                            `<div class="form-result ${result === 'W' ? 'form-win' : 'form-loss'}">${result}</div>`
                        ).join('')}
                    </div>
                    <p style="margin-top: 8px; font-size: 12px; color: var(--color-text-secondary);">Win Rate: ${(team1Form.recent_win_rate * 100).toFixed(0)}%</p>
                </div>
                <div>
                    <h5>${team2} Last 5 Matches</h5>
                    <div class="recent-form">
                        ${team2Form.last_5_matches.map(result => 
                            `<div class="form-result ${result === 'W' ? 'form-win' : 'form-loss'}">${result}</div>`
                        ).join('')}
                    </div>
                    <p style="margin-top: 8px; font-size: 12px; color: var(--color-text-secondary);">Win Rate: ${(team2Form.recent_win_rate * 100).toFixed(0)}%</p>
                </div>
            `;
            document.getElementById('recentFormStats').innerHTML = recentFormHtml;
            
            document.getElementById('teamStats').style.display = 'grid';
        }

        function createTeamStatsHtml(teamData) {
            return `
                <div class="stat-item"><span class="stat-label">ICC Rating</span><span class="stat-value">${teamData.rating}</span></div>
                <div class="stat-item"><span class="stat-label">Win %</span><span class="stat-value">${teamData.win_percentage}%</span></div>
                <div class="stat-item"><span class="stat-label">Avg Runs Scored</span><span class="stat-value">${teamData.avg_runs_scored}</span></div>
                <div class="stat-item"><span class="stat-label">Avg Runs Conceded</span><span class="stat-value">${teamData.avg_runs_conceded}</span></div>
                <div class="stat-item"><span class="stat-label">Powerplay Runs</span><span class="stat-value">${teamData.powerplay_runs}</span></div>
                <div class="stat-item"><span class="stat-label">Death Over Runs</span><span class="stat-value">${teamData.death_over_runs}</span></div>
                <div class="stat-item"><span class="stat-label">Avg Wickets Taken</span><span class="stat-value">${teamData.avg_wickets_taken}</span></div>
                <div class="stat-item"><span class="stat-label">Spin Effectiveness</span><span class="stat-value">${teamData.spin_effectiveness}/10</span></div>
                <div class="stat-item"><span class="stat-label">Pace Effectiveness</span><span class="stat-value">${teamData.pace_effectiveness}/10</span></div>
                <div class="stat-item"><span class="stat-label">Chase Success Rate</span><span class="stat-value">${teamData.chase_success_rate}%</span></div>
            `;
        }

        // Enhanced prediction with animations
        function updatePredictionDisplay(team1, team2, team1Prob, team2Prob, team1Score, team2Score, confidence, confidenceClass, pitch, weather, venue, toss, team1Injury, team2Injury) {
            const winner = team1Prob > team2Prob ? team1 : team2;
            const predictionResults = document.getElementById('predictionResults');
            
            // Show with animation
            predictionResults.style.display = 'block';
            predictionResults.classList.add('animate-fade-in');
            
            // Animate winner announcement
            const winnerElement = document.getElementById('predictedWinner');
            winnerElement.textContent = `🏆 ${winner} is predicted to win!`;
            winnerElement.classList.add('animate-bounce');
            
            document.getElementById('confidenceLevel').textContent = confidence;
            document.getElementById('confidenceLevel').className = `confidence-level ${confidenceClass}`;
            
            document.getElementById('team1Name').textContent = team1;
            document.getElementById('team2Name').textContent = team2;
            
            // Animate progress bars
            setTimeout(() => {
                document.getElementById('team1Probability').style.width = `${team1Prob}%`;
                document.getElementById('team2Probability').style.width = `${team2Prob}%`;
            }, 300);
            
            document.getElementById('team1Percentage').textContent = `${team1Prob.toFixed(1)}%`;
            document.getElementById('team2Percentage').textContent = `${team2Prob.toFixed(1)}%`;
            
            // Animate score counters
            setTimeout(() => {
                animateCountUp(document.getElementById('team1Score'), team1Score);
                animateCountUp(document.getElementById('team2Score'), team2Score);
            }, 500);
            
            document.getElementById('team1ScoreLabel').textContent = `${team1} Expected Score`;
            document.getElementById('team2ScoreLabel').textContent = `${team2} Expected Score`;
            
            // Key factors with enhanced styling
            const factors = [];
            if (pitch !== 'neutral') factors.push({ factor: `${pitch.replace('_', ' ')} pitch`, impact: 'Moderate' });
            if (weather !== 'sunny') factors.push({ factor: `${weather} weather`, impact: 'Minor' });
            if (venue !== 'neutral') factors.push({ factor: 'Home advantage', impact: 'Significant' });
            if (team1Injury !== 'no_injuries') factors.push({ factor: `${team1} injuries`, impact: 'Negative' });
            if (team2Injury !== 'no_injuries') factors.push({ factor: `${team2} injuries`, impact: 'Negative' });
            if (toss !== 'not_decided') factors.push({ factor: 'Toss advantage', impact: 'Minor' });
            
            const factorsHtml = factors.map(f => {
                const impactClass = f.impact === 'Significant' ? 'impact-positive' : 
                                  f.impact === 'Negative' ? 'impact-negative' : 'impact-neutral';
                return `<div class="factor-item animate-slide-in">
                    <span>${f.factor}</span>
                    <span class="factor-impact ${impactClass}">${f.impact}</span>
                </div>`;
            }).join('');
            
            document.getElementById('factorsList').innerHTML = factorsHtml || '<div class="factor-item animate-slide-in"><span>Standard conditions</span><span class="factor-impact impact-neutral">Neutral</span></div>';
        }
        
        // Make core functions globally accessible
        let chatMessages = [];
        
        // Enhanced UI Animations and Interactions
        function initializeInteractiveElements() {
            // Animate elements on page load
            document.querySelectorAll('.card').forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate-slide-in');
                }, index * 100);
            });
            
            // Add interactive hover effects
            document.querySelectorAll('.card').forEach(card => {
                card.classList.add('interactive');
            });
            
            // Add haptic feedback simulation
            document.querySelectorAll('.btn, .quick-reply-btn').forEach(btn => {
                btn.addEventListener('click', simulateHapticFeedback);
            });
            
            // Enhanced form interactions
            document.querySelectorAll('.form-control').forEach(control => {
                control.addEventListener('focus', (e) => {
                    e.target.parentElement.classList.add('focused');
                });
                control.addEventListener('blur', (e) => {
                    e.target.parentElement.classList.remove('focused');
                });
            });
            
            // Smooth scroll behavior
            document.documentElement.style.scrollBehavior = 'smooth';
        }
        
        function simulateHapticFeedback() {
            // Visual feedback for touch devices
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
        }
        
        function showLoadingState(element) {
            const originalText = element.textContent;
            element.textContent = 'Loading...';
            element.classList.add('loading');
            
            return () => {
                element.textContent = originalText;
                element.classList.remove('loading');
            };
        }
        
        function animateCountUp(element, target, duration = 1000) {
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.round(current);
            }, 16);
        }
        
        // Enhanced Cricket Knowledge Base
        const cricketData = {
            current_players: {
                batsmen: [
                    { name: "Abhishek Sharma", team: "India", rating: 829, position: 1, specialty: "Aggressive opener, left-handed power hitter", recent_form: "Excellent" },
                    { name: "Tilak Varma", team: "India", rating: 804, position: 2, specialty: "Middle-order batsman, versatile stroke-maker", recent_form: "Very Good" },
                    { name: "Phil Salt", team: "England", rating: 791, position: 3, specialty: "Wicket-keeper batsman, aggressive opener", recent_form: "Good" },
                    { name: "Jos Buttler", team: "England", rating: 772, position: 4, specialty: "Wicket-keeper, power hitting, captaincy", recent_form: "Good" },
                    { name: "Suryakumar Yadav", team: "India", rating: 745, position: 5, specialty: "360-degree batting, innovative shots, middle-order finisher", recent_form: "Excellent" },
                    { name: "Mohammad Rizwan", team: "Pakistan", rating: 720, position: 6, specialty: "Wicket-keeper, opening batsman, consistency", recent_form: "Good" },
                    { name: "Travis Head", team: "Australia", rating: 695, position: 7, specialty: "Aggressive opening, left-handed power hitting", recent_form: "Very Good" },
                    { name: "Shubman Gill", team: "India", rating: 670, position: 8, specialty: "Classical technique, opener, consistency", recent_form: "Good" }
                ],
                bowlers: [
                    { name: "Varun Chakravarthy", team: "India", rating: 742, position: 1, specialty: "Mystery spinner, variations, wicket-taking ability" },
                    { name: "Akeal Hosein", team: "West Indies", rating: 721, position: 2, specialty: "Left-arm spinner, economy rate, control" },
                    { name: "Rashid Khan", team: "Afghanistan", rating: 695, position: 3, specialty: "Leg-spin bowling, mystery spin, all-round skills" },
                    { name: "Adam Zampa", team: "Australia", rating: 678, position: 4, specialty: "Leg-spinner, wicket-taking, variations" },
                    { name: "Adil Rashid", team: "England", rating: 665, position: 5, specialty: "Leg-spinner, experienced, death overs" },
                    { name: "Wanindu Hasaranga", team: "Sri Lanka", rating: 652, position: 6, specialty: "Leg-spinner, all-rounder, wicket-taking" },
                    { name: "Arshdeep Singh", team: "India", rating: 635, position: 7, specialty: "Left-arm pacer, swing bowling, death overs" }
                ],
                all_rounders: [
                    { name: "Hardik Pandya", team: "India", rating: 252, position: 1, specialty: "Power hitting, medium-pace bowling, leadership skills" },
                    { name: "Dipendra Singh Airee", team: "Nepal", rating: 209, position: 2, specialty: "All-round skills, emerging talent" },
                    { name: "Mohammad Nabi", team: "Afghanistan", rating: 207, position: 3, specialty: "Off-spinner, lower-order batting, experience" },
                    { name: "Roston Chase", team: "West Indies", rating: 196, position: 4, specialty: "Off-spinner, middle-order batting" },
                    { name: "Liam Livingstone", team: "England", rating: 196, position: 5, specialty: "Power hitting, leg-spin bowling" },
                    { name: "Wanindu Hasaranga", team: "Sri Lanka", rating: 192, position: 6, specialty: "Leg-spinner, lower-order hitting" },
                    { name: "Sikandar Raza", team: "Zimbabwe", rating: 189, position: 7, specialty: "Off-spinner, middle-order batting" }
                ]
            },
            recent_matches: [
                { date: "2024-06-29", teams: "India vs South Africa", result: "India won by 7 runs", venue: "Barbados", tournament: "T20 World Cup Final", details: "India 176/7, South Africa 169/8. Kohli 76, Axar 47. India's second T20 World Cup title." },
                { date: "2024-06-27", teams: "India vs England", result: "India won by 68 runs", venue: "Guyana", tournament: "T20 World Cup Semi-Final", details: "India 171/7, England 103/10. Kuldeep 3/19, Bumrah 2/12. Dominant bowling performance." },
                { date: "2024-06-25", teams: "South Africa vs Afghanistan", result: "South Africa won by 9 wickets", venue: "Trinidad", tournament: "T20 World Cup Semi-Final", details: "Afghanistan 56/10, South Africa 60/1. Shamsi 3/6, Rabada 2/14. Afghanistan collapsed." },
                { date: "2024-06-24", teams: "Afghanistan vs Bangladesh", result: "Afghanistan won by 8 runs", venue: "St. Vincent", tournament: "T20 World Cup Super 8", details: "Afghanistan 115/5, Bangladesh 105/9. Rashid Khan 4/23." },
                { date: "2024-06-20", teams: "India vs Australia", result: "India won by 24 runs", venue: "St. Lucia", tournament: "T20 World Cup Super 8", details: "India 205/5, Australia 181/7. Rohit 92, Head 76. High-scoring encounter." },
                { date: "2024-06-12", teams: "India vs Pakistan", result: "India won by 6 runs", venue: "New York", tournament: "T20 World Cup Group Stage", details: "India 119/10, Pakistan 113/7. Low-scoring thriller at Nassau County." }
            ],
            team_achievements: {
                India: { t20_world_cups: 2, years_won: ["2007", "2024"], captain: "Suryakumar Yadav", recent_achievement: "Won T20 World Cup 2024 undefeated", star_players: ["Suryakumar Yadav", "Hardik Pandya", "Jasprit Bumrah", "Rohit Sharma", "Virat Kohli", "Rishabh Pant"] },
                Australia: { t20_world_cups: 1, years_won: ["2021"], captain: "Mitchell Marsh", recent_achievement: "Semi-finalists T20 World Cup 2024", star_players: ["Travis Head", "Mitchell Marsh", "Josh Inglis", "Marcus Stoinis", "Pat Cummins", "Adam Zampa"] },
                England: { t20_world_cups: 1, years_won: ["2022"], captain: "Jos Buttler", recent_achievement: "T20 World Cup 2022 Champions", star_players: ["Jos Buttler", "Phil Salt", "Liam Livingstone", "Adil Rashid", "Mark Wood", "Harry Brook"] },
                "West Indies": { t20_world_cups: 2, years_won: ["2012", "2016"], captain: "Rovman Powell", recent_achievement: "Group stage exit T20 World Cup 2024", star_players: ["Nicholas Pooran", "Rovman Powell", "Andre Russell", "Akeal Hosein", "Alzarri Joseph", "Shimron Hetmyer"] },
                Pakistan: { t20_world_cups: 1, years_won: ["2009"], captain: "Babar Azam", recent_achievement: "Group stage exit T20 World Cup 2024", star_players: ["Babar Azam", "Mohammad Rizwan", "Shaheen Afridi", "Shadab Khan", "Fakhar Zaman", "Haris Rauf"] }
            },
            cricket_records: {
                highest_individual_score: "172* by Aaron Finch (Australia vs Zimbabwe, 2018)",
                best_bowling_figures: "6/8 by Deepti Sharma (India vs Australia, 2018)",
                most_runs_career: "4,037 by Rohit Sharma (India)",
                most_wickets_career: "164 by Tim Southee (New Zealand)",
                fastest_fifty: "12 balls by Yuvraj Singh (India vs England, 2007)",
                most_sixes: "182 by Rohit Sharma (India)",
                highest_team_total: "278/3 by Afghanistan vs Ireland (2019)",
                lowest_team_total: "21 by Turkey vs Czech Republic (2019)",
                t20_world_cup_2024_winner: "India (undefeated campaign)"
            },
            cricket_glossary: {
                powerplay: "First 6 overs of T20I innings where only 2 fielders allowed outside 30-yard circle",
                death_overs: "Last 4-5 overs of T20I innings (16-20), crucial for scoring runs",
                super_over: "Tiebreaker where each team faces 6 balls to determine winner",
                duckworth_lewis: "Mathematical method to adjust targets in rain-affected matches",
                yorker: "Ball pitched at batsman's feet, very difficult to score off",
                bouncer: "Short-pitched delivery aimed at batsman's head/chest area",
                googly: "Leg-spinner's delivery that spins opposite direction to leg-break",
                reverse_swing: "Ball swinging in opposite direction to conventional swing",
                field_restrictions: "Rules limiting fielder positions during powerplay overs",
                free_hit: "Batsman cannot be dismissed except by run out after no-ball",
                mankad: "Run out at non-striker's end by bowler before delivering ball",
                hat_trick: "Three wickets by bowler in consecutive deliveries"
            },
            conversation_starters: [
                "Ask me about current T20I player rankings! 🏏",
                "Want to know about recent cricket matches? 📊",
                "Need help with match predictions? 🔮",
                "Curious about cricket records and trivia? 📚",
                "Ask about your favorite cricket team! 🏆",
                "Want explanations of cricket terms? 🤔"
            ]
        };

        // Conversation context and memory
        let conversationContext = {
            lastTopic: null,
            lastTeam: null,
            lastPlayer: null,
            messageCount: 0,
            userInterests: []
        };

        // Enhanced AI Chatbot with Advanced NLP
        // Make processUserMessage globally accessible
        window.processUserMessage = function(message) {
            const lowerMessage = message.toLowerCase();
            conversationContext.messageCount++;
            
            // Update conversation context
            updateConversationContext(lowerMessage);
            
            // Advanced Natural Language Processing
            
            // Player rankings queries (multiple variations)
            if (matchesAny(lowerMessage, ['top batsman', 'best batsman', 'batting ranking', 'number 1 batsman', 'top t20 batsman', 'best t20i batsman', 'who is the best batsman', 'batsman rankings', 'batting leaderboard'])) {
                const topBatsmen = cricketData.current_players.batsmen.slice(0, 5);
                let response = "🏏 **Current Top T20I Batsmen:**\n\n";
                topBatsmen.forEach(player => {
                    response += `**${player.position}. ${player.name}** (${player.team})\n   Rating: ${player.rating} | ${player.specialty}\n   Recent Form: ${player.recent_form}\n\n`;
                });
                conversationContext.lastTopic = 'batting';
                return response + generateFollowUpSuggestions(['bowling rankings', 'all-rounders', 'team statistics']);
            }
            
            if (matchesAny(lowerMessage, ['top bowler', 'best bowler', 'bowling ranking', 'number 1 bowler', 'top t20 bowler', 'best t20i bowler', 'who is the best bowler', 'bowler rankings', 'bowling leaderboard'])) {
                const topBowlers = cricketData.current_players.bowlers.slice(0, 5);
                let response = "🎳 **Current Top T20I Bowlers:**\n\n";
                topBowlers.forEach(player => {
                    response += `**${player.position}. ${player.name}** (${player.team})\n   Rating: ${player.rating} | ${player.specialty}\n\n`;
                });
                conversationContext.lastTopic = 'bowling';
                return response + generateFollowUpSuggestions(['batting rankings', 'all-rounders', 'wicket records']);
            }
            
            if (matchesAny(lowerMessage, ['all rounder', 'allrounder', 'all-rounder', 'best all rounder', 'top all rounder', 'all rounders ranking'])) {
                const topAllRounders = cricketData.current_players.all_rounders.slice(0, 5);
                let response = "🏏🎳 **Current Top T20I All-Rounders:**\n\n";
                topAllRounders.forEach(player => {
                    response += `**${player.position}. ${player.name}** (${player.team})\n   Rating: ${player.rating} | ${player.specialty}\n\n`;
                });
                conversationContext.lastTopic = 'allrounders';
                return response + generateFollowUpSuggestions(['batting rankings', 'bowling rankings', 'team captains']);
            }
            
            // Team-specific queries (enhanced with more teams)
            for (const team of ['india', 'australia', 'england', 'pakistan', 'south africa', 'new zealand', 'west indies', 'sri lanka', 'bangladesh', 'afghanistan']) {
                if (lowerMessage.includes(team) && matchesAny(lowerMessage, ['performance', 'recent', 'stats', 'team', 'squad', 'players', 'captain', 'ranking'])) {
                    return getTeamInformation(team);
                }
            }
            
            // Specific player queries
            if (matchesAny(lowerMessage, ['tell me about', 'information about', 'stats of']) && (lowerMessage.includes('kohli') || lowerMessage.includes('rohit') || lowerMessage.includes('babar') || lowerMessage.includes('buttler'))) {
                return getPlayerInformation(extractPlayerName(lowerMessage));
            }
            
            // Match prediction queries (enhanced)
            if (matchesAny(lowerMessage, ['predict', 'prediction', 'who will win', 'match prediction', 'forecast']) || 
                (lowerMessage.includes('vs') && (lowerMessage.includes('india') || lowerMessage.includes('australia')))) {
                const teams = extractTeamsFromQuery(lowerMessage);
                if (teams.length === 2) {
                    return getMatchPrediction(teams[0], teams[1]);
                }
                return "🔮 **Match Prediction:**\n\nTo get a detailed prediction, please use the Match Predictor on the left! Select your teams and match conditions for comprehensive analysis.\n\nI can also help if you specify teams like 'India vs Australia prediction'." + 
                       generateFollowUpSuggestions(['team rankings', 'recent matches', 'head to head records']);
            }
            
            // T20 World Cup 2024 queries (detailed)
            if (matchesAny(lowerMessage, ['t20 world cup 2024', 'world cup 2024', 'worldcup 2024', 't20 wc 2024', 'world cup final', 'world cup winner'])) {
                let response = `🏆 **T20 World Cup 2024 - Complete Summary:**\n\n`;
                response += `• **Winner:** India 🇮🇳 (Undefeated Campaign)\n`;
                response += `• **Final:** India beat South Africa by 7 runs\n`;
                response += `  📍 Venue: Barbados | India 176/7, SA 169/8\n`;
                response += `  ⭐ Stars: Virat Kohli 76, Axar Patel 47\n\n`;
                response += `• **Semi-Finals:**\n`;
                response += `  - India beat England by 68 runs (Guyana)\n`;
                response += `  - South Africa beat Afghanistan by 9 wickets\n\n`;
                response += `• **Tournament MVP:** Arshdeep Singh (17 wickets)\n`;
                response += `• **Top Run Scorer:** Rohit Sharma (257 runs)\n\n`;
                conversationContext.lastTopic = 'worldcup2024';
                return response + generateFollowUpSuggestions(['India World Cup performance', 'tournament records', 'final highlights']);
            }
            
            // Recent matches (enhanced with details)
            if (matchesAny(lowerMessage, ['recent match', 'latest match', 'last match', 'recent games', 'recent results'])) {
                let response = "📅 **Recent T20I Matches:**\n\n";
                cricketData.recent_matches.slice(0, 3).forEach(match => {
                    response += `**${match.teams}**\n`;
                    response += `📊 Result: ${match.result}\n`;
                    response += `📍 Venue: ${match.venue} | ${match.tournament}\n`;
                    response += `📝 Details: ${match.details}\n\n`;
                });
                conversationContext.lastTopic = 'recent_matches';
                return response + generateFollowUpSuggestions(['World Cup 2024', 'team performance', 'upcoming fixtures']);
            }
            
            // Cricket records (comprehensive)
            if (matchesAny(lowerMessage, ['record', 'records', 'highest score', 'fastest', 'most runs', 'most wickets', 'best figures'])) {
                let response = `📊 **T20I Cricket Records:**\n\n`;
                response += `🏏 **Batting Records:**\n`;
                response += `• Highest Score: ${cricketData.cricket_records.highest_individual_score}\n`;
                response += `• Most Career Runs: ${cricketData.cricket_records.most_runs_career}\n`;
                response += `• Fastest Fifty: ${cricketData.cricket_records.fastest_fifty}\n`;
                response += `• Most Sixes: ${cricketData.cricket_records.most_sixes}\n\n`;
                response += `🎳 **Bowling Records:**\n`;
                response += `• Best Figures: ${cricketData.cricket_records.best_bowling_figures}\n`;
                response += `• Most Career Wickets: ${cricketData.cricket_records.most_wickets_career}\n\n`;
                response += `🏆 **Team Records:**\n`;
                response += `• Highest Team Total: ${cricketData.cricket_records.highest_team_total}\n`;
                response += `• Lowest Team Total: ${cricketData.cricket_records.lowest_team_total}\n`;
                conversationContext.lastTopic = 'records';
                return response + generateFollowUpSuggestions(['player statistics', 'World Cup records', 'team achievements']);
            }
            
            // Cricket terminology explanations
            if (matchesAny(lowerMessage, ['what is', 'explain', 'meaning of', 'define']) || Object.keys(cricketData.cricket_glossary).some(term => lowerMessage.includes(term))) {
                for (const [term, definition] of Object.entries(cricketData.cricket_glossary)) {
                    if (lowerMessage.includes(term)) {
                        let response = `🤔 **${term.charAt(0).toUpperCase() + term.slice(1)}:**\n\n${definition}\n\n`;
                        response += `💡 **Context:** This is an important concept in T20 cricket that affects match strategy and outcomes.`;
                        return response + generateFollowUpSuggestions(['other cricket terms', 'match strategies', 'rules explanation']);
                    }
                }
                
                // If no specific term found, provide general cricket info
                return "🏏 **Cricket Terms & Concepts:**\n\nI can explain various cricket terms like:\n• Powerplay, Death Overs, Super Over\n• Yorker, Bouncer, Googly\n• Duckworth-Lewis, Free Hit, Mankad\n\nJust ask 'What is [term]?' and I'll explain it!" + 
                       generateFollowUpSuggestions(['powerplay rules', 'bowling strategies', 'batting techniques']);
            }
            
            // Contextual follow-up responses
            if (conversationContext.messageCount > 1 && matchesAny(lowerMessage, ['more', 'tell me more', 'continue', 'what else', 'anything else'])) {
                return provideContextualFollowUp();
            }
            
            // General help and capabilities
            if (matchesAny(lowerMessage, ['help', 'what can you do', 'capabilities', 'commands', 'options'])) {
                return "🏏 **I'm your Cricket AI Assistant! I can help with:**\n\n" +
                       "🎯 **Player Information:**\n• Current rankings (batting, bowling, all-rounders)\n• Player stats, specialties & recent form\n• Specific player details\n\n" +
                       "🏆 **Team Analysis:**\n• Team statistics & performance\n• Squad information & captains\n• Head-to-head records\n\n" +
                       "📊 **Match Intelligence:**\n• T20 World Cup 2024 results\n• Recent match details\n• Match predictions & analysis\n\n" +
                       "📚 **Cricket Knowledge:**\n• Records & achievements\n• Cricket terminology & rules\n• Historical facts & trivia\n\n" +
                       generateSampleQueries();
            }
            
            // Greeting responses
            if (matchesAny(lowerMessage, ['hi', 'hello', 'hey', 'good morning', 'good evening', 'namaste'])) {
                const greetings = [
                    "Hello! 👋 Ready to dive into some cricket analysis?",
                    "Hi there! 🏏 What cricket topic interests you today?",
                    "Hey! 🎯 I'm here to help with all your cricket questions!"
                ];
                const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
                return randomGreeting + "\n\n" + generateSampleQueries();
            }
            
            // Enhanced default response with intelligent suggestions
            return getIntelligentDefaultResponse(lowerMessage);
        };
        
        // Helper functions for enhanced chatbot
        function matchesAny(text, patterns) {
            return patterns.some(pattern => text.includes(pattern));
        }
        
        function updateConversationContext(message) {
            // Track user interests
            if (message.includes('india')) conversationContext.lastTeam = 'India';
            if (message.includes('batting')) conversationContext.userInterests.push('batting');
            if (message.includes('bowling')) conversationContext.userInterests.push('bowling');
        }
        
        function generateFollowUpSuggestions(suggestions) {
            const randomSuggestions = suggestions.sort(() => 0.5 - Math.random()).slice(0, 2);
            return `\n\n💡 **You might also like:**\n${randomSuggestions.map(s => `• ${s}`).join('\n')}`;
        }
        
        function getTeamInformation(teamName) {
            const team = teamName.charAt(0).toUpperCase() + teamName.slice(1);
            const teamData = teamsData[team] || teamsData[Object.keys(teamsData).find(t => t.toLowerCase() === teamName)];
            const achievements = cricketData.team_achievements[team] || cricketData.team_achievements[Object.keys(cricketData.team_achievements).find(t => t.toLowerCase() === teamName)];
            
            if (!teamData || !achievements) {
                return `Sorry, I don't have detailed information about ${team} yet. Try asking about: India, Australia, England, Pakistan, South Africa, New Zealand, West Indies, Sri Lanka, Bangladesh, or Afghanistan.`;
            }
            
            let response = `🏏 **${team} Team Analysis:**\n\n`;
            response += `📊 **Current Stats:**\n`;
            response += `• ICC Rating: ${teamData.rating} (Rank based on performance)\n`;
            response += `• Win Percentage: ${teamData.win_percentage}%\n`;
            response += `• Average Score: ${teamData.avg_runs_scored} runs\n`;
            response += `• Captain: ${achievements.captain}\n\n`;
            response += `🏆 **Achievements:**\n`;
            response += `• T20 World Cups: ${achievements.t20_world_cups} (${achievements.years_won.join(', ')})\n`;
            response += `• Recent Achievement: ${achievements.recent_achievement}\n\n`;
            response += `⭐ **Star Players:**\n${achievements.star_players.map(p => `• ${p}`).join('\n')}`;
            
            conversationContext.lastTeam = team;
            return response + generateFollowUpSuggestions([`${team} vs other teams`, 'player rankings', 'recent matches']);
        }
        
        function getMatchPrediction(team1, team2) {
            const t1Data = teamsData[team1] || teamsData[Object.keys(teamsData).find(t => t.toLowerCase().includes(team1.toLowerCase()))];
            const t2Data = teamsData[team2] || teamsData[Object.keys(teamsData).find(t => t.toLowerCase().includes(team2.toLowerCase()))];
            
            if (!t1Data || !t2Data) {
                return "Please use the Match Predictor tool on the left for detailed predictions, or specify valid team names!";
            }
            
            const t1Strength = t1Data.rating + t1Data.win_percentage;
            const t2Strength = t2Data.rating + t2Data.win_percentage;
            const total = t1Strength + t2Strength;
            const t1Prob = (t1Strength / total * 100).toFixed(1);
            const t2Prob = (t2Strength / total * 100).toFixed(1);
            
            let response = `🔮 **Quick Match Prediction: ${team1} vs ${team2}**\n\n`;
            response += `📊 **Win Probabilities:**\n`;
            response += `• ${team1}: ${t1Prob}%\n`;
            response += `• ${team2}: ${t2Prob}%\n\n`;
            response += `🎯 **Key Factors:**\n`;
            response += `• ${team1} Rating: ${t1Data.rating} | Win Rate: ${t1Data.win_percentage}%\n`;
            response += `• ${team2} Rating: ${t2Data.rating} | Win Rate: ${t2Data.win_percentage}%\n\n`;
            response += `💡 For detailed analysis with pitch conditions, weather, and injuries, use the Match Predictor tool!`;
            
            return response + generateFollowUpSuggestions(['team statistics', 'head to head record', 'recent form']);
        }
        
        function extractTeamsFromQuery(message) {
            const teams = ['india', 'australia', 'england', 'pakistan', 'south africa', 'new zealand', 'west indies', 'sri lanka', 'bangladesh', 'afghanistan'];
            return teams.filter(team => message.includes(team));
        }
        
        function provideContextualFollowUp() {
            switch (conversationContext.lastTopic) {
                case 'batting':
                    return "🏏 **More Batting Insights:**\n\nThe current top batsmen show interesting trends:\n• India dominates with 3 in top 5\n• Aggressive openers are trending\n• Left-handed batsmen have advantage\n\nWant to know about specific batting techniques or compare with bowling rankings?";
                case 'worldcup2024':
                    return "🏆 **T20 World Cup 2024 - Additional Facts:**\n\n• India became first team to win undefeated\n• Final was decided in last over\n• Rohit Sharma retired after victory\n• Record attendance in USA venues\n\nWant details about specific matches or player performances?";
                default:
                    return "What specific aspect of cricket would you like to explore further? I can provide detailed analysis on any topic we've discussed!";
            }
        }
        
        function generateSampleQueries() {
            const samples = [
                "'Who is the top T20I batsman?'",
                "'Tell me about India's World Cup 2024 performance'",
                "'What are cricket powerplay rules?'",
                "'Predict India vs Australia match'",
                "'Show me recent cricket matches'"
            ];
            return "\n\n🎯 **Try asking:** " + samples.sort(() => 0.5 - Math.random()).slice(0, 3).join(', ');
        }
        
        function getIntelligentDefaultResponse(message) {
            // Analyze the message for potential topics
            if (message.includes('score') || message.includes('runs')) {
                return "🏏 I can help with scoring information! Try asking about:\n• 'Highest T20I scores and records'\n• 'Team average scores'\n• 'Player scoring records'\n\nWhat specific scoring information are you looking for?";
            }
            
            if (message.includes('match') || message.includes('game')) {
                return "🎯 Looking for match information? I can help with:\n• Recent match results and details\n• Match predictions and analysis\n• Head-to-head records\n• Upcoming fixtures\n\nWhat type of match information do you need?";
            }
            
            // General intelligent response
            return "I'm here to help with cricket! 🏏 I specialize in:\n\n" +
                   "📊 **Current Rankings:** Player & team statistics\n" +
                   "🏆 **Tournaments:** T20 World Cup 2024 & more\n" +
                   "🎯 **Predictions:** Match analysis & forecasts\n" +
                   "📚 **Knowledge:** Records, rules & trivia\n\n" +
                   "Could you rephrase your question or try one of these topics?";
        }

        // Enhanced message system with better animations
        window.addMessage = function(content, isUser = false, includeQuickReplies = false) {
            // Store message in array
            chatMessages.push({ content, isUser, timestamp: new Date() });
            const messagesContainer = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
            
            // Add entrance animation
            messageDiv.style.opacity = '0';
            messageDiv.style.transform = 'translateY(20px)';
            
            const messageContent = document.createElement('div');
            messageContent.className = 'message-content';
            
            // Add timestamp
            const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            if (isUser) {
                messageContent.innerHTML = `<strong>You:</strong> ${content}<div class="message-timestamp">${timestamp}</div>`;
            } else {
                // Enhanced formatting for bot responses
                let formattedContent = content
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n/g, '<br>')
                    .replace(/•/g, '&bull;')
                    .replace(/🏏/g, '<span style="color: var(--color-success);">🏏</span>')
                    .replace(/🏆/g, '<span style="color: var(--color-warning);">🏆</span>')
                    .replace(/📊/g, '<span style="color: var(--color-info);">📊</span>');
                
                messageContent.innerHTML = `<strong>🤖 Cricket AI:</strong> ${formattedContent}<div class="message-timestamp">${timestamp}</div>`;
                
                // Add quick reply buttons for bot messages
                if (includeQuickReplies && !isUser) {
                    const quickReplies = generateQuickReplies();
                    if (quickReplies.length > 0) {
                        const quickRepliesDiv = document.createElement('div');
                        quickRepliesDiv.className = 'quick-replies';
                        quickReplies.forEach(reply => {
                            const btn = document.createElement('button');
                            btn.className = 'quick-reply-btn';
                            btn.textContent = reply;
                            btn.addEventListener('click', () => {
                                document.getElementById('chatInput').value = reply;
                                handleChatInput();
                            });
                            quickRepliesDiv.appendChild(btn);
                        });
                        messageContent.appendChild(quickRepliesDiv);
                    }
                }
            }
            
            messageDiv.appendChild(messageContent);
            messagesContainer.appendChild(messageDiv);
            
            // Animate message appearance
            requestAnimationFrame(() => {
                messageDiv.style.transition = 'all 0.4s ease-out';
                messageDiv.style.opacity = '1';
                messageDiv.style.transform = 'translateY(0)';
            });
            
            // Enhanced smooth scroll with momentum
            setTimeout(() => {
                messagesContainer.scrollTo({
                    top: messagesContainer.scrollHeight,
                    behavior: 'smooth'
                });
            }, 100);
        };
        
        function generateQuickReplies() {
            const commonReplies = [
                "Top batsmen rankings",
                "Recent match results",
                "World Cup 2024",
                "India team stats",
                "Cricket records",
                "Match prediction"
            ];
            
            // Context-based quick replies
            if (conversationContext.lastTopic === 'batting') {
                return ["Top bowlers", "All-rounders", "India batsmen"];
            } else if (conversationContext.lastTopic === 'worldcup2024') {
                return ["Final highlights", "India's journey", "Tournament records"];
            }
            
            // Return random selection of common replies
            return commonReplies.sort(() => 0.5 - Math.random()).slice(0, 3);
        }

        window.showTypingIndicator = function() {
            const messagesContainer = document.getElementById('chatMessages');
            const typingDiv = document.createElement('div');
            typingDiv.className = 'typing-indicator';
            typingDiv.id = 'typingIndicator';
            typingDiv.innerHTML = `
                <span>Cricket AI is typing</span>
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            `;
            messagesContainer.appendChild(typingDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        };

        window.removeTypingIndicator = function() {
            const typingIndicator = document.getElementById('typingIndicator');
            if (typingIndicator) {
                typingIndicator.remove();
            }
        };

        // Make handleChatInput globally accessible
        window.handleChatInput = function() {
            const chatInput = document.getElementById('chatInput');
            const message = chatInput.value.trim();
            
            if (!message) return;
            
            // Add user message
            addMessage(message, true);
            chatInput.value = '';
            
            // Show typing indicator
            showTypingIndicator();
            
            // Simulate intelligent processing time (shorter for simple queries)
            const processingTime = message.length < 20 ? 500 : 1000 + Math.random() * 1500;
            
            setTimeout(() => {
                removeTypingIndicator();
                const response = processUserMessage(message);
                addMessage(response, false, true); // Include quick replies
                
                // Show suggestions after certain number of messages
                if (conversationContext.messageCount > 0 && conversationContext.messageCount % 3 === 0) {
                    setTimeout(() => {
                        showSuggestedQuestions();
                    }, 2000);
                }
            }, processingTime);
        };

        // Enhanced event listeners with better UX
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize interactive elements
            initializeInteractiveElements();
            
            const selects = ['team1', 'team2', 'pitch', 'weather', 'venue', 'toss', 'team1_injury', 'team2_injury'];
            selects.forEach(id => {
                const element = document.getElementById(id);
                element.addEventListener('change', (e) => {
                    // Add visual feedback
                    e.target.classList.add('animate-pulse');
                    setTimeout(() => e.target.classList.remove('animate-pulse'), 1000);
                    calculatePrediction();
                });
            });
            
            // Enhanced chat event listeners
            const chatInput = document.getElementById('chatInput');
            const sendButton = document.getElementById('sendButton');
            const clearChatBtn = document.getElementById('clearChatBtn');
            const suggestionsBtn = document.getElementById('suggestionsBtn');
            const helpBtn = document.getElementById('helpBtn');
            
            sendButton.addEventListener('click', handleChatInput);
            
            chatInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleChatInput();
                }
            });
            
            // Enhanced input interactions
            chatInput.addEventListener('input', function(e) {
                const value = e.target.value;
                
                // Auto-resize textarea
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                
                // Enable/disable send button
                sendButton.disabled = !value.trim();
                sendButton.style.opacity = value.trim() ? '1' : '0.5';
            });
            
            // Enhanced button interactions
            clearChatBtn.addEventListener('click', function() {
                this.classList.add('animate-pulse');
                window.clearChatHistory();
            });
            
            suggestionsBtn.addEventListener('click', function() {
                this.classList.add('animate-bounce');
                window.showSuggestedQuestions();
            });
            
            helpBtn.addEventListener('click', function() {
                this.classList.add('animate-pulse');
                window.showHelpMessage();
            });
            
            // Touch gestures for mobile
            let touchStartY = 0;
            let touchEndY = 0;
            
            chatInput.addEventListener('touchstart', (e) => {
                touchStartY = e.changedTouches[0].screenY;
            });
            
            chatInput.addEventListener('touchend', (e) => {
                touchEndY = e.changedTouches[0].screenY;
                handleGesture();
            });
            
            function handleGesture() {
                if (touchEndY < touchStartY - 50) {
                    // Swipe up - focus on input
                    chatInput.focus();
                }
            }
            
            // Enhanced focus management
            chatInput.focus();
            
            // Add loading states to buttons
            document.querySelectorAll('.btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    if (!this.classList.contains('loading')) {
                        this.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            this.style.transform = '';
                        }, 150);
                    }
                });
            });
        });
        
        // Enhanced chat management with animations
        window.clearChatHistory = function() {
            const messagesContainer = document.getElementById('chatMessages');
            
            // Animate messages out before clearing
            const messages = messagesContainer.querySelectorAll('.message');
            messages.forEach((msg, index) => {
                setTimeout(() => {
                    msg.style.opacity = '0';
                    msg.style.transform = 'translateX(-100%)';
                }, index * 50);
            });
            
            setTimeout(() => {
                messagesContainer.innerHTML = '';
                conversationContext = { lastTopic: null, lastTeam: null, messageCount: 0, userInterests: [] };
                
                // Add welcome message back with animation
                addMessage("Chat cleared! 🧹 I'm ready to help with fresh cricket insights. What would you like to know?", false, true);
            }, messages.length * 50 + 200);
        }
        
        window.showSuggestedQuestions = function() {
            const suggestions = [
                "Who is the current #1 T20I batsman?",
                "Tell me about T20 World Cup 2024 final",
                "Compare India vs Australia teams",
                "What are the latest cricket records?",
                "Explain powerplay rules in T20",
                "Show recent match results"
            ];
            
            const messagesContainer = document.getElementById('chatMessages');
            const suggestionsDiv = document.createElement('div');
            suggestionsDiv.className = 'suggested-questions';
            suggestionsDiv.innerHTML = `
                <h4>💡 Suggested Questions:</h4>
                ${suggestions.map(q => `<div class="suggestion-item" onclick="askSuggestedQuestion('${q}')">${q}</div>`).join('')}
            `;
            
            messagesContainer.appendChild(suggestionsDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
        
        // Make askSuggestedQuestion global so it's accessible from onclick
        window.askSuggestedQuestion = function(question) {
            document.getElementById('chatInput').value = question;
            handleChatInput();
        };

        window.showHelpMessage = function() {
            const helpContent = `🏏 **Cricket AI Assistant - Help Guide**\n\n**I understand natural language! Try:**\n• "Who's the best batsman?" or "Top T20I batsman?"\n• "Tell me about India" or "India team performance"\n• "Recent matches" or "Latest cricket results"\n• "Predict India vs Australia"\n• "What is powerplay?" or "Explain death overs"\n\n**Features:**\n✅ Real-time cricket intelligence\n✅ Natural conversation flow\n✅ Comprehensive player data\n✅ Match prediction insights\n✅ Cricket term explanations\n\n**Tips:**\n• Be specific for detailed answers\n• Ask follow-up questions\n• Use team/player names for targeted info`;
            addMessage(helpContent, false, true);
        };
    
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
