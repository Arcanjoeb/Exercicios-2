import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { PaperProvider } from 'react-native-paper';
import DrawerRoutes from './Src/routes/DrawerRoutes';


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <DrawerRoutes />
      </NavigationContainer>
    </PaperProvider>
  );
}
