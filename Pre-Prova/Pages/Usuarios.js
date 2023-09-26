import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../Services/Api'
import { Avatar, Card, IconButton } from 'react-native-paper'

export default function usuarios(props) {
  const idUser = props.route.params
  const [usuario, setUsuario] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    
    Api.get('/users/' + idUser).then(resultado => {
      setUsuario(resultado.data)
    }).catch(error => {
      console.log('deu erro:', error)
    })

  }, [])

  Api.get('/users/' + idUser + '/posts').then(response => {
    setPosts(response.data.posts)
  })

  const avatar = () => {
    return <Avatar.Image size={48} source={{ uri: usuario.image }} />
  }

  console.log(posts)

  return (
    <View style={styles.Fundo}>
      <Card.Title
        title={usuario.firstName + ' ' + usuario.maidenName}
        subtitle={'Sexo:' + ' ' + usuario.gender}
        left={avatar}
        right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
      />

      <FlatList style={styles.peopleList}
        data={posts}
        renderItem={({ item }) =>
          <Card mode='contained' style={styles.Test}>
            <Card.Title style={styles.Titulo} title={item.title} />
            <Card.Content>
              <Text style={styles.Texto} variant="titleLarge">{item.body}</Text>
            </Card.Content>
          </Card>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  peopleList: { width: '100%' },         

  Test: { marginBottom: 10 ,
    backgroundColor: '#fff',
    
  },
  Fundo:{
    gap: 10, 
    paddingHorizontal: 10, 
    backgroundColor: '#fff225'
  },
  Texto:{fontStyle: 'italic',
        color: 'black',
        textAlign: 'center',
    },
})