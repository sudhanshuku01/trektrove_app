import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranikhet Hill Station – Land of the Queen</Text>

      <Text style={styles.subTitle}>One of the Best Hill Station in India</Text>

      <Text style={styles.paragraph}>
        At an elevation of 1829 m from the sea level, Ranikhet – One of the most Famous Hill Station is located in Almora District, Kumaon Region of Uttarakhand State.
      </Text>

      <Text style={styles.paragraph}>
        Ranikhet is one of the most popular attractions in Uttarakhand that is blessed with some of the best scenic views and natural beauty. This tiny little paradise is the perfect getaway for someone who needs some relax and can heal themselves.
      </Text>

      <Text style={styles.paragraph}>
        It is also popular as the Headquarters of the Kumaon Regiment – Infantary Unit of the Indian Army and has the Kumaon Regimental Centre Museum. Ranikhet is very popular for its views of the Himalayan peak like Nanda Devi Peak, mountainous climbs, golf courses, Trekking places, orchards, beautiful Himalayan Views and temples. The Charming and Panoramic views of lush green forests, deodar and pine trees, Himalayan views, chirping of birds, beautiful nature around etc attracts tourists to visit.
      </Text>

      <Text style={styles.subTitle}>History of Ranikhet</Text>

      <Text style={styles.paragraph}>
        According to Legends When Wife of Raja (King) Sukherdev, Rani Padmini visited here, she got attracted by heavenly beauty of this place and was delighted by the thought of having their home here. Then Raja Sukherdev decided to fulfill her wife’s wish and lured her by making their residence at this place. Hence, this place is named as “Land of Queen”.
      </Text>

      <Text style={styles.paragraph}>
        In 1869, Britishers rediscovered this place and established the headquarters of Kumaon Regiment here as this place is perfect to retreat from the heat of summers.
      </Text>

      <Text style={styles.paragraph}>
        As a Military Area, Ranikhet is a very well disciplined in terms of surroundings, commercialization and environment activities. New Recruits of Kumaon Regiment (Naga Regiment) trained here to serve our country as proud soldiers.
      </Text>

      <Text style={styles.subTitle}>Places to Explore in Ranikhet | Famous Tourist Attractions in Ranikhet</Text>

      <Text style={styles.paragraph}>
        Ranikhet is a scenic hill station located in the Indian state of Uttarakhand, known for its beautiful surroundings, pleasant weather, and serene environment. Here are some of the famous tourist attractions in Ranikhet:
      </Text>

      <Text style={styles.paragraph}>
        - Golf course in Ranikhet, Uttarakhand: Ranikhet is one of the famous destination for best hill golf courses in India and this place is just around 5 km from Ranikhet.
      </Text>

      <Text style={styles.paragraph}>
        - Kumaon Regiment Museum: One can Visit Kumaon Regiment Museum to explore and to know about our one of the bravest Infantry Regiments of Indian Army, about history of Naga Regiment, about brave warriors of Naga Regiment / Kumaon Regiment.
      </Text>

      <Text style={styles.paragraph}>
        - Visit the Chaubatia Gardens: Chaubatia Gardens is a beautiful garden located in Ranikhet. It is known for its apple orchards, beautiful flowers, and breathtaking views of the Himalayan peaks.
      </Text>

      <Text style={styles.paragraph}>
        - Explore the Bhalu Dam: Bhalu Dam is a beautiful dam located in Ranikhet. It is an excellent place to relax and enjoy the scenic beauty of the surrounding mountains.
      </Text>

      <Text style={styles.paragraph}>
        - Trek to the Majhkhali: Majhkhali is a beautiful trekking destination located near Ranikhet. The trek offers stunning views of the surrounding
      </Text>

      <Text style={styles.subTitle}>Activities to do in Ranikhet Hill Station | Things to do in Ranikhet Hill Station</Text>

      <Text style={styles.paragraph}>
        Ranikhet is a beautiful hill station located in the Indian state of Uttarakhand, known for its scenic beauty, pleasant climate, and serene environment. Here are some things you can do in Ranikhet:
      </Text>

      <Text style={styles.paragraph}>
        - Visit the Kumaon Regimental Centre Museum: The Kumaon Regimental Centre Museum is a museum dedicated to the Kumaon Regiment of the Indian Army. It is an excellent place to learn about the history and traditions of the regiment.
      </Text>

      <Text style={styles.paragraph}>
        - Explore the Jhula Devi Temple: Jhula Devi Temple is an ancient temple located in Ranikhet. It is known for its beautiful architecture and is an excellent place to learn about the region's culture and heritage.
      </Text>

      <Text style={styles.paragraph}>
        - Go for a nature walk: Ranikhet is surrounded by beautiful forests and hills, making it an excellent place for a nature walk. You can explore the region's flora and fauna while enjoying the fresh air and beautiful views.
      </Text>

      <Text style={styles.paragraph}>
        - Fishing/ Angling in Ranikhet: Bhalu Dam is an artificial lake situated 11km from Ranikhet where one can enjoy angling like activity with permission of Forest department / responsible Department.
      </Text>

      <Text style={styles.paragraph}>
        - Trekking / Hiking: There are several short treks and trials where one can enjoy with their family and kids. Some of the treks are Holm Farm, Chaubatia to Bhalu dam, Chevron Rosemount, Meghdoot to Jhula Devi Trail etc.
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

export default Overview;
