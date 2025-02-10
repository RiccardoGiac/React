from flask import Flask, jsonify, request
import psycopg2
from flask_cors import CORS

app = Flask(__name__)

CORS(app)
host="172.29.244.5" #cambia ogni riavvio della macchina ip addr ->inet 172.21.61.3/20 brd 172.21.63.255 scope global dynamic noprefixroute eth0
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
    <h1>Benvenuto nella nostra Accademia!</h1>
    <p>Usa <a href='/professori'>/professori</a> per visualizzare tutti i professori</p>
    <p>Usa /professori/[id] per visualizzare un professore specifico</p>
    <p>Usa <a href='/ricercatori'>/ricercatori</a> per visualizzare tutti i ricercatori</p>
    <p>Usa /ricercatori/[id] per visualizzare un ricercatore specifico</p>
    """


@app.route('/ricercatori')
def visualizzaRicercatori():
    cursor = connection.cursor()
    #eseguo query
    cursor.execute("select * from ricercatori")
    #recupero dati
    rows = cursor.fetchall()
    cursor.close()
    return rows 

@app.route('/professori')
def visualizzaProfessori():
    cursor = connection.cursor()
    #eseguo query
    cursor.execute("select * from professori")
    #recupero dati
    rows = cursor.fetchall()
    cursor.close()
    return rows

@app.route('/ricercatori/<int:ric_id>')
def visualizzaRicercatore(ric_id):
    cursor = connection.cursor()
    #eseguo query
    cursor.execute("select * from ricercatori where ricercatori.id = '" + ric_id + "'")
    #recupero dati
    rows = cursor.fetchall()
    cursor.close()
    return jsonify(rows)  

@app.route('/professori/<int:prof_id>')
def visualizzaProfessore(prof_id):
    cursor = connection.cursor()
    #eseguo query
    cursor.execute("select * from professori where professori.id = '" + prof_id +"'")
    #recupero dati
    rows = cursor.fetchall()
    cursor.close()
    return jsonify(rows) 






if __name__ == '__main__'  :
    app.run(host="0.0.0.0", port=5002)
