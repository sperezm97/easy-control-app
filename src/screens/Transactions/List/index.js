import React, { useEffect } from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ActiveAccount, View, Card, List, FloatingButton } from '../../../component';
import ListItem from './ListItem';
import { getFormatTransactions } from '../../../store/transactions/selectors';
import { getActiveAccountId } from '../../../store/user/selectors';
import BlankState from './BlankState';

const styles = StyleSheet.create({
  containerButton: {
    position: 'absolute',
    bottom: 20,
    right: 25,
  },
});

const TransactionsList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const transactions = useSelector(getFormatTransactions);
  const actualAccount = useSelector(getActiveAccountId);

  useEffect(() => {
    (async () => {
      const userId = await AsyncStorage.getItem('user');
      if (userId) {
        dispatch({ type: 'user/fetch', userId });
      } else {
        dispatch({ type: 'user/create' });
      }
    })();
  }, []);

  useEffect(() => {
    // dispatch({ type: 'user/fetch' });
    dispatch({ type: 'options/fetch' });
  }, []);

  useEffect(() => {
    dispatch({ type: 'accounts/fetch' });
  }, []);

  useEffect(() => {
    dispatch({ type: 'transactions/fetch' });
  }, [actualAccount]);

  const openModal = () => navigation.dispatch(StackActions.push('TransactionsCreate'));

  const renderEmpty = () => <BlankState />;

  const renderItem = ({ item }) => <ListItem {...item} />;

  return (
    <View flex>
      <>
        <ActiveAccount />
        <Card type="container">
          {/* {renderHeader()} */}
          <List data={transactions} renderItem={renderItem} empty={renderEmpty} />
        </Card>
      </>
      <View style={styles.containerButton}>
        <FloatingButton onPress={openModal} />
      </View>
    </View>
  );
};

export default TransactionsList;
