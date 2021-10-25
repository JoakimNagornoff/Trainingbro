import {
  ADD_TRAINING_DAY,
  TraningDayActionTypes,
  TraingDayState,
  TraingDay,
  UPDATE_REDUX_STORE,
  ResetStoreAction,
  RESET_STORE,
} from './types';
import firestore from '@react-native-firebase/firestore';

export const addTraningDay = (
  squat: number,
  bench: number,
  axel: number,
  mark: number,
  date: Date,
): TraningDayActionTypes => {
  return {
    type: ADD_TRAINING_DAY,
    payload: firestore()
      .collection('TraniningDays')
      .add({TraningDay: {squat, bench, axel, mark, date}}),
  };
};

export const UpdateReduxData = (data: TraingDay[]): TraningDayActionTypes => {
  return {
    type: UPDATE_REDUX_STORE,
    payload: data,
  };
};

export const resetStore = (): ResetStoreAction => {
  return {
    type: RESET_STORE,
  };
};
