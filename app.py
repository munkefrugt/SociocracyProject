# run app : type in terminal source /home/pernille/myFlaskWorkspace/tutorialFLask/env/bin/activate
# F5 -> start debug 
# F5 + Ctrl  ->stop 
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/circles")
def circles():
    return render_template("circles.html")


@app.route("/clickElm")
def clickElm():
    return render_template("clickElm.html")


@app.route("/circleClick")
def circleClick():
    return render_template("circleClick.html")

@app.route("/tryKeys")
def tryKeys():
    return render_template("tryKeys.html")

@app.route("/trackMouse")
def trackMouse():
    return render_template("trackMouse.html")