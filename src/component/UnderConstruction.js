import React from 'react';
import { StyleSheet } from 'react-native';
import View from './Layout/View';
import Text from './Layout/Text';
import Image from './Layout/Image';
import { images, layout, colors } from '../styles';

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    tintColor: colors.black,
    alignSelf: 'center',
  },
  container: {
    borderRadius: 10,
    margin: layout.spacingLg,
    padding: layout.spacingMd,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey,
  },
});

const UnderConstruction = props => {
  return (
    <View style={styles.container}>
      <Text type="subTitle">{props.children}</Text>
      <Image source={images.underConstruction} style={styles.image} />
    </View>
  );
};

export default UnderConstruction;
