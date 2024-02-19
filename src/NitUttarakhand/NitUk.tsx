import {
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import nituk_IMG from '../images/NitUk/nituk1.png';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import DropShadow from 'react-native-drop-shadow';
const NitUk = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.nituk}>
      <DropShadow
        style={{
          shadowColor: '#000123',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,
          shadowRadius: 1,
        }}>
        <View style={styles.nitukclickcontainer}>
          <TouchableHighlight onPress={() => navigation.push('NitUkDetail')}>
            <Image source={nituk_IMG} style={styles.backgroundImage} />
          </TouchableHighlight>
          <View style={styles.textcontainer}>
            <Text style={styles.text1}>Nit Uttarakhand</Text>
            <Text style={styles.text2}>
              The National Institute of Technology Uttarakhand (NIT UK) is a
              premier engineering institute in Srinagar, Uttarakhand, India,
              established in 2010. Known for its academic excellence and
              picturesque location in the Garhwal Himalayas, NIT UK emphasizes
              technology education, research, and holistic development of
              students.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.push('NitUkDetail')}
              style={styles.readmoreclickbutton}>
              <Text style={styles.readmore}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </DropShadow>
    </View>
  );
};
const styles = StyleSheet.create({
  nituk: {},
  nitukclickcontainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  backgroundImage: {
    height: 200,
    width: '100%',
    objectFit: 'cover',
  },
  textcontainer: {
    padding: 10,
    backgroundColor: '#eff1ee',
  },
  text1: {
    fontSize: 17,
    fontFamily: 'PlusJakartaSans-Bold',
    marginVertical: 5,
    color: 'rgba(101, 64, 58, 1)',
  },
  text2: {
    fontSize: 15,
    fontFamily: 'PlusJakartaSans-Regular',
    color: 'rgba(24, 70, 90, 1)',
  },
  readmoreclickbutton: {
    backgroundColor: '#b84c36',
    width: 100,
    borderRadius: 8,
    padding: 5,
    marginVertical: 15,
  },
  readmore: {
    fontSize: 16,
    textAlign: 'center',
    color: 'rgba(239, 241, 238, 1)',
  },
});

export default NitUk;
