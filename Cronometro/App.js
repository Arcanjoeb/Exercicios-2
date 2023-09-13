
import { StyleSheet, Text, View } from 'react-native';
import Cronometro from './Components/CronometroBase';
import RodaPe from './Components/RodaPe';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Cronometro />
    </View>
    <View>
      <RodaPe />
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
