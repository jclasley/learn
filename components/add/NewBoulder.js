import React from 'react';

import { View } from 'react-native';

const NewBoulder = ({ navigator }) => (
  <View
    style={{ width: '100%', height: '100%', backgroundColor: 'lightgreen' }}
    onPress={() => navigator.navigate('Card')}
  />
);

export default NewBoulder;
