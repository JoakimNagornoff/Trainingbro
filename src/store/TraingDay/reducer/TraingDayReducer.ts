import {
  ADD_TRAINING_DAY,
  TraningDayActionTypes,
  TraingDay,
  TraingDayState,
  UPDATE_REDUX_STORE,
  RESET_STORE,
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
      const newDay = action.payload;
      return {
        ...state,
        data: [...state.data, newDay],
      };
    }
    case UPDATE_REDUX_STORE: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case RESET_STORE: {
      return initialState;
    }

    default:
      return state;
  }
};

export default TraingDayReducer;
