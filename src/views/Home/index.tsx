import React, {useState} from 'react';

import {FlatList, View} from 'react-native';
import {Props, QuoteDay} from './types';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../store';
import {Text, useTheme} from '@rneui/themed';
import Item from './Item';
import {customTheme} from '../../theme';
import {fetchDeleteDevice, fetchEditDevice} from '../../store/device';
import {IDevice} from '../EditDevice/types';
import {CustomModal} from '../../components';
import axios from 'axios';
import {Config} from '../../config';
import {useNavigation} from '@react-navigation/native';
import {HomeRoutes} from '../../routes/Home/types';

const Home: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation();
  const [isShowDelete, setIsShowDelete] = useState<boolean>(false);
  const [isShowQuote, setIsShowQuote] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<IDevice>(undefined);
  const [quoteDay, setQuoteDay] = useState<QuoteDay>(undefined);

  const {theme} = useTheme();
  const dispatch = useAppDispatch();
  const listDevice = useSelector(
    (state: RootState) => state.deviceForm.listDevice,
  );

  const getQuoteDay = () => {
    axios({
      method: 'get',
      url: Config.ApiQuotesUrl,
    }).then(function (response) {
      let quote: QuoteDay = {
        author: response.data[0]?.a,
        head: response.data[0]?.h,
        quote: response.data[0]?.q,
      };
      console.log('first', quote);
      setQuoteDay(quote);
      setIsShowQuote(true);
    });
  };

  const handleDelete = () => {
    dispatch(fetchDeleteDevice(selectedItem));
    setSelectedItem(null);
    setIsShowDelete(false);
    getQuoteDay();
  };

  const handleShowModalDelete = (item: IDevice) => {
    setIsShowDelete(true);
    setSelectedItem(item);
  };

  const handleEdit = (item: IDevice) => {
    dispatch(fetchEditDevice(item));
    navigation.navigate(HomeRoutes.EditDevice);
  };

  const renderItem = ({item}) => (
    <Item
      item={item}
      handleDelete={() => handleShowModalDelete(item)}
      handleEdit={() => handleEdit(item)}
    />
  );

  return (
    <View style={customTheme.content}>
      <CustomModal
        type="info"
        title={quoteDay?.head}
        isVisible={isShowQuote}
        textConfirm="Ok"
        handleSuccess={() => setIsShowQuote(false)}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          {quoteDay?.author}
        </Text>
        <Text style={{fontSize: 16, fontStyle: 'italic'}}>
          {quoteDay?.quote}
        </Text>
      </CustomModal>
      <CustomModal
        type="info"
        title={`Delete ${selectedItem?.model}`}
        isVisible={isShowDelete}
        textConfirm="Delete"
        textCancel="Cancel"
        handleSuccess={() => handleDelete()}
        handleCancel={() => setIsShowDelete(false)}>
        <Text>Confirm delete this item?</Text>
      </CustomModal>
      <FlatList
        data={listDevice}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
