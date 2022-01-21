import React from 'react';

import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const BoulderCard = ({ grade, name }) => {
  const navigation = useNavigation();
  const imgStyle = {
    flex: 1,
    resizeMode: 'contain',
    height: null,
    width: null,
  };

  return (
    <Card
      style={{
        margin: 10,
        height: 400,
      }}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() =>
          navigation.navigate('Detailed', {
            grade,
            name,
            image: '../../assets/vert_placeholder.jpeg',
          })
        }
      >
        <Card.Title style={styles.cardTitle} subtitle={grade} title={name} />
        <Card.Content style={{ flex: 1 }}>
          <Image
            source={require('../../assets/vert_placeholder.jpeg')}
            style={imgStyle}
          />
        </Card.Content>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    backgroundColor: 'lightgray',
    marginBottom: 10,
  },
});
export default BoulderCard;
