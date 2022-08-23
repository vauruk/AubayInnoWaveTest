import React from 'react';
import {Props} from './types';
import {Modal, TouchableHighlight, View} from 'react-native';
import styles from './style';
import Col from '../FlexBox/Col';
import Row from '../FlexBox/Row';
import {Icon, Text, useTheme} from '@rneui/themed';

const CustomModal: React.FC<Props> = ({
  testID,
  children,
  title,
  isVisible,
  textCancel,
  textConfirm,
  type,
  handleCancel,
  handleSuccess,
}: Props) => {
  const {theme} = useTheme();
  const _setCancel = () => {
    handleCancel?.();
  };
  const _setSuccess = () => {
    handleSuccess?.();
  };

  const titleModal = () => {
    if (type) {
      if (type === 'error') {
        return (
          <View style={styles.title}>
            <Icon
              color={theme.colors.error}
              name="highlight-off"
              size={40}
              type="material"
            />
          </View>
        );
      } else if (type === 'success') {
        return (
          <View style={styles.title}>
            <Icon
              color={theme.colors.success}
              name="check-circle-outline"
              size={40}
              type="material"
            />
          </View>
        );
      } else if (type === 'warning') {
        return (
          <View style={styles.title}>
            <Icon
              color={theme.colors.warning}
              name="warning"
              size={40}
              type="material"
            />
          </View>
        );
      } else if (type === 'info') {
        return (
          <View style={styles.title}>
            <Icon
              color={theme.colors.warning}
              name="info"
              size={40}
              type="material"
            />
          </View>
        );
      } else {
        return title;
      }
    }
  };

  const getFlex = () => {
    if (textCancel && textConfirm) {
      return 0.5;
    }
    if ((textCancel && !textConfirm) || (!textCancel && textConfirm)) {
      return 1;
    }
    return 0.5;
  };

  return (
    <Modal
      visible={isVisible}
      statusBarTranslucent={true}
      transparent
      animationType="slide">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {titleModal()}
          {children}
          <Row style={{marginTop: 20}}>
            {textCancel && (
              <Col flex={getFlex()}>
                <TouchableHighlight
                  underlayColor={theme.colors.grey4}
                  onPress={_setCancel}
                  style={[styles.button, styles.buttonCancel]}>
                  <Row>
                    <Col flex={0.35}>
                      <Icon
                        color={theme.colors.grey2}
                        name="close"
                        size={30}
                        type="material"
                      />
                    </Col>
                    <Col flex={0.65}>
                      <Text style={styles.textCancel}>{textCancel}</Text>
                    </Col>
                  </Row>
                </TouchableHighlight>
              </Col>
            )}
            {textConfirm && (
              <Col flex={getFlex()}>
                <TouchableHighlight
                  onPress={_setSuccess}
                  underlayColor={theme.colors.grey2}
                  style={[styles.button, styles.buttonSuccess]}>
                  <Row>
                    <Col flex={0.2}>
                      <Icon
                        color={theme.colors.white}
                        name="done"
                        size={30}
                        type="material"
                      />
                    </Col>
                    <Col flex={0.65}>
                      <Text style={styles.textSuccess}>{textConfirm}</Text>
                    </Col>
                  </Row>
                </TouchableHighlight>
              </Col>
            )}
          </Row>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
