import Image from 'next/image';
import React, { FC, useState } from 'react';
import { Level, LEVEL_TYPE_ENUM } from '../../types/level';

import { BsPersonFill } from 'react-icons/bs';
import { AiFillRobot } from 'react-icons/ai';
import FullscreenImageModal from '../fullscreen-image-modal';

interface IGame {
  currentLevel: Level;
  currentScore: number;
  handleGameAnswer: (_t: LEVEL_TYPE_ENUM) => void;
}

const Game: FC<IGame> = ({ currentLevel, currentScore, handleGameAnswer }) => {
  const [openFullscreenImageModal, setOpenFullscreenImageModal] =
    useState(false);

  return (
    <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3">
      <FullscreenImageModal
        imageName={currentLevel.image_name}
        openFullscreenImageModal={openFullscreenImageModal}
        setOpenFullscreenImageModal={setOpenFullscreenImageModal}
      />
      <div style={{ width: '100%' }} className="editExpandIcon">
        <Image
          src={'/click-to-expand-yellow.png'}
          alt="Click on the Image to Expand"
          height={20}
          width={20}
          quality={100}
          layout="responsive"
          className="opacity-50"
        />
        <Image
          src={`/assets/${currentLevel.image_name}`}
          alt="Level Image"
          width={700}
          height={550}
          quality={100}
          objectFit="cover"
          objectPosition="50% 20%"
          className="rounded shadow-2xl cursor-pointer"
          layout="responsive"
          onClick={() => setOpenFullscreenImageModal(true)}
        />

        <div className="flex justify-between items-center mt-2">
          <button
            type="button"
            className="w-28 xs2:w-36 sm:w-44 flex items-center justify-center px-2 py-1 xs:px-6 sm:px-8 xs:py-2 sm:py-4 border-2 border-detail text-detail font-medium leading-tight uppercase rounded hover:bg-secondary hover:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            onClick={() => handleGameAnswer(LEVEL_TYPE_ENUM.HUMAN)}
          >
            <span className="pr-2">Human</span> <BsPersonFill />
          </button>
          <h1 className="font-bold text-detail text-2xl sm:text-4xl">
            {currentScore}
          </h1>
          <button
            type="button"
            className="w-28 xs2:w-36 sm:w-44 flex items-center justify-center px-2 py-1  xs:px-6 sm:px-8 xs:py-2 sm:py-4 border-2 border-detail text-detail font-medium leading-tight uppercase rounded hover:bg-secondary hover:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            onClick={() => handleGameAnswer(LEVEL_TYPE_ENUM.AI)}
          >
            <span className="pr-2">AI</span> <AiFillRobot />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
