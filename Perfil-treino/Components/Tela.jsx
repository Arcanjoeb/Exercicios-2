import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Tela({ imgUri, genero, nome, telefone, email }) {
    const imagem = imgUri  

    return (
        <View style={styles.container}>
            <Image
                source={{ uri:  imagem  }}
                style={styles.img}
            />

            <View style={styles.container2}>
                <Text style={[styles.texto, styles.texto2]}>Gênero</Text>
                <Text style={styles.texto}>{genero}</Text>
            </View>

            <View style={styles.container2}>
                <Text style={[styles.texto, styles.texto2]}>Nome</Text>
                <Text style={styles.texto}>{nome}</Text>
            </View>


            <View style={styles.container2}>
                <Text style={[styles.texto, styles.texto2]}>Telefone</Text>
                <Text style={styles.texto}>{telefone}</Text>
            </View>

            <View style={styles.container2}>
                <Text style={[styles.texto, styles.texto2]}>Email</Text>
                <Text style={styles.texto}>{email}</Text>
            </View>
            <TouchableOpacity style={[styles.botao, styles.btnConte]}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>{ 'Entrar' }</Text>
          </View>
        </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#047d12',
        padding: 100,

    }, 
    img: {
        width: 200,
        height: 200,
        borderWidth: 1,
        borderColor: '#fcfcfc',
        borderRadius: 100,
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
        marginTop: 50,
        
        
    },
    texto: {
        fontSize: 16,
        color: '#F7ECE1',
        fontWeight: 'bold',

    },
    texto2: {
        fontSize: 18,
        color: '#b1f2b8',
        fontWeight: 'bold',
    },
    botao: {
        width: 230,                 //Dimensoes em Px
        height: 50,                //Dimensoes em Px
        borderWidth: 2,           //Largura das bordas em Px
        borderColor: '#ffff',  //Coloração da Borda
        borderRadius: 25        //Raio da borda
        
      },
      btnArea: {
        flex: 1,                                 //Grup
        flexDirection: 'row',                   // Direcionamento
        justifyContent: 'center',              // Espaçamento da tela
        alignItems: 'center'                  // Alianhamento dos items
       
      },
      btnTexto: {
        fontSize: 18,           //Tamanho da Font                                    
        fontWeight: 'bold',    //Formatação da Font
        color: '#b1f2b8'      //Coloração da Font
      },
      
      btnConte:{
        marginTop:120,
      }
})