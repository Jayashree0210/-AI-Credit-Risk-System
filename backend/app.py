from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    month_duration = int(data["month_duration"])
    credit_amount = int(data["credit_amount"])

    # Simple prediction logic
    if credit_amount < 5000 and month_duration < 24:
        result = "Low Credit Risk"
    else:
        result = "High Credit Risk"

    return jsonify({
        "prediction": result
    })

if __name__ == "__main__":
    app.run(debug=True)