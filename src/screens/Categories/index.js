import React, { useState } from 'react';
import { useRoute, useNavigation, StackActions } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { getCategories } from '../../store/options/selectors';
import ListItem from './ListItem';
import { View, Text, Header, List } from '../../component';

const Categories = () => {
  const navigation = useNavigation();
  const { handleChange } = useRoute().params;
  const [categoryId, setId] = useState('');
  const categories = useSelector(getCategories);

  const onPressItem = id => {
    setId(id);
    handleChange(id);
    navigation.dispatch(StackActions.pop());
  };

  const renderEmpty = () => (
    <View center>
      <Text type="body">Not categories found</Text>
    </View>
  );

  const renderItem = object => (
    <ListItem
      {...object.item}
      isSelect={categoryId == object.item.id}
      onPress={() => onPressItem(object.Text.id)}
    />
  );

  return (
    <View>
      <Header titleName="Select Category" iconName="Left" />
      <View container>
        <List data={categories} renderItem={renderItem} empty={renderEmpty} />
      </View>
    </View>
  );
};

export default Categories;
