import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {useAuth} from '../Context/Authcontext';
import {NetworkContext} from '../Context/NetworkProvider';
import Header from '../components/Header';
import user_IMG from '../images/Others/defalutukimg.jpg';

import {Image} from 'react-native-animatable';
import next_IMG from '../images/Others/arrowhead.png';
import axios from 'axios';

const AvtarImages = [user_IMG, user_IMG, user_IMG, user_IMG, user_IMG];
const Guest = () => {
  const [auth, setAuth] = useAuth();
  const {isConnected} = useContext(NetworkContext);
  const [fetching, setFetching] = useState(false);
  const [imgindex, setImgindex] = useState(0);

  const handlenext = () => {
    const newIndex = imgindex + 1;
    if (newIndex >= AvtarImages.length) {
      setImgindex(0);
    } else {
      setImgindex(newIndex);
    }
  };
  const handlecreataccount =async () => {
    try {

      const formdata=new FormData();
    //   formdata.append('profilePicture')
      const response=await axios.post('https://backend-t-u090.onrender.com/auth/guest-account',)
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <View style={styles.guest}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Create Guest Account</Text>
        <Text style={styles.avtext}>Choose Your Avtar</Text>
        <View style={styles.imageview}>
          <Image style={styles.mainimage} source={AvtarImages[imgindex]} />
          <TouchableOpacity style={styles.nexttouchable} onPress={handlenext}>
            <Image style={styles.nexticon} source={next_IMG} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handlecreataccount} style={styles.button}>
          <Text style={styles.buttonText}>Create Guest Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  guest: {},
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 23,
  },
  avtext: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 19,
    marginTop: 20,
    marginBottom: 8,
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  imageview: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainimage: {
    height: 150,
    width: 150,
    borderRadius: 80,
    objectFit: 'cover',
  },
  nexticon: {
    height: 40,
    width: 40,
    tintColor: '#4d05ab',
    objectFit: 'cover',
  },
  nexttouchable: {
    backgroundColor: '#05a3ad',
    borderRadius: 50,
    padding: 5,
    marginLeft: 15,
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
});

export default Guest;
