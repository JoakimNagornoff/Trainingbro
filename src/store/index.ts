import {combineReducers} from 'redux';
import {TraingDayState} from './TraingDay/action/types';
import {ModalState} from './Modals/action/types';
import {FirebaseState} from './Firebase/action/types';

import TraingDayReducer from './TraingDay/reducer/TraingDayReducer';
import ModalReducer from './Modals/reducer/modalReducer';
import firebaseReducer from './Firebase/reducer/firebaseReducer';

export interface ApplicationState {
  trainingDay: TraingDayState;
  modals: ModalState;
  firebase: FirebaseState;
}

const rootReducer = combineReducers({
  traingDay: TraingDayReducer,
  modals: ModalReducer,
  firebase: firebaseReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
