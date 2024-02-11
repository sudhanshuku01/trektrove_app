import {Image,TouchableOpacity,TouchableHighlight, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import nituk_IMG from '../images/NitUk/nituk1.png'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
const NitUk = () => {
    const navigation=useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.nituk}>
      <View style={styles.nitukclickcontainer}>
            <TouchableHighlight onPress={()=>navigation.push('NitUkDetail')}>
                <Image
                source={nituk_IMG}
                style={styles.backgroundImage}
                />
            </TouchableHighlight>
            <View style={styles.textcontainer}>
                <Text style={styles.text1}>Nit Uttarakhand</Text>
                <Text style={styles.text2}>The National Institute of Technology Uttarakhand (NIT UK) is a premier engineering institute in Srinagar, Uttarakhand, India, established in 2010. Known for its academic excellence and picturesque location in the Garhwal Himalayas, NIT UK emphasizes technology education, research, and holistic development of students.</Text>
                <TouchableOpacity  onPress={()=>navigation.push('NitUkDetail')} >
                <Text style={styles.readmore}>Read More</Text>
                </TouchableOpacity>
            </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    nituk:{

    },
    nitukclickcontainer:{
      borderRadius:10,
      overflow:"hidden"
    },
    backgroundImage:{
     height:250,
     width:'100%',
     objectFit:'cover',
    },
    textcontainer:{
     padding:10,
     backgroundColor:'rgba(24, 70, 90, 1)',
    },
    text1:{
     fontSize:21,
     fontFamily:'PlusJakartaSans-Medium',
     marginVertical:5,
     color:'rgba(239, 241, 238, 1)'
    },
    text2:{
        fontSize:16,
        fontFamily:'PlusJakartaSans-Regular',
        color:'rgba(239, 241, 238, 1)',
    },
    readmore:{
        width:100,
        backgroundColor:'#b84c36',
        fontSize:15,
        textAlign:'center',
        borderRadius:8,
        padding:4,
        marginVertical:20,
        color:'rgba(239, 241, 238, 1)'
    }
})

export default NitUk
