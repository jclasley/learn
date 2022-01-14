import React from 'react';

import { Image, View } from 'react-native';
import { Card } from 'react-native-paper';

const BoulderCard = ({ grade, name }) => {
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
      <Card.Title title={grade} subtitle={name} />
      <Card.Content style={{ flex: 1 }}>
        <Image
          source={require('../../assets/vert_placeholder.jpeg')}
          style={imgStyle}
        />
      </Card.Content>
    </Card>
  );
};

export default BoulderCard;
