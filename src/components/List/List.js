import React from 'react';

import ListItem from './ListItem'

const List = ({items, handleRemoveItem, handleChangeItem }) => {
  return (
    <ul>
      {items.map(item => (
        <ListItem
          key={item.id}
          item={item}
          handleRemoveItem={handleRemoveItem}
          handleChangeItem={handleChangeItem}
        />
      ))}
    </ul>
  );
}
 
export default List;
