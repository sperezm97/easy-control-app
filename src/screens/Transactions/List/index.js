import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { ActiveAccount, View, Card, List, FloatingButton } from '../../../component';
import ListItem from './ListItem';
import ListHeader from './ListHeader';

const styles = StyleSheet.create({
  containerButton: {
    position: 'absolute',
    bottom: 20,
    right: 25,
  },
});

const TransactionsList = () => {
  const navigation = useNavigation();

  const openModal = () => navigation.dispatch(StackActions.push('TransactionsCreate'));

  const renderHeader = () => <ListHeader />;

  const renderItem = () => {
    return <ListItem />;
  };

  return (
    <View flex>
      <>
        <ActiveAccount />
        <Card type="container">
          <List
            data={[
              { id: 1 },
              { id: 2 },
              { id: 3 },
              { id: 4 },
              { id: 5 },
              { id: 6 },
              { id: 7 },
              { id: 8 },
            ]}
            renderItem={renderItem}
            header={renderHeader}
          />
        </Card>
      </>
      <View style={styles.containerButton}>
        <FloatingButton onPress={openModal} />
      </View>
    </View>
  );
};

export default TransactionsList;
