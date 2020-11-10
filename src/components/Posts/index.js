import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, ScrollView, Text } from 'react-native';
import styles from './styles';
import { fetchAndSetData } from '../../api';
import {
  POSTS_ENDPOINT,
  USERS_ENDPOINT,
  POST_DETAILS_TEXT
} from '../../utils/constants';

const Posts = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);

  //the backend should be joining authors and post data then sending it to the frontend
  useEffect(() => {
    fetchAndSetData(POSTS_ENDPOINT, setPosts);
    fetchAndSetData(USERS_ENDPOINT, setAuthors);
  }, []);

  return (
    <View style={styles.view}>
      <ScrollView style={styles.container}>
        {posts.map(post => (
          <TouchableOpacity
            key={post.id}
            style={styles.post}
            onPress={() =>
              navigation.navigate(POST_DETAILS_TEXT, {
                authors,
                authorId: post.userId,
                post
              })
            }>
            <Text>{post.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Posts;
