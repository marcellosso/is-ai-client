import Image from 'next/image';
import type { GetServerSideProps, NextPage } from 'next';
import { Level } from '../types/level';

import useGame from '../hooks/useGame';

import Layout from '../components/layout';
import StartGame from '../components/start-game';
import Game from '../components/game';
import EndGameModal from '../components/end-game-modal';
import { getCookie, setCookie } from 'cookies-next';
import { useState } from 'react';
import { getAllLevels } from '../services/level';
interface IMain {
  levels: Level[];
  highestScoreCookie: number;
  hasPreloaded: boolean;
}

const Main: NextPage<IMain> = ({
  levels,
  highestScoreCookie,
  hasPreloaded,
}) => {
  const [openFinishGameModal, setOpenFinishGameModal] = useState(false);

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
    if (hasPreloaded) return <></>;

    setCookie('hasPreloaded', true);

    return (
      <>
        {levels.map((level) => (
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
            />
          </div>
        ))}
      </>
    );
  };

  return (
    <Layout alert={alert} setAlert={setAlert}>
      {preloadImages()}
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
  const hasPreloaded = getCookie('hasPreloaded', ctx);

  return {
    props: {
      levels,
      highestScoreCookie: highestScore || 0,
      hasPreloaded: hasPreloaded || false,
    },
  };
};

export default Main;
