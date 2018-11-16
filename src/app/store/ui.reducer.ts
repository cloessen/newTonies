import { UIActionTypes, UIActions } from './ui.actions';

export interface State {
  isLoading: boolean;
}

const INITIAL_STATE: State = {
  isLoading: false
};

export function uiReducer(state = INITIAL_STATE, action: UIActions) {
  switch (action.type) {
    case UIActionTypes.START_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case UIActionTypes.STOP_LOADING: {
      return {
        ...state,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
}
