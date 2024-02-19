import React from 'react';

import khumbmela_IMG from '../images/festival/khumbmela.jpg';
import basantpanchami_IMG from '../images/festival/basantpanchami.jpg';
import harela_IMG from '../images/festival/harela-festival.jpg';
import holi_IMG from '../images/festival/holi.jpg';
import makarsankranti_IMG from '../images/festival/makarsankranti.jpg';

interface FestivalObjType {
  name: string;
  description: string;
  image: ImageProps;
  readmoreurl: string;
}
const UttarakhandFestivals = [
  {
    name: 'Kumbh Mela',
    description:
      'Undoubtedly one of the grandest celebrations globally, Kumbh Mela in Uttarakhand is a colossal congregation of pilgrims. Held every 12 years in Haridwar, this monumental event involves a ritualistic dip in the sacred Ganga to cleanse oneself of sins.',
    image: khumbmela_IMG,
    readmoreurl: 'https://en.wikipedia.org/wiki/Kumbh_Mela',
  },
  {
    name: 'Basant Panchami',
    description:
      'A vibrant celebration marking the arrival of Spring, Basant Panchami in Uttarakhand is a visual spectacle. The locals dress in hues of yellow, engage in traditional dances like Chounphula and Jhumelia, and fill the skies with colorful kites.',
    image: basantpanchami_IMG,
    readmoreurl: 'https://en.wikipedia.org/wiki/Basant_Panchami',
  },
  {
    name: 'Bhitauli and Harela',
    description:
      'These festivals in Uttarakhand are closely tied to nature. Harela, observed in July-August, symbolizes the onset of the monsoon season and is accompanied by rituals related to agriculture. Bhitauli, celebrated in March-April, involves women sowing seeds and receiving gifts from their brothers.',
    image: harela_IMG,
    readmoreurl: 'https://en.wikipedia.org/wiki/Harela',
  },
  {
    name: 'Holi',
    description:
      'While Holi is celebrated across India, Uttarakhand has its unique traditions. Holika Dahan is replaced by rituals involving ears of grains, and the festivities include Mahila Holi, Khadi Holi, and Baithiki Holi, each with its distinctive cultural significance.',
    image: holi_IMG,
    readmoreurl: 'https://en.wikipedia.org/wiki/Holi',
  },
  {
    name: 'Makar Sankranti',
    description:
      'This festival in Uttarakhand not only marks the change of season but also involves worshiping the sun at sunrise and indulging in traditional delicacies like Khichdi and til ke laddoo.',
    image: makarsankranti_IMG,
    readmoreurl: 'https://en.wikipedia.org/wiki/Makar_Sankranti',
  },
  {
    name: 'Kale Kauva or Ghughutiya',
    description:
      'An intriguing celebration during Makar Sankranti, locals prepare sweets shaped like knives and swords, feeding them to crows and migratory birds.',
    image: khumbmela_IMG,
    readmoreurl:
      'https://www.nativeplanet.com/uttarakhand/travel-guide/kale-kauva-ghughutiya-celebration-in-uttarakhand-004215.html',
  },
  {
    name: 'Phool Dei',
    description:
      'A beautiful festival celebrating harvest and the arrival of spring, Phool Dei involves young girls blessing homes with flowers and rice, fostering a sense of community and goodwill.',
    image: khumbmela_IMG,
    readmoreurl:
      'https://www.nativeplanet.com/uttarakhand/travel-guide/phool-dei-festival-004283.html',
  },
  {
    name: 'Ganga Dusshera',
    description:
      'Spanning ten days, this festival in Uttarakhand commemorates the descent of the holy river Ganga. Devotees take a dip in the river, believing it purifies them of sins.',
    image: khumbmela_IMG,
    readmoreurl:
      'https://www.nativeplanet.com/uttarakhand/travel-guide/ganga-dussehra-festival-004216.html',
  },
  {
    name: 'Kandali',
    description:
      'Celebrated by the Rung tribe, Kandali festival is a week-long affair that marks the flowering of the Kandali flower once every 12 years. It involves rituals, worship, and recreating scenes of historical significance.',
    image: khumbmela_IMG,
    readmoreurl:
      'https://www.nativeplanet.com/uttarakhand/travel-guide/kandali-festival-004214.html',
  },
  {
    name: 'Vat Savitri',
    description:
      "A festival where married women fast for their husbands' well-being, offering prayers to Savitri and a sacred banyan tree.",
    image: khumbmela_IMG,
    readmoreurl: 'https://en.wikipedia.org/wiki/Vat_Savitri_Vrat',
  },
  {
    name: 'Purnagiri Mela',
    description:
      'An annual sacred festival commemorating Goddess Sati, held at the revered Purnagiri Temple, spanning two months.',
    image: khumbmela_IMG,
    readmoreurl:
      'https://www.nativeplanet.com/uttarakhand/travel-guide/purnagiri-mela-004282.html',
  },
  {
    name: 'Syalde Bikhauti Mela',
    description:
      'A fascinating fair held in Dwarahat, involving folk dances, songs, and a ritual of striking a stone to commemorate ancient events.',
    image: khumbmela_IMG,
    readmoreurl:
      'https://www.nativeplanet.com/uttarakhand/travel-guide/syalde-bikhauti-mela-004281.html',
  },
  {
    name: 'Ghee Sankranti',
    description:
      'Expressing gratitude for a bountiful harvest season, Ghee Sankranti involves the exchange of presents, including axes and ghee.',
    image: khumbmela_IMG,
    readmoreurl:
      'https://www.nativeplanet.com/uttarakhand/travel-guide/ghee-sankranti-004280.html',
  },
  {
    name: 'Hill Jatra',
    description:
      'A festival associated with the plantation of paddy, Hill Jatra involves sacrifices, traditional dances like Chanchari, and vibrant cultural expressions.',
    image: khumbmela_IMG,
    readmoreurl:
      'https://www.nativeplanet.com/uttarakhand/travel-guide/hill-jatra-004279.html',
  },
  {
    name: 'Kanwar Yatra',
    description:
      'A sacred pilgrimage journey to the banks of the Ganga, where devotees carry sacred water to Shiva temples, showcasing unwavering devotion.',
    image: khumbmela_IMG,
    readmoreurl: 'https://en.wikipedia.org/wiki/Kanwar_Yatra',
  },
  {
    name: 'Bissu Mela',
    description:
      "Celebrated by the Jaunsari tribe, Bissu Mela is a week-long affair expressing love and affection to 'Santoora Devi,' showcasing cultural diversity.",
    image: khumbmela_IMG,
    readmoreurl:
      'https://www.nativeplanet.com/uttarakhand/travel-guide/bissu-mela-004278.html',
  },
  {
    name: 'Nanda Devi Raj Jat Yatra',
    description:
      "Known as the 'Himalayan Mahakumbh,' this sacred yatra spans over 280 km and takes almost 22 days to complete, involving devotees from both the Garhwal and Kumaon regions.",
    image: khumbmela_IMG,
    readmoreurl: 'https://en.wikipedia.org/wiki/Nanda_Devi_Raj_Jat',
  },
  {
    name: 'Magh Mela',
    description:
      'A religious fair held in Uttarkashi during January, exhibiting local produce and handicrafts, with significant cultural importance.',
    image: khumbmela_IMG,
    readmoreurl:
      'https://www.nativeplanet.com/uttarakhand/travel-guide/magh-mela-004277.html',
  },
  {
    name: 'Uttarayani Mela',
    description:
      'Held in the Kumaon region during Makar Sankranti, this festival involves cultural heritage displays and the purchase of local produce.',
    image: khumbmela_IMG,
    readmoreurl:
      'https://www.nativeplanet.com/uttarakhand/travel-guide/uttarayani-mela-004276.html',
  },
  {
    name: 'Egaas',
    description:
      'Celebrated 11 days after Diwali, Egaas involves cooking delicacies, performing folk dances, and illuminating homes.',
    image: khumbmela_IMG,
    readmoreurl:
      'https://www.nativeplanet.com/uttarakhand/travel-guide/egaas-festival-004274.html',
  },
  {
    name: 'Bagwal Fair',
    description:
      'Coinciding with Raksha Bandhan, this fair involves prayers to Goddess Varahi, prasad distribution, and a unique stone-throwing ritual, attracting devotees from neighboring regions.',
    image: khumbmela_IMG,
    readmoreurl:
      'https://www.nativeplanet.com/uttarakhand/travel-guide/bagwal-fair-004273.html',
  },
];

import {
  TouchableOpacity,
  ScrollView,
  ImageProps,
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  FlatList,
} from 'react-native';
import {Image} from 'react-native-animatable';

const Festival = () => {
  const handleReadMorePress = (url: string) => {
    Linking.openURL(url).catch(err =>
      console.error('Error opening URL: ', err),
    );
  };
  return (
    <View style={styles.Festival}>
      <Text style={styles.head}>Explore Uttarakhand Festival</Text>
      <Text style={styles.paragraph}>
        Uttarakhand is a religious state with immense beauty. The people of
        Uttarakhand celebrate all festivals while there are numerous fairs
        organised here. The traditional rituals and folks songs of Uttarakhand
        have been kept alive by these fairs in festivals.
      </Text>
      <Text style={styles.title}>Famous Festivals</Text>
      <FlatList
        data={UttarakhandFestivals}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        contentContainerStyle={styles.flatlist}
        renderItem={({ item }) => (
          <View style={styles.cardcontainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textcontainer}>
              <Text style={styles.subtitle}>{item.name}</Text>
              <Text numberOfLines={7} style={styles.description}>
                {item.description}
              </Text>
              <TouchableOpacity onPress={() => handleReadMorePress(item.readmoreurl)}>
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
  Festival: {
    padding: 15,
  },
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

export default Festival;
