import { setCookie } from 'cookies-next';
import { useState } from 'react';
import { updateLevelsAnswers } from '../services/level';
import { Alert } from '../types/alert';
import { Level, LEVEL_TYPE_ENUM, PreviousAnswerLevel } from '../types/level';

const LIMIT_LEVEL_AMOUNT = process.env.NEXT_PUBLIC_LIMIT_LEVEL_AMOUNT || 5;

const useGame = (levels: Level[], highestScoreCookie: number) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [alert, setAlert] = useState<Alert>({});

  const [previousAnswers, setPreviousAnswers] = useState<PreviousAnswerLevel[]>(
    []
  );

  const [highestScoreClientState, setHighestScoreClientState] =
    useState(highestScoreCookie);

  const getRandomLevel = (prevAnswers: PreviousAnswerLevel[] = []) => {
    const excludedLevels = prevAnswers.slice(-LIMIT_LEVEL_AMOUNT);
    const possibleLevels = levels.filter(
      (level) => !excludedLevels.some((el) => el.levelId == level._id)
    );

    return possibleLevels[
      Math.round(Math.random() * (possibleLevels.length - 1))
    ];
  };

  const [currentLevel, setCurrentLevel] = useState(getRandomLevel);

  const handleCorrectAnswer = () => {
    setCurrentScore((prevCurrentScore) => prevCurrentScore + 1);

    const newPreviousAnswers = [...previousAnswers];

    newPreviousAnswers.push({
      levelId: currentLevel._id as string,
      answer: currentLevel.type,
    });

    setPreviousAnswers(newPreviousAnswers);

    setCurrentLevel(getRandomLevel(newPreviousAnswers));
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
    if (currentScore > highestScoreCookie) updateHighScore();
    setCurrentScore(0);
    setGameStarted(false);

    const newPreviousAnswers = [...previousAnswers];

    newPreviousAnswers.push({
      levelId: currentLevel._id as string,
      answer:
        currentLevel.type == LEVEL_TYPE_ENUM.HUMAN
          ? LEVEL_TYPE_ENUM.AI
          : LEVEL_TYPE_ENUM.HUMAN,
    });

    updateAnswers(newPreviousAnswers);
    setCurrentLevel(getRandomLevel());
  };

  const handleAnswer = (choosenLevelType: LEVEL_TYPE_ENUM) => {
    if (choosenLevelType == currentLevel.type) handleCorrectAnswer();
    else endGame();
  };

  return {
    alert,
    setAlert,
    gameStarted,
    setGameStarted,
    currentScore,
    setCurrentScore,
    currentLevel,
    highestScoreClientState,
    handleAnswer,
  };
};

export default useGame;
