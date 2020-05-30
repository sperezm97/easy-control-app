import React, { useEffect, useState } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ActiveAccount, View, Card, List, ActionBar } from '../../../component';
import ListItem from './Item';
import { getFormatTransactions } from '../../../store/transactions/selectors';
import { getActiveAccountId } from '../../../store/user/selectors';
import BlankState from './BlankState';

const TransactionsList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const transactions = useSelector(getFormatTransactions);
  const actualAccount = useSelector(getActiveAccountId);
  const [isBulkAction, setIsBulkAction] = useState(false);

  useEffect(() => {
    dispatch({ type: 'accounts/fetch' });
  }, []);

  useEffect(() => {
    dispatch({ type: 'transactions/fetch' });
  }, [actualAccount]);

  const navigateAddTransaction = () => navigation.dispatch(StackActions.push('TransactionsCreate'));

  const onToggleBulkAction = () => {
    setIsBulkAction(!isBulkAction);
  };

  const onBulkDelete = () => {
    dispatch({ type: 'transaction/bulk/delete' });
    onToggleBulkAction();
  };

  const renderEmpty = () => <BlankState />;

  const renderItem = object => <ListItem isBulkAction={isBulkAction} {...object.item} />;

  return (
    <View flex>
      <ActiveAccount />
      <ActionBar
        isBulkActive={isBulkAction}
        onActiveBulk={onToggleBulkAction}
        onDelete={onBulkDelete}
        navigateToCreate={navigateAddTransaction}
      />
      <Card type="container">
        <List data={transactions} renderItem={renderItem} empty={renderEmpty} />
      </Card>
    </View>
  );
};

export default TransactionsList;
