import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import Toast from 'react-native-toast-message'

export default function FormAlunoAsyncStorage({ navigation, route }) {

    const { acao, Aluno: AlunoAntiga } = route.params

    const [Nome, setNome] = useState('')
    const [Turno, setTurno] = useState('')
    const [Sexo, setSexo] = useState('')
    const [Matricula, setMatricula] = useState('')

    const [showMensagemErro, setShowMensagemErro] = useState(false)


    useEffect(() => {

        console.log('Aluno -> ', AlunoAntiga)

        if (AlunoAntiga) {
            setNome(AlunoAntiga.Nome)
            setTurno(AlunoAntiga.Turno)
            setSexo(AlunoAntiga.Sexo)
            setMatricula(AlunoAntiga.Matricula)
        }

    }, [])


    function salvar() {

        if (Nome === '' || Turno === '' || Sexo === '' || Matricula === '') {
            setShowMensagemErro(true)
        } else {
            setShowMensagemErro(false)

            const novaAluno = {
                Nome: Nome,
                Turno: Turno,
                Sexo: Sexo,
                Matricula: Matricula,
            }

            const objetoEmString = JSON.stringify(novaAluno)
            console.log("🚀 ~ file: FormAluno.js:47 ~ salvar ~ objetoEmString:", objetoEmString)

            console.log(typeof (objetoEmString))

            const objeto = JSON.parse(objetoEmString)
            console.log("🚀 ~ file: FormAluno.js:52 ~ salvar ~ objeto:", objeto)

            console.log(typeof (objeto))


            if (AlunoAntiga) {
                acao(AlunoAntiga, novaAluno)
            } else {
                acao(novaAluno)
            }



            Toast.show({
                type: 'success',
                text1: 'Aluno salva com sucesso!'
            })

            navigation.goBack()
        }

    }


    return (
        <View style={styles.container}>

            <Text variant='titleLarge' style={styles.title} >{AlunoAntiga ? 'Editar Aluno' : 'Adicionar Aluno'}</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    label={'Nome do Aluno'}
                    mode='outlined'
                    value={Nome}
                    onChangeText={text => setNome(text)}
                    onFocus={() => setShowMensagemErro(false)}
                />
                <TextInput
                    style={styles.input}
                    label={'Turno do Aluno'}
                    mode='outlined'
                    value={Turno}
                    onChangeText={text => setTurno(text)}
                    onFocus={() => setShowMensagemErro(false)}
                />
                <TextInput
                    style={styles.input}
                    label={'Sexo do Aluno'}
                    mode='outlined'
                    value={Sexo}
                    onChangeText={text => setSexo(text)}
                    onFocus={() => setShowMensagemErro(false)}
                />
                <TextInput
                    style={styles.input}
                    label={'Matricula do Aluno'}
                    mode='outlined'
                    keyboardType='numeric'
                    value={Matricula}
                    onChangeText={text => setMatricula(text)}
                    onFocus={() => setShowMensagemErro(false)}
                />

                {showMensagemErro &&
                    <Text style={{ color: 'red', textAlign: 'center' }}>Preencha todos os campos!</Text>
                }


            </View>

            <View style={styles.buttonContainer}>

                <Button
                    style={styles.button1}
                    mode='contained-tonal'
                    onPress={() => navigation.goBack()}
                >
                    Voltar
                </Button>

                <Button
                    style={styles.button}
                    mode='contained'
                    onPress={salvar}
                >
                    Salvar
                </Button>


            </View>



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
    inputContainer: {
        width: '90%',
        flex: 1,
        
    },
    input: {
        margin: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '90%',
        gap: 10,
        marginBottom: 10
    },
    button: {
        flex: 1,
        backgroundColor: '#00FF22',
    },
    button1: {
        flex: 1,
        backgroundColor: '#61E4F5',
    }
})