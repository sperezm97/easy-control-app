import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Icon } from '../../../component';
import { colors, layout } from '../../../styles';

const styles = StyleSheet.create({
  hr: {
    borderColor: colors.grey,
    borderWidth: 0.5,
    marginVertical: layout.spacingSm,
    backgroundColor: colors.white,
  },
});

const ListHeader = () => {
  return (
    <>
      <View row between>
        <View>
          <Text type="bodyLight">Filter by account</Text>
        </View>
        <View row>
          <Text type="bodyBold">Ahorro</Text>
          <Icon.Down />
        </View>
      </View>
      <View style={styles.hr} />
    </>
  );
};

export default ListHeader;
