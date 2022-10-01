import React, { FC } from 'react';
import { Level, LEVEL_TYPE_ENUM } from '../../types/level';
import GameScreen from './game-screen';

interface IGame {
  currentLevel: Level;
  currentScore: number;
  handleGameAnswer: (_t: LEVEL_TYPE_ENUM) => void;
}

const Game: FC<IGame> = ({ currentLevel, currentScore, handleGameAnswer }) => {
  return (
    <GameScreen
      currentLevel={currentLevel}
      currentScore={currentScore}
      handleChangeStep={handleGameAnswer}
    />
  );
};

export default Game;
