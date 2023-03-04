export enum LEVEL_TYPE_ENUM {
  HUMAN = 'human',
  AI = 'ai',
}

export type Level = {
  _id?: string;
  imageName: string;
  source_uri: string;
  description: string;
  type: LEVEL_TYPE_ENUM;
  answered_ai: number;
  answered_human: number;
};

export type PreviousAnswerLevel = {
  levelId: string;
  answer: LEVEL_TYPE_ENUM;
};
