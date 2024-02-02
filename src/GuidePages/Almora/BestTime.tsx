import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BestTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Time to Visit</Text>

      <Text style={styles.heading}>Best time to Visit Almora | Best time to explore Almora</Text>

      <Text style={styles.paragraph}>
        Almora, a picturesque hill town nestled in the Indian state of Uttarakhand, offers a delightful retreat to nature lovers and those seeking tranquility amidst the majestic Himalayas. The best time to visit Almora is during the months of March to June and September to November. During these periods, the weather in Almora is pleasant and favorable for outdoor activities and sightseeing.
      </Text>

      <Text style={styles.paragraph}>
        Springtime, from March to June, is a popular season to visit Almora as the weather remains pleasant with temperatures ranging from 15 to 30 degrees Celsius. The region comes alive with vibrant flowers, blooming orchards, and lush greenery. The cool and refreshing breeze, along with clear skies, enhances the charm of exploring Almora's natural beauty. This is an excellent time for trekking, nature walks, and visiting nearby attractions such as Kasar Devi Temple and Binsar Wildlife Sanctuary.
      </Text>

      <Text style={styles.paragraph}>
        The post-monsoon season, from September to November, is another ideal time to visit Almora. The monsoon rains breathe new life into the surroundings, painting the hills with shades of green. The weather gradually becomes cooler, and the misty mornings add a touch of mystique to the landscape. Temperatures range from 10 to 25 degrees Celsius, creating a pleasant ambiance for exploring Almora's cultural heritage, including ancient temples and the famous Almora Bazaar.
      </Text>

      <Text style={styles.paragraph}>
        It is important to note that Almora experiences harsh winters from December to February, with temperatures dropping below freezing point. While some travelers may enjoy the serene snow-covered landscapes and winter sports like skiing, it may not be an ideal time for everyone, especially those unaccustomed to extreme cold weather.
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
  heading: {
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: 'Raleway-Bold',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

export default BestTime;
