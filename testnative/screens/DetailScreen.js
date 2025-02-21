import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5002"; // Se usi l'emulatore Android

const DetailScreen = ({ route }) => {
  const { endpoint, id } = route.params;
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/${endpoint}/${id}`)
      .then(response => setData(response.data))
      .catch(error => console.error("Errore nel recupero dati", error));
  }, [endpoint, id]);

  if (!data) return <Text style={styles.loading}>Caricamento...</Text>;
  if (data.error) return <Text style={styles.error}>{data.error}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.nome} {data.cognome}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  loading: { fontSize: 18, textAlign: "center" },
  error: { fontSize: 18, color: "red", textAlign: "center" },
});

export default DetailScreen;
