import {
  PermissionsAndroid,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useAuth} from '../Context/Authcontext';
import {NetworkContext} from '../Context/NetworkProvider';
import Header from '../components/Header';
import {Image} from 'react-native-animatable';
import axios from 'axios';
import user_IMG from '../images/Others/userimg.png'

import {
  CameraOptions,
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../Screens/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Apploader from '../components/Apploader';

const Guest = () => {
  const [auth, setAuth] = useAuth();
  const {isConnected} = useContext(NetworkContext);
  const [fetching, setFetching] = useState(false);
  const [profilePicture, setProfilePicture] = useState<string>();

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleGuestAccount = async () => {
    if (!isConnected) {
      showToast(' Oops🤷 No internet connection ');
      return;
    }
    try {
      setFetching(true);
      const userData = new FormData();
      if (!profilePicture) {
        showToast('profile Picture is needed');
        return;
      }
      const imageUriParts = profilePicture.split('.');
      const fileType = imageUriParts[imageUriParts.length - 1];
      const file = {
        uri: profilePicture,
        type: `image/${fileType}`,
        name: `profile_picture.${fileType}`,
      };
      userData.append('profilePicture', file);
      const response = await axios.post(
        'https://backend-t-u090.onrender.com/auth/guest-account',
        userData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
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
        showToast('Something went please try after some time');
      }
    } catch (error: any) {
      if (error.response) {
        showToast(error.response.data.message);
      } else {
        console.log(error);
        showToast('something went try after sometime');
      }
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

  const openImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image picker error: ', response.errorMessage);
      } else {
        let imageUri = response.assets?.[0].uri;
        setProfilePicture(imageUri);
      }
    });
  };

  const handleCameraLaunch = async () => {
    const hascamerapermission =
      PermissionsAndroid.RESULTS.GRANTED === 'granted';
    if (!hascamerapermission) {
      showToast('no camera permission please allow');
      return;
    } else {
      await requestCameraPermission();
    }
    const options: CameraOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        console.log('Camera Error: ', response.errorMessage);
      } else {
        let imageUri = response.assets?.[0].uri;
        if (imageUri) {
          setProfilePicture(imageUri);
        }
      }
    });
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        showToast('camera permission granted successfully');
      } else {
        showToast('please allow camera for take picture');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if(auth.user !== null){
      navigation.replace('Profile')
    }
  }, [auth, setAuth, isConnected]);

  return (
    <View style={styles.guest}>
      <Header />
      {fetching && <Apploader />}
      <Text style={styles.title}>Let's Create Guest Account</Text>
      <View style={styles.container}>
        {profilePicture? (
          <Image source={{uri: profilePicture}} style={styles.profileImage} />
          ):(
          <Image source={user_IMG} style={styles.profileImage} />
        )}
        <TouchableOpacity
          style={styles.imagePickerButton}
          onPress={openImagePicker}>
          <Text style={styles.buttonText}>Choose Profile Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={handleCameraLaunch}>
          <Text style={styles.buttonText}>Take Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGuestAccount}>
          <Text style={styles.buttonText}>Create Guest Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  guest: {

  },
  title: {
    fontFamily: 'Raleway-Bold',
    fontSize: 23,
    textAlign:'center',
    marginTop:30,
  },
  container:{
    alignItems:'center',
    padding:20,
  },
  button: {
    width: '100%',
    backgroundColor: 'blue',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  imagePickerButton: {
    backgroundColor: 'green',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  cameraButton: {
    backgroundColor: 'orange',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  profileImage: {
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 100,
    objectFit: 'cover',
  },
});

export default Guest;
