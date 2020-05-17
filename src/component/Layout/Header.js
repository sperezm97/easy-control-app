import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, StackActions } from '@react-navigation/native';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Text from './Text';
import View from './View';

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  containerName: {
    height: 70,
    justifyContent: 'center',
  },
});

const Header = props => {
  const { titleName, iconName } = props;
  const navigation = useNavigation();

  const onClose = () => navigation.dispatch(StackActions.pop());

  const IconType = Icon[iconName];
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose}>
        <IconType />
      </TouchableOpacity>
      <View style={styles.containerName}>
        <Text type="headLine">{titleName}</Text>
      </View>
    </View>
  );
};

Header.propTypes = {
  titleName: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default Header;
