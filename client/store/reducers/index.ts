import { AnyAction, combineReducers } from 'redux';
import { PlayerAction, playerReducer } from './playerReducer';
import { HYDRATE } from 'next-redux-wrapper';
import { trackReducer } from './trackReducer';
import { TrackAction } from '@/types/track';

const rootReducer = combineReducers({
  player: playerReducer,
  track: trackReducer,
});

export const reducer = (
  state: RootState | undefined, 
  action: PlayerAction | TrackAction | { type: typeof HYDRATE; payload: any }
): RootState => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };

    if (state?.player) {
      nextState.player = state.player;
    }

    return nextState;
  }

  return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;