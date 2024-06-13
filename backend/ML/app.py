from flask import Flask, request, jsonify,make_response
from flask_restful import Resource, Api
from flask_cors import CORS
import os
from joblib import load
import pandas as pd
import json

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)


def classify_personality(data):
    dct = { 
    "EXT1": data["EXT1"],
    "EXT2": data["EXT2"],
    "EXT3": data["EXT3"],
    "EXT4": data["EXT4"],
    "EXT5": data["EXT5"],
    "EXT6": data["EXT6"],
    "EXT7": data["EXT7"],
    "EXT8": data["EXT8"],
    "EXT9": data["EXT9"],
    "EXT10": data["EXT10"],
    "EST1": data["EST1"],
    "EST2": data["EST2"],
    "EST3": data["EST3"],
    "EST4": data["EST4"],
    "EST5": data["EST5"],
    "EST6": data["EST6"],
    "EST7": data["EST7"],
    "EST8": data["EST8"],
    "EST9": data["EST9"],
    "EST10": data["EST10"],
    "AGR1": data["AGR1"],
    "AGR2": data["AGR2"],
    "AGR3": data["AGR3"],
    "AGR4": data["AGR4"],
    "AGR5": data["AGR5"],
    "AGR6": data["AGR6"],
    "AGR7": data["AGR7"],
    "AGR8": data["AGR8"],
    "AGR9": data["AGR9"],
    "AGR10": data["AGR10"],
    "CSN1": data["CSN1"],
    "CSN2": data["CSN2"],
    "CSN3": data["CSN3"],
    "CSN4": data["CSN4"],
    "CSN5": data["CSN5"],
    "CSN6": data["CSN6"],
    "CSN7": data["CSN7"],
    "CSN8": data["CSN8"],
    "CSN9": data["CSN9"],
    "CSN10": data["CSN10"],
    "OPN1": data["OPN1"],
    "OPN2": data["OPN2"],
    "OPN3": data["OPN3"],
    "OPN4": data["OPN4"],
    "OPN5": data["OPN5"],
    "OPN6": data["OPN6"],
    "OPN7": data["OPN7"],
    "OPN8": data["OPN8"],
    "OPN9": data["OPN9"],
    "OPN10": data["OPN10"]
    }

    ##loading the model from the saved file
    MODEL_FILENAME = "PersonalityTestModel.joblib"
    model = load(MODEL_FILENAME)
    # Convert dictionary to DataFrame
    df = pd.DataFrame([dct])
    # print(df.head())
    
    # Predict personality
    my_personality = model.predict(df)
    print("my_personity is " , my_personality)
    #return f"my personality is {my_personality}"
    print(type(my_personality))
    lst = list(my_personality)
    p_name = ""
    p_num = int(lst[0])
    if p_num == 0:
        p_name = "The_Explorer"
    if p_num == 1 :
        p_name = "The_Peacemaker"
    if p_num == 2 :
        p_name = "The_Sentinel"
    if p_num == 3 :
        p_name = "The_Planner"
    if p_num == 4 :
        p_name = "The_Social Butterfly"
    if p_name == "" : 
        p_name = "The_Planner"
    return jsonify({"status" : 200 ,"personality" : p_name})

@app.route("/classify",methods=['POST'])
def route_cl_persona():
    data = request.get_json()
    cl = classify_personality(data)
    return cl

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 7000))
    app.run(host='0.0.0.0', port=port)