
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import Home from '../screens/Home'
import ListaCarros from '../screens/ListaCarros/ListaCarros'
import ListaCarrosAsyncStorage from '../screens/ListaCarrosAsyncStorage/ListaCarros'
import StackPessoas from '../screens/Alunos/StackAlunos'
import StackPessoasAsyncStorage from '../screens/PessoasAsyncStorage/StackPessoasAsyncStorage'
import StackPessoasFormularioAltoNivel from '../screens/PessoasFormularioAltoNivel/StackPessoasFormularioAltoNivel'
import Cadastro from '../screens/Cadastro/Cadastro'
import StackTarefasAsyncStorage from '../screens/TarefasAsyncStorage/StackTarefasAsyncStorage'
import StackAlunosAsyncStorage from '../screens/AlunosAsyncStorage/StackAlunosAsyncStorage'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='AlunosAsyncStorage'>

            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Carros" component={ListaCarros} />
            <Drawer.Screen name="CarrosAsyncStorage" component={ListaCarrosAsyncStorage} />
            <Drawer.Screen name="Alunos" component={StackPessoas} />
            <Drawer.Screen name="AlunosAsyncStorage" component={StackAlunosAsyncStorage} />
            <Drawer.Screen name="PessoasAsyncStorage" component={StackPessoasAsyncStorage} />
            <Drawer.Screen name="FormularioAltoNivel" component={StackPessoasFormularioAltoNivel} />
            <Drawer.Screen name="TarefasAsyncStorage" component={StackTarefasAsyncStorage} />
            

            <Drawer.Screen name="Cadastro" component={Cadastro} />

        </Drawer.Navigator>

    )
}