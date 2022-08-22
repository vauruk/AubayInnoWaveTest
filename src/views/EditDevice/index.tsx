import React from 'react';

import {View} from 'react-native';
import {Props} from './types';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../store';
import {Input, Button} from '@rneui/themed';
import {customTheme} from '../../theme';
import {FieldLabel} from '../../store/device/types';
import {cleanDeviceObj, fetchSave, setField} from '../../store/device';
import {useNavigation} from '@react-navigation/native';

const EditDevice: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const deviceData = useSelector(
    (state: RootState) => state.deviceForm.deviceData,
  );

  const openCart = () => {
    // navigation.navigate(ProductRoutes.CartList);
  };

  const onChangeText = (fieldLabel: FieldLabel, text: string) => {
    dispatch(setField({fieldName: fieldLabel, value: text}));
  };

  const handleSave = () => {
    dispatch(fetchSave());
    navigation.goBack();
    dispatch(cleanDeviceObj());
  };

  return (
    <ScrollView style={customTheme.content}>
      <View>
        <Input
          label={'Model'}
          value={deviceData?.model}
          onChangeText={value => onChangeText(FieldLabel.model, value)}
        />
        <Input
          label={'Os'}
          value={deviceData?.os}
          onChangeText={value => onChangeText(FieldLabel.os, value)}
        />
        <Input
          label={'Current Owner'}
          value={deviceData?.currentOwner}
          onChangeText={value => onChangeText(FieldLabel.currentOwner, value)}
        />
        <Input
          label={'Notes'}
          value={deviceData?.notes}
          onChangeText={value => onChangeText(FieldLabel.notes, value)}
        />
        <View style={{marginHorizontal: 10}}>
          <Button title="Save" onPress={() => handleSave()} />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditDevice;
