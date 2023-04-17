from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017")
db = client["hospital-database"]
hospitals = db["hospitals"]

app = Flask(__name__)
CORS(app)

@app.route("/gethospitals", methods=["POST"])
def getallhospitals():
    if request.method == "POST":
        city = request.json["city"]
        avail_hospitals = []
        for x in hospitals.find({"city":city}):
            avail_hospitals.append(x)
        for x in avail_hospitals:
            x["_id"] = str(x["_id"])
        return jsonify({"status":200,"hospitals":avail_hospitals})

@app.route("/addhospital", methods=["POST"])
def addhospital():
    if request.method=="POST":
        name = request.json["name"]
        address = request.json["address"]
        city = request.json["city"]
        email = request.json["email"]
        phone = request.json["phone"]
        pincode = request.json["pincode"]
        website = request.json["website"]
        general_beds = request.json["genbeds"]
        icu_beds = request.json["icubeds"]
        neo_beds = request.json["neobeds"]
        hosp_details = {"name":name, "address":address,"city":city,"email":email,"phone":phone,"pincode":pincode,"website":website,"general_beds":general_beds,"icu_beds":icu_beds,"neo_beds":neo_beds}
        x = hospitals.insert_one(hosp_details)
        if x.acknowledged:
            return jsonify({"status":200,"message":"Hospital Added Successfully"})


if __name__=="__main__":
    app.run(debug=True)