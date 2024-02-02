import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kartik Swami Temple – Only Lord Kartikeya Temple in Uttarakhand</Text>

      <Text style={styles.paragraph}>
        Kartik Swami is a Hindu temple dedicated to Lord Kartikeya, the son of Lord Shiva and Parvati. It is located in the Rudraprayag district of Uttarakhand, India, at an altitude of 3,100 meters above sea level. The temple is located on a hill and offers stunning views of the Himalayan peaks such as Nanda Devi, Trishul, and Bandarpunch.
      </Text>

      <Text style={styles.paragraph}>
        The temple is accessible via a 3 km trek from the village of Kanakchauri, which is located around 38 km from the town of Rudraprayag. The trek is relatively easy and passes through scenic forests and meadows. The temple is open throughout the year, but the best time to visit is from April to November when the weather is pleasant.
      </Text>

      <Text style={styles.heading}>History of Kartik Swami Temple</Text>

      <Text style={styles.paragraph}>
        While there are many legends about this temple, the most popular one dates back to the era when Lord Shiva and Goddess Parvati's two sons - Lord Kartikeya and Lord Ganesha –They both were asked to circumambulate the universe seven times. Lord Kartikeya set off on the expedition, undertaking the challenging task of taking seven rounds of the universe, whereas, Lord Ganesha took rounds of his parents, referring to them as his universe.
      </Text>

      <Text style={styles.paragraph}>
        When Lord Kartikeya returned and learned of how Lord Ganesha had completed the task and won the appreciation of his parents, he got angry. The Puranas say that an angry Lord Kartikeya left Kailash, his parents' abode, and arrived at Kronch Parvat. Some legends say, Lord Kartikeya was so furious, he sacrificed his physical self at Kronch Parvat to appease his parents.
      </Text>

      <Text style={styles.subHeading}>Only Temple of Lord Kartikeya (Murgana) in North India</Text>

      <Text style={styles.paragraph}>
        The temple sits atop the mountain, with a 180-degree panoramic view of Himalaya peaks that will surely heal inside of you. When it rains, the ambiance becomes surreal, and it seems the temple is rising from the clouds. A 3 km trek from Kanakchauri village and ending with an 80-step climb leads to the temple adorned with thousands of bells. It is believed that offering a bell here on Kartik Purnima can make one's wishes come true.
      </Text>

      <Text style={styles.paragraph}>
        Sandhya Aarti or evening prayer, enchantment of mantras and Maha-bhandara or grand feast organized at the temple occasionally is a special attraction for devotees and tourists from different parts of our Country. During Winters Kartik Swami temple covers with a snow blanket that gives devotees and tourists an amazing experience.
      </Text>

      <Text style={styles.heading}>Places to Visit near Kartik Swami Temple | Famous Tourist Attractions near Kartik Swami Temple</Text>

      <Text style={styles.paragraph}>
        Katik Swami Temple is the only temple dedicated to Lord Murgana or “Kartikeya” (Elder son of Lord Shiva). Situated at the top of the hill of Kanakchauri village, this place is a must-visit if you love nature, trekking, and looking for peace and spirituality. If you are planning to visit Kartik Swami, the following nearby destinations you should cover:
      </Text>

      <Text style={styles.bold}>- Kedarnath Dham</Text>
      <Text style={styles.bold}>- Tungnath Mahadev Temple</Text>
      <Text style={styles.bold}>- Chopta Valley</Text>
      <Text style={styles.bold}>- Deoria Tal Trek</Text>
      <Text style={styles.bold}>- Makkumath Temple</Text>
      <Text style={styles.bold}>- Ukimath Town</Text>
      <Text style={styles.bold}>- Kalimath Temple</Text>
      <Text style={styles.bold}>- Koteshwar Dham</Text>

      <Text style={styles.subHeading}>Activities to do near Kartik Swami Temple, Kanakchauri Village | Things to do near Kartik Swami Temple</Text>

      <Text style={styles.paragraph}>
        Kartik Swami is a Hindu temple dedicated to Lord Kartikeya, located in the Rudraprayag district of Uttarakhand, India. The temple is located amidst stunning natural surroundings and offers a serene atmosphere for spiritual seekers and nature lovers alike. Here are some activities to do near Kartik Swami temple:
      </Text>

      <Text style={styles.bold}>- Trekking:</Text>
      <Text style={styles.paragraph}>
        Kartik Swami is a popular destination for trekking enthusiasts. This is a 3 km trekking trail that leads to the temple, and the surrounding area is also ideal for trekking. The trek to Kartik Swami offers stunning views of the Himalayas and the surrounding valleys.
      </Text>

      <Text style={styles.bold}>- Camping:</Text>
      <Text style={styles.paragraph}>
        Camping is a great way to experience the natural beauty of the area around Kartik Swami. There are many campsites located in the surrounding forests, which offer a peaceful and serene atmosphere for camping.
      </Text>

      <Text style={styles.bold}>- Bird watching:</Text>
      <Text style={styles.paragraph}>
        The area around Kartik Swami is home to a wide variety of birds, including the Himalayan Monal, Koklass Pheasant, and Hill Partridge. Bird watching is a popular activity in the area, and there are many bird watching trails located in the surrounding forests.
      </Text>

      <Text style={styles.bold}>- Photography:</Text>
      <Text style={styles.paragraph}>
        The natural beauty of the area around Kartik Swami provides ample opportunities for photography. The stunning landscapes, snow-capped peaks, and scenic views offer a perfect backdrop for photography.
      </Text>

      <Text style={styles.bold}>- Meditation:</Text>
      <Text style={styles.paragraph}>
        Kartik Swami is a great place for meditation and spiritual contemplation. The serene atmosphere and natural surroundings provide a peaceful and calming environment for meditation and introspection.
      </Text>

      <Text style={styles.bold}>- Visit nearby attractions:</Text>
      <Text style={styles.paragraph}>
        There are many nearby attractions that are worth visiting, including the Rudranath Temple, Tungnath Temple, Deoria Tal, and Chopta. These places offer stunning natural beauty and a glimpse into the rich cultural heritage of the region.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
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
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  heading: {
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: 'Raleway-Bold',
  },
  subHeading: {
    fontSize: 18,
    marginTop: 15,
    fontFamily: 'Raleway-Bold',
  },
});

export default Overview;
