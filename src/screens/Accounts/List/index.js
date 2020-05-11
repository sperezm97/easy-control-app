import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation, StackActions } from '@react-navigation/native';
import { View, ActiveAccount, FloatingButton, Card, List } from '../../../component';
import ListItem from './ListItem';
import { getAllAccounts } from '../../../store/accounts/selector';

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

  const onOpenModal = () => navigation.dispatch(StackActions.push('AccountsCreate'));
  const renderItem = ({ item }) => <ListItem {...item} />;
  return (
    <View flex>
      <>
        <ActiveAccount />
        <Card type="container">
          <List data={accounts} renderItem={renderItem} />
        </Card>
      </>
      <View style={styles.containerButton}>
        <FloatingButton onPress={onOpenModal} />
      </View>
    </View>
  );
};

export default AccountsList;
