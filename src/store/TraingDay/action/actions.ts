import {
  ADD_TRAINING_DAY,
  TraningDayActionTypes,
  TraingDayState,
  TraingDay,
} from './types';

export const addTraningDay = (data: TraingDay[]): TraningDayActionTypes => {
  return {
    type: ADD_TRAINING_DAY,
    payload: data,
  };
};
