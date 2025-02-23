from flask import Flask, jsonify
import psycopg2
from flask_cors import CORS

app = Flask(__name__)

CORS(app)
host="172.23.53.207" #cambia ogni riavvio della macchina ip addr ->inet 172.21.61.3/20 brd 172.21.63.255 scope global dynamic noprefixroute eth0
port="5432"
dbname="Academy"
user='postgres'
password="postgres"

try:
    connection = psycopg2.connect(
        host = host,
        port = port,
        dbname = dbname,
        user = user,
        password = password
    )
    print("connessione al database avvenuta con successo")

except Exception as e:
    print(f"Errore durante la connessione al database: {e}")

@app.route('/')
def home():
    return """
    <h1>Benvenuto nella nostra Accademia!</h1>"""

@app.route('/professori', methods = ['GET'])
def visualizzaProf():
    try:
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM professori")
        rows = cursor.fetchall()
        cursor.close()

        professori = [
            {"id": row[0], "nome": row[1], "cognome": row[2]}
            for row in rows
        ]

        return jsonify(professori), 200
    
    except Exception as e:
        return jsonify({"errore": str(e)}), 500
    
@app.route('/ricercatori', methods = ['GET'])
def visualizzaRic():
    try:
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM ricercatori")
        rows = cursor.fetchall()
        cursor.close()

        ricercatori = [
            {"id": row[0], "nome": row[1], "cognome": row[2]}
            for row in rows
        ]

        return jsonify(ricercatori), 200
    
    except Exception as e:
        return jsonify({"errore": str(e)}), 500
    

if __name__ == '__main__'  :
    app.run(host="0.0.0.0", port=5002)

   