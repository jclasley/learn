import React, { useContext } from 'react';
import { Ctx } from '../../utilities/deviceInfo';

import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 32,
    backgroundColor: 'lightgray',
    flex: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  subheading: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  header: {
    flex: 2,
    backgroundColor: 'lightgray',
    marginBottom: 20,
    width: '100%',
  },
});

const DetailedView = ({ route }) => {
  const { grade, name, image } = route.params;
  const dimensions = useContext(Ctx);
  console.log(`ctx: ${JSON.stringify(dimensions)}`);

  console.log(grade, name, image);
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          marginBottom: 20,
          alignItems: 'center',
        }}
      >
        <View style={styles.header}>
          <Text style={styles.heading}>{name}</Text>
          <Text style={styles.subheading}>{grade}</Text>
        </View>
        <Image
          style={{
            resizeMode: 'contain',
            width: dimensions.width * 0.8,
            height: dimensions.height * 0.8,
            aspectRatio: 1,
          }}
          source={require('../../assets/vert_placeholder.jpeg')}
        />
      </View>
    </ScrollView>
  );
};

export default DetailedView;
