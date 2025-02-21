import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5002";

export default function ListScreen() {
  const [data, setData] = useState([]);
  const [tipo, setTipo] = useState(null);

  // Funzione per recuperare dati dall'API Flask
  const fetchData = async (endpoint) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
      setData(response.data);
      setTipo(endpoint); // Salva se sono professori o ricercatori
    } catch (error) {
      console.error("Errore nel recupero dati:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accademia</Text>

      {/* Bottoni per selezionare i dati */}
      <View style={styles.buttonContainer}>
        <Button title="Visualizza Professori" onPress={() => fetchData("professori")} />
        <Button title="Visualizza Ricercatori" onPress={() => fetchData("ricercatori")} />
      </View>

      {/* Mostra titolo solo se ci sono dati */}
      {data.length > 0 && (
        <Text style={styles.subtitle}>
          {tipo === "professori" ? "Lista Professori" : "Lista Ricercatori"}
        </Text>
      )}

      {/* Tabella */}
      {data.length > 0 && (
        <View style={styles.table}>
          {/* Intestazione della tabella */}
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>ID</Text>
            <Text style={styles.headerText}>Nome</Text>
            <Text style={styles.headerText}>Cognome</Text>
          </View>

          {/* Contenuto della tabella */}
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.tableRow}>
                <Text style={styles.cell}>{item.id}</Text>
                <Text style={styles.cell}>{item.nome}</Text>
                <Text style={styles.cell}>{item.cognome}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

// Stili CSS per la tabella e i componenti
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  table: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    padding: 10,
  },
  headerText: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
});
