import React from 'react';
import {
  ActiveAccount,
  IncomeCard,
  ExpensesCard,
  View,
  Card,
  List,
  FloatingButton,
} from '../../../component';
import styles from './styles';
import ListItem from './ListItem';
import ListHeader from './ListHeader';

const TransactionsList = () => {
  const renderHeader = () => <ListHeader />;

  const renderItem = () => {
    return <ListItem />;
  };

  return (
    <View>
      <>
        <ActiveAccount />
        <View row between style={styles.containerCards}>
          <IncomeCard />
          <ExpensesCard />
        </View>
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
        <FloatingButton />
      </View>
    </View>
  );
};

export default TransactionsList;
