/* eslint-disable react/require-default-props */
import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

const List = props => {
  const { data, renderItem, header, onEndReached, isRefresh, onRefresh, empty } = props;
  return (
    <FlatList
      keyExtractor={item => String(item.id)}
      ListHeaderComponent={header}
      ListEmptyComponent={empty}
      data={data}
      renderItem={renderItem}
      onEndReachedThreshold={1}
      onEndReached={onEndReached}
      refreshing={isRefresh}
      onRefresh={onRefresh}
      scrollEnabled={data.length > 4}
      bounces
      {...props}
    />
  );
};

List.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  header: PropTypes.func,
  onEndReached: PropTypes.func,
  isRefresh: PropTypes.bool,
  onRefresh: PropTypes.func,
  empty: PropTypes.func.isRequired,
};

export default List;
