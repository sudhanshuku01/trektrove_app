import {StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import axios from 'axios';
import { NetworkContext } from '../Context/NetworkProvider';
import { useAuth } from '../Context/Authcontext';
import Apploader from './Apploader';

interface AddCommentType {
  getAllComments: () => void;
  Places: string;
  setFetching:React.Dispatch<React.SetStateAction<boolean>>;
}

const AddComment: React.FC<AddCommentType> = ({setFetching,getAllComments, Places}) => {
  const {isConnected}=useContext(NetworkContext);
  const [auth]=useAuth();
  const [comment, setComment] = useState<string>('');

  const postComment = async (message: string) => {
    if(!isConnected){
     showToast('Oops! 🙋‍♂️ No Internet Connection');
     return;
    }
    if(auth.user === null){
      showToast('Login To Add Comment')
      return;
    }
    if (message.trim().length < 1) {
      showToast('Message must be at least of one charater ');
      return;
    }
    try {
      setFetching(true)
      const response = await axios.post(
        'https://backend-t-u090.onrender.com/comment/post-comment',
        {
          message: message,
          Destination: Places, 
        },
      );
      if (response && response.data && response.data.success) {
        showToast(response.data.message)
      } else {
        showToast(response.data.message);
      }
    } catch (error) {
      console.error(error);
      showToast('Something went wrong. Please try again later.');
    }finally{
      setFetching(false);
    }
    getAllComments();
    setComment('');
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
  console.log('add comment')
  return (
    <View style={styles.Commentcontainer}>
      <Text style={styles.title}>Discussion</Text>
      <View style={styles.commentsContainer}>
        <Text>{Places}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Add a comment to help other."
        onChangeText={text => setComment(text)}
        value={comment}
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => postComment(comment)}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
      Commentcontainer: {
        padding: 15,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      commentsContainer: {
        marginBottom: 20,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
      },
      submitButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
});

export default AddComment;

