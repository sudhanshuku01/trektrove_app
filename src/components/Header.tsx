import React from 'react'
import { StyleSheet, Text, View ,Image,StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Header = () => {
  return (
    <>
    <StatusBar
        animated={true}
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
       <LinearGradient
        colors={["#00b89f","#00b89f"]} 
         start={{ x: 1, y: 0 }}
         end={{ x: 0, y: 1}}
        style={styles.header}>
        <Text style={styles.header_text}>TrekTrove</Text>
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
    color:'#eff1ee',
    fontFamily:'Poppins-ExtraBold'
  }
})