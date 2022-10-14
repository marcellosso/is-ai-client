export enum USER_ROLE_ENUM {
  ADMIN = 'admin',
  USER = 'user',
}

export type User = {
  username: string;
  email: string;
  role: USER_ROLE_ENUM;
  token: string;
};
