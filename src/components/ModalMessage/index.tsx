import React from 'react';
import {Props} from './types';
import {Modal, Text, TouchableHighlight, View} from 'react-native';
import styles from './style';
import Col from '../FlexBox/Col';
import Row from '../FlexBox/Row';
import {Icon} from '@rneui/themed';
import {color} from '../../theme';

const ModalMessage: React.FC<Props> = ({
  testID,
  children,
  title,
  isVisible,
  textCancel = 'Cancelar',
  textConfirm,
  type,
  handleCancel,
  handleSuccess,
}: Props) => {
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
              color={color.error}
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
              color={color.success}
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
              color={color.warning}
              name="warning"
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
            <Col flex={0.5}>
              <TouchableHighlight
                underlayColor={color.terciary}
                onPress={_setCancel}
                style={[styles.button, styles.buttonCancel]}>
                <Row>
                  <Col flex={0.35}>
                    <Icon
                      color={color.gray}
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
            {textConfirm && (
              <Col flex={0.5}>
                <TouchableHighlight
                  onPress={_setSuccess}
                  underlayColor={color.terciary}
                  style={[styles.button, styles.buttonSuccess]}>
                  <Row>
                    <Col flex={0.2}>
                      <Icon
                        color={color.gray}
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

export default ModalMessage;
