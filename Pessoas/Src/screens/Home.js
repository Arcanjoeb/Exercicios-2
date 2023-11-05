import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/logo.edf.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Bem-vindo ao Meu App de Atividade Física</Text>
      <Text style={styles.subtitle}>Sua plataforma Para medir o Imc</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    
  },
  logo: {
    width: 250,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
     marginBottom: 10,
     margin: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
});

export default HomeScreen;
