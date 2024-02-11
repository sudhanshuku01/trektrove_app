import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-animatable';
import succ_IMG from '../images/Others/icons8-tick-100.png'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../Screens/Auth';
const Notification = () => {
  const navigation =
  useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <View style={styles.container}>
      <Image
      source={succ_IMG}
      style={styles.image}
      />
      <Text style={styles.title}>Successful Signup!</Text>
      <Text style={styles.message}>You have successfully signed up.</Text>
      <Text style={styles.message}>Please verify your email before login check your email!</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Go to login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image:{
   width:100,
   height:100,
   objectFit:'cover'
  },
  title: {
    fontSize: 24,
     fontFamily:'Poppins-Black',
    marginBottom: 20,
    textAlign: 'center',
  },
  message: {
    fontSize: 17,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily:'PlusJakartaSans-Regular'
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    elevation:10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Notification;
