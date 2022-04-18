# save this as app.py
from flask import Flask, render_template, request
from helper import *
import sqlite3

app = Flask(__name__)

filepath = "knnpickle_file"
data = unpickle(filepath)
model = load_model(data)


# Routes
@app.route("/")
def new_form():
    return render_template("title1_form.html")

@app.route("/results", methods=["POST"])
def results():
    state_encodings = {'CA':1,'WY':2,'MO':3,'TX':4,'OK':5,'MS':6, 'KY':7,'ID':8,'OR':9,'WI':10, 'ME':11,'MA':12,'NC':13,'VA':14,
    'OH':15,'IN':16, 'AL':17, 'IA':18, 'FL':19, 'LA':20, 'CT':21, 'SC':22, 'GA':23, 'MD':24, 'NE':25, 'SD':26,
    'MT':27, 'RI':28, 'UT':29, 'WV':30, 'AR':31, 'NV':32, 'HI':33, 'DE':34, 'NY':35, 'DE':37, 'NY':38, 'MN':39,
    'NM':40, 'NJ':41,'PA':42, 'ND':43, 'NH': 44, 'MI':45, 'KS':46, 'CO':47, 'VT':48, 'DC':49, 'WA':50, 'IL':51,
    'AK': 52, 'AZ':53,'TN':54, 'TN':55}
    
    user_state = state_encodings[request.form.get('State').upper()]
    user_locale = request.form.get('Locale')
    user_total = request.form.get('Total')
    user_asian = request.form.get('Asian')
    user_hispanic = request.form.get('Hispanic')
    user_black = request.form.get('Black')
    user_white = request.form.get('White')
    user_hawaiian = request.form.get('Hawaiian')
    user_mixed = request.form.get('Mixed')

    user_info=[user_state, user_locale, user_total, user_asian, user_hispanic, user_black, user_white, user_hawaiian, user_mixed]

    prediction = predict_eval(model, user_info)
    
    return render_template("title1_results.html", prediction=prediction)


# Main
if __name__ == "__main__":
    app.run(debug=True)

