
import {
  StyleSheet,
  View,
  ToastAndroid,
  Text,
} from 'react-native'; 

import React, {useContext, useEffect, useState} from 'react';

import axios from 'axios';
import {useAuth} from '../Context/Authcontext';
import EachComment from './EachComment';
import AddComment from './AddComment';
import { NetworkContext } from '../Context/NetworkProvider';

interface userType {
  _id: string;
  username: string;
}
export interface commentType {
  _id: string;
  Destination: string;
  message: string;
  createdAt: Date;
  user: userType;
}
interface FetchedCommentType{
  Place:string; 
  setFetching:React.Dispatch<React.SetStateAction<boolean>>;

}
const FetchedComment:React.FC<FetchedCommentType> = ({setFetching,Place}) => {
  const [commentsData, setCommentsData] = useState<commentType[]>([]);
  const [auth,setAuth]=useAuth();
  const {isConnected}=useContext(NetworkContext);
  
  const getAllComments = async () => {
    try {
      setFetching(true);
      const response = await axios.post(
        'https://backend-t-u090.onrender.com/comment/get-comments',
        {
          Destination:Place,
        },
      );

      if (response && response.data && response.data.success) {
        setCommentsData(response.data.comments);
      }
      else{
        showToast(response.data.message);  
    }
    } catch (error) {
      console.error(error);
      showToast('Something went wrong. Please try again later.');
    }finally{
      setFetching(false)
    }
  };
  const showToast = (msg: string) => {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      0,
      30,
    );
  };

  useEffect(()=>{
   if(isConnected){
    getAllComments();
   }
  },[auth,setAuth,isConnected])


return (
  <>
    <AddComment setFetching={setFetching} getAllComments={getAllComments} Places={Place} />
     {
      !isConnected ? (
        <View style={styles.nointcontainer}>
           <Text style={styles.nointtext}>Connect With Internet 🛜 To See Comments</Text>
        </View>
      ):(
        <View style={styles.container}>
        {commentsData.map((comment, index) => (
          <EachComment getAllComments={getAllComments} key={index} comment={comment}/>
          ))}
      </View>  
      )
     }
    </>
  );
}

const styles = StyleSheet.create({
  nointcontainer:{
     marginVertical:30, 
     padding:15,
  },
  nointtext:{
    fontSize:18,
    fontFamily:'PlusJakartaSans-Medium'
  },
 container:{
  padding:15
 }
  
});

export default FetchedComment;
