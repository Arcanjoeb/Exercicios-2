
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import Home from '../screens/Home'
import StackPessoas from '../screens/Pessoas/StackPessoas'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Pessoas'>

            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Pessoas" component={StackPessoas} />

        </Drawer.Navigator>

    )
}