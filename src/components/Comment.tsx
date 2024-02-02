import {StyleSheet, View} from 'react-native';
import React from 'react';
import FetchedComment from './FetchedComment';

interface Placetype {
  Place: string;
  setFetching: React.Dispatch<React.SetStateAction<boolean>>;
}

const Comment: React.FC<Placetype> = ({setFetching,Place}) => {
  return (
    <View>
      <FetchedComment Place={Place} setFetching={setFetching} />
    </View>
  );
};

const styles = StyleSheet.create({
  Comment: {},
});

export default Comment;
