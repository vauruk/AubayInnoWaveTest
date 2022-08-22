import React from 'react';

import {FlatList, View} from 'react-native';
import {Props} from './types';
//import {customTheme} from '../../theme';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {useTheme} from '@rneui/themed';
import Item from './Item';
import {customTheme} from '../../theme';

const Home: React.FC<Props> = (props: Props) => {
  const {theme} = useTheme();
  const listDevice = useSelector(
    (state: RootState) => state.deviceForm.listDevice,
  );

  const renderItem = ({item}) => <Item item={item} />;

  return (
    <View style={customTheme.content}>
      <FlatList
        data={listDevice}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
