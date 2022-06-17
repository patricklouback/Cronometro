import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlightBase
} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimo: null
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;

      this.setState({botao: 'VAI', ultimo: ''})
    }
    else {
      this.timer = setInterval (
        () => {this.setState({numero: this.state.numero + 0.1})}, 100);
        this.setState({botao: 'PARAR', ultimo: ''})
    }
  }

  limpar(){
    clearInterval(this.timer);
    this.setState({ 
      ultimo: this.state.numero.toFixed(1) + 's',
      numero: 0,
      botao: 'VAI'
    })

    this.timer = null;

  }

  render(){
    return(

      <View style = { estilos.container }>

        <Image 
          source = { require('./src/cronometro.png') }
          style = {estilos.img}
        />

        <Text style = { estilos.timer }>{this.state.numero.toFixed(1)}</Text>

        <View style = { estilos.btnArea }>

          <TouchableOpacity style = { estilos.btn } onPress = { this.vai }>
            <Text style = { estilos.btnTexto }>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style = { estilos.btn } onPress = { this.limpar }>
            <Text style = { estilos.btnTexto }>LIMPAR</Text>
          </TouchableOpacity>

        </View>
        <View style= { estilos.areaUltima }>

        <Text style = { estilos.textoCorrida }>
          {this.state.ultimo}
        </Text>

        </View>
      </View>

    );
  }
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -170,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  img:{
    width: 250,
    height: 300
  },

btnArea:{
    flexDirection: 'row',
    marginTop: 90,
    height: 40
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima:{
    marginTop: 40,
  },
  textoCorrida:{
    fontSize:25,
    fontStyle:'italic',
    color: '#FFF'
  }
});

export default App;