import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Pessoa from '../Usuario/user';
import { Button } from 'react-native-paper';
import Api from '../../Services/Api';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Usuario(props) {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    
    Api.get('/users')
      .then((response) => {
        setUsuarios(response.data.users);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []); 

  function irParaAScreenPosts() {
    props.navigation.navigate('Posts');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Usuarios</Text>

      <FlatList
        style={styles.listPessoas}
        data={usuarios}
        renderItem={({ item }) => <Pessoa user={item} />}
        keyExtractor={(item) => item.id.toString()} 
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CAF7E1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listPessoas: {
    width: '90%',
  },
  text: {
    fontSize: 28, 
    fontWeight: 'bold',
    fontFamily: 'monospace',
  }
});
