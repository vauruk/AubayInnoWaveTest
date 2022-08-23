/**
 * @author Vanderson de Moura Vauruk
 *
 */
import React from 'react';
import {Props} from './types';
import {useColorScheme, View} from 'react-native';
import styles from './style';
import Row from '../../../components/FlexBox/Row';
import Col from '../../../components/FlexBox/Col';
import {customTheme} from '../../../theme';
import {Button, Icon, ListItem, useTheme, Text} from '@rneui/themed';
import QRCode from 'react-native-qrcode-svg';

const Item: React.FC<Props> = ({
  testID,
  style,
  item,
  handleDelete,
  handleEdit,
}: Props) => {
  const {theme} = useTheme();
  const isDarkMode = useColorScheme() === 'dark';

  const _handleDelete = reset => {
    handleDelete?.(item);
    reset();
  };
  const _handleEdit = reset => {
    handleEdit?.(item);
    reset();
  };

  return (
    <>
      <ListItem.Swipeable
        style={styles.container}
        rightContent={reset => (
          <>
            <Button
              title="Delete"
              onPress={() => _handleDelete(reset)}
              icon={{name: 'delete', color: 'white'}}
              buttonStyle={{
                minHeight: '100%',
                backgroundColor: 'red',
                height: '50%',
              }}
            />
            <Button
              title="Edit"
              onPress={() => _handleEdit(reset)}
              icon={{name: 'edit', color: 'white'}}
              buttonStyle={{
                minHeight: '100%',
                height: '50%',
              }}
            />
          </>
        )}>
        <ListItem.Content>
          <View
            testID={testID}
            style={[
              styles.content,
              style,
              {
                backgroundColor: isDarkMode
                  ? theme.colors.grey0
                  : theme.colors.white,
              },
            ]}>
            <Row>
              <Col flex={0.15} style={customTheme.colLeft}>
                {item?.os === 'android' && (
                  <Icon
                    name="android"
                    type="material"
                    color={isDarkMode ? theme.colors.white : '#A6D863'}
                    size={30}
                  />
                )}
                {item?.os === 'ios' && (
                  <Icon
                    name="apple"
                    type="material-community"
                    color={isDarkMode ? theme.colors.white : '#B3B3B3'}
                    size={30}
                  />
                )}
              </Col>
              <Col flex={0.5} style={customTheme.colLeft}>
                <Text style={styles.title}>{item.os} </Text>
              </Col>
              <Col flex={0.3} style={customTheme.colRight}>
                <Text style={styles.title}>{item?.model}</Text>
              </Col>
            </Row>
            <Row style={{marginBottom: 10}}>
              <Col flex={0.6} style={[customTheme.colLeft]}>
                <Text style={styles.title}>{item?.currentOwner} </Text>
              </Col>
              <Col flex={0.4} style={[customTheme.colLeft]}>
                <QRCode value={item?.id} logoBackgroundColor="transparent" />
              </Col>
            </Row>
            <Row style={{marginBottom: 10}}>
              <Col flex={1} style={customTheme.colLeft}>
                <Text style={styles.title}>Notes: </Text>
                <Text style={styles.title}>{item?.notes} </Text>
              </Col>
            </Row>
          </View>
        </ListItem.Content>
      </ListItem.Swipeable>
    </>
  );
};

export default Item;
