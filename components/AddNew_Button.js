import React from 'react';

import { FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const AddNew_Button = ({ changeView }) => {
  return (
    <FAB
      style={style.fab}
      icon="plus"
      color="white"
      animated={true}
      onPress={() => changeView('addNew')}
    />
  );
};

const style = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: 28,
    marginBottom: 40,
    backgroundColor: 'darkblue',
  },
});

export default AddNew_Button;
