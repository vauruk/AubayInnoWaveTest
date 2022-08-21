import {StyleProp, ViewStyle} from 'react-native';
import {IDevice} from '../../EditDevice/types';

export interface Props {
  testID?: string;
  style?: StyleProp<ViewStyle>;
  item?: IDevice;
}
