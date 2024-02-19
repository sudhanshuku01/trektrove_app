import React, {useContext, useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  Alert,
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
import axios from 'axios';
import Apploader from '../components/Apploader';
const Profile = () => {
  const [fetching, setFetching] = useState(false);
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
      navigation.replace('Login');
    }
  }, [auth, setAuth, isConnected]);

  const guestDeleteAccount = async () => {
    try {
      setFetching(true);
      const response = await axios.post(
        'https://backend-t-u090.onrender.com/auth/delete-guest-user',
        {
          email: auth.user?.email,
        },
      );
      if (response && response.data.success) {
        await AsyncStorage.removeItem('TrekTroveAuth');
        showToast('Delete Account Successfully');
        setAuth({
          user: null,
          token: '',
        });
      } else {
        showToast('something went wrong try after sometime');
      }
    } catch (error: any) {
      if (error.response) {
        showToast(error.response.message);
      } else {
        showToast('something went wrong try after some time');
      }
    } finally {
      setFetching(false);
    }
  };

  const handleLogout = async () => {
    try {
      setFetching(true);
      await AsyncStorage.removeItem('TrekTroveAuth');
      showToast('Logout Successfully');
      setAuth({
        user: null,
        token: '',
      });
    } catch (e) {
      console.log(e);
      showToast('Something went Wrong try after some time');
    } finally {
      setFetching(false);
    }
  }; 

  const handleAlert = (msg:string) =>
    Alert.alert('Confirm', msg, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          if (auth.user?.GuestAccount == true) {
            await guestDeleteAccount();
          } else {
            await handleLogout();
          }
        },
      },
    ]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.profile}>
      {fetching && <Apploader />}
      <View style={styles.container}>
        <LinearGradient
          colors={['#00b89f',  '#F4C57A']}
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
        {auth.user?.GuestAccount ? (
          <TouchableOpacity
            onPress={()=>handleAlert('Confirm want to delete')}
            style={styles.logoutcontainer}>
            <Text style={styles.logout}>Delete Account</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={()=>handleAlert('Confirm want to logout')}
            style={styles.logoutcontainer}>
            <Text style={styles.logout}>Log out</Text>
          </TouchableOpacity>
        )}
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
    borderRadius: 80,
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
