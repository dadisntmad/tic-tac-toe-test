import React from 'react';

import cn from 'classnames';

import './gridItem.css';

export const GridItem = ({ value, onClick, highlight }) => {
  return (
    <button
      className={cn('start__btn', {
        highlight,
      })}
      onClick={onClick}>
      {value}
    </button>
  );
};
