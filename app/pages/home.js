import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Pressable } from 'react-native';

const HomeScreen = ({ navigation }) => {
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

        <Text style={styles.bodySendValue}>${srVal}</Text>

        <View style={styles.spacer2} />
        <View style={styles.spacer2} />
        <View style={styles.spacer2} />

        <View style={styles.keyboardRow}>
        
          <Pressable style={styles.keyboardNum} onPress={() => {typeNum('1')}}>
            <Text style={styles.keyboardNumText}>1</Text>
          </Pressable>

          <Pressable style={styles.keyboardNum} onPress={() => {typeNum('2')}}>
            <Text style={styles.keyboardNumText}>2</Text>
          </Pressable>

          <Pressable style={styles.keyboardNum} onPress={() => {typeNum('3')}}>
            <Text style={styles.keyboardNumText}>3</Text>
          </Pressable>
        </View>

        <View style={styles.spacer2} />

        <View style={styles.keyboardRow}>
        
          <Pressable style={styles.keyboardNum} onPress={() => {typeNum('4')}}>
            <Text style={styles.keyboardNumText}>4</Text>
          </Pressable>

          <Pressable style={styles.keyboardNum} onPress={() => {typeNum('5')}}>
            <Text style={styles.keyboardNumText}>5</Text>
          </Pressable>

          <Pressable style={styles.keyboardNum} onPress={() => {typeNum('6')}}>
            <Text style={styles.keyboardNumText}>6</Text>
          </Pressable>
        </View>

        <View style={styles.spacer2} />

        <View style={styles.keyboardRow}>
        
          <Pressable style={styles.keyboardNum} onPress={() => {typeNum('7')}}>
            <Text style={styles.keyboardNumText}>7</Text>
          </Pressable>

          <Pressable style={styles.keyboardNum} onPress={() => {typeNum('8')}}>
            <Text style={styles.keyboardNumText}>8</Text>
          </Pressable>

          <Pressable style={styles.keyboardNum} onPress={() => {typeNum('9')}}>
            <Text style={styles.keyboardNumText}>9</Text>
          </Pressable>
        </View>

        <View style={styles.spacer2} />

        <View style={styles.keyboardRow}>
        
          <Pressable style={styles.keyboardNum} onPress={() => {typeNum('.')}}>
            <Text style={styles.keyboardNumText}>. </Text>
          </Pressable>

          <Pressable style={styles.keyboardNum} onPress={() => {typeNum('0')}}>
            <Text style={styles.keyboardNumText}>0</Text>
          </Pressable>

          <Pressable style={styles.keyboardNum} onPress={() => {typeNum('<')}}>
            <Text style={styles.keyboardNumText}>&lt;</Text>
          </Pressable>

          
        </View>
        
        <View style={styles.spacer2} />

        <View style={styles.sendBtnGroup}>

              <Pressable style={styles.sendButton}>
                <Text style={styles.sendButtonText}>Send</Text>
              </Pressable>

              <Pressable style={styles.sendButton}>
                <Text style={styles.sendButtonText}>Request</Text>
              </Pressable>

        </View>

      </View>

      <View style={styles.footer}>
        <Pressable style={styles.footTransferIcon} onPress={() => {navigation.navigate('Home')}}>
          <Image style={styles.footTransferIcon} source={require('../assets/transfer-active.png')} />
          <Text style={styles.footIconLabel}>Send</Text>
        </Pressable>
        <Pressable style={styles.footBankIcon} onPress={() => {navigation.navigate('Bank')}}>
          <Image style={styles.footBankIcon} source={require('../assets/bank.png')} />
        </Pressable>
        <Pressable style={styles.footCardIcon} onPress={() => {navigation.navigate('Cards')}}>
          <Image style={styles.footCardIcon} source={require('../assets/credit-card.png')} />
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
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

  footIconLabel: {
    color: "#003AFF",
    fontSize: 20,
    fontWeight: '700',
    position: 'absolute',
    bottom: -8,
    alignSelf: 'stretch',
    left: 10
},

  bodySendValue: {
    fontSize: 90,
    color: "#003AFF",
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
    position: 'relative',
    borderColor: '#9d9d9d',
    borderWidth: 2,
    borderRadius: 13,
    width: 90,
    textAlign: 'center',
  },

  keyboardNumText: {
    color: '#9d9d9d',
    fontSize: 50,
    fontWeight: '700',
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
    justifyContent: 'space-evenly',
  }
});
