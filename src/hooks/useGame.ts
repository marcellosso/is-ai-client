import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { updateLevelsAnswers } from '../services/level';
import { Level, LEVEL_TYPE_ENUM, PreviousAnswerLevel } from '../types/level';

const useGame = (
  levels: Level[],
  highestScoreCookie: number,
  setFinishedGameModal: (_v: boolean) => void
) => {
  const router = useRouter();

  const [currentScore, setCurrentScore] = useState(0);

  const [previousAnswers, setPreviousAnswers] = useState<PreviousAnswerLevel[]>(
    []
  );

  const [highestScoreClientState, setHighestScoreClientState] =
    useState(highestScoreCookie);

  const getRandomLevel = (prevAnswers: PreviousAnswerLevel[] = []) => {
    const possibleLevels = levels.filter(
      (level) => !prevAnswers.some((el) => el.levelId == level._id)
    );

    if (possibleLevels.length == 0) {
      return levels[Math.round(Math.random() * (levels.length - 1))];
    }

    return possibleLevels[
      Math.round(Math.random() * (possibleLevels.length - 1))
    ];
  };

  const [currentLevel, setCurrentLevel] = useState(getRandomLevel);

  const handleCorrectAnswer = (localPreviousAnswers = previousAnswers) => {
    setCurrentScore((prevCurrentScore) => prevCurrentScore + 1);
    setCurrentLevel(getRandomLevel(localPreviousAnswers));
  };

  const updateHighScore = () => {
    setCookie('highestScore', currentScore);
    setHighestScoreClientState(currentScore);
  };

  const updateAnswers = (newPrevAnswers: PreviousAnswerLevel[]) => {
    setPreviousAnswers([]);
    updateLevelsAnswers(newPrevAnswers);
  };

  const endGame = () => {
    router.push('/');
    if (currentScore > highestScoreCookie) updateHighScore();
    setCurrentScore(0);

    updateAnswers(previousAnswers);
    setCurrentLevel(getRandomLevel());
  };

  const handleAnswer = (choosenLevelType: LEVEL_TYPE_ENUM) => {
    const newPreviousAnswers = [...previousAnswers];

    if (choosenLevelType == currentLevel.type) {
      newPreviousAnswers.push({
        levelId: currentLevel._id as string,
        answer: currentLevel.type,
      });
      handleCorrectAnswer(newPreviousAnswers);
    } else {
      newPreviousAnswers.push({
        levelId: currentLevel._id as string,
        answer:
          currentLevel.type == LEVEL_TYPE_ENUM.HUMAN
            ? LEVEL_TYPE_ENUM.AI
            : LEVEL_TYPE_ENUM.HUMAN,
      });

      setFinishedGameModal(true);
    }

    setPreviousAnswers(newPreviousAnswers);
  };

  return {
    currentScore,
    setCurrentScore,
    currentLevel,
    previousAnswers,
    highestScoreClientState,
    handleAnswer,
    endGame,
  };
};

export default useGame;
