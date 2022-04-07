from flask import Flask, render_template, request
import pickle

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
@app.route('/index')
def home():
    prediction = -1
    if request.method == 'POST':
        model = pickle.load(open('knnpickle_file', 'rb'))

        user_state = request.form.get('State')
        user_locale = request.form.get('Locale')
        user_total = request.form.get('Total')
        user_asian = request.form.get('Asian')
        user_hispanic = request.form.get('Hispanic')
        user_black = request.form.get('Black')
        user_white = request.form.get('White')
        user_hawaiian = request.form.get('Hawaiian')
        user_mixed = request.form.get('Mixed')

        prediction = model.predict([[user_state, user_locale, user_total, user_asian, user_hispanic, user_black, user_white, user_hawaiian, user_mixed]])

        print(prediction)

    return render_template('index.html', predicted = prediction)


if __name__ == '__main__':
    app.run(debug=True)