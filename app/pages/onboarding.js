import React, { useState, useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableWithoutFeedback, SafeAreaView, Svg , Platform, KeyboardAvoidingView, TouchableHighlight, Pressable, ImageBackground, Keyboard } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

import { signUp } from '../scripts/main'

const OnboardingScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);


  return (

    
      <KeyboardAvoidingView
      behavior={"padding"}
      style={styles.container}
    >
      <StatusBar style="light" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
        <Text style={styles.h1}>Welcome to</Text>
        <Text style={styles.h1Color}>mirky</Text>

        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedHeading}>Enter your email</Text>
          <Text style={styles.getStartedHeading}>to get started</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="hello@mirky.app"
              keyboardType="email-address"
              placeholderTextColor='#8d8d8d'
              autoComplete='email'
              keyboardAppearance='dark'
              textContentType='emailAddress'
              autoCapitalize='none'
            />

            <View style={styles.formSubmit}>
              <Button stlye={styles.formSubmitBtn} title="Submit" color='white' id='5' onPress={() => {signUp(number)}}/>
            </View>

            <Text style={styles.getStartedHeading2}>By signing up you agree to our Terms and Privacy</Text>
          </View>
        </View>
      
        
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
}

export default OnboardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },

  h1: {
    color: 'white',
    fontSize: 60,
    textAlign: 'center',
    top: 100,
    fontWeight: '600'
  },

  h1Color: {
      color: '#003AFF',
      fontSize: 100,
      textAlign: 'center',
      top: 100,
      fontWeight: '800'
  },

  getStartedContainer: {
    height: 350,
    alignSelf: 'stretch',
    left: 20,
    right: 20,
    position: 'absolute',
    backgroundColor: 'black',
    top: 310,
    borderRadius: 13,

  },    

  getStartedHeading: {
    color: '#8d8d8d',
    fontSize: 20,
    top: 40,
    textAlign: 'center',
    fontWeight: '600'
  },

  getStartedHeading2: {
    color: '#8d8d8d',
    fontSize: 10,
    top: 100,
    textAlign: 'center',
    fontWeight: '600'
  },

  phoneInput: {
      color: 'white',
      textAlign: 'center',
      top: 90,
      fontSize: 30,
      fontWeight: '800',
      borderColor: '#003AFF',
      borderWidth: 3,
      width: 300,
      left: 25,
      backgroundColor: '#1d1d1d',
      height: 80,
      borderRadius: 13
  },

  header: {
    height: 60,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },  

  body: {
    flex: 2,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    height: 60,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    color: '#fff', 
    fontSize: 30,
    fontWeight: "700",
  },

  spacer1: {
    height: 10
  },

  spacer2: {
    height: 30
  },

  headUserPfp: {
    height: 40,
    width: 40,
    position: 'absolute',
    right: 10,
  },

  headUserPfpBtn: {
    position: 'absolute',
    right: 10,
  },

  headScanIcon: {
    height: 40,
    width: 40,
    position: 'absolute',
    left: 10
  },

  headScanIconBtn: {
    position: 'absolute',
    left: 10
  },

  headHistoryIconBtn: {
    position: 'absolute',
    right: 10,
  },

  headHistoryIcon: {
    height: 40,
    width: 40,
    position: 'absolute',
    right: 70,
  },

  footTransferIcon: {
    height: 60,
    width: 60,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
  },

  footBankIcon: {
    height: 50,
    width: 50,
    position: 'absolute',
    left: 20
  },

  footCardIcon: {
    height: 60,
    width: 60,
    position: 'absolute',
    right: 20,
  },

  bodySendValue: {
    fontSize: 90,
    color: "white",
    fontWeight: '700',
    position: 'absolute',
    top: 20
  },

  keyboardRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },

  keyboardNum: {
    color: 'white',
    position: 'relative',
  },

  keyboardNumText: {
    color: '#9d9d9d',
    fontSize: 50,
    fontWeight: '700',
  },

  sendButton: {
    width: 170,
    backgroundColor: "#4d4d4d",
    borderColor: '#4d4d4d',
    borderWidth: 5,
    borderRadius: 30,
    alignContent: 'center',
    alignItems: 'center',
  },

  sendButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700',
  },

  sendBtnGroup: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  input: {
    color: 'white',
    height: 60,
    margin: 15,
    borderWidth: 4,
    padding: 10,
    borderColor: '#003AFF',
    top: 50,
    fontSize: 30,
    textAlign: 'center',
    borderRadius: 13
  },

  formSubmit: {
    top: 60,
    borderColor: "#003AFF",
    borderWidth: 4,
    width: 90,
    alignSelf: 'center',
    borderRadius: 13
  },

  formSubmitBtn: {
    color: 'white'
  }
});
