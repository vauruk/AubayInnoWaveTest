import React from 'react';

import {TouchableHighlight, View} from 'react-native';
import {Props} from './types';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {color} from '../../theme';

const BackButtonNav: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation();

  const handleNav = () => {
    navigation.goBack();
  };

  return (
    <View style={{marginRight: 10}}>
      <TouchableHighlight style={{padding: 10}} onPress={() => handleNav()}>
        <Icon
          name="arrow-back-ios"
          type="material"
          color={color.primary}
          size={25}
        />
      </TouchableHighlight>
    </View>
  );
};

export default BackButtonNav;
