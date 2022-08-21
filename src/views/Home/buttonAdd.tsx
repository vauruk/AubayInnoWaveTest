import React from 'react';

import {TouchableHighlight, View} from 'react-native';
import {Props} from './types';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {HomeRoutes} from '../../routes/Home/types';
import {color} from '../../theme';

const ButtonAdd: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation();

  const handleNav = () => {
    navigation.navigate(HomeRoutes.EditDevice);
  };

  return (
    <View style={{marginRight: 10}}>
      <TouchableHighlight style={{padding: 10}} onPress={() => handleNav()}>
        <Icon name="add" type="material" color={color.primary} size={30} />
      </TouchableHighlight>
    </View>
  );
};

export default ButtonAdd;
