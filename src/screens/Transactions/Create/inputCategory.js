import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, StackActions } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { colors, layout } from '../../../styles';
import { View, Text, Icon } from '../../../component';
import { useSelector } from 'react-redux';
import { getCategories } from '../../../store/options/selectors';

const styles = StyleSheet.create({
  container: {
    padding: layout.spacingNor,
  },
  containerInput: {
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: colors.grey,
    marginVertical: layout.spacingNor,
    borderRadius: 10,
    paddingLeft: layout.spacingMd,
  },
  label: {
    fontFamily: 'Roboto-Regular',
  },
  containerIcon: {
    marginRight: layout.spacingMd,
  },
});

const InputCategory = props => {
  const navigation = useNavigation();
  const categories = useSelector(getCategories);

  const { value, handleChange } = props;

  const onPress = () => {
    // TODO: Change this function params to global context to create transaction.
    navigation.dispatch(StackActions.push('Categories', { value, handleChange }));
  };

  const getValue = () => categories.find(i => i.id == value)?.name;
  return (
    <View style={styles.container}>
      <Text type="headLine" style={styles.label}>
        Category
      </Text>
      <TouchableOpacity style={styles.containerInput} onPress={onPress}>
        <View row between>
          <Text type="body" color={value ? colors.textColor : colors.grey}>
            {getValue() || 'e.g Food'}
          </Text>
          <View style={styles.containerIcon}>
            <Icon.Right />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

InputCategory.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputCategory;
