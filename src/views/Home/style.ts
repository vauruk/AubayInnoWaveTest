import {StyleSheet} from 'react-native';
import {color} from '../../theme';

const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 28,
    color: color.primary,
  },
  content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
});

export default styles;
