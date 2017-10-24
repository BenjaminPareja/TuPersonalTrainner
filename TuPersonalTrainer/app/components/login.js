import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    Button,
    View,
    TextInput,
    TouchableOpacity
  } from 'react-native';
  

class login extends Component {
    render() {
        return (
        <View style={styles.container}>
           <View style={styles.imageContainer}>
           <Image
           style={styles.image}
           source={require('../resources/images/logo.png')}
           />
           </View>
           <TextInput
           placeholder= "Correo Electronico"
           style={styles.input}
           />
           <TextInput
           placeholder= "Contraseña"
           secureTextEntry
           style={styles.input}
           /> 
           <TouchableOpacity style={styles.buttonContainer}>
           <Text style={styles.buttonText}>ACCEDER</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.facebookContainer}>
           <Text style={styles.buttonText}>ACCEDER CON FACEBOOK</Text>
           </TouchableOpacity>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3498db',
      padding: 20
    }, 
    imageContainer:{
        alignItems: 'center',
        flexGrow:1,
        justifyContent:'center'
    },
    image:{
        width: 200,
        height:200
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom:20,
        color:'#FFF',
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroundColor:"#1abc9c",
        paddingVertical: 10
    },
    facebookContainer:{
        backgroundColor:"#2980b9",
        marginTop:15,
        paddingVertical: 10
    }

  });
export default login;