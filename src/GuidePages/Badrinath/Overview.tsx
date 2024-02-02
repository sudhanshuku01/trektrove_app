import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Badrinath Dham Overview</Text>

      <Text style={styles.paragraph}>
        At an elevation of 3100m above sea level, Badrinath Temple dedicated to Lord Vishnu is situated in the Garhwal Himalayas, on the bank of the Holy River Alaknanda in Chamoli District of Uttarakhand State. Badrinath Temple or Badrinath Dham is one of Char Dham – Four Main Pilgrimage Sites of India established by Guru Adi Shankaracharya in the ninth century. Badrinath temple is one of the most pious and most visited Hindu Pilgrimages in Uttarakhand state. The one-meter-tall black stone statue of Lord Vishnu in Badri Vishal is considered as one of the eight self-manifested statues of Vishnu. The black stone is Shaligram- Hindu devotees believe Shaligram to be Lord Vishnu, as they believe Pipal tree, Tulashi herb, and Kush shrub as the form of Lord Vishnu. According to the story, pure woman Brinda cursed Lord Vishnu for his mischief towards her. The story of Swosthani states that Lord Vishnu attired in the form of Brinda’s husband Jalandhar and kept a physical relation with her to help Lord Shiva kill Jalandhar. When Brinda realized that the person who slept with her last night was not her husband Jalandhar but Lord Vishnu attired as Jalandhar, Brinda cursed Lord Vishnu that he should live as stone, tree, herb, and shrub. Thus, to purify, Lord Vishnu took the form of Shaligram, Peepal, Tulashi, and Kush, which Hindu devotees consider sacred and worship till date.
      </Text>

      <Text style={styles.paragraph}>
        Badrinath Dham is one of the popular Pilgrimage sites among devotees and Travelers; around lakhs of people visit every year to take blessings from Lord Vishnu. Not only as a Pilgrimage site but also for the beautiful Badrinath valley with the Holy River flowing by the side and snow-capped Himalayan Peaks around attracts many travelers to explore this paradise on earth – “Shri Badrinath Dham”. This place is famous among those who love to meditate in between nature and spiritual vibes around without any disturbance. Badrinath Dham remains open for only six months in a year from April end to mid-November and remains closed in winters due to extreme weather conditions and heavy snowfall in Badrinath Valley.
      </Text>

      <Text style={styles.heading}>Activities to do near Badrinath Dham | Things to do near Badrinath Dham</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Trekks near Badrinath Dham:</Text> If you love to do some adventure in the Himalayas, add some of the famous trek routes in your journey, some of them are Satopanth Trek, Vasudhara Fall Trek, Valley of Flowers Trek, Ghangharia Village Trek, Hemkund Sahib Trek, and many more. Explore nature, Himalayan vegetation, and panoramic views of snow-capped Himalayan Peaks in every single step in your trek journey and feel the vibes.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Pilgrimage Sites near Badrinath Dham:</Text> Add famous Pilgrimages sites in your journey to explore near Badrinath Dham and make your holidays memorable. Some of the famous Pilgrimage sites near Badrinath are Naringh Devta Temple, Hemkund Sahib Gurudwara, Hanuman Chatti Temple, Vishnu Prayag Temple, Narad Kund, Bheem Pul, Surya Kund, etc.
      </Text>

      <Text style={styles.heading}>Best Time to Visit Badrinath Dham Temple | Best time to explore Badrinath Dham Temple</Text>

      <Text style={styles.paragraph}>
        Badrinath Dham remains open for only six months in a year from April end to mid-November and remains close in winters due to extreme weather conditions and heavy snowfall in Badrinath Valley. Best Time to Visit Badrinath is in May, June, September, October, and November Month. If you are planning to visit in Monsoon season, be updated with weather and road conditions.
      </Text>

      <Text style={styles.heading}>Badrinath Travel Tips and Guidelines</Text>

      <Text style={styles.paragraph}>
        Please respect the place by refraining from alcohol and non-vegetarian food in the Holy Town of Badrinath.
      </Text>
      <Text style={styles.paragraph}>
        At an elevation of more than 3000 meters, the weather at Badrinath is always chilly no matter when you are traveling. It is advisable to carry winter warm clothes.
      </Text>
      <Text style={styles.paragraph}>
        Due to High Altitude location, make sure you are fit enough to handle sudden climate change. Changes you can see like soft water to hard water, plain region to High Himalayan regions, comfortable surroundings to hard surroundings, etc.
      </Text>
      <Text style={styles.paragraph}>
        Photography is prohibited inside the temple, especially inside sanctum sanctorum. Please follow the travel guidelines of Char Dham Yatra by the Govt. of Uttarakhand.
      </Text>
      <Text style={styles.paragraph}>
        Traveling to Uttarakhand in monsoons is a little risky as the region witnesses road blockages due to frequent landslides. Still, if you are planning, be updated with road and weather conditions.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 23,
    marginTop: 15,
    fontFamily: 'Poppins-Black',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  bold: {
    fontFamily: 'PlusJakartaSans-Bold',
  },
  heading: {
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: 'Raleway-Bold',
  },
});

export default Overview;
