import React, { FC, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectEvents, selectLoading } from '../store/events/selectors';
import { getEventsThunk } from '../store/events/actions';

export const Events: FC = () => {
    const dispatch = useDispatch();
    const events = useSelector(selectEvents);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const getFetchEvents = async () => {
        dispatch(getEventsThunk());
    };

    useEffect(() => {
        getFetchEvents();
    }, []);

    return (
        <>
            <h2>Events</h2>
            {error && <p>Ошибка запроса</p>}
            {loading && <CircularProgress />}
            <ul>
                {events.map((event: any) => (
                    <li key={event.id}>{event.title}</li>
                ))}
            </ul>
            <button onClick={getFetchEvents}>reload</button>
        </>
    )
}