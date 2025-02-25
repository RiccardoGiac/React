from flask import Flask, jsonify
from flask_cors import CORS  

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  

professori = [
    {"id": 1, "nome": "Paolo", "cognome": "Rossi"},
    {"id": 2, "nome": "Mario", "cognome": "Verdi"},
    {"id": 3, "nome": "Marco", "cognome": "Bianchi"}
]

ricercatori = [
    {"id": 1, "nome": "Carlo", "cognome": "Neri"},
    {"id": 2, "nome": "Fabio", "cognome": "Gialli"},
    {"id": 3, "nome": "Anna", "cognome": "Grigi"}
]

@app.route('/')
def home():
    return """
    <h1>Benvenuto nella nostra Accademia!</h1>
    """

@app.route('/professori')
def getprofessori():
    
    return jsonify(professori)

@app.route('/professori/<int:prof_id>')
def getprofessore(prof_id):
    prof = next((prof for prof in professori if prof["id"] == prof_id), None)
    if prof:
        return jsonify(prof)
    return jsonify({"error": "Professore non trovato"}), 404

@app.route('/ricercatori')
def getricercatori():
    return jsonify(ricercatori)

@app.route('/ricercatori/<int:ric_id>')
def getricercatore(ric_id):
    ric = next((ric for ric in ricercatori if ric["id"] == ric_id), None)
    if ric:
        return jsonify(ric)
    return jsonify({"error": "Ricercatore non trovato"}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)