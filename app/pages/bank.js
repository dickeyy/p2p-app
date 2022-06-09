import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Pressable, ScrollView, Button } from 'react-native';

import { signUp }  from '../scripts/main'

const BankPage = ({ navigation }) => {
  const [srVal, setCount] = useState('0');
  
  function typeNum(num) {
    if (num == '<' && srVal != '0') {
      
      if (srVal.length == 1) {
        setCount(0)
      } else {
        setCount(srVal.slice(0,-1))
      }
      
      
    } else if (num == '<') {
      return
      // Eventually make it shake or something
    } else if (srVal.length == 5) {
      return
    } else {
      if (srVal == '0') {
        setCount(num)
      } else {
        setCount(srVal + num)
      }
    }
  }
  return (

		<SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.spacer1} />
      {/* <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
      <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
      <View style={{ height: 20, backgroundColor: 'powderblue' }} /> */}

      <View style={styles.header}>
        <Pressable style={styles.headUserPfpBtn} onPress={() => {navigation.navigate('Profile')}}>
          <Image style={styles.headUserPfp} source={require('../assets/user.png')} />
        </Pressable>
        <Pressable style={styles.headScanIconBtn} onPress={() => {navigation.navigate('Scan')}}>
          <Image style={styles.headScanIcon} source={require('../assets/scan.png')} />
        </Pressable>
        <Pressable style={styles.headHistoryIconBtn} onPress={() => {navigation.navigate('History')}}>
          <Image style={styles.headHistoryIcon} source={require('../assets/history.png')} />
        </Pressable>
      </View>


	  
		<View style={styles.body}>

            <ScrollView>

                <View style={styles.balanceContainer}>
                  {/* Eventially make a function to fetch users balance */}
                    <Text style={styles.balance}>$0</Text>
                    
                    <View style={styles.spacer2} />
                    <View style={styles.spacer2} />

                    <View style={styles.sendBtnGroup}>

                        <Pressable style={styles.sendButton}>
                            <Text style={styles.sendButtonText}>Take Out</Text>
                        </Pressable>

                        <View style={styles.spacer3} />

                        <Pressable style={styles.sendButton}>
                            <Text style={styles.sendButtonText}>Add Funds</Text>
                        </Pressable>

                    </View>

                </View>

                <View>

                </View>

            </ScrollView>

        </View>

      
		  <View style={styles.footer}>
        <Pressable style={styles.footTransferIcon} onPress={() => {navigation.navigate('Home')}}>
          <Image style={styles.footTransferIcon} source={require('../assets/transfer.png')} />
          <Text style={styles.footIconLabel}>Bank</Text>
        </Pressable>
        <Pressable style={styles.footBankIcon} onPress={() => {navigation.navigate('Bank')}}>
          <Image style={styles.footBankIcon} source={require('../assets/bank-active.png')} />
        </Pressable>
        <Pressable style={styles.footCardIcon} onPress={() => {navigation.navigate('Cards')}}>
          <Image style={styles.footCardIcon} source={require('../assets/credit-card.png')} />
        </Pressable>
		{/* <Pressable style={styles.footPointIcon} onPress={() => {navigation.navigate('Cards')}}>
          <Image style={styles.footPointIcon} source={require('../assets/points.png')} />
        </Pressable> */}
		
      </View>
	  </SafeAreaView>
	


    
  );
}

export default BankPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },

  scroll: {
	  height:9000,
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
  },

  footBankIcon: {
    height: 50,
    width: 50,
    position: 'absolute',
    left: 20,
    bottom: 10,
  },

  footCardIcon: {
    height: 60,
    width: 60,
    position: 'absolute',
    right: 20,
  },

  footIconLabel: {
      color: "#003AFF",
      fontSize: 20,
      fontWeight: '700',
      position: 'absolute',
      bottom: -8,
      left: -122
  },

  footPointIcon: {
	height: 60,
    width: 60,
    position: 'absolute',
    right: 30,
    bottom: 10,
  },

  balance: {
      top: 30,
      fontSize: 60,
      color: '#003AFF',
      fontWeight: '800',
      textAlign: 'center'
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
    justifyContent: 'space-between',
  },

  spacer3: {
      width: 20
  }
  
});