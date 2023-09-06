import { StyleSheet, View } from "react-native";
import NumeroAleatorio from "./Components/NumerosAleatorios";


export default function App() {
  return (
    <View style={styles.container}>
    
      <NumeroAleatorio min={1} max={60} />
      <NumeroAleatorio min={1} max={60} />
      <NumeroAleatorio min={1} max={60} />
      <NumeroAleatorio min={1} max={60} />
      <NumeroAleatorio min={1} max={60} />
      <NumeroAleatorio min={1} max={60} />
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
});