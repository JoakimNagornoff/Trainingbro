import {
  SHOW_TRAININGDAY_MODAL,
  HIDE_TRAININGDAY_MODAL,
  ModalActionType,
  ModalState,
} from '../action/types';

const initialState: ModalState = {
  openTrainingDayModal: false,
};

const modalReducer = (
  state = initialState,
  action: ModalActionType,
): ModalState => {
  switch (action.type) {
    case SHOW_TRAININGDAY_MODAL: {
      return {
        ...state,
        openTrainingDayModal: action.payload,
      };
    }
    case HIDE_TRAININGDAY_MODAL: {
      return {
        ...state,
        openTrainingDayModal: action.payload,
      };
    }
    default:
      return state;
  }
};

export default modalReducer;
