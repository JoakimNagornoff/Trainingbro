export const ADD_TRAINING_DAY = 'ADD_TRAINING_DAY';
export const UPDATE_REDUX_STORE = 'UPDATE_REDUX_STORE';

export interface TraingDay {
  id: string;
  trainingday: {
    squat: number;
    bench: number;
    axel: number;
    mark: number;
  };
}
export interface TraingDayState {
  data: TraingDay[];
}

interface AddTrainingDayAction {
  type: typeof ADD_TRAINING_DAY;
  payload: TraingDay[];
}
interface UPDATE_REDUX_STORE {
  type: typeof UPDATE_REDUX_STORE;
  payload: TraingDay[];
}

export type TraningDayActionTypes = AddTrainingDayAction | UPDATE_REDUX_STORE;
