import pandas as pd
import plotly.express as px

import dash

from dash import dcc
import dash_html_components as html
from dash.dependencies import Input, Output

app = Dash(__name__)

df = pd.read_csv('data-for-analysis.csv', index_col = 0)

app.layout = html.Div([

    html.H1("Web Application Dashboards with Dash", style={'text-align': 'center'}),

    dcc.Dropdown(id="slct_year",
                 options=[
                     {"label": "AL", "value": 1},{"label": "AK", "value": 2},{"label": "AZ", "value": 3},
                     {"label": "AR", "value": 4},{"label": "CA", "value": 5},{"label": "CO", "value": 6},
                     {"label": "CT", "value": 7},{"label": "DE", "value": 8},{"label": "FL", "value": 9},
                     {"label": "GA", "value": 10},{"label": "HI", "value": 11},{"label": "ID", "value": 12},
                     {"label": "IL", "value": 13},{"label": "IN", "value": 14},{"label": "IA", "value": 15},
                     {"label": "KS", "value": 16},{"label": "KY", "value": 17},{"label": "LA", "value": 18},
                     {"label": "ME", "value": 19},{"label": "MD", "value": 20},{"label": "MA", "value": 21},
                     {"label": "MI", "value": 22},{"label": "MN", "value": 23},{"label": "MS", "value": 24},
                     {"label": "MO", "value": 25},{"label": "MT", "value": 26},{"label": "NE", "value": 27},
                     {"label": "NV", "value": 28},{"label": "NH", "value": 29},{"label": "NJ", "value": 30},
                     {"label": "NM", "value": 31},{"label": "NY", "value": 32},{"label": "NC", "value": 33},
                     {"label": "ND", "value": 34},{"label": "OH", "value": 35},{"label": "OK", "value": 36},
                     {"label": "OR", "value": 37},{"label": "PA", "value": 38},{"label": "RI", "value": 39},
                     {"label": "SC", "value": 40},{"label": "SD", "value": 41},{"label": "TN", "value": 42},
                     {"label": "TX", "value": 43},{"label": "UT", "value": 44},{"label": "VT", "value": 45},
                     {"label": "VA", "value": 46},{"label": "WA", "value": 47},{"label": "WV", "value": 48},
                     {"label": "WI", "value": 49},{"label": "WY", "value": 50}
                 ],
                 multi=False,
                 value='AL',
                 style={'width': "40%"}
                 ),

    html.Div(id='output_container', children=[]),
    html.Br(),

    dcc.Graph(id='my_bee_map', figure={})

])

@app.callback(
    [Output(component_id='output_container', component_property='children'),
     Output(component_id='my_bee_map', component_property='figure')],
    [Input(component_id='slct_year', component_property='value')]
)

if __name__ == '__main__':
    app.run(debug=True)