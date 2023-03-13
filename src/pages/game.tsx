import type { GetServerSideProps, NextPage } from 'next';
import { Level } from '../types/level';

import useGame from '../hooks/useGame';

import Layout from '../components/layout';
import Game from '../components/game';
import EndGameModal from '../components/end-game-modal';
import { getCookie } from 'cookies-next';
import { useState } from 'react';
import { getAllLevels } from '../services/level';
import { useRouter } from 'next/router';
interface IMain {
  levels: Level[];
  highestScoreCookie: number;
}

const Main: NextPage<IMain> = ({ levels, highestScoreCookie }) => {
  const router = useRouter();
  const [openFinishGameModal, setOpenFinishGameModal] = useState(false);

  const { currentScore, currentLevel, previousAnswers, handleAnswer } = useGame(
    levels,
    highestScoreCookie,
    setOpenFinishGameModal
  );

  return (
    <Layout>
      <EndGameModal
        currentScore={currentScore}
        levels={levels}
        previousAnswers={previousAnswers}
        openFinishGameModal={openFinishGameModal}
        setOpenFinishGameModal={setOpenFinishGameModal}
        endGameTrigger={() => router.push('/')}
      />
      <Game
        currentScore={currentScore}
        currentLevel={currentLevel}
        handleGameAnswer={handleAnswer}
      />
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
