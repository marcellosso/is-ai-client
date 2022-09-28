import React, { FC } from 'react';

interface IStartGame {
  highestScore: number;
  setGameStarted: (_v: boolean) => void;
}

const startGame: FC<IStartGame> = ({ highestScore, setGameStarted }) => {
  return (
    <div className="flex flex-col justify-between items-stretch">
      <h1 className="self-center py-4 text-xl">
        Your Highest Score: {highestScore}
      </h1>
      <button
        type="button"
        className="inline-block px-6 py-2 border-2 border-detail text-detail font-medium text-md leading-tight uppercase rounded hover:bg-secondary hover:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        onClick={() => setGameStarted(true)}
      >
        Play Game
      </button>
    </div>
  );
};

export default startGame;
