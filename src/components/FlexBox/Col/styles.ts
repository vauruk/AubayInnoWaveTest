import {StyleSheet} from 'react-native';

export default styles = (flexValue: number) => {
  return StyleSheet.create({
    content: {
      flex: flexValue,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
