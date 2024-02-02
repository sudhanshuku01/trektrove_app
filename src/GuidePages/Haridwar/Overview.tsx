import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Haridwar – Gateway to Land of Gods</Text>

      <Text style={styles.paragraph}>
        Haridwar, situated on the bank of Ganga River is a district of Garhwal Region in Uttarakhand State at the foothills of river Ganga. Haridwar is regarded as a holy place for Hindus, hosting important religious events and serving as a gateway to several religious places. A holy place where devotees come from faraway places just to take a dip in the holy river Ganga in a belief to wash away all sins. The diverse nature of the Hindu religion has attracted many foreign visitors from all around the world.
      </Text>

      <Text style={styles.paragraph}>
        Located in Devbhoomi Uttarakhand, Haridwar literally means ‘Hari-Dwar” Gateway of Gods is also referred to by different names such as Mayapuri, Gangadwar, Mokshadwar, these names are mentioned in ancient Hindu scripts. Haridwar is one of the best places if you are looking for peace and spirituality where you can sit back, relax and meditate for a while with spiritual and religious vibes all around. Apart from religious importance, Haridwar is also a center for learning different arts and culture. Haridwar is well known for the source of Ayurvedic and Herbal Medicines. Haridwar is now home to the unique and ancient Indian tradition of teaching as "Gurukula."
      </Text>

      <Text style={styles.paragraph}>
        Haridwar is also considered the primary place where the Holy River Ganga enters from Himalayan Mountains to Plain Area. The crystal clear water of the Holy River Ganga gives this city a charming beauty and attracts many tourists.
      </Text>

      <Text style={styles.paragraph}>
        Famous Tourist attractions in Haridwar include the Chandi Devi Temple, Maya Devi Temple, Piran Kaliyar Temple, Neel Dhara Pakshi Vihar, Bhimgoda Tank, Bharat Mata Mandir, and Mansa Devi Temple etc. The famous “Ganga Arti “held at Har ki Pauri attracts a lot of devotees and tourists to take blessings.
      </Text>

      <Text style={styles.subtitle}>Places to explore in Haridwar | Famous tourist attractions near Haridwar</Text>

      <Text style={styles.paragraph}>
        Haridwar is one of the most famous religious places to visit all over India. Being a Religious place, the majority of sightseeing locations at Haridwar have a religious base. Some of the famous tourist attractions in Haridwar are:
      </Text>

      <Text style={styles.listItem}>- Mansa Devi Temple</Text>
      <Text style={styles.listItem}>- Chandi Devi Temple</Text>
      <Text style={styles.listItem}>- Chilla Wildlife Sanctuary</Text>
      <Text style={styles.listItem}>- Daksha Mahadev Temple</Text>
      <Text style={styles.listItem}>- Swami Vivekananda Park</Text>
      <Text style={styles.listItem}>- Bilkeshwar Mahadev Temple and many more places.</Text>

      <Text style={styles.subtitle}>Things to do in Haridwar | Activities to do in Haridwar</Text>

      <Text style={styles.paragraph}>
        Haridwar City is a Religious Place where thousands of devotees and tourists visit every year not only just for religious purposes but also to explore Haridwar city, famous temples around, meditation centers, Ashrams, etc.
      </Text>

      <Text style={styles.listItem}>- Meditation in Haridwar: Surrounded by mountains and the river view of Holy Ganga, Haridwar is one of the best places for meditation not only in terms of location but one can also feel religious and spiritual vibes around while meditating.</Text>

      <Text style={styles.listItem}>- Shopping in Haridwar: Being one of the popular religious places in India, Haridwar is a holy place where tourists explore markets and purchase stuff like spiritual books, Carved stone Idols, colorful glass bangles, Prashad etc. Some of the famous market places are Kankhal Market, Bara Bazar, Jwalapur, Moti Bazar etc.</Text>

      <Text style={styles.listItem}>- Restaurants in Haridwar | Places to Eat in Haridwar: Haridwar is well known for Indian as well as foreign tourists, so as for different varieties in food. One can have not only Indian food but also Italian, Mexican, Chinese, American food. One can easily find restaurants in almost every year, some of the famous restaurants are Mohan Puri Wala, Chotiwala Restaurants, Aahaar Restaurant, Bestee Restaurant, Brij Mathura Wala, Mohan Puri Wala etc.</Text>

      <Text style={styles.listItem}>- Holy Dip in River Ganga: According to Hindu culture if you take a bath in the Holy River Ganges, all your sins will be removed. On average, one billion people take a holy dip in a year during Kumbh Mela, the number has increased to 10 billion from last years.</Text>

      <Text style={styles.listItem}>- Ashram Visit in Haridwar: There are around hundreds of Ashrams to explore, where you will surely find peace and relax with beautiful nature around.</Text>

      <Text style={styles.listItem}>- Ganga Aarti at Haridwar: Ganga Aarti ceremony at Har Ki Pauri is famous in the whole of India and held every day during the morning at 5:30 am to 6:30 am and evening 6:00 pm to 7:00 pm. Every day hundreds of people come here for the Ganga Aarti Ceremony During some festival days, it is visited by more than a million people in a day.</Text>

      <Text style={styles.subtitle}>Haridwar Travel Tips</Text>

      <Text style={styles.listItem}>- Holy Ganga Aarti that takes place every morning and evening at Har Ki Paudi. One should not miss this while in Haridwar.</Text>
      <Text style={styles.listItem}>- Photography may be prohibited inside the temple, so please abide by the guidelines outlined by temple authorities.</Text>
      <Text style={styles.listItem}>- Haridwar gets overcrowded, especially during the Kumbh Mela. Special care should be taken during that time to avoid getting into large crowds and taking bridges on the river Ganges.</Text>
      <Text style={styles.listItem}>- Avoid non-vegetarian food and alcoholic beverages here as Haridwar holds deep religious meaning to the devotees. There is no liquor shop and Non-veg ( Meat and chicken ) shop in Haridwar.</Text>
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
  },
  listItem: {
    fontSize: 16,
    marginVertical: 2,
    marginLeft: 20,
  },
});

export default Overview;
