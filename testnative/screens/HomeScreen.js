import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Benvenuto nella nostra Accademia!</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Professori")}>
      <Text style={styles.buttonText}>Visualizza Professori</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Ricercatori")}>
      <Text style={styles.buttonText}>Visualizza Ricercatori</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: { backgroundColor: "blue", padding: 10, margin: 10, borderRadius: 5 },
  buttonText: { color: "white", fontSize: 18 },
});

export default HomeScreen;
