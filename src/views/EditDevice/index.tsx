import React, {useState} from 'react';

import {View} from 'react-native';
import {Props} from './types';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../store';
import {Input, Button, BottomSheet, ListItem} from '@rneui/themed';
import {customTheme} from '../../theme';
import {FieldLabel} from '../../store/device/types';
import {cleanDeviceObj, fetchSave, setField} from '../../store/device';
import {useNavigation} from '@react-navigation/native';

const EditDevice: React.FC<Props> = (props: Props) => {
  const [isShowSelectOs, setIsShowSelectOs] = useState<boolean>(false);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const deviceData = useSelector(
    (state: RootState) => state.deviceForm.deviceData,
  );

  const handleSelectOS = item => {
    setIsShowSelectOs(false);
    onChangeText(FieldLabel.os, item);
  };
  const list = [
    {title: 'Apple', text: 'ios'},
    {
      title: 'Android',
      text: 'android',
    },
    {
      title: 'Cancel',
      containerStyle: {backgroundColor: 'red'},
      titleStyle: {color: 'white'},
      onPress: () => setIsShowSelectOs(false),
    },
  ];

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
          label={'Os'}
          disabled={false}
          value={deviceData?.os}
          onChangeText={value => onChangeText(FieldLabel.os, value)}
          onPressIn={() => setIsShowSelectOs(true)}
        />
        <BottomSheet modalProps={{}} isVisible={isShowSelectOs}>
          {list.map((l, i) => (
            <ListItem
              key={i}
              containerStyle={l.containerStyle}
              onPress={() => handleSelectOS(l.text)}>
              <ListItem.Content>
                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet>

        <Input
          testID="modelId"
          label={'Model'}
          value={deviceData?.model}
          onChangeText={value => onChangeText(FieldLabel.model, value)}
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
          <Button
            testID="submitSaveDevice"
            title="Save"
            onPress={() => handleSave()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditDevice;
