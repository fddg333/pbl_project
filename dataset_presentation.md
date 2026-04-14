# Cricket Match Predictor Dataset Overview

This document contains a structured viewing format for the datasets that normally live silently within the `script.js` code. These tables can easily be copied into Excel, Word, or presentation slides.

## 1. International T20 Teams Database (`teamsData`)

| Team | ICC Rating | Win % | Avg Runs Scored | Avg Runs Conceded | Powerplay Runs | Death Overs | Avg Wickets | Spin Rank (10) | Pace Rank (10) | Boundary % |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **India** | 272 | 75.0% | 165.5 | 138.2 | 48.5 | 52.3 | 7.2 | 8.2 | 7.8 | 38.5% |
| **Australia** | 268 | 71.8% | 168.2 | 142.5 | 49.2 | 54.1 | 6.8 | 6.5 | 8.3 | 41.2% |
| **England** | 257 | 65.9% | 162.8 | 145.8 | 47.8 | 51.7 | 6.5 | 6.8 | 7.9 | 39.8% |
| **New Zealand**| 251 | 62.5% | 158.9 | 147.3 | 46.3 | 50.2 | 6.7 | 7.1 | 7.6 | 37.6% |
| **South Africa**| 243 | 60.0% | 155.4 | 149.1 | 45.9 | 48.9 | 6.9 | 7.4 | 8.1 | 36.9% |
| **West Indies**| 235 | 55.6% | 159.7 | 152.4 | 48.1 | 52.8 | 6.3 | 7.8 | 6.8 | 40.1% |
| **Pakistan** | 233 | 52.3% | 158.1 | 154.2 | 46.7 | 50.1 | 6.4 | 8.5 | 6.9 | 37.2% |
| **Sri Lanka** | 230 | 53.5% | 152.3 | 156.8 | 44.2 | 47.6 | 6.6 | 8.7 | 6.4 | 35.4% |
| **Bangladesh** | 225 | 49.2% | 148.7 | 159.3 | 43.8 | 46.3 | 6.1 | 7.9 | 6.2 | 34.8% |
| **Afghanistan**| 217 | 58.5% | 151.2 | 148.9 | 45.5 | 48.7 | 6.8 | 8.9 | 6.3 | 36.7% |

---

## 2. IPL Franchise Database (`iplTeamsData`)

| Franchise | Overall Rating | Win % | Avg Runs Scored | Avg Runs Conceded | Powerplay Runs | Death Overs | Avg Wickets | Spin Rank (10) | Pace Rank (10) | Boundary % |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **CSK** | 265 | 58.5% | 172.5 | 165.2 | 45.5 | 54.2 | 6.8 | 8.5 | 7.2 | 39.5% |
| **MI** | 260 | 57.2% | 175.8 | 168.4 | 48.0 | 55.4 | 6.5 | 7.0 | 8.5 | 42.1% |
| **RCB** | 255 | 51.5% | 182.3 | 180.1 | 49.5 | 58.0 | 5.8 | 6.5 | 7.0 | 44.5% |
| **KKR** | 250 | 53.8% | 168.4 | 165.9 | 46.5 | 52.4 | 7.0 | 8.8 | 7.4 | 38.5% |
| **RR** | 248 | 52.4% | 170.2 | 169.5 | 47.0 | 50.5 | 6.4 | 8.0 | 8.0 | 37.8% |
| **SRH** | 245 | 49.8% | 178.6 | 175.2 | 48.5 | 51.2 | 6.2 | 7.5 | 8.2 | 40.2% |
| **DC** | 242 | 48.5% | 165.3 | 168.7 | 45.0 | 49.5 | 6.6 | 7.8 | 7.5 | 36.5% |
| **PBKS** | 238 | 47.2% | 171.4 | 174.6 | 47.5 | 50.0 | 5.9 | 7.2 | 7.6 | 38.2% |
| **GT** | 262 | 62.5% | 174.5 | 166.2 | 46.8 | 56.5 | 7.5 | 8.2 | 8.4 | 39.8% |
| **LSG** | 258 | 56.4% | 169.8 | 164.5 | 45.2 | 53.0 | 6.9 | 8.0 | 7.8 | 37.5% |

---

## 3. Top Player Performance Database (`playersDB`)
*Note: Active tournament stats (runs/wickets) are currently initialized to 0.*

| Player Name | Role | Team | Rating | Runs/Wickets | Average | Economy/SR |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Vaibhav Suryavanshi** | Top-order Batter | RR | 820 | 0 Runs | 0.0 | 0.0 (SR) |
| **Yashasvi Jaiswal** | Opening Batter | RR | 840 | 0 Runs | 0.0 | 0.0 (SR) |
| **Virat Kohli** | Top-order Batter | RCB | 850 | 0 Runs | 0.0 | 0.0 (SR) |
| **Rohit Sharma** | Opening Batter | MI | 790 | 0 Runs | 0.0 | 0.0 (SR) |
| **Rishabh Pant** | Wicketkeeper Batter | DC | 720 | 0 Runs | 0.0 | 0.0 (SR) |
| **Sanju Samson** | Wicketkeeper Batter | RR | 810 | 0 Runs | 0.0 | 0.0 (SR) |
| **MS Dhoni** | Wicketkeeper Batter | CSK | 720 | 0 Runs | 0.0 | 0.0 (SR) |
| **Ravi Bishnoi** | Spin Bowler | RR | 810 | 0 Wickets | 0.0 | 0.0 (Econ) |
| **Jasprit Bumrah** | Pace Bowler | MI | 820 | 0 Wickets | 0.0 | 0.0 (Econ) |
| **Rashid Khan** | Bowling All-rounder| GT | 850 | 0 Wickets | 0.0 | 0.0 (Econ) |
| **Mitchell Starc** | Fast Bowler | KKR | 710 | 0 Wickets | 0.0 | 0.0 (Econ) |
| **Andre Russell** | All-rounder | KKR | 790 | 0 Runs / 0 Wickets| 0.0 | 0.0 (SR) |

---

## 4. Environmental Modifiers (`pitchConditions`)
Math parameters used by the engine to simulate playing environments.

| Condition Flavor | Score Impact | Spin Boost Factor | Pace Boost Factor | Chase Success Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Neutral** | +0 Runs | 1.0x | 1.0x | 1.0x |
| **Batting Friendly**| +25 Runs | 0.8x (Nerf) | 0.9x (Nerf) | 1.2x (Buff) |
| **Bowling Friendly**| -20 Runs | 0.9x (Nerf) | 1.3x (Buff) | 0.8x (Nerf) |
| **Spin Friendly** | -10 Runs | 1.4x (Huge Buff) | 0.7x (Nerf) | 0.9x (Nerf) |

