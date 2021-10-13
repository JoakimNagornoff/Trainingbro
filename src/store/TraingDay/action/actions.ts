import {
  ADD_TRAINING_DAY,
  TraningDayActionTypes,
  TraingDayState,
  TraingDay,
  UPDATE_REDUX_STORE,
} from './types';

export const addTraningDay = (data: TraingDay[]): TraningDayActionTypes => {
  return {
    type: ADD_TRAINING_DAY,
    payload: data,
  };
};

export const UpdateReduxData = (data: TraingDay[]): TraningDayActionTypes => {
  return {
    type: UPDATE_REDUX_STORE,
    payload: data,
  };
};
