import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nainital – Most Visit Hill Station in North India</Text>

      <Text style={styles.paragraph}>
        Situated at an elevation of 2084m above sea level, Nainital is among the most visited hill stations in India since the British period. This beautiful town is surrounded by seven hills, popularly known as ‘Sapta-Shring’ – Ayarpata, Deopata, Handi-Bandi, Naina, Alma, Lariya-Kanta, and Sher-Ka-Danda. The majestic mountains and the sparkling waters of the lake add an immense lot to the beauty of the town. The town is centered on the emerald mountain lake Naini, which on most days is dotted with colorful sailboats. According to mythology, the lake is believed to have been formed when the eyes of the goddess “Sati” fell at this spot while her body was being carried by Lord Shiva after her death.
      </Text>

      <Text style={styles.paragraph}>
        Today, Nainital offers everything that's required for a perfect holiday. Plenty of hotels and resorts are set on the hillside; the Mall Road is a busy shopping hub; cafes and restaurants serve both local and global cuisine, and there are innumerable forested trails that offer stunning views of the surrounding landscape.
      </Text>

      <Text style={styles.heading}>Things to do in Nainital | Activities to do in Nainital</Text>

      <Text style={styles.paragraph}>
        Boating in Nainital Lake: Boating in Naini Jheel / Lake I Nainital is the most common activity for tourists, especially couples.
      </Text>

      <Text style={styles.paragraph}>
        Trekking in Nainital: There are so many mini treks like Nainital-Kainchi Trek, Nainital-Betalghat Trek, Binayak Trek, etc., that tourists can explore. The best trekking time is during winters where you can find plenty of snow or may experience snowfall.
      </Text>

      <Text style={styles.paragraph}>
        Hot Air Ballooning: Hot Air Ballooning is another and new adventure attraction in Nainital. Ride colorful balloons that take you up above the hills and valleys.
      </Text>

      <Text style={styles.paragraph}>
        Paragliding in Nainital: One can enjoy paragliding on Bhimtlaa – Jangli Village Road and Kotabagh. Enjoy this amazing paragliding under the guidance of experts and make your moments memorable.
      </Text>

      <Text style={styles.heading}>Famous Tourist Attractions near Nainital | Places to explore near Nainital</Text>

      <Text style={styles.paragraph}>
        Situated at an elevation of 2084m above sea level, Nainital, a hill station in the northern state of Uttarakhand, India, is surrounded by several famous tourist attractions. Some of the most popular ones include:
      </Text>

      <Text style={styles.paragraph}>
        - Naini Lake
        - Tiffin Top
        - Nainital Zoo
        - Kainchi Dham Temple
        - Hanuman Garhi Temple
        - Naina Peak
        - Bhimtal
        - Khurpatal
        - Snow View Point
      </Text>

      <Text style={styles.heading}>Best time to visit Nainital Hill Station | Best time to explore Nainital Hill Station</Text>

      <Text style={styles.paragraph}>
        Nainital is an all-year destination but the weather is the best between March and June. It receives heavy snowfall in winter and turns into a white wonderland, making it a popular Christmas and New Year destination.
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

export default Overview;
