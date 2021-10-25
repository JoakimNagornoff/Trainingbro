import {combineReducers} from 'redux';
import {TraingDayState} from './TraingDay/action/types';
import {ModalState} from './Modals/action/types';

import TraingDayReducer from './TraingDay/reducer/TraingDayReducer';
import ModalReducer from './Modals/reducer/modalReducer';

export interface ApplicationState {
  trainingDay: TraingDayState;
  modals: ModalState;
}

const rootReducer = combineReducers({
  traingDay: TraingDayReducer,
  modals: ModalReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
