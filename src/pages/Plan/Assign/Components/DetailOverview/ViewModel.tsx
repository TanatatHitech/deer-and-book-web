import { useContext, useEffect, useState } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { useNavigate, useParams } from 'react-router-dom';

const ViewModel = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );
    const { setShowHeader, setTitle, setupBackButton } = useContext(MobileHeaderContext);

    const setupPage = () => {
        setPageTitle(`Crop Care | DOAE`);
        setShowHeader(true);
        setTitle('Crop Care : Field A');
        setupBackButton(true, () => {
            setupBackButton(false);
            navigate('/start');
        });
    };

    const onSelectPlan = (landId: string) => {
        navigate(`/start/select-land/${landId}/select-plan/`);
    };

    useEffect(() => {
        setupPage();
    }, []);

    useEffect(() => {
        return () => {
            setShowHeader(false);
            setTitle('');
        };
    }, []);

    return {
        onSelectPlan,
    };
};

export default ViewModel;
