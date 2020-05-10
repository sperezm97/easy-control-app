import React from 'react';
import { StyleSheet } from 'react-native';
import { View, ActiveAccount, FloatingButton, Card, List } from '../../../component';
import ListItem from './ListItem';

const styles = StyleSheet.create({
  containerButton: {
    position: 'absolute',
    bottom: 20,
    right: 25,
  },
});

const AccountsList = () => {
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
          />
        </Card>
      </>
      <View style={styles.containerButton}>
        <FloatingButton />
      </View>
    </View>
  );
};

export default AccountsList;
