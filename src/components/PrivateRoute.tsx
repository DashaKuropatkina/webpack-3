import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';
import { StoreState } from '../store';

const PrivateRoute: React.FC<RouteProps> = (routeProps) => {
    const isAuth = useSelector((state: StoreState) => state.profile.isAuth);

    return isAuth ? <Route {...routeProps} /> : <Redirect to="signin" />;
};

export default PrivateRoute;