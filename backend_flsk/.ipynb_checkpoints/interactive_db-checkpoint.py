{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 1,
   "id": "5c437191",
   "metadata": {},
   "outputs": [],
   "source": [
    "import pandas as pd\n",
    "import plotly.express as px\n",
    "\n",
    "import dash"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "id": "7466bbd4",
   "metadata": {},
   "outputs": [
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "/var/folders/yt/w_mnp3g172s5rgtjxs97bk3m0000gn/T/ipykernel_77040/2203916152.py:2: UserWarning: \n",
      "The dash_html_components package is deprecated. Please replace\n",
      "`import dash_html_components as html` with `from dash import html`\n",
      "  import dash_html_components as html\n"
     ]
    }
   ],
   "source": [
    "from dash import dcc\n",
    "import dash_html_components as html\n",
    "from dash.dependencies import Input, Output"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "id": "a8e57482",
   "metadata": {},
   "outputs": [],
   "source": [
    "app = dash.Dash(__name__)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 4,
   "id": "c76f3883",
   "metadata": {},
   "outputs": [],
   "source": [
    "df = pd.read_csv('data-for-analysis.csv', index_col = 0)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 5,
   "id": "7d27888e",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>ABBR</th>\n",
       "      <th>LOCALE</th>\n",
       "      <th>TITLE I ELIGIBLE</th>\n",
       "      <th>TOTAL STUDENTS</th>\n",
       "      <th>FREE LUNCH ELIGIBLE</th>\n",
       "      <th>Direct Certification [Public School] 2019-20</th>\n",
       "      <th>ASIAN</th>\n",
       "      <th>HISPANIC</th>\n",
       "      <th>BLACK</th>\n",
       "      <th>WHITE</th>\n",
       "      <th>HAWAIIAN</th>\n",
       "      <th>TWO OR MORE RACES</th>\n",
       "      <th>FREE LUNCH ELIGIBLE NUMERIC</th>\n",
       "      <th>REDUCED PRICE LUNCH ELIGIBLE NUMERIC</th>\n",
       "      <th>HI-LABEL-19-20</th>\n",
       "      <th>STRICT-LABEL-19-20</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>WA</td>\n",
       "      <td>22-Suburb: Mid-size</td>\n",
       "      <td>2-No</td>\n",
       "      <td>178</td>\n",
       "      <td>49</td>\n",
       "      <td>11</td>\n",
       "      <td>8</td>\n",
       "      <td>32</td>\n",
       "      <td>3</td>\n",
       "      <td>99</td>\n",
       "      <td>0</td>\n",
       "      <td>18</td>\n",
       "      <td>49.0</td>\n",
       "      <td>12</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>MN</td>\n",
       "      <td>21-Suburb: Large</td>\n",
       "      <td>1-Yes</td>\n",
       "      <td>39</td>\n",
       "      <td>8</td>\n",
       "      <td>–</td>\n",
       "      <td>1</td>\n",
       "      <td>15</td>\n",
       "      <td>3</td>\n",
       "      <td>19</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>8.0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "  ABBR               LOCALE TITLE I ELIGIBLE  TOTAL STUDENTS  \\\n",
       "0  WA   22-Suburb: Mid-size             2-No             178   \n",
       "1  MN      21-Suburb: Large            1-Yes              39   \n",
       "\n",
       "   FREE LUNCH ELIGIBLE Direct Certification [Public School] 2019-20  ASIAN  \\\n",
       "0                   49                                           11      8   \n",
       "1                    8                                            –      1   \n",
       "\n",
       "   HISPANIC  BLACK  WHITE  HAWAIIAN  TWO OR MORE RACES  \\\n",
       "0        32      3     99         0                 18   \n",
       "1        15      3     19         0                  1   \n",
       "\n",
       "   FREE LUNCH ELIGIBLE NUMERIC  REDUCED PRICE LUNCH ELIGIBLE NUMERIC  \\\n",
       "0                         49.0                                    12   \n",
       "1                          8.0                                     0   \n",
       "\n",
       "   HI-LABEL-19-20  STRICT-LABEL-19-20  \n",
       "0               0                   0  \n",
       "1               0                   0  "
      ]
     },
     "execution_count": 5,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head(2)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 12,
   "id": "099477c3",
   "metadata": {},
   "outputs": [],
   "source": [
    "app.layout = html.Div([\n",
    "\n",
    "    html.H1(\"Web Application Dashboards with Dash\", style={'text-align': 'center'}),\n",
    "\n",
    "    dcc.Dropdown(id=\"slct_year\",\n",
    "                 options=[\n",
    "                     {\"label\": \"AL\", \"value\": 1},{\"label\": \"AK\", \"value\": 2},{\"label\": \"AZ\", \"value\": 3},\n",
    "                     {\"label\": \"AR\", \"value\": 4},{\"label\": \"AR\", \"value\": 5},{\"label\": \"AR\", \"value\": 6},\n",
    "                     {\"label\": \"AR\", \"value\": 7},{\"label\": \"AR\", \"value\": 8},{\"label\": \"AR\", \"value\": 9},\n",
    "                     {\"label\": \"AR\", \"value\": 10},{\"label\": \"AR\", \"value\": 11},{\"label\": \"AR\", \"value\": 12},\n",
    "                     {\"label\": \"AR\", \"value\": 13},{\"label\": \"AR\", \"value\": 14},{\"label\": \"AR\", \"value\": 15},\n",
    "                     {\"label\": \"AR\", \"value\": 16},{\"label\": \"AR\", \"value\": 17},{\"label\": \"AR\", \"value\": 18},\n",
    "                     {\"label\": \"AR\", \"value\": 19},{\"label\": \"AR\", \"value\": 20},{\"label\": \"AR\", \"value\": 21},\n",
    "                     {\"label\": \"AR\", \"value\": 22},{\"label\": \"AR\", \"value\": 23},{\"label\": \"AR\", \"value\": 24},\n",
    "                     {\"label\": \"AR\", \"value\": 25},{\"label\": \"AR\", \"value\": 26},{\"label\": \"AR\", \"value\": 27},\n",
    "                     {\"label\": \"AR\", \"value\": 28},{\"label\": \"AR\", \"value\": 29},{\"label\": \"AR\", \"value\": 30},\n",
    "                     {\"label\": \"AR\", \"value\": 31},{\"label\": \"AR\", \"value\": 32},{\"label\": \"AR\", \"value\": 33},\n",
    "                     {\"label\": \"AR\", \"value\": 34},{\"label\": \"AR\", \"value\": 35},{\"label\": \"AR\", \"value\": 36},\n",
    "                     {\"label\": \"AR\", \"value\": 37},{\"label\": \"AR\", \"value\": 38},{\"label\": \"AR\", \"value\": 39},\n",
    "                     {\"label\": \"AR\", \"value\": 40},{\"label\": \"AR\", \"value\": 41},{\"label\": \"AR\", \"value\": 42},\n",
    "                     {\"label\": \"AR\", \"value\": 43},{\"label\": \"AR\", \"value\": 44},{\"label\": \"AR\", \"value\": 45},\n",
    "                     {\"label\": \"AR\", \"value\": 46},{\"label\": \"AR\", \"value\": 47},{\"label\": \"AR\", \"value\": 48},\n",
    "                     {\"label\": \"AR\", \"value\": 49},{\"label\": \"AR\", \"value\": 50}\n",
    "                 ],\n",
    "                 multi=False,\n",
    "                 value='AL',\n",
    "                 style={'width': \"40%\"}\n",
    "                 ),\n",
    "\n",
    "    html.Div(id='output_container', children=[]),\n",
    "    html.Br(),\n",
    "\n",
    "    dcc.Graph(id='my_bee_map', figure={})\n",
    "\n",
    "])\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "ed255629",
   "metadata": {},
   "outputs": [],
   "source": []
  },
  {
   "cell_type": "code",
   "execution_count": 7,
   "id": "86ccae24",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "'\\n@app.callback(\\n    [Output(component_id=\\'output_container\\', component_property=\\'children\\'),\\n     Output(component_id=\\'my_bee_map\\', component_property=\\'figure\\')],\\n    [Input(component_id=\\'slct_year\\', component_property=\\'value\\')]\\n)\\n\\ndef update_graph(option_slctd):\\n    print(option_slctd)\\n    print(type(option_slctd))\\n\\n    container = \"The year chosen by user was: {}\".format(option_slctd)\\n\\n    dff = df.copy()\\n    dff = dff[dff[\"Year\"] == option_slctd]\\n    dff = dff[dff[\"Affected by\"] == \"Varroa_mites\"]\\n\\n    # Plotly Express\\n    fig = px.choropleth(\\n        data_frame=dff,\\n        locationmode=\\'USA-states\\',\\n        locations=\\'state_code\\',\\n        scope=\"usa\",\\n        color=\\'Pct of Colonies Impacted\\',\\n        hover_data=[\\'State\\', \\'Pct of Colonies Impacted\\'],\\n        color_continuous_scale=px.colors.sequential.YlOrRd,\\n        labels={\\'Pct of Colonies Impacted\\': \\'% of Bee Colonies\\'},\\n        template=\\'plotly_dark\\'\\n    )\\n\\n    # Plotly Graph Objects (GO)\\n    # fig = go.Figure(\\n    #     data=[go.Choropleth(\\n    #         locationmode=\\'USA-states\\',\\n    #         locations=dff[\\'state_code\\'],\\n    #         z=dff[\"Pct of Colonies Impacted\"].astype(float),\\n    #         colorscale=\\'Reds\\',\\n    #     )]\\n    # )\\n    #\\n    # fig.update_layout(\\n    #     title_text=\"Bees Affected by Mites in the USA\",\\n    #     title_xanchor=\"center\",\\n    #     title_font=dict(size=24),\\n    #     title_x=0.5,\\n    #     geo=dict(scope=\\'usa\\'),\\n    # )\\n\\n    return container, fig\\n'"
      ]
     },
     "execution_count": 7,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "\"\"\"\n",
    "@app.callback(\n",
    "    [Output(component_id='output_container', component_property='children'),\n",
    "     Output(component_id='my_bee_map', component_property='figure')],\n",
    "    [Input(component_id='slct_year', component_property='value')]\n",
    ")\n",
    "\n",
    "def update_graph(option_slctd):\n",
    "    print(option_slctd)\n",
    "    print(type(option_slctd))\n",
    "\n",
    "    container = \"The year chosen by user was: {}\".format(option_slctd)\n",
    "\n",
    "    dff = df.copy()\n",
    "    dff = dff[dff[\"Year\"] == option_slctd]\n",
    "    dff = dff[dff[\"Affected by\"] == \"Varroa_mites\"]\n",
    "\n",
    "    # Plotly Express\n",
    "    fig = px.choropleth(\n",
    "        data_frame=dff,\n",
    "        locationmode='USA-states',\n",
    "        locations='state_code',\n",
    "        scope=\"usa\",\n",
    "        color='Pct of Colonies Impacted',\n",
    "        hover_data=['State', 'Pct of Colonies Impacted'],\n",
    "        color_continuous_scale=px.colors.sequential.YlOrRd,\n",
    "        labels={'Pct of Colonies Impacted': '% of Bee Colonies'},\n",
    "        template='plotly_dark'\n",
    "    )\n",
    "\n",
    "    # Plotly Graph Objects (GO)\n",
    "    # fig = go.Figure(\n",
    "    #     data=[go.Choropleth(\n",
    "    #         locationmode='USA-states',\n",
    "    #         locations=dff['state_code'],\n",
    "    #         z=dff[\"Pct of Colonies Impacted\"].astype(float),\n",
    "    #         colorscale='Reds',\n",
    "    #     )]\n",
    "    # )\n",
    "    #\n",
    "    # fig.update_layout(\n",
    "    #     title_text=\"Bees Affected by Mites in the USA\",\n",
    "    #     title_xanchor=\"center\",\n",
    "    #     title_font=dict(size=24),\n",
    "    #     title_x=0.5,\n",
    "    #     geo=dict(scope='usa'),\n",
    "    # )\n",
    "\n",
    "    return container, fig\n",
    "\"\"\""
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 9,
   "id": "2b92375a",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Dash is running on http://127.0.0.1:8050/\n",
      "\n",
      " * Serving Flask app \"__main__\" (lazy loading)\n",
      " * Environment: production\n",
      "\u001b[31m   WARNING: This is a development server. Do not use it in a production deployment.\u001b[0m\n",
      "\u001b[2m   Use a production WSGI server instead.\u001b[0m\n",
      " * Debug mode: on\n"
     ]
    },
    {
     "ename": "OSError",
     "evalue": "[Errno 48] Address already in use",
     "output_type": "error",
     "traceback": [
      "\u001b[0;31m---------------------------------------------------------------------------\u001b[0m",
      "\u001b[0;31mOSError\u001b[0m                                   Traceback (most recent call last)",
      "\u001b[0;32m/var/folders/yt/w_mnp3g172s5rgtjxs97bk3m0000gn/T/ipykernel_77040/3952607940.py\u001b[0m in \u001b[0;36m<module>\u001b[0;34m\u001b[0m\n\u001b[1;32m      1\u001b[0m \u001b[0;32mif\u001b[0m \u001b[0m__name__\u001b[0m \u001b[0;34m==\u001b[0m \u001b[0;34m'__main__'\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0;32m----> 2\u001b[0;31m     \u001b[0mapp\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mrun_server\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mdebug\u001b[0m\u001b[0;34m=\u001b[0m\u001b[0;32mTrue\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m",
      "\u001b[0;32m~/opt/anaconda3/lib/python3.8/site-packages/dash/dash.py\u001b[0m in \u001b[0;36mrun_server\u001b[0;34m(self, host, port, proxy, debug, dev_tools_ui, dev_tools_props_check, dev_tools_serve_dev_bundles, dev_tools_hot_reload, dev_tools_hot_reload_interval, dev_tools_hot_reload_watch_interval, dev_tools_hot_reload_max_retry, dev_tools_silence_routes_logging, dev_tools_prune_errors, **flask_run_options)\u001b[0m\n\u001b[1;32m   2076\u001b[0m                     \u001b[0mextra_files\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mappend\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mpath\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m   2077\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0;32m-> 2078\u001b[0;31m         \u001b[0mself\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mserver\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mrun\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mhost\u001b[0m\u001b[0;34m=\u001b[0m\u001b[0mhost\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0mport\u001b[0m\u001b[0;34m=\u001b[0m\u001b[0mport\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0mdebug\u001b[0m\u001b[0;34m=\u001b[0m\u001b[0mdebug\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;34m**\u001b[0m\u001b[0mflask_run_options\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m",
      "\u001b[0;32m~/opt/anaconda3/lib/python3.8/site-packages/flask/app.py\u001b[0m in \u001b[0;36mrun\u001b[0;34m(self, host, port, debug, load_dotenv, **options)\u001b[0m\n\u001b[1;32m    988\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    989\u001b[0m         \u001b[0;32mtry\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0;32m--> 990\u001b[0;31m             \u001b[0mrun_simple\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mhost\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0mport\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0mself\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;34m**\u001b[0m\u001b[0moptions\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m\u001b[1;32m    991\u001b[0m         \u001b[0;32mfinally\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    992\u001b[0m             \u001b[0;31m# reset the first request information if the development server\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n",
      "\u001b[0;32m~/opt/anaconda3/lib/python3.8/site-packages/werkzeug/serving.py\u001b[0m in \u001b[0;36mrun_simple\u001b[0;34m(hostname, port, application, use_reloader, use_debugger, use_evalex, extra_files, exclude_patterns, reloader_interval, reloader_type, threaded, processes, request_handler, static_files, passthrough_errors, ssl_context)\u001b[0m\n\u001b[1;32m    980\u001b[0m             \u001b[0ms\u001b[0m \u001b[0;34m=\u001b[0m \u001b[0msocket\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0msocket\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0maddress_family\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0msocket\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mSOCK_STREAM\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    981\u001b[0m             \u001b[0ms\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0msetsockopt\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0msocket\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mSOL_SOCKET\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0msocket\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mSO_REUSEADDR\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;36m1\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0;32m--> 982\u001b[0;31m             \u001b[0ms\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mbind\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mserver_address\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m\u001b[1;32m    983\u001b[0m             \u001b[0ms\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mset_inheritable\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0;32mTrue\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    984\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n",
      "\u001b[0;31mOSError\u001b[0m: [Errno 48] Address already in use"
     ]
    }
   ],
   "source": [
    "if __name__ == '__main__':\n",
    "    app.run_server(debug=True)"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3 (ipykernel)",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.8.11"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
