import { ImageProps } from 'react-native';
import IMG from '../images/Others/defalutukimg.jpg';

export interface PLACES_Datatype {
  name: string;
  image: ImageProps;
  location: string;
}

export const PLACES: PLACES_Datatype[] = [
  {
    name: 'Valley of Flower',
    image: IMG,
    location: 'Chamoli District, Uttarakhand',
  },
  {
    name: 'Jim Corbett National Park',
    image: IMG,
    location: 'Nainital District, Uttarakhand',
  },
  {
    name: 'Rishikesh',
    image: IMG,
    location: 'Dehradun District, Uttarakhand',
  },
  {
    name: 'Nainital',
    image: IMG,
    location: 'Nainital District, Uttarakhand',
  },
  {
    name: 'Mussoorie',
    image: IMG,
    location: 'Dehradun District, Uttarakhand',
  },
  {
    name: 'Haridwar',
    image: IMG,
    location: 'Haridwar District, Uttarakhand',
  },
  {
    name: 'Auli',
    image: IMG,
    location: 'Chamoli District, Uttarakhand',
  },
  {
    name: 'Binsar Wildlife Sanctuary',
    image: IMG,
    location: 'Almora District, Uttarakhand',
  },
  {
    name: 'Kedarnath Temple',
    image: IMG,
    location: 'Rudraprayag District, Uttarakhand',
  },
  {
    name: 'Badrinath Temple',
    image: IMG,
    location: 'Chamoli District, Uttarakhand',
  },
  {
    name: 'Gangotri',
    image: IMG,
    location: 'Uttarkashi District, Uttarakhand',
  },
  {
    name: 'Yamunotri',
    image: IMG,
    location: 'Uttarkashi District, Uttarakhand',
  },
  {
    name: 'Almora',
    image: IMG,
    location: 'Almora District, Uttarakhand',
  },
  {
    name: 'Kausani',
    image: IMG,
    location: 'Chamoli District, Uttarakhand',
  },
  {
    name: 'Bhimtal',
    image: IMG,
    location: 'Uttarkashi District, Uttarakhand',
  },
  {
    name: 'Tungnath Temple',
    image: IMG,
    location: 'Rudraprayag District, Uttarakhand',
  },
  {
    name: 'Lansdowne',
    image: IMG,
    location: 'Rudraprayag District, Uttarakhand',
  },
];

export interface NitNearbyLocationType{
  name:string;
  image:ImageProps;
  description:string;
  howToReach:string;
}

export const NitNearbyLocation: NitNearbyLocationType[] = [
  {
    name: 'Chandrabadni',
    image: IMG,
    description: "Chandrabadni is a famous temple located in the Tehri Garhwal district of Uttarakhand, India. It is situated at an altitude of 2,277 meters above sea level. The temple is dedicated to Goddess Chandrabadni, and it offers mesmerizing views of the surrounding Himalayan peaks. It is believed that a visit to this temple fulfills one's wishes.",
    howToReach: "Chandrabadni can be reached from NIT Uttarakhand by road. It is approximately 100-120 kilometers away and takes around 4-5 hours by car."
  },
  {
    name: 'Dhari Devi',
    image: IMG,
    description: "Dhari Devi Temple is a sacred Hindu temple dedicated to the goddess Dhari Devi (Kali Mata). It is situated on the banks of the Alaknanda River in the Garhwal Himalayas of Uttarakhand, India. The temple holds great religious significance and attracts devotees from various parts of the country. Legend has it that the idol of Dhari Devi changes its appearance throughout the day.",
    howToReach: "Dhari Devi Temple is located near Srinagar and can be reached by road. It is approximately 80-100 kilometers from NIT Uttarakhand and takes around 3-4 hours by car."
  },
  {
    name: 'Kamleshwar Mandir',
    image: IMG,
    description: "Kamleshwar Mahadev Temple is a Hindu temple dedicated to Lord Shiva. It is located in the district of Rudraprayag in Uttarakhand, India. The temple is situated amidst picturesque surroundings and is a popular pilgrimage destination for devotees. It is believed that Lord Shiva appeared in the form of Kamleshwar to fulfill the wishes of his devotees.",
    howToReach: "Kamleshwar Mahadev Temple is approximately 50-70 kilometers from NIT Uttarakhand and takes around 2-3 hours by car."
  },
  {
    name: 'Ganga Darshan',
    image: IMG,
    description: "Ganga Darshan is a viewpoint in the Uttarkashi district of Uttarakhand, India. From this point, tourists can enjoy panoramic views of the Bhagirathi River and the surrounding Himalayan peaks. The viewpoint is a popular stopover for travelers en route to Gangotri, one of the Char Dham pilgrimage sites.",
    howToReach: "Ganga Darshan is approximately 150-170 kilometers from NIT Uttarakhand and takes around 5-6 hours by car."
  },
  {
    name: 'Pauri',
    image: IMG,
    description: "Pauri is a picturesque hill station located in the Pauri Garhwal district of Uttarakhand, India. It is situated at an altitude of 1,814 meters above sea level. Pauri offers stunning views of the snow-capped Himalayan peaks and lush green valleys. The town is known for its serene ambiance and is a popular destination for nature lovers and trekkers.",
    howToReach: "Pauri is approximately 80-100 kilometers from NIT Uttarakhand and takes around 3-4 hours by car."
  },
  {
    name: 'Khirshu',
    image: IMG,
    description: "Khirshu is a quaint village nestled in the Rudraprayag district of Uttarakhand, India. It is surrounded by dense forests and offers breathtaking views of the Himalayas. Khirshu is known for its tranquility and natural beauty, making it an ideal destination for those seeking solace amidst nature.",
    howToReach: "Khirshu is approximately 90-110 kilometers from NIT Uttarakhand and takes around 4-5 hours by car."
  },
  {
    name: 'Surkanda Devi',
    image: IMG,
    description: "Surkanda Devi Temple is a sacred Hindu temple dedicated to Goddess Parvati. It is located near the hill station of Dhanaulti in Uttarakhand, India. The temple is perched atop a hill at an altitude of 2,757 meters above sea level. Surkanda Devi Temple is visited by devotees and trekkers alike, and it offers panoramic views of the Himalayas.",
    howToReach: "Surkanda Devi Temple is approximately 160-180 kilometers from NIT Uttarakhand and takes around 6-7 hours by car."
  },
  {
    name: 'Koteshwar',
    image: IMG,
    description: "Koteshwar Mahadev Temple is an ancient Hindu temple dedicated to Lord Shiva. It is situated near Rudraprayag in Uttarakhand, India. The temple is located at the confluence of the Alaknanda and Mandakini rivers, surrounded by scenic beauty. Koteshwar Temple is believed to be the place where Lord Shiva meditated before moving to Kedarnath.",
    howToReach: "Koteshwar Mahadev Temple is approximately 70-90 kilometers from NIT Uttarakhand and takes around 3-4 hours by car."
  },
  {
    name: 'Kartik Swami',
    image: IMG,
    description: "Kartik Swami Temple is a sacred Hindu temple dedicated to Lord Kartikeya, the son of Lord Shiva. It is located in the Rudraprayag district of Uttarakhand, India. The temple is situated at an altitude of 3,500 meters above sea level and offers panoramic views of the Garhwal Himalayas. Kartik Swami Temple is accessible via a trek from Kanak Chauri village.",
    howToReach: "Kartik Swami Temple is approximately 60-80 kilometers from NIT Uttarakhand and takes around 3-4 hours by car."
  },
  {
    name: 'Chopta',
    image: IMG,
    description: "Chopta is a serene hill station located in the Rudraprayag district of Uttarakhand, India. It is also known as the 'Mini Switzerland of Uttarakhand' due to its picturesque landscapes and lush green meadows. Chopta serves as the base camp for treks to Tungnath Temple and Chandrashila Peak. It offers breathtaking views of snow-capped Himalayan peaks.",
    howToReach: "Chopta is approximately 110-130 kilometers from NIT Uttarakhand and takes around 5-6 hours by car."
  },
];


export interface DETAILS_dataType {
  name: string;
  location: string;
  Images: ImageProps[]; 
  Nearbyplace: string[];
}

export const DETAILS_DATA: DETAILS_dataType[] = [
  {
    name: 'Valley of Flower',
    location: 'Chamoli District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Hemkund Sahib', 'Govindghat'],
  },
  {
    name: 'Jim Corbett National Park',
    location: 'Nainital District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Nainital', 'Bhimtal'],
  },
  {
    name: 'Rishikesh',
    location: 'Dehradun District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Haridwar', 'Dehradun'],
  },
  {
    name: 'Nainital',
    location: 'Nainital District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Jim Corbett National Park', 'Bhimtal'],
  },
  {
    name: 'Mussoorie',
    location: 'Dehradun District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Dhanaulti', 'Dehradun'],
  },
  {
    name: 'Haridwar',
    location: 'Haridwar District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Rishikesh', 'Dehradun'],
  },
  {
    name: 'Auli',
    location: 'Chamoli District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Joshimath', 'Badrinath'],
  },
  {
    name: 'Binsar Wildlife Sanctuary',
    location: 'Almora District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Almora', 'Kausani'],
  },
  {
    name: 'Kedarnath Temple',
    location: 'Rudraprayag District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Badrinath Temple', 'Rishikesh'],
  },
  {
    name: 'Badrinath Temple',
    location: 'Chamoli District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Kedarnath Temple', 'Joshimath'],
  },
  {
    name: 'Gangotri',
    location: 'Uttarkashi District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Yamunotri', 'Uttarkashi'],
  },
  {
    name: 'Yamunotri',
    location: 'Uttarkashi District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Gangotri', 'Badrinath Temple'],
  },
  {
    name: 'Almora',
    location: 'Almora District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Binsar Wildlife Sanctuary', 'Kausani'],
  },
  {
    name: 'Kausani',
    location: 'Chamoli District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Almora', 'Binsar Wildlife Sanctuary'],
  },
  {
    name: 'Bhimtal',
    location: 'Uttarkashi District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Nainital', 'Jim Corbett National Park'],
  },
  {
    name: 'Tungnath Temple',
    location: 'Rudraprayag District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Kedarnath Temple', 'Rishikesh'],
  },
  {
    name: 'Lansdowne',
    location: 'Rudraprayag District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Rishikesh', 'Haridwar'],
  },
  {
    name: 'Chandrabadni',
    location: 'Tehri Garhwal District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Tehri Dam', 'Kanatal']
  },
  {
    name: 'Dhari Devi',
    location: 'Alaknanda River, Garhwal Himalayas, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Srinagar', 'Devprayag']
  },
  {
    name: 'Kamleshwar Mandir',
    location: 'Rudraprayag District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Srinagar', 'Devprayag']
  },
  {
    name: 'Ganga Darshan',
    location: 'Uttarkashi District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Gangotri', 'Badrinath Temple']
  },
  {
    name: 'Pauri',
    location: 'Pauri Garhwal District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Srinagar', 'Devprayag']
  },
  {
    name: 'Khirshu',
    location: 'Rudraprayag District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Srinagar', 'Devprayag']
  },
  {
    name: 'Surkanda Devi',
    location: 'Dhanaulti, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Srinagar', 'Devprayag']
  },
  {
    name: 'Koteshwar',
    location: 'Rudraprayag District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Srinagar', 'Devprayag']
  },
  {
    name: 'Kartik Swami',
    location: 'Rudraprayag District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Srinagar', 'Devprayag']
  },
  {
    name: 'Chopta',
    location: 'Rudraprayag District, Uttarakhand',
    Images: [IMG, IMG, IMG, IMG, IMG],
    Nearbyplace: ['Srinagar', 'Devprayag']
  },
];
