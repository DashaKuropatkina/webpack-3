import { ERROR, GET_EVENTS, LOADING } from './actions';
import { Reducer } from 'redux';
import { EventsActions } from './types';

export interface EventsState {
  loading: boolean,
  error: boolean,
  events: any,
}

const initialStateEvents: EventsState = {
  loading: false,
  error: false,
  events: [],
}

export const eventsReducer: Reducer<EventsState, EventsActions> = (
  state = initialStateEvents,
  action
) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    case ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case GET_EVENTS: {
      return {
        ...state,
        articles: action.events,
      };
    }
    default: {
      return state;
    }
  }
};