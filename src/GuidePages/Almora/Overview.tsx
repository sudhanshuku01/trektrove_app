import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AlmoraTravelGuide = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Almora – Cultural Capital of Kumaon Region</Text>

      <Text style={styles.paragraph}>
        At an elevation of 1640m from the Sea Level, Almora – Cultural Capital of Kumaon is surrounded across 5 km ridge atop Kashyap Hills, is a picturesque town set against the backdrop of the snow-capped Himalayas. Once the capital of the Chand dynasty rulers, Almora is known for its rich cultural heritage, unique handicraft, and delicious pahadi cuisines. Almora has attracted several eminent people through the ages, including Swami Vivekananda, Rabindranath Tagore, Uday Shankar, Guru Dutt, Zora Sehgal, and Ravi Shankar, who contributed to the cultural enrichment of the town.
      </Text>

      <Text style={styles.paragraph}>
        The town is famously known as the town of temples and two major rivers Koshi (Kaushaki) and Suyal (Salmali) that flow through this region. Nearby tourist places are Chitai Temple, Kasar Devi Temple, Katarmal Sun Temple, Binsar Wildlife Sanctuary, and Kumaon Regimental Centre Museum. One-day excursions can be made at the Bright End Corner's to have a view of the beautiful sunset.
      </Text>

      <Text style={styles.heading}>Famous tourist attractions in Almora | Places to visit in Almora</Text>
      <Text style={styles.paragraph}>
        Almora is a beautiful town located in the Indian state of Uttarakhand, known for its natural beauty, rich culture, and heritage. Here are some of the famous tourist attractions in Almora:
      </Text>

      <Text style={styles.listItem}>- Kasar Devi Temple: An ancient temple on a hilltop with a magnetic field.</Text>
      <Text style={styles.listItem}>- Jageshwar Temples: A group of ancient temples in the scenic Kumaon hills.</Text>
      <Text style={styles.listItem}>- Binsar Wildlife Sanctuary: Home to various wildlife species, including leopards and black bears.</Text>
      <Text style={styles.listItem}>- Martola: A beautiful hill station offering breathtaking views of the Himalayan peaks.</Text>
      <Text style={styles.listItem}>- Kumaon Regimental Centre Museum: Dedicated to the Kumaon Regiment of the Indian Army.</Text>
      <Text style={styles.listItem}>- Gobind Vallabh Pant Museum: A museum dedicated to freedom fighter Govind Ballabh Pant.</Text>
      <Text style={styles.listItem}>- Zero Point: A scenic viewpoint offering stunning views of the Himalayas.</Text>
      <Text style={styles.listItem}>- Lal Bazaar: A bustling market known for its colorful shops and stalls.</Text>

      <Text style={styles.heading}>Things to do in Almora | Activities to do in Almora</Text>
      <Text style={styles.paragraph}>
        Almora is a picturesque town located in the Indian state of Uttarakhand, known for its natural beauty, rich culture, and heritage. Here are some activities you can do while in Almora:
      </Text>

      <Text style={styles.listItem}>- Visit the Nanda Devi Temple: An ancient temple dedicated to the Hindu goddess Nanda Devi.</Text>
      <Text style={styles.listItem}>- Explore the Binsar Wildlife Sanctuary: Home to a variety of wildlife, including leopards and black bears.</Text>
      <Text style={styles.listItem}>- Attend the Uttarakhand Spring Festival: A vibrant event showcasing the region's culture and traditions.</Text>
      <Text style={styles.listItem}>- Take a trek to Jageshwar: A group of ancient temples offering stunning views during a trek.</Text>
      <Text style={styles.listItem}>- Visit the Kumaon Regimental Centre Museum: Learn about the history and traditions of the regiment.</Text>
      <Text style={styles.listItem}>- Explore the Bright End Corner: A scenic viewpoint offering stunning views of the Himalayas.</Text>
      <Text style={styles.listItem}>- Visit the Kasar Devi Temple: An ancient temple known for its beautiful architecture and scenic location.</Text>
      <Text style={styles.listItem}>- Go for a nature walk: Explore the region's flora and fauna while enjoying the fresh air and beautiful views.</Text>

      <Text style={styles.heading}>Almora Travel Tips / Almora Travel Guide</Text>
      <Text style={styles.paragraph}>
        - Many of Almora Destinations share snowfall in winter. So, if you plan your visit between January and March, chances are you’ll be greeted with snow at Almora.
      </Text>
      <Text style={styles.paragraph}>
        - Almora is a perfect weekend getaway destination to spend some quality time with your family and friends amidst nature.
      </Text>
      <Text style={styles.paragraph}>
        - Being at an elevation of 1638 meters, Almora gets quite chilly at nights. So, always carry warm clothes with you when traveling to Almora.
      </Text>
      <Text style={styles.paragraph}>
        - As Almora is the busiest town and a commercial hub, facilities like ATMs, petrol pumps, restaurants, hotels, homestays are easily available.
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
  heading: {
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: 'Raleway-Bold',
  },
  listItem: {
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Regular',
    marginLeft: 20,
  },
});

export default AlmoraTravelGuide;
