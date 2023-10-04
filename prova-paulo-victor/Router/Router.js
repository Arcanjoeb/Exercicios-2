import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurantes from '../Pages/Restaurante';
import Detalhes from '../Pages/Detalhes';

const Stack = createStackNavigator();

export default function Router(props) {

    console.log(props)
          
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='posts'>

                <Stack.Screen name='Restaurantes' component={Restaurantes} />

                <Stack.Screen name='Detalhes' component={Detalhes} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}