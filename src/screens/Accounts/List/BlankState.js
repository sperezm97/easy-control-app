import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../../../component';
import { layout } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    marginTop: layout.spacingSm,
  },
});

const BlankState = () => {
  return (
    <View center style={styles.container}>
      <Text>Not accounts founded</Text>
    </View>
  );
};

export default BlankState;
