/**
 * @author Vanderson de Moura Vauruk
 *
 */
import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Props} from './types';
import LottieView from 'lottie-react-native';
import logo2 from '../../assets/logo2.png';
import {HomeRoutes} from '../../routes/Home/types';

const Splash: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(HomeRoutes.HomeLogged);
    }, 5000);
  });
  return <LottieView source={require('./lottie2.json')} autoPlay loop />;
  //TODO Exemplo de uso para fundo de imagem
  // return (
  //   <ImageBackground resizeMode="stretch" source={background}>
  //     <View style={customTheme.content}>
  //       <View style={styles.logo}>
  //         <Image source={logo2} style={{height: 150, width: 150}} />
  //       </View>
  //     </View>
  //   </ImageBackground>
  // );
};

export default Splash;
