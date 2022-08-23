import {StyleProp, ViewStyle} from 'react-native';
import {IDevice} from '../../EditDevice/types';

export interface Props {
  testID?: string;
  style?: StyleProp<ViewStyle>;
  item?: IDevice;
  handleDelete?: (item: IDevice) => void;
  handleEdit?: (item: IDevice) => void;
}
