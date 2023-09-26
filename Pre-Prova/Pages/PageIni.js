import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Card } from 'react-native-paper'
import React, { useState } from 'react'
import Api from '../Services/Api.js'

export default function startPage(props) {
    const [posts, setPosts] = useState([])

    Api.get('/posts').then(response => {   
        setPosts(response.data.posts)
    })   

    function listadUsuarios() {
        props.navigation.navigate('users')
    }

    console.log(posts)

    return (
        <View style={styles.Fundo}>
            <Button style={styles.Botun} mode='outlined' onPress={listadUsuarios}>Perfil Usuarios</Button>

            <FlatList style={styles.TextoPessoas}
                data={posts}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('usuario', item.userId) }}>
                        <Card mode='contained'style={styles.CaixaTexto}>
                            <Card.Title title={item.title} />
                            <Card.Content>
                                <Text style={styles.Texto} variant="titleLarge">{item.body}</Text>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Fundo: {
        flex: 1, 
        gap: 30,       
        paddingHorizontal: 30,
        backgroundColor: '#fff225'
    },

    TextoPessoas: { width: '100%', },

    CaixaTexto: {
        
        marginBottom: 15,
        backgroundColor: '#fff'
    },

    Texto:{fontStyle: 'italic',
        color: 'red',
        textAlign: 'center',
    },

    Botun:{
        backgroundColor: '#fff',
        margin: 10,

    },
})