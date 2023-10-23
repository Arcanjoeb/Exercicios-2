import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import InputAtividade from '../../components/InputAtividade'

export default function Atividades() {

  const [Atividades, setAtividades] = useState([])


  function adicionarAtividade(AtividadeEnviado) {
    setAtividades([...Atividades, AtividadeEnviado])
  }

  return (
    <View style={styles.container}>

      <InputAtividade adicionarAtividadeNoPai={adicionarAtividade} />

      <FlatList
        style={styles.list}
        data={Atividades}
        renderItem={({ item }) => {
          return (
            <Card
              mode='outlined'
              style={styles.card}
            >
              <Card.Content>
                <Text variant='displaySmall'>{item}</Text>
              </Card.Content>
            </Card>
          )
        }}
      />



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '90%'
  },
  card: {
    margin: 10
  }
})
