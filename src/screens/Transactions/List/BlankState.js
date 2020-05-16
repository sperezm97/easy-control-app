import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../../../component';
import { layout } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    marginTop: layout.spacingSm,
  },
});

const BlankState = () => (
  <View center style={styles.container}>
    <Text type="body">Not transactions found</Text>
  </View>
);

export default BlankState;
