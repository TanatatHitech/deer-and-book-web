import { useState, useEffect, useRef, Fragment } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const hasChecked = useRef(false);

    const handleCheck = () => {
        if (hasChecked.current) return;
        hasChecked.current = true;

        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
        setIsChecked(true);
    };

    useEffect(() => {
        handleCheck();
    }, []);

    if (!isChecked) {
        return null;
    }

    return isAuthenticated ? <Fragment>{children}</Fragment> : <Navigate to="/" />;
};
