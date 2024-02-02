import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TextInput,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {commentType} from './FetchedComment';
import axios from 'axios';
import {useAuth} from '../Context/Authcontext';
import { NetworkContext } from '../Context/NetworkProvider';
interface EachCommentType {
  comment: commentType;
  getAllComments: () => void;
}
const EachComment: React.FC<EachCommentType> = ({comment,getAllComments}) => {
  const [auth, setAuth] = useAuth();
  const {isConnected}=useContext(NetworkContext);

  const [editedMessage, setEditedMessage] = useState(comment.message);
  const [isEditing, setIsEditing] = useState(false);

  const getTimeDifferenceString = (): string => {
    const createAt = new Date(comment.createdAt);
    const now = Date.now();
    const timeDifference = now - createAt.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    } else if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
  };

  const handleEdit = async (newMessage: string) => {
    if(!isConnected){
      showToast('Oops!🙋‍♂️ No Internet Connection');
      return;
    }
    try {
      const response = await axios.put(
        'https://backend-t-u090.onrender.com/comment/edit-comment',
        {
          commentId: comment._id,
          newMessage: newMessage,
        },
      );
      if (response && response.data && response.data.success) {
        showToast(response.data.message);
      } else {
        showToast(response.data.message);
      }
    } catch (error) {
      console.error(error);
      showToast('Something went wrong. Please try again later.');
    }
    getAllComments();
    setIsEditing(false);
  };

  const handleDelete = async (commentId: string) => {
    if(!isConnected){
      showToast('Oops!🙋‍♂️ No Internet Connection');
      return;
    }
    try {
      const response = await axios.delete(
        `https://backend-t-u090.onrender.com/comment/delete-comment/${commentId}`,
      );
      if (response && response.data && response.data.success) {
        showToast(response.data.message);
      } else {
        showToast(response.data.message);
      }
    } catch (error) {
      console.error(error);
      showToast('Something went wrong. Please try again later.');
    }
    getAllComments();
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const startEditing = () => {
    setIsEditing(true);
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

  },[auth,setAuth,isConnected]);

  console.log("each comment")
  return (
    <View style={styles.eachComment}>
      <View style={styles.header}>
        <Image
          source={{
            uri: `https://backend-t-u090.onrender.com/auth/user-picture/${comment.user._id}`,
          }}
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.userName}>{comment.user.username}</Text>
          <Text style={styles.dot}> · </Text>
          <Text style={styles.createdAt}>{getTimeDifferenceString()}</Text>
        </View>
      </View>
      <View style={styles.messageContainer}>
        {auth.user?._id === comment.user._id ? (
          <>
            {isEditing ? (
              <View style={styles.editContainer}>
                <TextInput
                  style={styles.editInput}
                  multiline
                  value={editedMessage}
                  onChangeText={text => setEditedMessage(text)}
                />
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => handleEdit(editedMessage)}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={handleCancelEdit}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Text style={styles.message}>{comment.message}</Text>
            )}

            <View style={styles.actions}>
              {!isEditing && (
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={startEditing}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleDelete(comment._id)}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </>
        ):(
          <>
          <Text style={styles.message}>{comment.message}</Text>
          </>
        )
      
      }
      </View>
    </View>
  );
};

export default EachComment;

const styles = StyleSheet.create({
  eachComment: {
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  headerText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dot: {
    marginHorizontal: 4,
    color: '#888',
  },
  createdAt: {
    color: '#888',
    fontSize: 14,
  },
  messageContainer: {
    paddingLeft: 50,
    // backgroundColor: '#fff012',
  },
  message: {
    fontSize: 18,
    marginBottom: 2,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButton: {
    marginLeft: 16,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#3498db',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  editContainer: {
    marginBottom: 8,
  },
  editInput: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  editButton: {
    backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 5,
  },
});
