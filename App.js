import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Inicios from "./app/screens/Inicio";
import Favoritos from "./app/screens/Favorito";
import Disenios from "./app/screens/Disenio";
import Pedidos from "./app/screens/Pedido";
import ajustes from "./app/screens/Ajuste";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
