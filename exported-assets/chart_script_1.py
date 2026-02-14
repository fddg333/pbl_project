import plotly.graph_objects as go
import numpy as np

# Data
teams = ["India", "Australia", "England", "New Zealand", "South Africa", "West Indies", "Pakistan", "Sri Lanka", "Bangladesh", "Afghanistan"]
ratings = [272, 268, 257, 251, 243, 235, 233, 230, 225, 217]
win_percentage = [75.0, 71.8, 65.9, 62.5, 60.0, 55.6, 52.3, 53.5, 49.2, 58.5]

# Define colors for each team (using brand colors in order)
colors = ['#1FB8CD', '#DB4545', '#2E8B57', '#5D878F', '#D2BA4C', 
          '#B4413C', '#964325', '#944454', '#13343B', '#2E8B57']

# Create scatter plot
fig = go.Figure()

# Add scatter points with different colors and labels for each team
for i, team in enumerate(teams):
    fig.add_trace(go.Scatter(
        x=[ratings[i]], 
        y=[win_percentage[i]],
        mode='markers+text',
        text=[team],
        textposition='top center',
        marker=dict(color=colors[i], size=12),
        name=team,
        showlegend=False
    ))

# Add trendline
z = np.polyfit(ratings, win_percentage, 1)
p = np.poly1d(z)
x_trend = np.linspace(min(ratings), max(ratings), 100)
y_trend = p(x_trend)

fig.add_trace(go.Scatter(
    x=x_trend,
    y=y_trend,
    mode='lines',
    name='Trend Line',
    line=dict(color='black', dash='dash', width=2),
    showlegend=True
))

# Update layout
fig.update_layout(
    title='Team Rating vs Win Percentage',
    xaxis_title='Team Rating',
    yaxis_title='Win %'
)

# Update traces for scatterplot
fig.update_traces(cliponaxis=False)

# Save the chart
fig.write_image('chart.png')
fig.write_image('chart.svg', format='svg')