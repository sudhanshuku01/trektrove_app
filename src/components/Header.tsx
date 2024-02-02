import React from 'react'
import { StyleSheet, Text, View ,Image,StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Header = () => {
  return (
    <>
   {/* 
    head background
    "#d1edee" "#05a3ad"
    App head
    #f8f3f6
    Heading and Paragraph

   
   */}
    <StatusBar
        animated={true}
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
       <LinearGradient
         colors={["#d1edee","#05a3ad"]} 
         start={{ x: 1, y: 0 }}
         end={{ x: 0, y: 1}}
        style={styles.header}>
        <Text style={styles.header_text}>TrekTripper</Text>
      </LinearGradient>
    </>
  )
}

export default Header

const styles = StyleSheet.create({
  header:{
   padding:30,
   borderBottomRightRadius:200
  },
  header_text:{
    fontSize:25,
    color:'#f8f3f6',
    fontFamily:'Poppins-ExtraBold'
  }
})