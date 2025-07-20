import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigator/AppNavigator';
import { SplashStyle } from '../style/style';
import LinearGradient from 'react-native-linear-gradient';
import { IMAGES } from '../theme/images';

interface SplashScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
}

const Splash = ({ navigation }: SplashScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, [navigation]);
  return (
    <LinearGradient
      start={{ x: 5, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={['#000000', '#008080', '#004d4d']}
      style={SplashStyle.LinearGradientView}
    >
      <Image source={IMAGES.logo} style={SplashStyle.logoImg} />
      <Text style={SplashStyle.movieText}>Movie Explore</Text>
      <Text style={SplashStyle.subText}>Lights. Camera. Stream!</Text>
    </LinearGradient>
  );
};

export default Splash;
