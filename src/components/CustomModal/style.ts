import {StyleSheet} from 'react-native';
import {color} from '../../theme';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    marginHorizontal: 20,
    backgroundColor: color.white,
    borderRadius: 5,
    padding: 15,
    //opacity: 0.9,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 5,
    width: '100%',
    elevation: 2,
    marginBottom: -35,
  },
  buttonCancel: {
    backgroundColor: color.gray2,
    marginHorizontal: 10,
  },
  buttonSuccess: {
    backgroundColor: color.primary,
    color: color.white,
    marginHorizontal: 10,
  },
  textCancel: {
    color: color.gray,
    fontSize: 20,
  },
  textSuccess: {
    color: color.white,
    fontSize: 20,
  },
  title: {
    paddingBottom: 10,
  },
  textMessage: {
    color: color.black,
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default styles;
