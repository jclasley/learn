import React, { createContext } from 'react';
import type { Node } from 'react';
import { View, TouchableOpacity, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { dimensions, Ctx } from './utilities/deviceInfo';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import CardHolder from './components/cards/CardHolder';
import NewBoulder from './components/add/NewBoulder';
import DetailedView from './components/cards/DetailedView';
import { Card } from 'react-native-paper';

const boulders = [
  {
    grade: 'V1',
    name: 'Simple jugs',
  },
  {
    grade: 'V1',
    name: 'Simple jugs',
  },
  {
    grade: 'V2',
    name: 'Crimpy',
  },
  {
    grade: 'V2',
    name: 'Pink slopers',
  },
];

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Ctx.Provider value={dimensions}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Card">
          <Stack.Screen
            name="Card"
            component={CardHolder}
            initialParams={{ boulders: boulders }}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="New" component={NewBoulder} title="New Boulder" />
          <Stack.Screen name="Detailed" component={DetailedView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Ctx.Provider>
    // <SafeAreaView style={backgroundStyle}>
    //   <CardHolder boulders={boulders} />
    // </SafeAreaView>
  );
};

const ViewA = () => (
  <View style={{ height: 100, width: 100, backgroundColor: 'blue' }} />
);

export default App;
