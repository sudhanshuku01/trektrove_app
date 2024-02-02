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
    },
    backgroundImage:{
     height:300,
     width:'100%',
     objectFit:'cover',
     borderTopLeftRadius:20,
     borderTopRightRadius:20
    },
    textcontainer:{
     padding:8,
     backgroundColor:'rgba(126,127,161,0.2)',
    },
    text1:{
     fontSize:22,
     fontFamily:'Raleway-Bold',
     marginVertical:5,
     color:'#4d6160'
    },
    text2:{
        fontSize:16,
        fontFamily:'PlusJakartaSans-Regular',
        color:'#493736',
        lineHeight:22,
    },
    readmore:{
        backgroundColor:'rgba(126,127,161,0.9)',
        fontSize:17,
        textAlign:'center',
        fontFamily:'PlusJakartaSans-Medium',
        borderRadius:8,
        paddingVertical:3,
        marginVertical:20
    }
})

export default NitUk
