import React from 'react';

import { FlatList, ScrollView, View } from 'react-native';
import BoulderCard from './BoulderCard';

const CardHolder = ({ boulders }) => {
  return (
    <FlatList
      style={{ paddingBottom: 200 }}
      data={boulders}
      renderItem={({ item }) => (
        <BoulderCard name={item.name} grade={item.grade} />
      )}
    />
  );
};

export default CardHolder;
