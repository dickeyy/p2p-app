import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Pressable } from 'react-native';

const HomeScreen = ({ navigation }) => {
  
  return (
    
    <View style={styles.container}>
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

    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },  

  headerText: {
    color: '#fff', 
    fontSize: 30,
    fontWeight: "700",
  },

  spacer1: {
    height: 10
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

});
