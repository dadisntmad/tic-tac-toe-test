import React from 'react';
import { GridItem } from '../GridItem/GridItem';

import './grid.css';

export const Grid = ({ squares, onClick, winnerLine }) => {
  return (
    <div className="grid">
      {squares.map((square, index) => (
        <GridItem
          key={index}
          value={square}
          onClick={() => onClick(index)}
          highlight={winnerLine && winnerLine.includes(index)}
        />
      ))}
    </div>
  );
};
