import React from 'react';

const List = ({items, itemRender}) => {
  return (
    <>
      {
        items.map(itemRender)
      }
    </>
  )
}

export default List;