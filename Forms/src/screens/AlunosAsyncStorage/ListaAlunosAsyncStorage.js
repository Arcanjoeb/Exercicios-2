import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, Dialog, FAB, Portal, Text } from 'react-native-paper'
import Toast from 'react-native-toast-message'


export default function AlunosAsyncStorage({ navigation, route }) {

  const [Alunos, setAlunos] = useState([])
  const [showModalExcluirUsuario, setShowModalExcluirUsuario] = useState(false)
  const [AlunoASerExcluida, setAlunoASerExcluida] = useState(null)


  useEffect(() => {
    loadAlunos()
  }, [])

  async function loadAlunos() {
    const response = await AsyncStorage.getItem('Alunos')
    console.log("🚀 ~ file: AlunosAsyncStorage.js:21 ~ loadAlunos ~ response:", response)
    const AlunosStorage = response ? JSON.parse(response) : []
    setAlunos(AlunosStorage)
  }



  const showModal = () => setShowModalExcluirUsuario(true);

  const hideModal = () => setShowModalExcluirUsuario(false);

  async function adicionarAluno(Aluno) {
    let novaAlunos = Alunos
    novaAlunos.push(Aluno)
    await AsyncStorage.setItem('Alunos', JSON.stringify(novaAlunos));
    setAlunos(novaAlunos)
  }

  async function editarAluno(AlunoAntiga, novosDados) {
    console.log('Aluno ANTIGA -> ', AlunoAntiga)
    console.log('DADOS NOVOS -> ', novosDados)

    const novaAlunos = Alunos.map(Aluno => {
      if (Aluno == AlunoAntiga) {
        return novosDados
      } else {
        return Aluno
      }
    })

    await AsyncStorage.setItem('Alunos', JSON.stringify(novaAlunos))
    setAlunos(novaAlunos)

  }

  async function excluirAluno(Aluno) {
    const novaAlunos = Alunos.filter(p => p !== Aluno)
    await AsyncStorage.setItem('Alunos', JSON.stringify(novaAlunos))
    setAlunos(novaAlunos)
    Toast.show({
      type: 'success',
      text1: 'Aluno excluida com sucesso!'
    })
  }

  function handleExluirAluno() {
    excluirAluno(AlunoASerExcluida)
    setAlunoASerExcluida(null)
    hideModal()
  }


  return (
    <View style={styles.container}>

      <Text variant='titleLarge' style={styles.title} >Lista de Alunos</Text>

      <FlatList
        style={styles.list}
        data={Alunos}
        renderItem={({ item }) => (
          <Card
            mode='outlined'
            style={styles.card}
          >
            <Card.Content
              style={styles.cardContent}
            >
              <View style={{ flex: 1}}>
                <Text style={styles.cardTitle} variant='headlineSmall'> {item?.Nome}</Text>
                <Text style={styles.cardTitle2} variant='titleMedium'>Turno: {item?.Turno}</Text>
                <Text style={styles.cardTitle2} variant='titleMedium'>Sexo: {item?.Sexo }</Text>
                <Text style={styles.cardTitle2} variant='titleMedium'>Matricula: {item?.Matricula}</Text>
              </View>

            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.push('FormAlunoAsyncStorage', { acao: editarAluno, Aluno: item })}>
                Editar
              </Button>
              <Button style={{backgroundColor: 'red'}} onPress={() => {
                setAlunoASerExcluida(item)
                showModal()
              }}>
                Excluir
              </Button>
            </Card.Actions>
          </Card>
        )}
      />

      {/* Botão Flutuante */}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.push('FormAlunoAsyncStorage', { acao: adicionarAluno })}
      />


      {/* Modal Excluir Usuário */}
      <Portal>
        <Dialog visible={showModalExcluirUsuario} onDismiss={hideModal}>
          <Dialog.Title>Atenção!</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">Tem certeza que deseja excluir este usuário?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideModal}>Voltar</Button>
            <Button onPress={handleExluirAluno}>Tenho Certeza</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
    color: '#1273DE',
    fontFamily: 'serif',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#B8F5FE',
  },
  list: {
    width: '90%',
  },
  card: {
    marginTop: 15,
    borderColor: '#1273DE',
  },
  cardContent: {
    flexDirection: 'row',
    backgroundColor: '#61E4F5',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 15
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'serif',
  },
  cardTitle2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'monospace',
  }

})