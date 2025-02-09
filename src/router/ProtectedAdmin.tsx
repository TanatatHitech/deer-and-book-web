import { useState, useEffect, useRef, Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { useAdminAuthStore } from '@/store/admin-auth';
import { useShallow } from 'zustand/react/shallow';

export const ProtectedAdmin: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const { verify } = useAdminAuthStore(
        useShallow((state) => ({
            verify: state.verify,
        }))
    );
    const hasChecked = useRef(false);

    const handleCheck = () => {
        if (hasChecked.current) return;
        hasChecked.current = true;

        setIsAuthenticated(true);
        setIsChecked(true);

        verify().then((response) => {
            if (response.success) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
            setIsChecked(true);
        });
    };

    useEffect(() => {
        handleCheck();
    }, []);

    if (!isChecked) {
        return null;
    }

    return isAuthenticated ? <Fragment>{children}</Fragment> : <Navigate to="/admin/auth/signin" />;
};
