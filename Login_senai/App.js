import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './src/Login/index';
import Cadastro from './src/Cadastro/index';
import Home from './src/Home/index';

const Stack = createNativeStackNavigator();

export default function App (){
  return(
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Home' component={Home} options={{title:'Tela Inicial', headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{title:'Tela Inicial', headerShown:false}}/>
        <Stack.Screen name='Cadastrar' component={Cadastro} options={{title:'Tela Inicial', headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}