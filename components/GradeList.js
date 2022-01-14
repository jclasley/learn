// eslint-disable-next-line no-unused-vars
import React from 'react';
import { SectionList, StyleSheet, View, Text } from 'react-native';

// boulders is an array of object of `boulders` with grade as property

const GradeList = ({ boulders }) => {
  return (
    <View>
      <SectionList
        sections={[
          {
            title: 'V1',
            data: boulders.filter(x => x.grade === 'V1').map(x => x.name),
          },
          {
            title: 'V2',
            data: boulders.filter(x => x.grade === 'V2').map(x => x.name),
          },
        ]}
        renderItem={({ item }) => {
          console.log(item);
          return <Text style={styles.item}>{item}</Text>;
        }}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    backgroundColor: 'white',
    height: 44,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 14,
    height: 36,
    padding: 10,
  },
});

export default GradeList;
