import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ActiveAccount, View, Card, List, FloatingButton } from '../../../component';
import ListItem from './ListItem';
import ListHeader from './ListHeader';
import { getFormatTransactions } from '../../../store/transactions/selectors';
import { layout } from '../../../styles';

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
  useEffect(() => {
    dispatch({ type: 'user/fetch' });
    dispatch({ type: 'options/fetch' });
    return () => {};
  }, []);

  useEffect(() => {
    dispatch({ type: 'transactions/fetch' });

    return () => {};
  }, []);

  useEffect(() => {
    dispatch({ type: 'accounts/fetch' });
    return () => {};
  }, []);

  const openModal = () => navigation.dispatch(StackActions.push('TransactionsCreate'));

  const renderHeader = () => <ListHeader />;

  const renderItem = ({ item }) => <ListItem {...item} />;

  return (
    <View flex>
      <>
        <ActiveAccount />
        <Card type="container">
          {renderHeader()}
          <List data={transactions} renderItem={renderItem} />
        </Card>
      </>
      <View style={styles.containerButton}>
        <FloatingButton onPress={openModal} />
      </View>
    </View>
  );
};

export default TransactionsList;
