import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import user_IMG from '../images/Others/userimg.png';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageProps,
  ImageResolvedAssetSource,
  ImageURISource,
} from 'react-native';

import {
  ImageLibraryOptions,
  CameraOptions,
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';

import {AuthStackParamList} from '../Screens/Auth';
import Header from '../components/Header';
import axios from 'axios';

const Signup = () => {
  const imageSource = Image.resolveAssetSource(user_IMG).uri;

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [profilePicture, setProfilePicture] = useState<string>(imageSource); // 

  const handleSignup =async  () => {
    
    try {
    
      const productData = new FormData();
      productData.append("username", username);
      productData.append("firstName", firstName);
      productData.append("lastName", lastName);
      productData.append("email", email);
      productData.append("password", password);
      productData.append("profilePicture", profilePicture);
     const response=await axios.post('auth/signup',productData);

    } catch (error) {
      console.log(error);
      
    }

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
        let imageUri = response.assets?.[0]?.uri;
        if (imageUri) {
          setProfilePicture(imageUri);
        }
      }
    });
  };

  const handleCameraLaunch = () => {
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
        let imageUri = response.assets?.[0]?.uri;
        if (imageUri) {
          setProfilePicture(imageUri);
        }
      }
    });
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.signup}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Signup Now</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={text => setFirstName(text)}
          value={firstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={text => setLastName(text)}
          value={lastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry={true}
        />
        {profilePicture && (
          <Image source={{uri: profilePicture}} style={styles.profileImage} />
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
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

        <View style={styles.Linkview}>
          <Text style={styles.Link}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.bold}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Linkview}>
          <Text style={styles.Link}>Create Guest User ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.bold}>Guest</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signup: {},
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

export default Signup;
