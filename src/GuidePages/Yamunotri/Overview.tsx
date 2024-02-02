import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overview = () => {
  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>Yamunotri Overview</Text>

      <Text style={styles.paragraph}>
        Yamunotri Dham is one of the four sacred sites, collectively known as Chota Char Dham, which are located in the Indian state of Uttarakhand. It is located at an elevation of 3,293 meters in the western region of the Garhwal Himalayas. Yamunotri is the source of the Yamuna River, which is considered sacred by Hindus.
      </Text>

      <Text style={styles.paragraph}>
        The temple of Yamunotri is dedicated to goddess Yamuna and is located near the Yamuna River. The temple opens on the auspicious day of Akshaya Tritiya (usually falls in April or May) and closes on the day of Yama Dwitiya (the second day after Diwali). The temple receives a large number of pilgrims during the summer months from May to June and in the winter months from October to November.
      </Text>

      <Text style={styles.paragraph}>
        The trek to Yamunotri is a popular pilgrimage route and is accessible from the town of Janki Chatti. The trek is approximately 6 kilometers long and takes around 4-5 hours to complete. The route is surrounded by beautiful scenery, including snow-capped mountains, rivers, and lush green forests.
      </Text>

      <Text style={styles.paragraph}>
        The trek is moderately difficult, with a gradual incline for most of the route. The last 1 km of the trek involves a steep climb, which can be challenging for some trekkers. However, the breathtaking views of the surrounding mountains and the Yamuna River make the trek worthwhile.
      </Text>

      <Text style={styles.heading}>Activities to do near Yamunotri Trek | Things to do Yamunotri Trek</Text>

      <Text style={styles.paragraph}>
        - Visit the Yamunotri Temple: The Yamunotri Temple is a popular pilgrimage destination and a must-visit attraction in the region. It is dedicated to Goddess Yamuna and attracts thousands of visitors every year.
      </Text>

      <Text style={styles.paragraph}>
        - Trekking: Yamunotri is a great trekking destination with beautiful trails that offer spectacular views of the surrounding mountains and valleys. You can explore the region on foot and enjoy the natural beauty of the area.
      </Text>

      <Text style={styles.paragraph}>
        - Camping: Camping is a popular activity near Yamunotri. There are several campsites available in the area, where you can spend the night in the midst of nature.
      </Text>

      <Text style={styles.paragraph}>
        - Sightseeing: There are several other attractions near Yamunotri, such as the Hanuman Chatti, Janki Chatti, and Kharsali. You can also visit the nearby villages and interact with the locals to learn about their culture and way of life.
      </Text>

      <Text style={styles.paragraph}>
        - Wildlife Safari: You can take a wildlife safari to the Govind Pashu Vihar National Park, which is home to a wide range of wildlife, including snow leopards, musk deer, and Himalayan black bears.
      </Text>

      <Text style={styles.paragraph}>
        - Rafting: The Yamuna River is a popular destination for rafting enthusiasts. You can take a rafting trip and experience the thrill of the rapids while enjoying the beautiful scenery.
      </Text>

      <Text style={styles.paragraph}>
        - Photography: The natural beauty of the region makes it a paradise for photographers. You can capture some stunning shots of the landscape, flora, and fauna.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
});

export default Overview;
