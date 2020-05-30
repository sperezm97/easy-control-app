import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, StackActions } from '@react-navigation/native';
import { View, ActiveAccount, Card, List, ActionBar } from '../../../component';
import ListItem from './ListItem';
import { getAllAccounts } from '../../../store/accounts/selector';
import BlankState from './BlankState';

const AccountsList = () => {
  const navigation = useNavigation();
  const accounts = useSelector(getAllAccounts);
  const dispatch = useDispatch();
  const [isBulkAction, setIsBulkAction] = useState(false);

  const onSelect = id => {
    dispatch({ type: 'user/putActiveAccount', id });
  };

  const onOpenModal = () => navigation.dispatch(StackActions.push('AccountsCreate'));

  const onBulkDelete = () => {};
  const renderItem = object => (
    <ListItem {...object.item} onPress={() => onSelect(object.item.id)} />
  );

  const renderEmpty = () => <BlankState />;

  return (
    <View flex>
      <ActiveAccount />
      <ActionBar
        isBulkActive={isBulkAction}
        navigateToCreate={onOpenModal}
        onActiveBulk={setIsBulkAction}
        onDelete={onBulkDelete}
      />
      <Card type="container">
        <List data={accounts} renderItem={renderItem} empty={renderEmpty} />
      </Card>
    </View>
  );
};

export default AccountsList;
