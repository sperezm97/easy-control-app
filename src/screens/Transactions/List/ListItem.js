import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../../../component';
import { layout, globalStyles, colors } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    marginVertical: layout.spacingMd,
  },
  circle: {
    ...globalStyles.center,
    backgroundColor: colors.primaryColor,
    height: 45,
    width: 45,
    borderRadius: 25,
  },
  item: {
    marginLeft: layout.spacingNor,
    justifyContent: 'center',
  },
  price: {
    fontFamily: 'Roboto-Bold',
  },
});

const ListItem = () => {
  return (
    <View row between style={styles.container}>
      <View row>
        <View style={styles.circle}>
          <Text type="subTitle" color={colors.white}>
            V
          </Text>
        </View>
        <View style={styles.item}>
          <Text type="body">Bomba Texaco Ave.Kennndy</Text>
          <Text type="overline" color={colors.grey}>
            Vehicle
          </Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text type="caption" color={colors.primaryColor} style={styles.price}>
          $1,1234.00
        </Text>
        <Text type="overline" color={colors.grey}>
          Mar 19,2020
        </Text>
      </View>
    </View>
  );
};

export default ListItem;
