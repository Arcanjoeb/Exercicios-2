import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native';
import { Avatar, Card, Divider, IconButton, Text } from 'react-native-paper'
import Api from '../Services/Api'


export default function detalhes(props) {

    const navigation = props.navigation
    const [detalhes, setdetalhes] = useState()
    const detalhesId = props.route.params.id
    const [pratos, setpratos] = useState()
    const pratosId = props.route.params.id
    


    useEffect(() => {
        Api.get('/restaurantes/' + detalhesId)
            .then(response => {
                setdetalhes(response.data)
            })
            .catch(error => {
                console.error("DEU ERRO em  BUSCAR DETALHES", error)
            })

    }, [])
    useEffect(() => {
        Api.get('/restaurantes/' + pratosId)
            .then(response => {
                setpratos(response.data)
            })
            .catch(error => {
                console.error("DEU ERRO em  pratos", error)
            })

    }, [])

 return (
        <View >
            <Text style={styles.text}>Restaurante</Text>
            <Card style={styles.card}>
                <Card.Content>
                    <Text style={styles.title2}>{detalhes?.nome}</Text>
                    <Text>{detalhes?.descricao}</Text>
                    <Card.Cover style={styles.img} source={{ uri: detalhes?.imagem }} />
                    <Text style={styles.title2}> Nome: </Text>
                    <Text style={styles.title3}> {detalhes?.nome}</Text>
                    <Text style={styles.title2}>Tipo de cozinha:</Text>
                    <Text style={styles.title3}> {detalhes?.tipo_cozinha}</Text>
                    <Text style={styles.title2}>Endereço:</Text>
                    <Text style={styles.title3}>{detalhes?.endereco}</Text>
                    <Text style={styles.title2}>Horário de funcionamento:</Text>
                    <Text style={styles.title3}>{detalhes?.horario_funcionamento}</Text>
                </Card.Content>
            </Card>

            <Text style={styles.text}>Cardápio</Text>

            <Card style={styles.card}>
                <Card.Content>
                <Text style={styles.title}>Pratos</Text>
                    <Text style={styles.texto}>{pratos?.nome}</Text>

                    <Text>{pratos?.preco}</Text>

                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Content>
                <Text style={styles.title}>Bebidas</Text>
                    <Text style={styles.texto}>{pratos?.nome}</Text>

                    <Text>{pratos?.preco}</Text>

                </Card.Content>
            </Card>
</View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'

        },
        card: {
            margin: 10, 
            backgroundColor: '#fff',  
            paddingVertical: 10,
            marginBottom:10 ,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'black'
            
          },
          title: {
            fontSize: 20,
            textAlign: 'center',
          },
          title2: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          title3:{
            fontSize: 10,
            
          }
})