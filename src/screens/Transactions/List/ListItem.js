import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { View, Text } from '../../../component';
import { layout, globalStyles, colors } from '../../../styles';
import { formatMoneyValue, convertDate } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    marginVertical: layout.spacingMd,
  },
  circle: {
    ...globalStyles.center,
    backgroundColor: colors.primaryColor,
    height: 45,
    width: 45,
    borderRadius: 25,
  },
  item: {
    marginLeft: layout.spacingNor,
  },
  price: {
    fontFamily: 'Roboto-Bold',
    textAlign: 'right',
  },
});

const ListItem = props => {
  const { category, created_at, description, price, transaction_type_id } = props;
  const firstCategoryLetter = category.charAt(0);

  const getColorByTransactionType = () =>
    transaction_type_id == 'rXhNf8qWxQooVeaZJ1Tb' ? colors.success : colors.danger;
  return (
    <View row between style={styles.container}>
      <View row>
        <View style={styles.circle}>
          <Text type="subTitle" color={colors.white}>
            {firstCategoryLetter}
          </Text>
        </View>
        <View style={styles.item}>
          <Text type="body">{description}</Text>
          <Text type="overline" color={colors.grey}>
            {category}
          </Text>
        </View>
      </View>
      <View>
        <Text type="caption" color={getColorByTransactionType()} style={styles.price}>
          {formatMoneyValue(price)}
        </Text>
        <Text type="overline" color={colors.grey}>
          {created_at}
        </Text>
      </View>
    </View>
  );
};

ListItem.propTypes = {
  account_id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  transaction_type_id: PropTypes.string.isRequired,
  updated_at: PropTypes.object.isRequired,
};
export default ListItem;
