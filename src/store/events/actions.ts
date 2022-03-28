import { Dispatch } from "react";
import { apiUrl2 } from "../../constants";

export const LOADING = 'EVENTS::LOADING';
export const ERROR = 'EVENTS::ERROR';
export const GET_EVENTS = 'EVENTS::GET_EVENTS';

export const getEvents = (events: any) => ({
  type: GET_EVENTS,
  events,
});

export const fetchLoading = (loading: boolean) => ({
  type: LOADING,
  loading,
});

export const fetchError = (error: boolean) => ({
  type: ERROR,
  error,
});

export const getEventsThunk = () => async (dispatch: Dispatch) => {
  dispatch(fetchLoading(true));
  dispatch(getEvents([]));
  dispatch(fetchError(false));

  try {
    const res = await fetch(apiUrl2);

    if (!res.ok) {
      throw new Error('response not ok');
    }

    const events = await res.json();
    dispatch(getEvents(events));
  } catch (err) {
    dispatch(fetchError(true));
  } finally {
    dispatch(fetchLoading(false));
  }
};