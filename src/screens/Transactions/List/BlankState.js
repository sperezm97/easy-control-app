import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from '../../../component';
import { layout } from '../../../styles';
import { useSelector } from 'react-redux';
import { getEmptyTransactions } from '../../../store/transactions/selectors';

const styles = StyleSheet.create({
  container: {
    marginTop: layout.spacingSm,
  },
});

const BlankState = () => {
  return (
    <View center style={styles.container}>
      <Text>Not transactions founded</Text>
    </View>
  );
};

export default BlankState;
