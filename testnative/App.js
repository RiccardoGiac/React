import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Professori" component={ListScreen} initialParams={{ endpoint: "professori", title: "Lista Professori" }} />
        <Stack.Screen name="Ricercatori" component={ListScreen} initialParams={{ endpoint: "ricercatori", title: "Lista Ricercatori" }} />
        <Stack.Screen name="Dettaglio" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}