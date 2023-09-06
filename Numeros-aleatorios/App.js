import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NumeroAleatorio from "./Components/NumerosAleatorios";
import { useState } from "react";


export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };
  return (
<View style={styles.container}>
    <NumeroAleatorio min={1} max={60} />
    <NumeroAleatorio min={1} max={60} />
    <NumeroAleatorio min={1} max={60} />
    <NumeroAleatorio min={1} max={60} />
    <NumeroAleatorio min={1} max={60} />
    <NumeroAleatorio min={1} max={60} />

    <TouchableOpacity onPress={handleRefresh} style={styles.button}>
      <Text style={styles.buttonText}>Recarregar</Text>
    </TouchableOpacity>
</View>

)}

const styles = StyleSheet.create({
  //Pagina
  container: {
    flex: 1,                     //Grup
    backgroundColor: '#4287f5', // Coloração de fundo
    alignItems: 'center',      // Alianhamento dos items
    justifyContent: 'center', // Espaçamento da tela
  },
  button: {
    backgroundColor: 'green', // Coloração
    padding: 10,             // Largura
    borderRadius: 5,        //Dimenção da botão
    marginTop: 20,         //Margin do Top
  },
  buttonText: {
    color: 'white',       // Coloração
    fontSize: 18,        // Tamanho em Px
    fontWeight: 'bold', // Tipo de Font 
  },
});