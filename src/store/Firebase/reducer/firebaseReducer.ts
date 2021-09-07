import {
  FIREBASE_SUBMIT_FULFILLED,
  FIREBASE_SUBMIT_PENDING,
  FIREBASE_SUBMIT_REJECTED,
  FirebaseState,
  FirebaseActionTypes,
} from '../action/types';
const initialState: FirebaseState = {
  fireBasePending: false,
  fireBaseSuccess: false,
  fireBaseError: '',
};

const firebaseReducer = (
  state = initialState,
  action: FirebaseActionTypes,
): FirebaseState => {
  switch (action.type) {
    case FIREBASE_SUBMIT_REJECTED:
      return {
        ...state,
        fireBaseError: 'Något gick fel.',
        fireBasePending: false,
      };
    case FIREBASE_SUBMIT_PENDING:
      return {
        ...state,
        fireBasePending: true,
      };
    case FIREBASE_SUBMIT_FULFILLED:
      return {
        ...state,
        fireBaseSuccess: true,
        fireBasePending: false,
      };
    default:
      return state;
  }
};

export default firebaseReducer;
