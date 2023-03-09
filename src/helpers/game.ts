import { Level } from '../types/level';

const toPercent = (numerator: number, denominator: number) => {
  let percentResult = (numerator / denominator) * 100;
  if (isNaN(percentResult)) percentResult = 50;

  return percentResult.toFixed(2) + '%';
};

export const getLevelAnswerPercentage = (level: Level) => {
  const totalAmountOfAnswers = level.answered_ai + level.answered_human;
  const percentageAnsweredAi = toPercent(
    level.answered_ai,
    totalAmountOfAnswers
  );
  const percentageAnsweredHuman = toPercent(
    level.answered_human,
    totalAmountOfAnswers
  );

  return { percentageAnsweredAi, percentageAnsweredHuman };
};
