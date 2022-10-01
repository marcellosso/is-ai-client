import Image from 'next/image';
import React, { FC } from 'react';
import { Level, LEVEL_TYPE_ENUM } from '../../types/level';
import { AiFillRobot } from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';

interface IGameScreen {
  currentLevel: Level;
  currentScore: number;
  handleChangeStep: (_t: LEVEL_TYPE_ENUM) => void;
}

const GameScreen: FC<IGameScreen> = ({
  currentLevel,
  currentScore,
  handleChangeStep,
}) => {
  return (
    <div>
      {process.env.NODE_ENV == 'development' && (
        <div className="flex justify-center items-center">
          <h1>{currentLevel.type}</h1>
        </div>
      )}

      {/* TODO only do this on step 2, as we are displaying essential information  */}
      {/* <div className="group relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${currentLevel.imageName}`}
          alt="img"
          width={600}
          height={520}
          className="rounded shadow-2xl"
        />
        <div className="absolute rounded top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-secondary opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
          <p className="text-2xl text-white">{currentLevel.description}</p>
          <a
            className="mt-2 text-indigo-400 hover:text-indigo-500 duration-150"
            href="#"
            target="_blank"
          >
            {currentLevel.source_uri}
          </a>
        </div>
      </div> */}

      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${currentLevel.imageName}`}
        alt="img"
        width={520}
        height={520}
        className="rounded shadow-2xl"
      />
      <div className="flex justify-between items-center mt-2">
        <button
          type="button"
          className="w-24 xs2:w-36 sm:w-44 flex items-center justify-center xs:px-6 sm:px-8 xs:py-2 sm:py-4 border-2 border-detail text-detail font-medium leading-tight uppercase rounded hover:bg-secondary hover:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          onClick={() => handleChangeStep(LEVEL_TYPE_ENUM.HUMAN)}
        >
          <span className="pr-2">Human</span> <BsPersonFill />
        </button>
        <h1 className="font-bold text-detail text-2xl sm:text-4xl">
          {currentScore}
        </h1>
        <button
          type="button"
          className="w-24 xs2:w-36 sm:w-44 flex items-center justify-center xs:px-6 sm:px-8 xs:py-2 sm:py-4 border-2 border-detail text-detail font-medium leading-tight uppercase rounded hover:bg-secondary hover:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          onClick={() => handleChangeStep(LEVEL_TYPE_ENUM.AI)}
        >
          <span className="pr-2">AI</span> <AiFillRobot />
        </button>
      </div>
    </div>
  );
};

export default GameScreen;
