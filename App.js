import { StyleSheet, View} from 'react-native';
import Foco from './src/Foco';
export default function App() {

  return (
    <View style={styles.container}>
      
      <Foco/>

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
