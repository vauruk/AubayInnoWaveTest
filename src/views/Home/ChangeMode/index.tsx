/**
 * @author Vanderson de Moura Vauruk
 *
 */
import React, {useEffect} from 'react';

import {TouchableHighlight, useColorScheme, View} from 'react-native';
import {Props} from './types';
import {Icon, useTheme} from '@rneui/themed';
import {useThemeMode} from '@rneui/themed';

const ChangeMode: React.FC<Props> = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {mode, setMode} = useThemeMode();
  const {theme} = useTheme();
  const handleChange = () => {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  };
  useEffect(() => {
    //const isDarkMode = useColorScheme() === 'dark';
    if (isDarkMode) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, []);
  return (
    <View style={{marginLeft: 10}}>
      <TouchableHighlight
        style={{padding: 10}}
        underlayColor={theme.colors.grey5}
        onPress={() => handleChange()}>
        <Icon
          name="loop"
          type="material"
          color={theme.colors.primary}
          size={25}
        />
      </TouchableHighlight>
    </View>
  );
};

export default ChangeMode;

function Demo() {
  return <Button onPress={() => setMode('dark')} title={mode} />;
}
