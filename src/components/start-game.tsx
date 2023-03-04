import React, { FC } from 'react';

interface IStartGame {
  highestScore: number;
  setGameStarted: (_v: boolean) => void;
}

const startGame: FC<IStartGame> = ({ highestScore, setGameStarted }) => {
  return (
    <div className="w-3/4 lg:w-2/4 flex flex-col justify-between items-center">
      <h1 className="text-center text-sm xs:text-xl sm:text-2xl md:text-3xl font-bold">
        Are the images created by an Human or generated by AI?
      </h1>
      <p className="text-center text-xs sm:text-md md:text-xl">
        As tecnology is evolving, so is the AI capabilities. With the current
        advancements, it is possible to generate images with a simple text
        prompt. In this game you are challenged to choose wether an image was
        created by an Human or virtually generated by an AI.
      </p>
      <h2 className="self-center py-4 text-xs xs:text-sm sm:text-lg md:text-xl">
        Your Highest Score: {highestScore}
      </h2>
      <button
        type="button"
        className="w-3/4 sm:w-2/4 inline-block px-2 py-2 xs:px-6 border-2 border-detail text-detail font-medium text-md leading-tight uppercase rounded hover:bg-secondary hover:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        onClick={() => setGameStarted(true)}
      >
        Play Game
      </button>
    </div>
  );
};

export default startGame;
