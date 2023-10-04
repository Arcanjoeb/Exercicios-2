import Router from './Router/Router.js';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <Router />    
    </PaperProvider>
  );
}     