import Image from 'next/image';
import type { GetServerSideProps, NextPage } from 'next';
import { Level } from '../types/level';
import ReactLoading from 'react-loading';

import useGame from '../hooks/useGame';

import Layout from '../components/layout';
import StartGame from '../components/start-game';
import Game from '../components/game';
import EndGameModal from '../components/end-game-modal';
import { getCookie } from 'cookies-next';
import { useState } from 'react';
import { getAllLevels } from '../services/level';
interface IMain {
  levels: Level[];
  highestScoreCookie: number;
}

const Main: NextPage<IMain> = ({ levels, highestScoreCookie }) => {
  const [openFinishGameModal, setOpenFinishGameModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const {
    alert,
    setAlert,
    gameStarted,
    setGameStarted,
    currentScore,
    currentLevel,
    highestScoreClientState,
    previousAnswers,
    handleAnswer,
    endGame,
  } = useGame(levels, highestScoreCookie, setOpenFinishGameModal);

  const preloadImages = () => {
    return (
      <>
        {levels.map((level, idx) => (
          <div key={level._id}>
            <Image
              src={`/assets/${level.image_name}`}
              alt="Level Image"
              width={700}
              height={550}
              quality={100}
              objectFit="cover"
              objectPosition="50% 20%"
              className="rounded shadow-2xl"
              layout="responsive"
              onLoadingComplete={() =>
                idx + 1 == levels.length ? setLoading(false) : null
              }
            />
          </div>
        ))}
      </>
    );
  };

  if (loading)
    return (
      <>
        <div className="bg-secondary flex-col w-screen h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/assets/ai-or-human-logo-updated.png"
              alt="AI or HUMAN Logo with an icon of a robot and a human"
              quality={100}
              width={400}
              height={200}
              priority
            />

            <ReactLoading type="spinningBubbles" color="rgb(255 211 105)" />
          </div>
          <p className="text-slate-200 text-xs fixed bottom-1">
            When opening the first time, loading might take longer.
          </p>
          <div className="fixed overflow-scroll overflow-x-hidden">
            {preloadImages()}
          </div>
        </div>
      </>
    );

  return (
    <Layout alert={alert} setAlert={setAlert}>
      <EndGameModal
        currentScore={currentScore}
        levels={levels}
        previousAnswers={previousAnswers}
        openFinishGameModal={openFinishGameModal}
        setOpenFinishGameModal={setOpenFinishGameModal}
        endGameTrigger={endGame}
      />
      {!gameStarted ? (
        <StartGame
          highestScore={highestScoreClientState}
          setGameStarted={setGameStarted}
        />
      ) : (
        <Game
          currentScore={currentScore}
          currentLevel={currentLevel}
          handleGameAnswer={handleAnswer}
        />
      )}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const levels = await getAllLevels();
  const highestScore = getCookie('highestScore', ctx);

  return {
    props: {
      levels,
      highestScoreCookie: highestScore || 0,
    },
  };
};

export default Main;
