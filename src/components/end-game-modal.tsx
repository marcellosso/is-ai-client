import Image from 'next/image';
import React from 'react';
import Modal from 'react-modal';
import { Level, PreviousAnswerLevel } from '../types/level';
import BarChart from './bar-chart';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(34,40,49,0.95)',
    border: 0,
    color: 'rgb(255 211 105)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2vw',
    borderRadius: '1.5rem',
    maxHeight: '50vh',
  },
  overlay: {
    zIndex: 100,
    backgroundColor: 'rgba(34,40,49,0.55)',
  },
};

interface IEndGameModal {
  currentScore: number;
  levels: Level[];
  openFinishGameModal: boolean;
  previousAnswers: PreviousAnswerLevel[];
  endGameTrigger: () => void;
  setOpenFinishGameModal: (_v: boolean) => void;
}

const toPercent = (numerator: number, denominator: number) =>
  ((numerator / denominator) * 100).toFixed(2) + '%';

const EndGameModal: React.FC<IEndGameModal> = ({
  currentScore,
  levels,
  previousAnswers,
  openFinishGameModal,
  endGameTrigger,
  setOpenFinishGameModal,
}) => {
  const handleCloseFinishGameModal = () => {
    setOpenFinishGameModal(false);
    endGameTrigger();
  };

  return (
    <Modal
      isOpen={openFinishGameModal}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={customStyles as any}
      onRequestClose={handleCloseFinishGameModal}
    >
      <h1 className="mb-5 text-6xl font-bold">You scored: {currentScore}</h1>
      <h2 className="text-4xl font-bold">Global Answers</h2>
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center">
          AI
          <div className="w-5 h-5 bg-detail ml-2"></div>
        </div>
        <div className="flex items-center ml-3 text-slate-200">
          HUMAN
          <div className="w-5 h-5 bg-slate-200 ml-2"></div>
        </div>
      </div>
      <div className="overflow-auto scrollbar-hide w-full mb-2">
        {previousAnswers.map((answer) => {
          const levelId = answer.levelId;
          const level = levels.find((level) => level._id == levelId) as Level;

          const totalAmountOfAnswers = level.answered_ai + level.answered_human;
          const percentageAnsweredAi = toPercent(
            level.answered_ai,
            totalAmountOfAnswers
          );
          const percentageAnsweredHuman = toPercent(
            level.answered_human,
            totalAmountOfAnswers
          );

          return (
            <div key={levelId} className="w-full flex my-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${level.imageName}`}
                alt="img"
                width={50}
                height={50}
                quality={100}
                objectFit="cover"
                objectPosition="50% 20%"
                className="rounded shadow-2xl"
              />
              <BarChart
                aiPercentage={percentageAnsweredAi}
                humanPercentage={percentageAnsweredHuman}
              />
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className="w-24 xs2:w-36 sm:w-44 flex items-center justify-center xs:px-6 sm:px-8 xs:py-2 sm:py-4 border-2 border-detail text-detail font-medium leading-tight uppercase rounded hover:bg-secondary hover:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        onClick={handleCloseFinishGameModal}
      >
        <span className="pr-2">Close</span>
      </button>
    </Modal>
  );
};

export default EndGameModal;
