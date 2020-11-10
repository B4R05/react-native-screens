import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { fetchAllComments } from '../../api';
import { matchAuthor } from '../../utils/helpers';
import styles from './styles';

const PostDetails = ({ navigation, route }) => {
  const [author, setAuthor] = useState({});
  const [comments, setComments] = useState([]);

  const findAuthor = async () => {
    //passed list of authors as params, so it doesnt have to be fetched each time
    const { authors, authorId } = route.params;
    const foundAuthor = await matchAuthor(authors, authorId);
    setAuthor(foundAuthor);
  };

  const fetchPostComments = async () => {
    const allComments = await fetchAllComments();
    const postComments = allComments.filter(
      comment => comment.postId === route.params.post.id
    );
    setComments(postComments);
  };

  useEffect(() => {
    findAuthor();
    fetchPostComments();
  }, []);

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{route.params.post.title}</Text>
      <Text style={styles.body}>{route.params.post.body}</Text>
      <Text style={styles.author}>{author && author.name}</Text>
      <ScrollView style={styles.scrollview}>
        <Text style={styles.comments}>Comments</Text>
        {comments.length ? (
          comments.map(comment => (
            <Text key={comment.id} style={styles.comment}>
              {comment.body}
            </Text>
          ))
        ) : (
          <Text style={styles.loading}>Loading comments...</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default PostDetails;
