import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../Screens/Auth';

const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <ScrollView style={styles.login}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
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
          <Text style={styles.Link}>Don't have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.push("Signup")}>
            <Text style={styles.bold}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Linkview}>
          <Text style={styles.Link}>Create Guest User ?</Text>
          <TouchableOpacity onPress={() => navigation.push("Signup")}>
            <Text style={styles.bold}>Guest</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  login: {

  },
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
