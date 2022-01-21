import { Dimensions } from 'react-native';
import { createContext } from 'react';

export const dimensions = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

export const Ctx = createContext();
