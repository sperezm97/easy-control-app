import { createSelector } from '@reduxjs/toolkit';
import { getCategories } from '../options/selectors';
import { convertDate } from '../../utils';

export const getTransactions = state => state.transactions.data;
export const getEmptyTransactions = state => state.transactions.data.length == 0;

export const getFormatTransactions = createSelector(
  [getTransactions, getCategories],
  (trans, cat) =>
    trans.reduce((acc, item) => {
      const tempItem = { ...item };
      tempItem.category = cat.find(c => c.id == item.categoryId).name;
      tempItem.createdAt = convertDate(item.createdAt);
      delete tempItem.categoryId;
      acc.push(tempItem);
      return acc;
    }, []),
);

export const getTransactionsSelection = state => state.transactions.bulk;
