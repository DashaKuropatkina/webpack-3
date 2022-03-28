import { ERROR, GET_EVENTS, LOADING } from './actions';

export type EventsActions = GetEvents | FetchLoading | FetchError;

export interface GetEvents {
    type: typeof GET_EVENTS;
    events: any;
}

export interface FetchLoading {
    type: typeof LOADING;
    loading: boolean;
};

export interface FetchError {
    type: typeof ERROR;
    error: boolean;
};