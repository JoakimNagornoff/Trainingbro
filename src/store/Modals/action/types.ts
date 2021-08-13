export const SHOW_TRAININGDAY_MODAL = 'SHOW_TRAININGDAY_MODAL';
export const HIDE_TRAININGDAY_MODAL = 'HIDE_TRAININGDAY_MODAL';

export interface ModalState {
  openTrainingDayModal: boolean;
}

interface showTrainingDayModal {
  type: typeof SHOW_TRAININGDAY_MODAL;
  payload: boolean;
}

interface hideTrainingDayModal {
  type: typeof HIDE_TRAININGDAY_MODAL;
  payload: boolean;
}

export type ModalActionType = showTrainingDayModal | hideTrainingDayModal;
