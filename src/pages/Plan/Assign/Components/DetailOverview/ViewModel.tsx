import { useContext, useEffect, useState } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { useNavigate, useParams } from 'react-router-dom';
import { useLandStore } from '@/store/landStore';

const ViewModel = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );
    const { setShowHeader, setTitle, setupBackButton } = useContext(MobileHeaderContext);
    const { lands, getAllLands } = useLandStore();

    const setupPage = () => {
        setPageTitle(`Crop Care | DOAE`);
        setShowHeader(true);
        setTitle('Crop Care : Field A');
        setupBackButton(true, () => {
            setupBackButton(false);
            navigate('/start');
        });
        getAllLands();
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
        lands,
        onSelectPlan,
    };
};

export default ViewModel;
