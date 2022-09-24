export enum LEVEL_TYPE_ENUM {
  HUMAN = 'human',
  AI = 'ai',
}

export type Level = {
  imageName: string;
  source_uri: string;
  description: string;
  type: LEVEL_TYPE_ENUM;
};
