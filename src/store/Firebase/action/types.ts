export const FIREBASE_SUBMIT = 'FIREBASE_SUBMIT';
export const FIREBASE_SUBMIT_PENDING = 'FIREBASE_SUBMIT_PENDING';
export const FIREBASE_SUBMIT_FULFILLED = 'FIREBASE_SUBMIT_FULFILLED';
export const FIREBASE_SUBMIT_REJECTED = 'FIREBASE_SUBMIT_REJECTED';

export type FirebaseState = {
  fireBasePending: boolean;
  fireBaseSuccess: boolean;
  fireBaseError: string;
};

interface FirebaseSubmitAction {
  type: typeof FIREBASE_SUBMIT;
  payload: any;
}
interface FirebaseSubmitPendingAction {
  type: typeof FIREBASE_SUBMIT_PENDING;
  payload: any;
}
interface FirebaseSubmitRejectedAction {
  type: typeof FIREBASE_SUBMIT_REJECTED;
  payload: any;
}
interface FirebaseSubmitFulfilledAction {
  type: typeof FIREBASE_SUBMIT_FULFILLED;
  payload: any;
}

export type FirebaseActionTypes =
  | FirebaseSubmitAction
  | FirebaseSubmitPendingAction
  | FirebaseSubmitRejectedAction
  | FirebaseSubmitFulfilledAction;
