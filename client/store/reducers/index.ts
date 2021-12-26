import { AnyAction, combineReducers } from 'redux';
import { playerReducer } from './playerReducer';

export const rootReducer = combineReducers({
  player: playerReducer
});

export const reducer = (state: RootState | undefined, action: AnyAction) => {
  return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
