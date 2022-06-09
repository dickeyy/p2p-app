import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Pressable } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const ProfileScreen = ({ navigation }) => {
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

    <ScrollView style={styles.container}>

      <StatusBar style="light" />
      
      <View style={styles.header}>
        
        
      </View>

      <View style={styles.body}>

        <Image style={styles.profilePicture} source={require('../assets/user.png')} />

        <Text style={styles.username}>@username</Text>

        <View
          style={{
            borderBottomColor: '#2d2d2d',
            borderBottomWidth: 3,
            top: 270,
            alignSelf: 'stretch',
          }}
        /> 
          
        <View style={styles.settingsCatContainer}>
          <Pressable style={styles.headScanIconBtn} onPress={() => {navigation.navigate('Settings_Profile')}}>
            
            <Text style={styles.settingsLabel}>Profile</Text>
          
            <Image style={styles.settingViewIcon} source={require('../assets/right-arrow.png')} />
          </Pressable>

        </View>

        <View style={styles.spacer2} />

        <View style={styles.settingsCatContainer}>
          <Pressable style={styles.headScanIconBtn} onPress={() => {navigation.navigate('Settings_Account')}}>

            <Text style={styles.settingsLabel}>Account</Text>
          
            <Image style={styles.settingViewIcon} source={require('../assets/right-arrow.png')} />
          </Pressable>

        </View>

        <View style={styles.spacer2} />

        <View style={styles.settingsCatContainer}>
          <Pressable style={styles.headScanIconBtn} onPress={() => {navigation.navigate('Settings_BankAccounts')}}>

            <Text style={styles.settingsLabelBank}>Bank Accounts</Text>
          
            <Image style={styles.settingViewIcon} source={require('../assets/right-arrow.png')} />
          </Pressable>

        </View>

        <View style={styles.spacer2} />

        <View style={styles.settingsCatContainer}>
          <Pressable style={styles.headScanIconBtn} onPress={() => {navigation.navigate('Settings_Security')}}>

            <Text style={styles.settingsLabel}>Security</Text>
          
            <Image style={styles.settingViewIcon} source={require('../assets/right-arrow.png')} />
          </Pressable>

        </View>

        <View style={styles.spacer2} />

        <View style={styles.settingsCatContainer}>
          <Pressable style={styles.headScanIconBtn} onPress={() => {navigation.navigate('Settings_Notifications')}}>

            <Text style={styles.settingsLabel}>Notifications</Text>
          
            <Image style={styles.settingViewIcon} source={require('../assets/right-arrow.png')} />
          </Pressable>

        </View>

        <View style={styles.spacer2} />
        <View style={styles.spacer2} />
        <View style={styles.spacer2} />


        <View style={styles.settingsCatContainerSignOut}>
          <Pressable style={styles.headScanIconBtn} >

            <Text style={styles.settingsLabelSignOut}>Sign Out</Text>
          
          </Pressable>

        </View>

        <View style={styles.spacer2} />

        

      </View>

    </ScrollView>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },

  header: {
    height: 20,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    top: 60
  },  

  body: {
    flex: 2,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 500
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
    height: 20
  },

  headUserPfpBtn: {
    position: 'absolute',
    right: 10,
  },

  headScanIcon: {
    height: 50,
    width: 50,
    position: 'absolute',
    left: 15,
    top: 10,
  },

  settingViewIcon: {
    height: 50,
    width: 50,
    position: 'absolute',
    left: 280,
    top: 20
  },

  headScanIconBtn: {
    position: 'absolute',
    left: 10
  },

  profilePicture: {
    height: 150,
    width: 150,
    position: "absolute",
    top: 60,
  },

  username: {
    color: '#9d9d9d',
    fontSize: 25,
    position: "absolute",
    top: 210
  },

  settingsCatContainer: {
    backgroundColor: 'black',
    width: 350,
    height: 90,
    top: 300,
    borderRadius: 13
  },

  settingsCatContainerSignOut: {
    backgroundColor: 'black',
    width: 350,
    height: 90,
    top: 300,
    borderRadius: 13,
    borderWidth: 3,
    borderColor: '#fc2d3b',
  }, 
  
  settingsLabelSignOut: {
    color: '#fc2d3b',
    fontSize: 40,
    top: 18,
    left: 80,
    fontWeight: '700'
  },

  settingsLabel: {
    color: 'white',
    fontSize: 40,
    top: 20,
    left: 30,
    fontWeight: '700'
  },

  settingsLabelBank: {
    color: 'white',
    fontSize: 35,
    top: 22,
    left: 30,
    fontWeight: '700'
  }

  
});
