from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("home.html")

#Running app directly using python filename.py
if __name__ == '__main__':
#    app = create_app()
    app.run(debug=True)