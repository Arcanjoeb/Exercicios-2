import { createStackNavigator } from '@react-navigation/stack'
import FormAlunoAsyncStorage from './FormAlunoAsyncStorage.js'
import ListaAlunosAsyncStorage from './ListaAlunosAsyncStorage.js'

const Stack = createStackNavigator()

export default function StackAlunosAsyncStorage() {
    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='ListaAlunosAsyncStorage'
        >
            <Stack.Screen name='ListaAlunosAsyncStorage' component={ListaAlunosAsyncStorage} />

            <Stack.Screen name='FormAlunoAsyncStorage' component={FormAlunoAsyncStorage} />

        </Stack.Navigator>

    )
}
