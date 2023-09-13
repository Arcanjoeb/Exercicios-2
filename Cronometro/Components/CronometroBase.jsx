import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Cronometro(props) {

    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [active, setActive] = useState(false);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        let interval;

        if (active) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    let { hours, minutes, seconds } = prevTime;

                    seconds = seconds === 59 ? 0 : seconds + 1;
                    minutes = seconds === 0 ? (minutes === 59 ? 0 : minutes + 1) : minutes;
                    hours = minutes === 0 && seconds === 0 ? (hours === 23 ? 0 : hours + 1) : hours;

                    return { hours, minutes, seconds };
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [active]);

    const controlTimer = () => {
        setActive(!active);
    };

    const resetTimer = () => {
        setTime({ hours: 0, minutes: 0, seconds: 0 });
        setActive(false);
        setHistory([...history, time])
    };
    
    const formattedTime = `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;

    const clearHistory = () => {
        setHistory([]);
    };
    return (
        <View style={styles.Espacamentos}>
            <Image source={require('../assets/Crono-Mao.png')} style={styles.Image} />
            <View style={[styles.TelaPrincipal, styles.Diametro]}>
                <Text style={styles.TimerTexto}>{formattedTime}</Text>
            </View>
            <View style={styles.ButtonStilos}>
                <TouchableOpacity style={[styles.Button, styles.Diametro]} onPress={controlTimer}>
                    <Text style={styles.buttonText}>{active ? 'Pausar' : 'Iniciar'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.Button, styles.Diametro]} onPress={resetTimer}>
                    <Text style={styles.buttonText}>{active ? 'Parar' : 'Reniciar'}</Text>
                </TouchableOpacity>
            </View>
        <View>
            {history.length > 0 ? <>
                <Text style={[styles.buttonText, styles.Traco]}>Historico:</Text>
                <ScrollView style={[styles.Scroll, styles.Diametro]}>
                    {history.map((record, index) => (
                        <Text key={index} style={[styles.buttonText, styles.Map]}>{`Tempo ${index + 1}: ${String(record.hours).padStart(2, '0')}:${String(record.minutes).padStart(2, '0')}:${String(record.seconds).padStart(2, '0')}`}</Text>
                    ))}   
                </ScrollView>
            </> : null}
        </View>
        <View>
        <TouchableOpacity style={[styles.HistoryButton, styles.Diametro]} onPress={clearHistory}>
                    <Text style={styles.HistoryButtonText}>Limpar Historico</Text>
                </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Espacamentos: {
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 20

    },

    Image: {
        width: 200, 
        height: 250
    },

    TelaPrincipal: {
        alignItems: 'center',
        paddingVertical: 10,
        width: 220,
    },

    TimerTexto: {
        fontSize: 30,
        color: '#24a394',
    },

    ButtonStilos: {
        flexDirection: 'row', 
        gap: 20
    },

    Button: {
        alignItems: "center", 
        justifyContent: 'center',
        padding: 5,
        width: 100, 
        height: 40
    },

    buttonText: {
        fontSize: 22,
        color: '#24a394'
    },

    Diametro: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fa7634'
    },

    Scroll: {
        padding: 1,
        width: 230, maxHeight: 250
    },

    Map: {
        marginVertical: 6,
        paddingVertical: 2
    },
    HistoryButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
        width: 110,
        height: 40,
        marginTop: 1,
    },
    HistoryButtonText: {
        fontSize: 12,
        color: '#24a394',
    },
})