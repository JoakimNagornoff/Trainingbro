export const ADD_TRAINING_DAY = 'ADD_TRAINING_DAY';

export interface TraingDay {
  id: string;
  trainingday: {
    name: string;
  };
}
export interface TraingDayState {
  data: TraingDay[];
}
interface AddTrainingDayAction {
  type: typeof ADD_TRAINING_DAY;
  payload: TraingDay[];
}

export type TraningDayActionTypes = AddTrainingDayAction;
