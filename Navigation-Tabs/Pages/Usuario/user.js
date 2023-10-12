import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';

export default function User({ user }) {

  const renderAvatar = () => {
    return <Avatar.Image size={48} source={{ uri: user.image }} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title={user.username} left={renderAvatar} />
        <Card.Content>
          <View style={styles.label}>
            <Text style={styles.text}>Name:</Text>
            <Text style={styles.text}>{user.firstName} {user.lastName}</Text>
          </View>
          <View style={styles.label}>
            <Text style={styles.text}>Age:</Text>
            <Text style={styles.text}>{user.age}</Text>
          </View>
          <View style={styles.label}>
            <Text style={styles.text}>E-mail:</Text>
            <Text style={styles.text}>{user.email}</Text>
          </View>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  card: {
    backgroundColor: '#56E39F',
    borderWidth: 5,
    borderColor: 'white'
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  text: {
    fontFamily:'Roboto',
    fontWeight:'bold',
    color: 'white',
  },
});
