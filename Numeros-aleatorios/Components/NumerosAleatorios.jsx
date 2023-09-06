import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NumeroAleatorio(props) {

    const {min, max} = props

    const delta = max - min
    const numeroAleatorio = Math.floor(Math.random() * delta) + min

  return (
    <View style={styles.componentContainer}>
      <Text style={styles.componentTitle}>O número aleatório é {numeroAleatorio}</Text>
    </View>
  )
}   

const styles = StyleSheet.create({
    //Botão
  componentContainer: {
    backgroundColor: 'white',  //Coloração
    padding: 20,              // Largura do botão 
    borderRadius: 10,        // formarto aredondado do botão
    marginBottom: 20,       // tamanho do espacamento
    width: '80%',          // Preencimento do espaço
  },
    //Titulo do Botão
  componentTitle: {
    fontSize: 20,               //Tamanho da font
    marginBottom: 10,          // tamanho do espacamento
  },
})