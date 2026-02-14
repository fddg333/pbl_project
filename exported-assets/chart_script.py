import plotly.express as px
import plotly.graph_objects as go
import pandas as pd

# Create the data from the provided JSON
teams = ["India", "Australia", "England", "New Zealand", "South Africa", "West Indies", "Pakistan", "Sri Lanka", "Bangladesh", "Afghanistan"]
ratings = [272, 268, 257, 251, 243, 235, 233, 230, 225, 217]

# Create DataFrame
teams_df = pd.DataFrame({
    'Team': teams,
    'Rating': ratings
})

# Define colors for top 3 teams vs others
colors = []
brand_colors = ['#1FB8CD', '#DB4545', '#2E8B57', '#5D878F']

for i in range(len(teams)):
    if i < 3:  # Top 3 teams get distinct colors
        colors.append(brand_colors[i])
    else:  # Remaining teams get the same color
        colors.append(brand_colors[3])

# Create horizontal bar chart
fig = go.Figure(data=[
    go.Bar(
        y=teams_df['Team'],
        x=teams_df['Rating'],
        orientation='h',
        marker_color=colors,
        text=teams_df['Rating'],
        textposition='outside'
    )
])

# Update layout
fig.update_layout(
    title='ICC T20I Team Rankings - Top 10 Teams',
    xaxis_title='Rating',
    yaxis_title='Team'
)

# Update y-axis to show teams in ranking order (reverse order for horizontal bar)
fig.update_yaxes(categoryorder='array', categoryarray=teams[::-1])

# Update traces for better appearance
fig.update_traces(cliponaxis=False)

# Save the chart as PNG and SVG
fig.write_image('t20i_rankings.png')
fig.write_image('t20i_rankings.svg', format='svg')

print("Chart saved successfully!")