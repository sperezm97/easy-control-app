import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, View, Text } from '../../../component';
import { globalStyles, layout, colors } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.row,
    ...layout.boxShadow,
    alignItems: 'center',
    paddingVertical: layout.spacingXlg,
    paddingHorizontal: layout.spacingNor,
    marginVertical: layout.spacingNor,
    borderWidth: 0.5,
    borderColor: colors.grey,
    borderRadius: 10,
  },
  containerText: {
    marginLeft: 15,
  },
});

const ListItem = () => {
  return (
    <View style={styles.container}>
      <Icon.Account />
      <View style={styles.containerText}>
        <Text type="body">Uso Corriente</Text>
      </View>
    </View>
  );
};

export default ListItem;
