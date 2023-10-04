import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Avatar, Card, IconButton } from 'react-native-paper'

import Api from '../Services/Api'

export default function Home(props) {

    const navigation = props.navigation
    const [restaurantes, setrestaurantes] = useState([])
    

    useEffect(() => {

        Api.get('/restaurantes')
            .then(response => {

                setrestaurantes(response.data)

            })
            .catch(error => {
                console.error(" Nao achei o restaurantes", error)
            })

    }, [])


    return (
        <View style={styles.container}>

            <FlatList
                data={restaurantes}
                renderItem={({ item }) => {
                    return (
                        <Card style={styles.card} onPress={() => {
                            navigation.navigate('Detalhes', { id: item.id })
                            }}>
                            <Card.Title 
                                title={item?.nome}
                                subtitle={item?.tipo_cozinha}
                                left={() => <Avatar.Image size={50} source={{ uri: item.imagem }} />}
                                right={() => <IconButton icon="chevron-right" />}
                            />
                        </Card>
                    )
                }}
            />

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      card: {
        backgroundColor: '#fff',  
        margin: 10, 
        flex: 1,
        paddingVertical: 10,
        marginBottom:10 ,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black'
        
      },
      

})
