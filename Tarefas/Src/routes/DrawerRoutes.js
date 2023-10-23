
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../screens/Home'
import ListaAtividades from '../screens/ListaAtividades/ListaAtividades'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Atividades'>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Atividades" component={ListaAtividades} />
        </Drawer.Navigator>

    )
}