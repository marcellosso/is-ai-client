export enum LEVEL_TYPE_ENUM {
  HUMAN = 'human',
  AI = 'ai',
}

export type Level = {
  _id?: string;
  image_name: string;
  type: LEVEL_TYPE_ENUM;
  answered_ai: number;
  answered_human: number;
};

export type PreviousAnswerLevel = {
  levelId: string;
  answer: LEVEL_TYPE_ENUM;
};
