import { createContext, useContext } from 'react';
import { Level } from '../types/level';

type GameProviderTypes = {
  levels: Level[];
};

interface IGameProvider {
  children: React.ReactElement;
  levels: Level[];
}

const GameContext = createContext<GameProviderTypes>({} as GameProviderTypes);

export const useGameContext = () => useContext(GameContext);

export const GameProvider: React.FC<IGameProvider> = ({ children, levels }) => {
  return (
    <GameContext.Provider value={{ levels }}>{children}</GameContext.Provider>
  );
};
