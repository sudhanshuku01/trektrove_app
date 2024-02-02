import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Auli: Mini Switzerland of India</Text>

      <Text style={styles.paragraph}>
        At an elevation of 2743 m from the sea level, Auli is a hill station
        located in the Garhwal region of Uttarakhand state in India. Auli means
        Meadows (“Bugyal”), a Snow-covered Hill Station and a popular winter
        destination as a ski resort in India. This place has everything that
        every tourist wanted or dreamed about destinations with Himalayan View,
        Ropeway, Snow-Covered Surroundings, Skiing, Meadows, Adventure
        activities, Authentic Stays, and much more.
      </Text>

      <Text style={styles.paragraph}>
        Auli offers panoramic views of some of India’s highest peaks, including
        the second-highest peak in the country, Nanda Devi (7,816m). It is also
        known for the gateway to the Nanda Devi and the Valley of Flowers
        National Park, including the Hemkund Sahib Gurdwara and popular trekking
        destinations such as Gorson Bugyal, Pangerchulla Summit, and Tapovan can
        be accessed through Auli. Besides Auli, Uttarakhand has several other
        skiing destinations, like Dayara Bugyal, Munsiyari, and Mundali.
      </Text>

      <Text style={styles.heading}>
        Things to do in Auli Hill Station | Activities to do in Auli Hill
        Station
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Skiing:</Text> Auli is popularly known for a
        Skiing destination in India. Many tourists visit during winters to enjoy
        various Snow activities like Snow Biking, Skiing, Snow trekking, and
        Cable Car ride for Snow covers views, etc.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Trekking in Auli:</Text> Auli Offers Various
        Trekking Destinations Such as Gorson Bugyal Trek, Tapovan Trek,
        Pangerchulla Summit Trek, and these treks offer amazing experiences,
        especially for adventure lovers.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Camping in Auli:</Text> Auli is one of the
        famous Camping Destinations in Uttarakhand. Trekkers usually do
        self-camping here to experience adventure and thrill with panoramic
        views of Himalayan peaks, Meadows, Flora, and Fauna, etc. Commercial
        Campings are also available here to stay, including meals and activities
        accordingly.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Auli Ropeway:</Text> Auli Ropeway is one of
        the famous activities to do in India, giving amazing scenic views of the
        Himalayas, Snow-covered Villages and trees, photography Experience,
        Artificial Auli Lake View, etc.
      </Text>

      <Text style={styles.heading}>
        Famous Tourist Attractions near Auli | Places to explore near Auli Hill
        Station
      </Text>

      <Text style={styles.paragraph}>
        Auli, the picturesque mountain resort in Uttarakhand, India, is
        surrounded by several famous tourist attractions that are worth
        visiting. Some of the most popular ones are:
      </Text>

      <Text style={styles.paragraph}>
        - <Text style={styles.bold}>Gorson Bugyal:</Text> A beautiful meadow
        surrounded by coniferous trees, offering panoramic views of the
        Himalayan peaks.
      </Text>

      <Text style={styles.paragraph}>
        - <Text style={styles.bold}>Nanda Devi National Park:</Text> A UNESCO
        World Heritage Site, this park is known for its diverse flora and fauna
        and is a popular destination for trekkers.
      </Text>

      <Text style={styles.paragraph}>
        - <Text style={styles.bold}>Valley of Flowers:</Text> A beautiful valley
        located in the Nanda Devi National Park, known for its unique and
        colorful variety of flowers.
      </Text>

      <Text style={styles.paragraph}>
        - <Text style={styles.bold}>Badrinath Temple:</Text> A Hindu temple
        dedicated to Lord Vishnu, located on the banks of the Alaknanda River,
        in the town of Badrinath.
      </Text>

      <Text style={styles.paragraph}>
        - <Text style={styles.bold}>Tapovan:</Text> A scenic location, offering
        stunning views of the Garhwal Himalayas and is a popular spot for
        trekkers.
      </Text>

      <Text style={styles.paragraph}>
        - <Text style={styles.bold}>Joshimath Town:</Text> A town located near
        Auli, known for its ancient temples and scenic beauty.
      </Text>

      <Text style={styles.paragraph}>
        - <Text style={styles.bold}>Chaukhamba Viewpoint:</Text> A scenic
        viewpoint offering breathtaking views of the Chaukhamba mountain range.
      </Text>

      <Text style={styles.heading}>Auli Travel Guide / Auli Travel Tips</Text>

      <Text style={styles.paragraph}>
        - During winter, Auli offers heavy snowfall, so it's advised to carry
        woollen clothes, warm socks, snow gloves, a winter cap, etc. between
        October to March month.
      </Text>

      <Text style={styles.paragraph}>
        - If possible, try to find accommodation at Joshimath as pricing would
        be competitive there as compared to Auli. Also, Joshimath is en-route
        Badrinath.
      </Text>

      <Text style={styles.paragraph}>
        - Avoid traveling in monsoons, as the region is prone to heavy rainfall
        and landslides that could cause severe roadblocks.
      </Text>

      <Text style={styles.paragraph}>
        - There are no ATM or petrol pumps at Auli. One would have to come to
        Joshimath, which is why Joshimath is preferable in every aspect as
        mentioned above.
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
  bold: {
    fontFamily: 'PlusJakartaSans-Bold',
  },
});

export default Overview;
