import { createSelector } from '@reduxjs/toolkit';
import { getCategories } from '../options/selectors';
import { convertDate } from '../../utils';

export const getTransactions = state => state.transactions.data;

export const getFormatTransactions = createSelector(
  [getTransactions, getCategories],
  (trans, cat) => {
    return trans.reduce((acc, item) => {
      const tempItem = { ...item };
      tempItem.category = cat.find(c => c.id == item.category_id).name;
      tempItem.created_at = convertDate(item.created_at);
      delete tempItem.category_id;
      acc.push(tempItem);
      return acc;
    }, []);
  },
);
