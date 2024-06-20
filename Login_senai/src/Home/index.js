import React, {Component} from 'react'
import { Text, View, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    return(
      <View style= {estilos.container}>
      <Text>Home</Text>
      </View>
    )
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20
  },
});

export default App;
