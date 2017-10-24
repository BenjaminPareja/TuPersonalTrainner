import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    Button,
    View,
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
           <View style={styles.buttonsContainer}>
           <TouchableOpacity style={styles.buttonContainer}>
           <Text style={styles.buttonText}>ACCEDER</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.facebookContainer}>
           <Text style={styles.buttonText}>ACCEDER CON FACEBOOK</Text>
           </TouchableOpacity>
           </View>
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
    buttonsContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height:40,
    },
    buttonContainer:{
        height:50,
        backgroundColor:"#1abc9c",
        flex: 1,
    },
    facebookContainer:{
        height:50,
        backgroundColor:"#2980b9",
        flex: 1,
    }

  });
export default login;