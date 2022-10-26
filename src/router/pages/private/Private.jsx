import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Private = ({children}) => {
    const {loading, currentUser} = useAuth();
    const location = useLocation();

    if(!loading) {
        if (currentUser && currentUser?.uid) {
            return (
                children
            );
        }
        return <Navigate to='/login' state={{from: location}} replace />
    }
};

export default Private;