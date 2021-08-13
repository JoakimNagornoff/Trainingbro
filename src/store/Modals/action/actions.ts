import {SHOW_TRAININGDAY_MODAL, HIDE_TRAININGDAY_MODAL} from './types';

export const showTrainigdayModal = () => {
  return {
    type: SHOW_TRAININGDAY_MODAL,
    payload: true,
  };
};
export const hideTrainingDayModal = () => {
  return {
    type: HIDE_TRAININGDAY_MODAL,
    payload: false,
  };
};
