import {
  ADD_TRAINING_DAY,
  TraningDayActionTypes,
  TraingDay,
  TraingDayState,
  UPDATE_REDUX_STORE,
} from '../action/types';

const initialState: TraingDayState = {
  data: [],
};

const TraingDayReducer = (
  state = initialState,
  action: TraningDayActionTypes,
): TraingDayState => {
  switch (action.type) {
    case ADD_TRAINING_DAY: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case UPDATE_REDUX_STORE: {
      return {
        ...state,
        data: action.payload,
      };
    }

    default:
      return state;
  }
};

export default TraingDayReducer;
