import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Pressable, ScrollView } from 'react-native';

const CardsPage = ({ navigation }) => {
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

        <Text style={styles.bodyH1}>Your Mirky Card</Text>

        <View style={styles.mirkyCard}>
            <Text style={styles.mirkyCardTextSmall}>Your Name</Text>
			<Text style={styles.mirkyCardNumber}>1234  5678  9012  3456</Text>
			<Text style={styles.mirkyCardExp}>Exp: 01/30</Text>
			<Text style={styles.mirkyCardCVV}>CVV: 123</Text>
        </View>

		<View style={styles.mirkyPoints}>
      
		</View>

      </View>

      
		  <View style={styles.footer}>
        <Pressable style={styles.footTransferIcon} onPress={() => {navigation.navigate('Home')}}>
          <Image style={styles.footTransferIcon} source={require('../assets/transfer.png')} />
        </Pressable>
        <Pressable style={styles.footBankIcon} onPress={() => {navigation.navigate('Bank')}}>
          <Image style={styles.footBankIcon} source={require('../assets/bank.png')} />
        </Pressable>
        <Pressable style={styles.footCardIcon} onPress={() => {navigation.navigate('Cards')}}>
          <Image style={styles.footCardIcon} source={require('../assets/credit-card-active.png')} />
          <Text style={styles.footIconLabel}>Cards</Text>
        </Pressable>
		{/* <Pressable style={styles.footPointIcon} onPress={() => {navigation.navigate('Cards')}}>
          <Image style={styles.footPointIcon} source={require('../assets/points.png')} />
        </Pressable> */}
		
      </View>
	  </SafeAreaView>
	


    
  );
}

export default CardsPage

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
    left: 20
  },

  footIconLabel: {
    color: "#003AFF",
    fontSize: 20,
    fontWeight: '700',
    position: 'absolute',
    bottom: -8,
    alignSelf: 'stretch',
    left: -15
},

  footCardIcon: {
    height: 60,
    width: 60,
    position: 'absolute',
    right: 20,
    bottom: 10,
  },

  footPointIcon: {
	height: 60,
    width: 60,
    position: 'absolute',
    right: 30,
    bottom: 10,
  },

  bodyH1: {
    color: 'white',
    fontSize: 35,
    fontWeight: '700',
    position: 'absolute',
    left: 30,
    top: 10,
  },

  mirkyCard: {
    height: 225,
    alignSelf: 'stretch',
    position: 'absolute',
    right: 20,
    left: 20,
    top: 70,
    backgroundColor: 'black',
    borderRadius: 13,
  },

  mirkyCardTextSmall: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17,
    top: 90,
    left: 30
  },

  mirkyCardNumber: {
	  color: 'white',
	  top: 100,
	  left: 30,
	  fontSize: 25,
	  fontWeight: '800'
  },

  mirkyCardExp: {
	  color: 'white',
	  top: 110,
	  left: 240,
	  fontSize: 15,
	  fontWeight: '700'
  },

  mirkyCardCVV: {
	color: 'white',
	top: 93,
	left: 30,
	fontSize: 15,
	fontWeight: '700'
  },

  mirkyPoints: {
	  backgroundColor: 'black',
	  height: 280,
	  alignSelf: 'stretch',
	  right: 20,
		left: 20,
		position: 'absolute',
		top: 330,
		borderRadius: 13
  }

  
});
