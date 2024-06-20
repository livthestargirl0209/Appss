import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <Image source={require('../Login_senai/src/imagem/senai.png')} style={estilos.imagem}></Image>
      <Text style={estilos.titulo}>Cadastro de novo usuário</Text>
      <TextInput style={estilos.input} placeholder='seunome@aluno.senai.br'/>
      <TextInput style={estilos.input} placeholder='*******'/>
      <TouchableOpacity style={estilos.bt}> 
        <Text style={estilos.btTexto}> Cadastrar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.btCadastrar}>
        <Text style={estilos.textoCadastrar}>Já tem uma conta?</Text>
        <Text style={estilos.textoCadastrar}>Entre aqui</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem:{
    width: 280,
    height:70,
    alignSelf:'center',
    marginBottom:36
  },
  input:{
    width:300,
    padding:10,
    borderColor:'#ccc',
    borderWidth:1,
    marginBottom:10,
  },
  titulo:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:35
  },
  bt:{
    backgroundColor:'#000',
    width:150,
    height: 30,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:10,
  },
  btTexto:{
  color:'#fff',
  fontWeight:'bold',
  },
  textoCadastrar:{
    fontSize:15,
    fontWeight:'600',
    color:'#8c8b8b',
    textAlign: 'center',
    letterSpacing: 0.15
  }
});
