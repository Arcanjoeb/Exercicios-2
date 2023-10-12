import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Api from '../Services/Api';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts when the component mounts
    Api.get('/posts')
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Posts</Text>
      <FlatList style={styles.listPosts}
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Card mode="outlined">
              <Card.Title title={item.title} />
              <Card.Content>
                <Text style={styles.postBody}>{item.body}</Text>
              </Card.Content>
            </Card>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CAF7E1',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  listPosts: {
    
    width: '90%',
  },
  cardContainer: {
    marginTop: 10,
  },
  postBody: {
    backgroundColor: '#DCF9EC',
    fontSize: 16,
  },
  text: {
    fontSize: 28, 
    fontWeight: 'bold',
    fontFamily: 'monospace',
  }
});
