import React from 'react';

import {TouchableHighlight, View} from 'react-native';
import {Props} from './types';
import {Icon, useTheme} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const BackButtonNav: React.FC<Props> = (props: Props) => {
  const {theme} = useTheme();
  const navigation = useNavigation();

  const handleNav = () => {
    navigation.goBack();
  };

  return (
    <View style={{marginRight: 10}}>
      <TouchableHighlight
        underlayColor={theme.colors.grey5}
        style={{padding: 10}}
        onPress={() => handleNav()}>
        <Icon
          name="arrow-back-ios"
          type="material"
          color={theme.colors.primary}
          size={25}
        />
      </TouchableHighlight>
    </View>
  );
};

export default BackButtonNav;
