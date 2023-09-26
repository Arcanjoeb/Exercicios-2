import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Pessoa from '../Components/Pessoa'
import Api from '../Services/Api'

export default function Users() {
    const [usuarios, setUsuarios] = useState([])

    Api.get('/users').then(response => {
        setUsuarios(response.data.users)
    })   

    return (          
        <View>
            <FlatList style={styles.listPessoas}
                data={usuarios}
                renderItem={({ item }) => <Pessoa pessoa={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listPessoas: { width: '100%',
                marginBottom: 10,
                paddingHorizontal: 10,
                backgroundColor: '#fff225',
     
 }

})