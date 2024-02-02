import {TouchableHighlight,Image,ImageProps,ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import overview_IMG from '../../images/Others/maps-flags_447031.png';
import iternerary_IMG from '../../images/Others/destination.png';
import howtoreach_IMG from '../../images/Others/car.png';
import incexc_IMG from '../../images/Others/like.png';
import besttime_IMG from '../../images/Others/smile.png'

interface GuideHeadListProps {
    active: string;
    setActive: Dispatch<SetStateAction<string>>;
    // Other props if needed
}
interface GuideType {
    name: string;
    image: ImageProps;
  }

  const Guide:GuideType[] = [
    {
      name: 'Overview',
      image: overview_IMG,
    },
    {
      name: 'Itinerary',
      image: iternerary_IMG,
    },
    {
      name: 'How To Reach',
      image: howtoreach_IMG,
    },
    {
      name: 'Inclusions & Exclusions',
      image: incexc_IMG,
    },
    {
      name: 'Best Time To Visit',
      image: besttime_IMG,
    }, 
  ];
const GuideHeadList:React.FC<GuideHeadListProps> = ({active,setActive}) => {
  return (
      <ScrollView style={styles.guidecontainer} horizontal 
      showsHorizontalScrollIndicator={false}
       >
        {Guide.map((item, index) => (
          <TouchableHighlight
            underlayColor={'rgba(126,127,161,0.8)'}
           onPress={()=>setActive(item.name)} 
           key={index}
           >
            <View  style={[{backgroundColor:item.name === active ?'rgba(126,127,161,0.8)':'rgba(126,127,161,0.1)'},styles.guide]}>
            <Image style={styles.guideimage} source={item.image}
            />
            <Text style={styles.guidetext}>{item.name}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
  )
}
const styles = StyleSheet.create({
    guidecontainer:{
    marginVertical:15,
    },
    guide:{
     alignItems:'center',
     gap:5,
     padding:2,
     marginRight:8,
     borderRadius:8 
    },
    guideimage:{
      width:30,
      height:30,
    },
    guidetext:{
      fontSize:16,
     fontFamily:'PlusJakartaSans-Bold'
    }
})

export default GuideHeadList;
