import React, { useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Pressable } from 'react-native';

export default function Footer() {
  
  return (
    
    <View style={styles.container}>

    <View style={styles.footer}>
        <Pressable style={styles.footTransferIcon} onPress={() => {navigation.navigate('Home')}}>
          <Image style={styles.footTransferIcon} source={require('../assets/transfer-active.png')} />
        </Pressable>
        <Pressable style={styles.footBankIcon} onPress={() => {navigation.navigate('Bank')}}>
          <Image style={styles.footBankIcon} source={require('../assets/bank.png')} />
        </Pressable>
        <Pressable style={styles.footCardIcon} onPress={() => {navigation.navigate('Cards')}}>
          <Image style={styles.footCardIcon} source={require('../assets/credit-card.png')} />
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
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
    }
  });
  