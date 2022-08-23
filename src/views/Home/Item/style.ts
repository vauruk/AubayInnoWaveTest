import {StyleSheet} from 'react-native';
import {color} from '../../../theme';

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    backgroundColor: color.white,
  },
  container: {
    borderBottomWidth: 1,
    borderColor: color.secondary,
  },
  title: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },
});

export default styles;
