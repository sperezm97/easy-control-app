import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, StackActions } from '@react-navigation/native';
import { View, ActiveAccount, FloatingButton, Card, List } from '../../../component';
import ListItem from './ListItem';
import { getAllAccounts } from '../../../store/accounts/selector';
import BlankState from './BlankState';

const styles = StyleSheet.create({
  containerButton: {
    position: 'absolute',
    bottom: 20,
    right: 25,
  },
});

const AccountsList = () => {
  const navigation = useNavigation();
  const accounts = useSelector(getAllAccounts);
  const dispatch = useDispatch();

  const onSelect = accountId => {
    dispatch({ type: 'user/putActiveAccount', payload: accountId });
  };

  const onOpenModal = () => navigation.dispatch(StackActions.push('AccountsCreate'));
  const renderItem = ({ item }) => <ListItem {...item} onPress={() => onSelect(item.id)} />;
  const renderEmpty = () => <BlankState />;

  return (
    <View flex>
      <>
        <ActiveAccount />
        <Card type="container">
          <List data={accounts} renderItem={renderItem} empty={renderEmpty} />
        </Card>
      </>
      <View style={styles.containerButton}>
        <FloatingButton onPress={onOpenModal} />
      </View>
    </View>
  );
};

export default AccountsList;
