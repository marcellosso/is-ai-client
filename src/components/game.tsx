import React, { FC } from 'react';
import { AiFillRobot } from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';
import Image from 'next/image';
import { Level, LEVEL_TYPE_ENUM } from '../types/level';

interface IGame {
  currentLevel: Level;
  currentScore: number;
  handleAnswer: (_t: LEVEL_TYPE_ENUM) => void;
}

const game: FC<IGame> = ({ currentLevel, currentScore, handleAnswer }) => {
  return (
    <div>
      {process.env.NODE_ENV == 'development' && (
        <div className="flex justify-center items-center">
          <h1>{currentLevel.type}</h1>
        </div>
      )}
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${currentLevel.imageName}`}
        alt="img"
        width={520}
        height={520}
      />
      <div className="flex justify-between items-center mt-2">
        <button
          type="button"
          className="w-24 xs2:w-36 sm:w-44 flex items-center justify-center xs:px-6 sm:px-8 xs:py-2 sm:py-4 border-2 border-detail text-detail font-medium leading-tight uppercase rounded hover:bg-secondary hover:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          onClick={() => handleAnswer(LEVEL_TYPE_ENUM.HUMAN)}
        >
          <span className="pr-2">Human</span> <BsPersonFill />
        </button>
        <h1 className="font-bold text-detail text-2xl">{currentScore}</h1>
        <button
          type="button"
          className="w-24 xs2:w-36 sm:w-44 flex items-center justify-center xs:px-6 sm:px-8 xs:py-2 sm:py-4 border-2 border-detail text-detail font-medium leading-tight uppercase rounded hover:bg-secondary hover:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          onClick={() => handleAnswer(LEVEL_TYPE_ENUM.AI)}
        >
          <span className="pr-2">AI</span> <AiFillRobot />
        </button>
      </div>
    </div>
  );
};

export default game;
