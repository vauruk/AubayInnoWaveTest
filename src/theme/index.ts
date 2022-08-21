import {StyleSheet} from 'react-native';
import {createTheme} from '@rneui/themed';

const color = {
  primary: '#387B15',
  secondary: '#FACC29',
  terceary: '#4F952A',
  bgButton: '#909090',
  gray: '#4D4D4D',
  gray2: '#e2e3e2',
  ligthGray: '#d2d2d2',
  bgFooter: '#f7f7f7',
  white: '#ffffff',
  placeholder: '#F8f8f8',
  black: '#000000',
  blue: '#1A3668',
  error: '#AF4141',
  red: '#ee4433',
  success: '#7ADEAF',
  warning: '#F7AB00',
};

const customTheme = StyleSheet.create({
  content: {
    //paddingLeft: 15,
    // paddingRight: 15,
    height: '100%',
    width: '100%',
    backgroundColor: color.white,
  },
  colLeft: {
    alignItems: 'flex-start',
  },
  colRight: {
    alignItems: 'flex-end',
  },
  titleButton: {
    fontWeight: 'bold',
    fontSize: 20,
    color: color.secondary,
  },
  customPiker: {
    borderColor: color.primary,
    backgroundColor: color.secondary,
    borderRadius: 5,
    borderWidth: 0.5,
    paddingLeft: 10,
    height: 50,
  },
});

const theme = createTheme({
  colors: {
    primary: color.primary,
  },
  components: {
    Button: {
      raised: true,
      buttonStyle: {
        borderRadius: 5,
        height: 64,
      },
      containerStyle: {
        marginHorizontal: 0,
      },
    },
    Input: {
      inputContainerStyle: {
        borderColor: color.primary,
        borderRadius: 5,
        borderWidth: 0.5,
        paddingLeft: 10,
        height: 50,
      },
      label: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: color.primary,
      },
      labelStyle: {
        paddingBottom: 5,
        fontSize: 16,
        color: color.primary,
      },
      errorStyle: {
        color: color.red,
      },
    },
  },
  darkColors: {
    primary: '#A9DE7A',
  },
  mode: 'light',
});

export {color, theme, customTheme};
