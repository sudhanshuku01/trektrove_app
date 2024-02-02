import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Choose: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose Your Adventure</Text>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Explore Divine Destinations:</Text>
        <Text style={styles.optionDescription}>
          Discover renowned pilgrimage **places** like the sacred Char Dham (Badrinath, Kedarnath, Gangotri, and Yamunotri), the spiritual town of Rishikesh, and the picturesque valley of Haridwar. Our app guides you to these spiritual havens, providing insights into their history, significance, and the mesmerizing experiences they offer.
        </Text>
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Adventure Awaits:</Text>
        <Text style={styles.optionDescription}>
          Unleash the adventurer in you with Uttarakhand's thrilling landscapes. From the soaring peaks of Nanda Devi to the pristine waters of the Ganges, our app provides information on trekking routes, river rafting, camping spots, and more. Dare to trek to the Valley of Flowers or experience the adrenaline rush of paragliding in the beautiful hill **places** of Auli and Mussoorie.
        </Text>
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Wildlife Wonders:</Text>
        <Text style={styles.optionDescription}>
          Delve into the biodiversity of Uttarakhand's national parks and wildlife sanctuaries. Our app guides you through the dense forests of Jim Corbett National Park, home to the majestic Bengal tiger, and Rajaji National Park, where elephants roam freely. Explore the diverse flora and fauna that make Uttarakhand a paradise for nature lovers.
        </Text>
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Cultural Extravaganza:</Text>
        <Text style={styles.optionDescription}>
          Immerse yourself in the rich culture of Uttarakhand by exploring traditional fairs, festivals, and local cuisine. From the lively Kumaoni and Garhwali folk dances to the vibrant markets of Almora and Nainital, our app provides a glimpse into the cultural tapestry that makes Uttarakhand unique.
        </Text>
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Plan Your Itinerary:</Text>
        <Text style={styles.optionDescription}>
          Plan your trip seamlessly with our itinerary planner. Customize your journey based on your interests, whether it's a spiritual retreat, an adventurous escapade, or a leisurely exploration of the scenic beauty that Uttarakhand offers.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    backgroundColor: '#4CAF50', // Example background color
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  optionText: {
    color: '#fff', // Example text color
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionDescription: {
    color: '#fff', // Example text color
    fontSize: 14,
  },
});

export default Choose;
