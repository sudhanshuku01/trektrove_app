import {
  FlatList,
  Image,
  ImageProps,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import kafuli_IMG from '../images/food/kafuli.jpg';
import bhangkichutney_IMG from '../images/food/bhangkichatni.jpg';
import garhwalkafannah_IMG from '../images/food/garhwalkafannah.jpg';
import phaanu_IMG from '../images/food/phannu.jpg';
import baadi_IMG from '../images/food/badi.jpg';
import kandaleekasaag_IMG from '../images/food/kafuli.jpg';
import chainsoo_IMG from '../images/food/chainsoo.jpg';
import kumaoniraita_IMG from '../images/food/kumaoniraita.jpg';
import dubuk_IMG from '../images/food/dubuk.jpg';
import jhangorakikheer_IMG from '../images/food/jhangorekikheer.jpg';
import gulgula_IMG from '../images/food/gulgula.jpg';
import arsa_IMG from '../images/food/arsa.jpeg';
import ras_IMG from '../images/food/ras.jpg'
import singori_IMG from '../images/food/singori.jpg';
import aloogutuk_IMG from '../images/food/alookegutke.jpg';
import alookajhol_IMG from '../images/food/alookegutke.jpg';


interface FoodItem {
  name: string;
  description: string;
  image: ImageProps;
  url: string;
}

const foodItems: FoodItem[] = [
  {
    name: 'Kafuli',
    description:
      'This dish is a boon for all the diet-conscious people out there. Yes, it is actually that nutritious. Kafuli is a famous food of Uttarakhand prepared of Spinach and fenugreek leaves. This exotic dish is prepared in an iron kadhai and complemented by hot steaming rice. It is the most nourishing and health-conscious dish you will come across in the state.',
    image: kafuli_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/kafuli',
  },
  {
    name: 'Bhang Ki Chutney',
    description:
      'We are not kidding! There is chutney made in Uttarakhand that is actually bhang ki chutney. It simply enhances the taste of every other cuisine and its fresh aroma and tangy taste will linger in your mouth long after you have consumed it. It is prepared of Hemp Seeds which provides it with the characteristic aroma. Already feel your mouth-watering?',
    image: bhangkichutney_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/bhang-ki-chutney',
  },
  {
    name: 'Garhwal ka Fannah',
    description:
      'This heavenly Uttarakhand food is a staple of Mussoorie and is good enough to satiate both your eyes and stomach. It happens to be one of those dishes that will simply leave you craving for more. Since it is so divine in its taste and aroma, Garhwal Ka Fannah has become a must food item in the menu card for every occasion that takes place in Uttarakhand.',
    image: garhwalkafannah_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/garhwal-ka-fannah',
  },
  {
    name: 'Phaanu',
    description:
      'Phaanu is a dish that is famous mostly in the Garhwal region of Uttarakhand. It is rather complicated to prepare since it is made by mixing lentils of different varieties that are soaked in water overnight. It is a kind of soupy dish, served mostly with rice. The unique flavour of Phaanu will definitely be a treat for your taste buds!',
    image: phaanu_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/phaanu',
  },
  {
    name: 'Baadi',
    description:
      'Baadi is a famous Uttarakhand food that has mesmerized locals and tourists for a long time, mainly by its lingering aroma and tangy taste. This dish is as simple as the people of Uttarakhand. It is bequeathed with all the essential nutrients that are hard to find in one dish altogether. It is abundant in Vitamin B12 and Vitamin A among others. What more can we ask for when we get nutrients and taste in a single delicacy!',
    image: baadi_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/baadi',
  },
  {
    name: 'Kandalee Ka Saag',
    description:
      'This food of Uttarakhand which is highly popular among visitors and tourists is none other than the Kandalee Ka Saag. It is a green leafy vegetable prepared in an ordinary way like all the other vegetables, but the leafy vegetable called “Bicchu Ghas” is what makes it different. Like all other dishes of Uttarakhand, this too is rich in nutrients.',
    image: kandaleekasaag_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/kandalee-ka-saag',
  },
  {
    name: 'Chainsoo',
    description:
      'If you have been to Uttarakhand, you might have heard of Chainsoo. It is a very famous Garhwal dish which is made of Urad or Kali Dal and thus consists of a lot of protein. Many people find it hard to digest, but this dish has a totally earthy flavour which is definitely worth trying. It is tasty enough to give a tough competition to Punjabi’s Maa Ki Dal!',
    image: chainsoo_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/chainsoo',
  },
  {
    name: 'Kumaoni Raita',
    description:
      'Like the Bhang ki Chutney, Kumaoni Raita is yet another dish that accompanies every other cuisine of Uttarakhand. The locals of this state can’t do without Kumaoni Raita which is prepared from curd, turmeric, and cucumber. The goodness of cucumber is an asset for your system, but the heavenly taste beats it all.',
    image: kumaoniraita_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/kumaoni-raita',
  },
  {
    name: 'Dubuk',
    description:
      'Touted as one of the best dishes of Uttarakhand, Dubuk makes the people a fan by its indescribable taste. It is a preparation of Dal and is best served with rice. You might think what’s so special about a normal delicacy prepared of Dal. Well, Dubuk is here to change your perception. Though the suitable time to eat Dubuk is during winters, who can stop you from savoring it all throughout the year.',
    image: dubuk_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/dubuk',
  },
  {
    name: 'Jhangora Ki Kheer',
    description:
      'When talking about delicacies how can we not mention the desserts! This is one famous sweet dish of Uttarakhand. Jhangora is a type of millet that is the main ingredient of this dessert. Jhangora Ki Kheer has an unforgettable taste and is a must-try after a heavy meal of the Garhwali cuisines. Its rich texture and the goodness of milk will leave you asking for more.',
    image: jhangorakikheer_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/jhangora-ki-kheer',
  },
  {
    name: 'Gulgula',
    description:
      'Yet another dish that is highly popular among tourists and visitors, Gulgula is a delectable sweet of Uttarakhand. It is a sweet local snack made of jaggery which traces its origin to the Garhwal region. This is a very common dish you will find in the State since it uses extremely basic ingredients that are available in the immediate vicinity of the local people. Gulgula has eventually found its place in the delicious desserts in many parts of Northern India.',
    image: gulgula_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/gulgula',
  },
  {
    name: 'Arsa',
    description:
      'Arsa is the most famous dessert in the Uttarakhand region. It has come to occupy a permanent place in every household in the State. This sweet dish is high on the taste meter and low on the calorie meter which makes it so hugely popular. No festival or occasion in Uttarakhand is complete without the magnanimous presence of Arsa. Do we need to say more about this one?!',
    image: arsa_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/arsa',
  },
  {
    name: 'Singori',
    description:
      'Singori, also called Singodi / Singauri, is a widely known sweet dish in Uttarakhand that’s made with Khoa, a dairy product of thickened milk which is wrapped in a Maalu leaf. It is a cone-shaped sweet savoury that’s available in Almora the Kumaon region of Uttarakhand.',
    image: singori_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/singori',
  },
  {
    name: 'Thhatwani/Ras',
    description:
      'A fine soup with a mix of rice paste, lentils stock, and pulses that are cooked in an iron vessel. The pulses are soaked in water overnight which is later boiled and cooked with herbs and masala in an iron kadhai. This high in protein dish is best served with hot steamed rice.',
    image: ras_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/thhatwani-ras',
  },
  {
    name: 'Aloo Gutuk',
    description:
      'A typical Indian dish that’s made in every household, but it wouldn’t be an exaggeration if it came to be called a regional food of Uttarakhand. Coupled with Bhang ki chutney, Pooris and Kamaoni Raita, this dish will give your soul what it needs. An effortless dish of boiled potatoes garnished with coriander and red chillies this dish is a must-try.',
    image: aloogutuk_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/aloo-gutuk',
  },
  {
    name: 'Aloo ka Jhol',
    description:
      'Jhol means ‘thin gravy’ in Hindi. Aloo ka Jhol is a potato recipe served with pooris or chapatis that has many variants. It is also called as Aloo rasedar, mathura ke dubki wale aloo, poori bhaji, poori masala and so on.',
    image: alookajhol_IMG,
    url: 'https://www.tasteofcity.com/all/uttarakhand/aloo-ka-jhol',
  },
];

const handleReadMorePress = (url:string) => {
  Linking.openURL(url).catch((err) => console.error('Error opening URL: ', err));
}; 

const Food = () => {
  return (
    <View style={styles.food}>
      <Text style={styles.head}>Explore Uttarakhand Festival</Text>
      <Text style={styles.paragraph}>Uttarakhand is a religious state with immense beauty. The people of Uttarakhand celebrate all festivals while there are numerous fairs organised here. The traditional rituals and folks songs of Uttarakhand have been kept alive by these fairs in festivals.</Text>
      <Text style={styles.title}>Famous Festivals</Text>
      <FlatList
        horizontal
        style={styles.flatlist}
        data={foodItems}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View style={styles.cardcontainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textcontainer}>
              <Text style={styles.subtitle}>{item.name}</Text>
              <Text numberOfLines={7} style={styles.description}>
                {item.description}
              </Text>
              <TouchableOpacity style={styles.readmoreclickbutton}
                onPress={() => handleReadMorePress(item.url)}>
                <Text style={styles.readmore}>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  food: {
    padding: 15,
  },
  head: {
    color: 'rgba(101, 64, 58, 1)',
    marginBottom: 10,
    fontSize: 23,
    fontFamily: 'Raleway-Bold'
  },
  paragraph:{
    fontSize: 17,
    lineHeight: 22,
    color: '#18465a',
    fontFamily: 'PlusJakartaSans-Regular',
    borderRadius: 20,
  },
  title:{
    color: 'rgba(101, 64, 58, 1)',
    fontSize: 20,
    fontFamily: 'Raleway-Bold',
    marginVertical:10,
  },
  subtitle: {
    color: 'rgba(101, 64, 58, 1)',
    fontSize: 17,
    fontFamily: 'PlusJakartaSans-Bold',
    textAlign: 'left',
    marginVertical:4,
  },
  flatlist:{

  },
  cardcontainer: {
    width: 280,
    marginRight: 25,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#eff1ee',
  },
  image: {
    height: 250,
    width: '100%',
    objectFit: 'cover',
  },
  textcontainer: {
    padding: 8,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: 'rgba(24, 70, 90, 1)',
    fontFamily: 'PlusJakartaSans-Regular',
    borderRadius: 20,
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

export default Food;
