import React from 'react';

import ListItem from './ListItem'

const List = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id} title={item.title} />
      ))}
    </ul>
  );
}
 
export default List;
