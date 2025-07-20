import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { IMAGES } from '../theme/images';
import { headerStyle } from '../style/style';

interface CustomHeaderProps {
  title: string;
  onBackPress?: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, onBackPress }) => {
  return (
    <View style={headerStyle.headerContainer}>
      <TouchableOpacity onPress={onBackPress}>
        <Image source={IMAGES.back} style={headerStyle.headerImage} />
      </TouchableOpacity>

      <Text style={headerStyle.headerTitle}>{title}</Text>

      <View style={headerStyle.headerIcon}>
        <View />
      </View>
      {/* )} */}
    </View>
  );
};

export default CustomHeader;
