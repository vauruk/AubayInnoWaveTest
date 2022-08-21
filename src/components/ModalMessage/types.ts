import {StyleProp, ViewStyle} from 'react-native';

export interface Props {
  testID?: string;
  title?: any;
  // style?: StyleProp<ViewStyle>;
  children?: any;
  isVisible: boolean;
  textConfirm?: string;
  textCancel?: string;
  type?: 'error' | 'warning' | 'success';
  handleCancel?: () => void;
  handleSuccess?: () => void;
}
