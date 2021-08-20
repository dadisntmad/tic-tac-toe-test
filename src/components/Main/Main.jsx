import React from 'react';

import { calculateWinner } from '../../helpers/calculateWinner';

import { Grid } from '../Grid/Grid';
import { Modal } from '../Modal/Modal';

export const Main = () => {
  const [showModal, setShowModal] = React.useState(true);
  const [playerOne, setPlayerOne] = React.useState('');
  const [playerTwo, setPlayerTwo] = React.useState('');
  const [xWinnerPoint, setXWinnerPoint] = React.useState(0);
  const [oWinnerPoint, setOWinnerPoint] = React.useState(0);
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [xTurn, setXTurn] = React.useState(true);

  const winnerInfo = calculateWinner(board);
  const winner = winnerInfo.winner;

  const boardCopy = [...board];

  const handleClick = (index) => {
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xTurn ? 'X' : 'O';
    setBoard(boardCopy);
    setXTurn(!xTurn);
  };

  const restart = () => {
    setBoard(Array(9).fill(null));
    setXTurn(true);
  };

  React.useEffect(() => {
    let timeout;
    if (winner && winner === 'X') {
      timeout = setTimeout(() => {
        restart();
      }, 1000);
      setXWinnerPoint((prev) => prev + 1);
    }

    if (winner && winner === 'O') {
      timeout = setTimeout(() => {
        restart();
        setOWinnerPoint((prev) => prev + 1);
      }, 1000);
    }

    if (winner && winner === 'Ничья!') {
      timeout = setTimeout(() => {
        restart();
        setXWinnerPoint(xWinnerPoint);
        setOWinnerPoint(oWinnerPoint);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [winner]);

  return (
    <div>
      {showModal && (
        <Modal
          playerOne={playerOne}
          setPlayerOne={setPlayerOne}
          playerTwo={playerTwo}
          setPlayerTwo={setPlayerTwo}
          setShowModal={setShowModal}
        />
      )}
      <div className="tictactoe">
        <Grid squares={board} onClick={handleClick} winnerLine={winnerInfo.line} />
        <div className="score">
          <h3>Score</h3>
          {playerOne && (
            <p>
              {playerOne}: {xWinnerPoint}
            </p>
          )}
          {playerTwo && (
            <p>
              {playerTwo}: {oWinnerPoint}
            </p>
          )}
          <p>{winner === 'Ничья!' ? 'Ничья!' : ''}</p>
        </div>
      </div>
    </div>
  );
};
