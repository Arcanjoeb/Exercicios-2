import { StyleSheet} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Router from './Routes/Routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    < NavigationContainer >
    <PaperProvider>
      <Router />
    </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black"
  },
});