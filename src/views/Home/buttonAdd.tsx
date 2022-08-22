import React from 'react';

import {TouchableHighlight, View} from 'react-native';
import {Props} from './types';
import {Icon, useTheme} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {HomeRoutes} from '../../routes/Home/types';

const ButtonAdd: React.FC<Props> = (props: Props) => {
  const {theme} = useTheme();
  const navigation = useNavigation();

  const handleNav = () => {
    navigation.navigate(HomeRoutes.EditDevice);
  };

  return (
    <View style={{marginRight: 10}}>
      <TouchableHighlight
        style={{padding: 10}}
        underlayColor={theme.colors.grey5}
        onPress={() => handleNav()}>
        <Icon
          name="add"
          type="material"
          color={theme.colors.primary}
          size={30}
        />
      </TouchableHighlight>
    </View>
  );
};

export default ButtonAdd;
