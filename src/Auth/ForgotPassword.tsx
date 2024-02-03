import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import Header from '../components/Header';
import axios from 'axios';
import Apploader from '../components/Apploader';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../Screens/Auth';

const ForgotPassword = () => {
  const [fetching, setFetching] = useState(false);
  const [emailorUsername, setEmailorUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailverified, setEmailverified] = useState(false);
  const navigation =
  useNavigation<NativeStackNavigationProp<AuthStackParamList>>();


  const handleEmailVerify = async () => {
    if (emailorUsername.trim().length < 1) {
      showToast('Email or Username is required');
      return;
    } 
    try {
      setFetching(true);
      const response = await axios.post(
        'https://backend-t-u090.onrender.com/auth/email-check',
        {
          emailorUsername: emailorUsername,
        },
      );
      if (response && response.data.success) {
        showToast('user found successfully now update your password');
        setEmailverified(true);
      } else {
        showToast(response.data.message);
      }
    } catch (error) {
      console.log(error);
      showToast('something went wrong try after some time');
    } finally {
      setFetching(false);
    }
  };

  const updatePassword = async () => {
    if (password.trim().length < 1 || confirmPassword.trim().length < 1) {
      showToast('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      showToast('passwords do not match');
      return;
    }
    try {
      setFetching(true);
      const response = await axios.post(
        'https://backend-t-u090.onrender.com/auth/update-password',
        {
          emailorUsername: emailorUsername,
          password: password,
          confirmPassword: confirmPassword,
        },
      );
      if (response && response.data.success) {
        showToast('password updated successfully');
        navigation.replace('Login');
      } else {
        showToast(response.data.message);
      }
    } catch (error) {
      console.log(error);
      showToast('something went wrong');
    } finally {
      setFetching(false);
    }
  };

  const showToast = (msg: string) => {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      0,
      30,
    );
  };
  console.log(emailorUsername);
  console.log(emailverified);
  return (
    <View style={styles.forgotpassword}>
      <Header />
      {fetching && <Apploader />}
      {emailverified ? (
        <View style={styles.container}>
          <Text style={styles.title}>Update Your Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={updatePassword}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Forgot Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email or username"
            keyboardType="default"
            value={emailorUsername}
            onChangeText={setEmailorUsername}
          />
          <TouchableOpacity style={styles.button} onPress={handleEmailVerify}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  forgotpassword: {
    backgroundColor: '#ffffff',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Bold',
  },
});

export default ForgotPassword;
