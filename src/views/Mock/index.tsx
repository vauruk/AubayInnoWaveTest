/**
 * @author Vanderson de Moura Vauruk
 *
 * Classe exemplo de uso
 */
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {Props} from './types';
import {RootState} from '../../store';
import {useSelector} from 'react-redux';
import {HomeRoutes} from '../../routes/Home/types';

const Mock: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation();
  const listDevice = useSelector(
    (state: RootState) => state.deviceForm.listDevice,
  );

  const openCart = () => {
    navigation.navigate(HomeRoutes.HomeLogged);
  };

  return (
    <View>
      <Text>mock mock</Text>
      <Text>mock mock</Text>
      <Text>mock mock</Text>
      <Text>mock mock</Text>
      <Text>mock mock</Text>
      <Text>mock mock</Text>
      <Text>mock mock</Text>
      <Text>mock mock</Text>
      <Text>mock mock</Text>
    </View>
  );
};

export default Mock;
