import { createStackNavigator } from '@react-navigation/stack'
import FormTarefaAsyncStorage from './FormTarefaAsyncStorage.js'
import ListaTarefasAsyncStorage from './ListaTarefasAsyncStorage.js'

const Stack = createStackNavigator()

export default function StackTarefasAsyncStorage() {
    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='ListaTarefasAsyncStorage'
        >

            <Stack.Screen name='ListaTarefasAsyncStorage' component={ListaTarefasAsyncStorage} />

            <Stack.Screen name='FormTarefaAsyncStorage' component={FormTarefaAsyncStorage} />

        </Stack.Navigator>

    )
}
