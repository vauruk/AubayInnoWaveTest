import {StyleSheet} from 'react-native';
import {color} from '../../theme';

const styles = StyleSheet.create({
  content: {
    // alignContent: 'center',
    //alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.white,
    borderRadius: 8,
    borderWidth: 1,
    paddingBottom: 10,
    borderColor: color.secondary,
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  title: {
    height: 50,
    //backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: color.secondary,
  },
});

export default styles;
