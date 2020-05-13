import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { View, Text } from '../../../component';
import { layout, globalStyles, colors } from '../../../styles';
import { formatPrice, convertDate } from '../../../utils';

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
  const { category, createdAt, description, price, transactionTypeId } = props;
  const firstCategoryLetter = category.charAt(0);

  const getColorByTransactionType = () =>
    transactionTypeId == 'rXhNf8qWxQooVeaZJ1Tb' ? colors.success : colors.danger;

  return (
    <View row between style={styles.container} center>
      <View row center>
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
          {formatPrice(price)}
        </Text>
        <Text type="overline" color={colors.grey}>
          {createdAt}
        </Text>
      </View>
    </View>
  );
};

ListItem.propTypes = {
  accountId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  transactionTypeId: PropTypes.string.isRequired,
  updatedAt: PropTypes.object.isRequired,
};
export default ListItem;
