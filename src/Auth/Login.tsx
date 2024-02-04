import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../Screens/Auth';
import {useAuth} from '../Context/Authcontext';
import {NetworkContext} from '../Context/NetworkProvider';
import axios from 'axios';
import Apploader from '../components/Apploader';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
  const [auth, setAuth] = useAuth();
  const {isConnected} = useContext(NetworkContext);
  const [fetching, setFetching] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const [emailoruser, setEmailoruser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!isConnected) {
      showToast('Oops🤷 No internet connection');
      return;
    }
    if (emailoruser.trim().length < 1 || password.trim().length < 1) {
      showToast('All Fields are required');
      return;
    }
    try {
      setFetching(true);
      const response = await axios.post(
        'https://backend-t-u090.onrender.com/auth/login',
        {
          emailorUsername: emailoruser,
          password: password,
        },
      );
      if (response && response.data.success) {
        const userObj = {
          user: response.data.user,
          token: response.data.token,
        };
        const jsonValue = JSON.stringify(userObj);
        await AsyncStorage.setItem('TrekTroveAuth', jsonValue);
        setAuth(userObj);
        showToast(response.data.message);
        navigation.push('Profile');
      } else {
        showToast('Something went wrong try after some time');
      }
    } catch (error) {
      console.log(error);
      showToast('Something went wrong try after some time');
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
  useEffect(() => {
    if (auth.user !== null) {
      navigation.replace('Profile');
    }
  }, [auth, setAuth, isConnected]);
  return (
    <ScrollView style={styles.login}>
      <Header />
      {fetching && <Apploader />}
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email or userName"
          onChangeText={setEmailoruser}
          value={emailoruser}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.Linkview}>
          <Text style={styles.Link}>Forgot Password ?</Text>
          <TouchableOpacity onPress={() => navigation.push('ForgotPassword')}>
            <Text style={styles.bold}>Forgot</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Linkview}>
          <Text style={styles.Link}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.push('Signup')}>
            <Text style={styles.bold}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Linkview}>
          <Text style={styles.Link}>Create Guest User ?</Text>
          <TouchableOpacity onPress={() => navigation.push('Guest')}>
            <Text style={styles.bold}>Guest</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  login: {},
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 50,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-Bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 15,
  },
  button: {
    width: '100%',
    backgroundColor: 'blue',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  Linkview: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  Link: {
    fontSize: 15,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  bold: {
    color: 'blue',
    fontFamily: 'PlusJakartaSans-Bold',
    marginHorizontal: 4,
  },
});

export default Login;
