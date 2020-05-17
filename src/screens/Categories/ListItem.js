import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View, Icon } from '../../component';
import { globalStyles, layout, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.row,
    alignItems: 'center',
    height: 50,
    padding: layout.spacingMd,
    marginVertical: layout.spacingSm,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.textColor,
  },
  containerText: {
    paddingLeft: layout.spacingNor,
  },
});

const ListItem = props => {
  const { isSelect, name, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View row style={styles.container}>
        {isSelect ? (
          <Icon.Check color={colors.primaryColorDark} />
        ) : (
          <Icon.UnCheck color={colors.textColor} />
        )}
        <View style={styles.containerText}>
          <Text type="body">{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isSelect: PropTypes.bool.isRequired,
};

export default ListItem;
