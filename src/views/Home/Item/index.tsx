/**
 * @author Vanderson de Moura Vauruk
 *
 */
import React from 'react';
import {Props} from './types';
import {TouchableHighlight, View} from 'react-native';
import styles from './style';
import {Text} from '@rneui/base';
import Row from '../../../components/FlexBox/Row';
import Col from '../../../components/FlexBox/Col';
import {color, customTheme} from '../../../theme';
import {Icon} from '@rneui/themed';

const Item: React.FC<Props> = ({testID, style, item}: Props) => {
  return (
    <>
      <View testID={testID} style={[styles.content, style]}>
        <TouchableHighlight
          underlayColor={color.ligthGray}
          style={{paddingHorizontal: 10}}
          onPress={() => console.log('first')}>
          <>
            <Row style={{marginBottom: 10}}>
              <Col flex={0.15} style={customTheme.colLeft}>
                {item?.os === 'Android' && (
                  <Icon
                    name="android"
                    type="material"
                    color={'#A6D863'}
                    size={30}
                  />
                )}
                {item?.os === 'ios' && (
                  <Icon
                    name="apple"
                    type="material-community"
                    color={'#B3B3B3'}
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
              <Col flex={1} style={customTheme.colLeft}>
                <Text style={styles.title}>{item?.currentOwner} </Text>
              </Col>
            </Row>
            <Row style={{marginBottom: 10}}>
              <Col flex={1} style={customTheme.colLeft}>
                <Text style={styles.title}>{item?.notes} </Text>
              </Col>
            </Row>
          </>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default Item;
