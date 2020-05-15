import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { Icon, View, Text } from '../../../component';
import { globalStyles, layout, colors } from '../../../styles';
import { getActiveAccountId } from '../../../store/user/selectors';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.row,
    alignItems: 'center',
    paddingVertical: layout.spacingXlg,
    paddingHorizontal: layout.spacingNor,
    marginVertical: layout.spacingNor,
    borderWidth: 0.5,
    borderColor: colors.grey,
    borderRadius: 10,
  },
  containerText: {
    marginLeft: 15,
  },
  selected: {
    borderWidth: 1.5,
    borderColor: colors.primaryColor,
  },
  text: {
    width: 250,
  },
});

const ListItem = props => {
  const actualAccount = useSelector(getActiveAccountId);

  const { name, id, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, id == actualAccount && styles.selected]}>
        <Icon.Account />
        <View style={styles.containerText}>
          <Text type="body" numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
            {name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ListItem;
