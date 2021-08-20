import React from 'react';

import './modal.css';

export const Modal = ({ playerOne, setPlayerOne, playerTwo, setPlayerTwo, setShowModal }) => {
  const setPlayers = () => {
    if (!playerOne && !playerTwo) {
      return;
    }
    setPlayerOne(playerOne);
    setPlayerTwo(playerTwo);
    setShowModal(false);
  };

  return (
    <div className="modal">
      <div className="modal__container">
        <div className="form">
          <div className="player">
            <input
              type="text"
              placeholder="Введите имя игрока №1"
              value={playerOne}
              onChange={(e) => setPlayerOne(e.target.value)}
              maxLength={10}
            />
          </div>
          <div className="player">
            <input
              type="text"
              placeholder="Введите имя игрока №2"
              value={playerTwo}
              onChange={(e) => setPlayerTwo(e.target.value)}
              maxLength={10}
            />
          </div>
          <button onClick={setPlayers} className="start">
            Играть
          </button>
        </div>
      </div>
    </div>
  );
};
