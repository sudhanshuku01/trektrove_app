import React, {useContext, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../Screens/Auth';
import {useAuth} from '../Context/Authcontext';
import {NetworkContext} from '../Context/NetworkProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile = () => {
  const [auth, setAuth] = useAuth();
  const {isConnected} = useContext(NetworkContext);

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

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
    if (auth.user === null) {
      navigation.push('Login');
    }
  }, [auth, setAuth, isConnected]);

  const handleLogout= async ()=>{
    try {
      await AsyncStorage.removeItem('TrekTroveAuth');
      showToast('Logout Successfully');
      setAuth({
        user:null,
        token:"",
      })
    } catch(e) {
      console.log(e);
      showToast('Something went Wrong try after some time');
    }
  }
  
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.profile}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#d100ee', '#abf4d0']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.profilelineargradient}>
          <Text style={styles.fullname}>
            {auth.user?.firstName} {auth.user?.lastName}
          </Text>
        </LinearGradient>
        <Image
          source={{
            uri: `https://backend-t-u090.onrender.com/auth/user-picture/${auth.user?._id}`,
          }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>Username: </Text>
          <Text style={styles.desc}>{auth.user?.userName}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>Email: </Text>
          <Text style={styles.desc}>{auth.user?.email}</Text>
        </View>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutcontainer}>
          <Text style={styles.logout}>Log out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  profile: {},
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilelineargradient: {
    width: '100%',
    height: 240,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius:80,
    objectFit: 'cover',
    marginTop: -100,
  },
  fullname: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#fff',
  },
  info: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
  },
  desc: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 16,
  },
  logoutcontainer: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 12,
    elevation: 10,
    marginVertical: 40,
  },
  logout: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#fff',
  },
});

export default Profile;
