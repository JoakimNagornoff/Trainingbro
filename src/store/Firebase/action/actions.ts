import {RootState} from '../..';
import {FirebaseState, FirebaseActionTypes, FIREBASE_SUBMIT} from './types';
import firestore from '@react-native-firebase/firestore';
export const submitToFirebase = (
  squat: number,
  bench: number,
  axel: number,
  mark: number,
  date: Date,
): FirebaseActionTypes => {
  return {
    type: FIREBASE_SUBMIT,
    payload: firestore()
      .collection('TraniningDays')
      .add({TraningDay: {squat, bench, axel, mark, date}}),
  };
};
