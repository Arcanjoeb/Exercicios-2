import { StyleSheet, Text, View } from 'react-native';
import Tela from './Components/Tela';
export default function App() {
  return (
    <View style={styles.container}>
        <Tela
      imgUri='https://cdn.blog.estrategiavestibulares.com.br/vestibulares/wp-content/uploads/2023/02/sid-balachandran-_9a-3NO5KJE-unsplash-1200x675.jpg'
      genero='Masculino'
      nome='Paulo Victor'
      email='  skip1980@yahoo.com'
      telefone='9098-2035'
    />
    </View>
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
