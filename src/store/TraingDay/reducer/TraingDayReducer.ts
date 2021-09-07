import {
  ADD_TRAINING_DAY,
  TraningDayActionTypes,
  TraingDay,
  TraingDayState,
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

    default:
      return state;
  }
};

export default TraingDayReducer;
