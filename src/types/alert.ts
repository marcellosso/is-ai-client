export enum ALERT_SEVERITY {
  ERROR = 'red',
  WARNING = 'yellow',
  INFO = 'blue',
}

export type Alert = {
  severity?: ALERT_SEVERITY;
  message?: string;
};
