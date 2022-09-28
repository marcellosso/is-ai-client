import type { GetServerSideProps, NextPage } from 'next';
import { Level } from '../types/level';
import { getAllLevels } from '../services/level';

import useGame from '../hooks/useGame';

import Layout from '../components/layout';
import StartGame from '../components/start-game';
import Game from '../components/game';
import { getCookie } from 'cookies-next';

interface IMain {
  levels: Level[];
  highestScoreCookie: number;
}

const Main: NextPage<IMain> = ({ levels, highestScoreCookie }) => {
  const {
    gameStarted,
    setGameStarted,
    currentScore,
    currentLevel,
    highestScoreClientState,
    handleAnswer,
  } = useGame(levels, highestScoreCookie);

  return (
    <Layout>
      {!gameStarted ? (
        <StartGame
          highestScore={highestScoreClientState}
          setGameStarted={setGameStarted}
        />
      ) : (
        <Game
          currentScore={currentScore}
          currentLevel={currentLevel}
          handleAnswer={handleAnswer}
        />
      )}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const levels = await getAllLevels();
  const highestScore = getCookie('highestScore', ctx);

  return { props: { levels, highestScoreCookie: highestScore || 0 } };
};

export default Main;
