# save this as app.py
from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

@app.route("/")
def new_form():
    return render_template("title1_form.html")

@app.route("/results", methods=["POST"])
def results():
    prediction = .93
    return render_template("title1_results.html", prediction=prediction)


if __name__ == "__main__":
    app.run(debug=True)



