import { StoreState } from '..';

export function selectEvents(state: StoreState) {
    return state.events.events;
}

export function selectError(state: StoreState) {
    return state.events.error;
}

export function selectLoading(state: StoreState) {
    return state.events.loading;
}