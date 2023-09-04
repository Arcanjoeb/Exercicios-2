import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const BiscoitoAberto  = require('./Src/img/biscoito_aberto.png')
const BiscoitoFechado = require('./Src/img/biscoito.png')

const frases = [
  'Não importa o tamanho da montanha, ela não pode tapar o sol.',
  'O bom-senso vale mais do que muito conhecimento.',
  'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
  'São os nossos amigos que nos ensinam as mais valiosas lições.',
  'Aquele que se importa com o sentimento dos outros, não é um tolo.',
  'A adversidade é um espelho que reflete o verdadeiro eu.',
  'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
  'Uma bela flor é incompleta sem as suas folhas.',
  'Sem o fogo do entusiasmo, não há o calor da vitória.',
  'O riso é a menor distância entre duas pessoas.'

];
export default function App() {

  const [getTextoFrase, setTextoFrase] = useState('');
  const [getTextoBotao, setTextoBotao] = useState('Quebrar biscoito');
  
  const quebrarBiscoito = () => {

    if (getTextoBotao == 'Voltar') {

      setTextoFrase('');
      setTextoBotao('Quebrar biscoito');
    }else{
      const numeroAleatorio = Math.floor(Math.random() * frases.length);
      setTextoFrase(' "' + frases[numeroAleatorio] + '" ');
      setTextoBotao('Voltar');
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          style={styles.img}
          source={getTextoBotao == 'Voltar' ? BiscoitoAberto : BiscoitoFechado}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.textoFrase}>{getTextoFrase}</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.botao} onPress={() => quebrarBiscoito()}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>{getTextoBotao}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                        //Grup
    backgroundColor: '#fff',       // Cor de Fundo
    alignItems: 'center',         // Alianhamento dos items
    justifyContent: 'center',    // Espaçamento da tela
  },
  containerImg: {
    flex: 2,                         //Grup
    backgroundColor: '#fff',        // Cor de Fundo
    alignItems: 'center',          // Alianhamento dos items
    justifyContent: 'center',     // Espaçamento da tela
  },
  containerFrase: {
    flex: 3,                            //Grup
    backgroundColor: '#fff',           // Cor de Fundo
    alignItems: 'center',             // Alianhamento dos items
    justifyContent: 'center',        // Espaçamento da tela
  },
  containerBotao: {
    flex: 1,                      //Grup
    backgroundColor: '#fff',     // Cor de Fundo
    alignItems: 'center',       // Alianhamento dos items
    justifyContent: 'center',  // Espaçamento da tela
  },
  img: {
    width: 250,               //Dimensoes em Px
    height: 250              //Dimensoes em Px
  },
  textoFrase: {
    fontSize: 20,             //Tamanho da fonte              
    color: '#dd7b22',        //Coloração
    margin: 30,             //Limite e Espaçamento
    fontStyle: 'italic',   //Tipo de Font
    textAlign: 'center'   //Alinhamneto de Texto
  },
  botao: {
    width: 230,                 //Dimensoes em Px
    height: 50,                //Dimensoes em Px
    borderWidth: 2,           //Largura das bordas em Px
    borderColor: '#dd7b22',  //Coloração da Borda
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
    color: '#dd7b22'      //Coloração da Font
  }

});