import React, {useState} from 'react';

import {Alert, Share, TouchableHighlight, View} from 'react-native';
import {Props} from './types';
import {Icon, Input, Text, useTheme} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {HomeRoutes} from '../../routes/Home/types';
import {Col, CustomModal, Row} from '../../components';
import {jsonToCSV} from 'react-native-csv';
import {RootState, useAppDispatch} from '../../store';
import {useSelector} from 'react-redux';
import {fetchUploadListDevice} from '../../store/device';
import {changeCvsToArray} from '../../util/cvsToArray';

const HeaderButton: React.FC<Props> = (props: Props) => {
  const [isShowUpload, setIsShowUpload] = useState<boolean>(false);
  const [cvsText, setCvsText] = useState<string>('');
  const dispatch = useAppDispatch();
  const listDevice = useSelector(
    (state: RootState) => state.deviceForm.listDevice,
  );
  const {theme} = useTheme();
  const navigation = useNavigation();

  const handleNav = () => {
    navigation.navigate(HomeRoutes.EditDevice);
  };

  const exportFile = async () => {
    let results = jsonToCSV(listDevice);
    try {
      const result = await Share.share({
        message: results,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const handleUploadFile = () => {
    let results = changeCvsToArray(cvsText);
    console.log('first', results);
    dispatch(fetchUploadListDevice(results));
    setIsShowUpload(false);
  };

  return (
    <View style={{marginRight: 10, alignContent: 'flex-end'}}>
      <CustomModal
        type="info"
        title={'Upload'}
        isVisible={isShowUpload}
        textConfirm="Ok"
        textCancel="Cancel"
        handleCancel={() => setIsShowUpload(false)}
        handleSuccess={() => handleUploadFile()}>
        <Text style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold'}}>
          Paste your file CVS here
        </Text>
        <Input
          leftIcon={
            <Icon
              name="document-text-outline"
              type="ionicon"
              size={24}
              color="black"
            />
          }
          multiline
          value={cvsText}
          onChangeText={value => setCvsText(value)}
          placeholder={'Past here your text in format cvs'}
        />
      </CustomModal>
      <Row>
        <Col flex={0.3}>
          <TouchableHighlight
            style={{padding: 5}}
            underlayColor={theme.colors.grey5}
            onPress={() => setIsShowUpload(true)}>
            <Icon
              name="cloud-upload-outline"
              type="ionicon"
              color={theme.colors.primary}
              size={25}
            />
          </TouchableHighlight>
        </Col>
        <Col flex={0.3}>
          <TouchableHighlight
            style={{padding: 5}}
            underlayColor={theme.colors.grey5}
            onPress={() => exportFile()}>
            <Icon
              name="share"
              type="material"
              color={theme.colors.primary}
              size={25}
            />
          </TouchableHighlight>
        </Col>
        <Col flex={0.3}>
          <TouchableHighlight
            style={{padding: 5}}
            underlayColor={theme.colors.grey5}
            onPress={() => handleNav()}>
            <Icon
              name="add"
              type="material"
              color={theme.colors.primary}
              size={30}
            />
          </TouchableHighlight>
        </Col>
      </Row>
    </View>
  );
};

export default HeaderButton;
