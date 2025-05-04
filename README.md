This repository contains a set of interactive visualizations designed to provide insights into tuberculosis (TB) treatment data. The visualizations focus on key metrics such as cohort sizes, treatment completion rates, failure rates, and regional trends. Each visualization is implemented using D3.js, leveraging dynamic interactions to engage users and facilitate in-depth exploration.

Table of Contents
Visualizations Overview
Hierarchical Tree Map
Geographic Map Chart
Force-Directed Graph
Sunburst Chart
Timeline Visualization with Bounce Animation
Dashboard Visualization
Key Insights
Setup Instructions
Future Improvements
Visualizations Overview
1. Hierarchical Tree Map
Displays TB data organized hierarchically by region and country, emphasizing cohort sizes and completion rates.

Key Features:
Hierarchical Structure: Groups data by region and country to show relationships.
Color Mapping: Encodes completion rates for quick identification of performance.
Interactive Tooltip: Provides detailed metrics (region, country, cohort size, completion rate, failure rate).
2. Geographic Map Chart
A global map displaying completion and failure rates for TB treatment by country using color-coded pins.

Key Features:
Interactive Map: Zoom and pan functionality for global exploration.
Color Mapping: Highlights completion rates with varying colors.
Tooltips: Display additional metrics (region, completion rate, failure rate) upon hovering.
3. Force-Directed Graph
Illustrates regional relationships and TB treatment completion rates using dynamic node-link structures.

Key Features:
Force-Directed Layout: Dynamically positions nodes for clear visualization.
Color Coding: Completion rates encoded using color intensity for nodes and links.
Interactive Tooltip: Displays detailed metrics for each country node.
4. Sunburst Chart
Uses a circular hierarchical layout to represent TB treatment data by region, country, and year.

Key Features:
Hierarchical Layout: Displays nested relationships across regions, countries, and years.
Interactive Tooltip: Shows cohort size, completion rate, and failure rate upon hovering.
Arc Transitions: Smooth animations highlight selected segments for better analysis.
5. Timeline Visualization with Bounce Animation
A dynamic timeline chart that tracks completion rates over years with animated markers.

Key Features:
Bounce Animation: Engages users with smooth marker transitions.
Filters: Allows narrowing data by region.
Play/Pause Functionality: Automates year-by-year visualization of trends.
6. Dashboard Visualization
An aggregated dashboard combining multiple visualizations for an overall view of TB treatment data.

Key Features:
Bar Chart: Treatment rates by region.
Pie Chart: Regional distribution of cohort sizes.
Scatter Plot: Relationship between cohort size and completion rates.
Cross-Visualization Linking: Updates all charts when a region is selected.
Key Insights
Regional Disparities: Some regions have large cohorts but low completion rates, requiring targeted interventions.
Best Practices: Smaller regions with higher completion rates can serve as models for effective strategies.
Yearly Trends: Timeline visualization highlights regions improving or stagnating over time.
Resource Strain: Dashboard analysis reveals regions with larger cohort sizes often experience lower completion rates.
# Dashboard-for-TB
