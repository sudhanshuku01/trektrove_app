import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BestTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Time to Visit</Text>
      <Text style={styles.subTitle}>Best time to Visit Ranikhet Hill Station | Best time to explore Ranikhet Hill Station</Text>

      <Text style={styles.paragraph}>
        Ranikhet, a captivating hill station located in the state of Uttarakhand, India, offers a serene and rejuvenating experience amidst the Himalayan ranges. The best time to visit Ranikhet is during the months of March to November when the weather is pleasant and favorable for exploring the town and its surrounding attractions.
      </Text>

      <Text style={styles.paragraph}>
        Springtime, from March to June, is a popular season to visit Ranikhet. During these months, the weather remains mild and pleasant, with temperatures ranging from 15 to 30 degrees Celsius. The town comes alive with blooming flowers, lush greenery, and clear skies. It is an ideal time for nature walks, hiking, and exploring nearby attractions like Chaubatia Gardens, Jhula Devi Temple, and Upat Kalika Temple. The cool and refreshing breeze adds to the charm of the picturesque landscapes.
      </Text>

      <Text style={styles.paragraph}>
        The monsoon season, from July to September, brings moderate to heavy rainfall to Ranikhet. While some travelers may enjoy the misty ambiance and the lush green surroundings during this time, it is important to be prepared for occasional showers and muddy trails. The temperature during monsoon ranges from 20 to 25 degrees Celsius. If you don't mind the rain, you can experience the tranquil beauty of Ranikhet in a quieter atmosphere and at discounted rates.
      </Text>

      <Text style={styles.paragraph}>
        The post-monsoon season, from October to November, offers a pleasant climate with clear skies and a moderate temperature ranging from 15 to 25 degrees Celsius. The landscapes are rejuvenated after the rains, displaying vibrant hues of green. This time is perfect for sightseeing, exploring Ranikhet's colonial-era architecture, and enjoying the panoramic views of the Himalayan peaks.
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
  subTitle: {
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
