import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from '../../../../component';
import { layout, globalStyles, colors } from '../../../../styles';
import { formatPrice } from '../../../../utils';
import Selection from './Selection';
import { getTransactionsSelection } from '../../../../store/transactions/selectors';
import { addTransSelection, removeTransSelection } from '../../../../store/transactions/bulk';

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
  text: {
    width: 200,
  },
});

const ListItem = props => {
  const { category, createdAt, description, price, transactionTypeId, isBulkAction, id } = props;
  const firstCategoryLetter = category.charAt(0);
  const transSelection = useSelector(getTransactionsSelection);
  const dispatch = useDispatch();

  const getColorByTransactionType = () => {
    const incomeTransId = 'rXhNf8qWxQooVeaZJ1Tb';
    return transactionTypeId == incomeTransId ? colors.success : colors.danger;
  };

  const verifySelection = transSelection.includes(id);

  const addToBulk = () => {
    dispatch(addTransSelection(id));
  };

  const removeFromBulk = () => {
    dispatch(removeTransSelection(id));
  };

  return (
    <View row between style={styles.container} center>
      <View row center>
        <View style={styles.circle}>
          {isBulkAction ? (
            <Selection
              isSelect={verifySelection}
              addToBulk={addToBulk}
              removeFromBulk={removeFromBulk}
            />
          ) : (
            <Text type="subTitle" color={colors.white}>
              {firstCategoryLetter}
            </Text>
          )}
        </View>
        <View style={styles.item}>
          <Text type="body" numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
            {description}
          </Text>
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
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  transactionTypeId: PropTypes.string.isRequired,
  isBulkAction: PropTypes.bool.isRequired,
};
export default ListItem;
