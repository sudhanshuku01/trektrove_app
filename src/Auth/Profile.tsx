import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
import user_IMG from '../images/Others/userimg.png'
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Notification from './Notification'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { AuthStackParamList } from '../Screens/Auth'
const Profile = () => {
  const navigation =
  useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <Notification/>
    // <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.profile} >
    //   <View style={styles.container}>
    //   <LinearGradient
    //      colors={["#d100ee","#abf4d0"]} 
    //      start={{ x: 1, y: 0 }}
    //      end={{ x: 0, y: 1}}
    //     style={styles.profilelineargradient}>
    //     <Text style={styles.fullname}>Sudhanshu Kushwaha</Text>
    //   </LinearGradient>
    //   <Image
    //   source={user_IMG}
    //   style={styles.image}
      
    //   />

    //   <View style={styles.info}>
    //     <Text style={styles.title}>Username: </Text>
    //     <Text style={styles.desc}>sudhasnhuku01</Text>  
    //   </View>
    //   <View style={styles.info}>
    //     <Text style={styles.title}>Email: </Text>
    //     <Text style={styles.desc}>sudhanshu620026@gmail.com</Text>  
    //   </View>
    //   <TouchableOpacity style={styles.logoutcontainer}>
    //     <Text style={styles.logout}>Log out</Text>
    //   </TouchableOpacity>
    //   </View>
    // </ScrollView>
  )
}
const styles = StyleSheet.create({
  profile:{

  },
  container:{
   justifyContent:'center',
   alignItems:'center',
  },
  profilelineargradient:{
    width:'100%',
    height:240,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:200,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
   height:150,
   width:150,
   objectFit:'cover',
   marginTop:-100
  },
  fullname:{
   fontFamily:'Poppins-Bold',
   fontSize:20,
   color:'#fff'
  },
  info:{
   marginTop:20,
   display:'flex',
   flexDirection:'row',
   alignItems:'center',
  },
  title:{
    fontFamily:'PlusJakartaSans-Bold',
    fontSize:16,
  },
  desc:{
    fontFamily:'PlusJakartaSans-Medium',
    fontSize:16,
  },
  logoutcontainer:{
     backgroundColor:'red',
     padding:15,
     borderRadius:12,
     elevation:10,
     marginVertical:40,
  },
  logout:{
    fontFamily:'Poppins-Bold',
    fontSize:16,
    color:'#fff'
  }
})

export default Profile
