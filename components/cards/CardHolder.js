import React from 'react';

import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import BoulderCard from './BoulderCard';
import AddNew_Button from '../AddNew_Button';

const CardHolder = ({ route, navigation }) => {
  const { boulders } = route.params;
  console.log(boulders);
  return (
    <>
      <FlatList
        style={{ paddingBottom: 200, paddingTop: '10%' }}
        data={boulders}
        renderItem={({ item }) => (
          <BoulderCard name={item.name} grade={item.grade} />
        )}
      />
      <AddNew_Button onPress={() => navigation.navigate('New')} />
    </>
  );
};

export default CardHolder;
