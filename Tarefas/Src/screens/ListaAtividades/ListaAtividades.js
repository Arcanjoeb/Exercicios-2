import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, IconButton, Text, TextInput } from 'react-native-paper'

export default function ListaAtividades() {

    const [Atividades, setAtividades] = useState(["Matematica", "Portugues", "Ingles", "Geografia", "Filosofia", "Sociologia"])
    const [inputValue, setInputValue] = useState('')
    const [editando, setEditando] = useState(false)
    const [AtividadeSendoEditado, setAtividadeSendoEditado] = useState(null)

    function adicionarAtividade() {
        console.log('ADICIONAR Atividade')
        let novaListaAtividades = Atividades
        novaListaAtividades.push(inputValue)
        setAtividades(novaListaAtividades)
        setAtividadeSendoEditado(null)
        setInputValue('')
    }

    function editarAtividade() {
        console.log('EDITAR Atividade')
        console.log('AtividadeSendoEditado: ', AtividadeSendoEditado)
        console.log('AtividadeASerEditado inputValue: ', inputValue)

        let index = Atividades.indexOf(AtividadeSendoEditado)
        let novaListaAtividades = Atividades

        novaListaAtividades.splice(index, 1, inputValue)

        setAtividades(novaListaAtividades)
        setEditando(false)
        setInputValue('')
    }

    function excluirAtividade(Atividade) {
        let novaListaAtividades = Atividades.filter(item => item !== Atividade)
        setAtividades(novaListaAtividades)
    }

    function handleEditarAtividade(Atividade) {
        setAtividadeSendoEditado(Atividade)
        setInputValue(Atividade)
        setEditando(true)
    }

    function handleButton() {
        console.log('HANDLE BUTTON -> editando: ', editando)
        if (editando) {
            editarAtividade()
        } else {
            adicionarAtividade()
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>

                <TextInput
                    style={{ flex: 4 }}
                    mode='outlined'
                    label='Atividade'
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />


                <Button
                    style={styles.button}
                    mode='contained'
                    onPress={handleButton}
                >
                    {editando ? 'Edit' : 'Add'}
                </Button>

            </View>



            <FlatList
                style={styles.list}
                data={Atividades}
                renderItem={({ item }) => (
                    <Card
                        style={styles.card}
                        mode='outlined'
                    >
                        <Card.Content style={styles.cardContent}>
                            <Text variant='titleMedium' style={{ flex: 1 }}>{item}</Text>
                            <IconButton style={styles.icon} icon='pen' onPress={() => {
                                handleEditarAtividade(item)
                            }} />
                            <IconButton style={styles.icon} icon='trash-can-outline' onPress={() => {
                                excluirAtividade(item)
                            }} />
                        </Card.Content>
                    </Card>
                )}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    inputContainer: {
        flexDirection: 'row',
        width: '95%',
        paddingTop: 10,
        gap: 5,
        
        
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007BFF',
    },
    list: {
        width: '95%',
        marginTop: 10,
        
        
    },
    icon: { backgroundColor: '#F4F4F4',
            borderRadius: 10,
    },

    card: {
        margin: 5,
        backgroundColor: '#E6E6E6',
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        
    }
})