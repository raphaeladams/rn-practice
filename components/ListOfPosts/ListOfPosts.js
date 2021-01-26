import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Heading from '../Heading/Heading';
import Post from './Post';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import { useQuery } from '@apollo/client';
import POSTS_QUERY from './ListOfPostsQuery';


export default function ListOfPosts() {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  
  if (loading) return <LoadingScreen />;
  if (error) {
    console.log(error);
    return <ErrorScreen />;
  }

  const renderPost = ({ item }) => (
    <Post
      id={item.id}
      content={item.content}
      userName={item.user.name}
      email={item.user.email}
      date={item.updatedAt}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Heading text={'All posts'} />
      <FlatList
        data={data.microposts}
        renderItem={renderPost}
        keyExtractor={(post) => post.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e6',
    alignItems: 'stretch',
    padding: 20,
    justifyContent: 'center'
  }
});
