
import { StyleSheet, View } from 'react-native'
import React, { ReactElement } from 'react'

import Almora from '../Almora/Almora'
import Auli from '../Auli/Auli'
import Badrinath from '../Badrinath/Badrinath'
import Gangotri from '../Gangotri/Gangotri'
import Haridwar from '../Haridwar/Haridwar'
import Kedarnath from '../Kedarnath/Kedarnath'
import Mussoorie from '../Mussoorie/Mussoorie'
import Nainital from '../Nainital/Nainital'
import Ranikhet from '../Ranikhet/Ranikhet'
import Rishikesh from '../Rishikesh/Rishikesh'
import Tungnath from '../Tungnath/Tungnath'
import Yamunotri from '../Yamunotri/Yamunotri'
import Demo from '../Pending/Demo'
import Nearnitukplace from '../Nearnitukplace/Nearnitukplace'
import FlowerofVally from '../FlowerofVally/FlowerofVally'


interface GuideProps{
  Place:string 
}

interface RouteItem {
  name: string;
  Page: ReactElement;
}

export const Route:RouteItem[] = [
  {
    name: 'Kedarnath Temple',
    Page: <Kedarnath />
  },
  {
    name: 'Badrinath Temple',
    Page: <Badrinath />
  },
  {
    name: 'Tungnath Temple',
    Page: <Tungnath />
  },
  {
    name: 'Flower of Valley',
    Page: <Demo />
  },
  {
    name: 'Basukedar Temple',
    Page: <Demo />
  },
  {
    name: 'Someshwar Temple',
    Page: <Demo />
  },
  {
    name: 'Mata Man Ichha Devi Temple',
    Page: <Demo />
  },
  {
    name: 'Bansi Narayan Temple',
    Page: <Demo />
  },
  {
    name: 'Mana Gaon',
    Page: <Demo />
  },
  {
    name: 'Bheem Poll',
    Page: <Demo />
  },
  {
    name: 'Vasundhara Fall',
    Page: <Demo />
  },
  {
    name: 'Gangotri',
    Page: <Gangotri />
  },
  {
    name: 'Yamunotri',
    Page: <Yamunotri />
  },
  {
    name: 'Rishikesh',
    Page: <Rishikesh />
  },
  {
    name: 'Haridwar',
    Page: <Haridwar />
  },
  {
    name: 'Auli',
    Page: <Auli />
  },
  {
    name: 'Mussoorie',
    Page: <Mussoorie />
  },
  {
    name: 'Jim Corbett National Park',
    Page: <Demo />
  },
  {
    name: 'Rajaji National Park',
    Page: <Demo />
  },
  {
    name: 'Nainital',
    Page: <Nainital />
  },
  {
    name: 'Almora',
    Page: <Almora />
  },
  {
    name: 'Pithoragarh',
    Page: <Demo />
  },
  {
    name: 'Ranikhet',
    Page: <Ranikhet />
  },
  {
    name: 'Kausani',
    Page: <Demo />
  },
  {
    name: 'Jageshwar',
    Page: <Demo />
  },
  {
    name: 'Champawat',
    Page: <Demo />
  },
  {
    name: 'Bhimtal',
    Page: <Demo />
  },
  {
    name: 'Naukuchiatal',
    Page: <Demo />
  },
  {
    name: 'Sattal',
    Page: <Demo />
  },
  {
    name: 'Kempty Falls', 
    Page: <Demo />
  },
  {
    name: 'Binsar',
    Page: <Demo />
  },
  {
    name: 'Mukteshwar',
    Page: <Demo />
  },
  {
    name: 'Lansdowne',
    Page: <Demo />
  },
  {
    name: 'Chandrabadni',
    Page:<Nearnitukplace Place='Chandrabadni' />
  },
  {
    name: 'Dhari Devi',
    Page:<Nearnitukplace Place='Dhari Devi' />
  },
  {
    name: 'Kamleshwar Mandir',
    Page:<Nearnitukplace Place='Kamleshwar Mandir' />
  },
  {
    name: 'Ganga Darshan',
    Page:<Nearnitukplace Place='Ganga Darshan' />
  },
  {
    name: 'Pauri',
    Page:<Nearnitukplace Place='Pauri' />
  },
  {
    name: 'Khirshu',
    Page:<Nearnitukplace Place='Khirshu' />
  },
  {
    name: 'Surkanda Devi',
    Page:<Nearnitukplace Place='Surkanda Devi' />
  },
  {
    name: 'Koteshwar',
    Page:<Nearnitukplace Place='Koteshwar' />
  },
  {
    name: 'Kartik Swami',
    Page:<Nearnitukplace Place='Kartik Swami' />
  },
  {
    name: 'Chopta',
    Page:<Nearnitukplace Place='Chopta' />
  },
]; 

const Guide:React.FC<GuideProps> = ({Place}) => {

  return (
    <View style={styles.Guide}>
    {Route.map((item, index) => (
      item.name === Place && <React.Fragment key={index}>{item.Page}</React.Fragment>
    ))}
  </View> 
  )
}
const styles = StyleSheet.create({
  Guide:{
    padding:15,
    marginVertical:10
  }
})

export default Guide
