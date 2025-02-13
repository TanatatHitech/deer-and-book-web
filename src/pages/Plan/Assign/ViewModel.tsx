import { useContext, useEffect, useState } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { useNavigate, useParams } from 'react-router-dom';
import IconCorn from '@/components/Icon/Crop/IconCorn';
import IconCassava from '@/components/Icon/Crop/IconCassava';
import IconPlant from '@/components/Icon/Crop/IconPlant';
import IconCorn2 from '@/components/Icon/Crop/IconCorn2';

const ViewModel = () => {
    const { id, id: landId } = useParams();
    const navigate = useNavigate();
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );
    const { setShowHeader, setTitle, setupBackButton } = useContext(MobileHeaderContext);
    const [step, setStep] = useState(1);

    const setupPage = () => {
        setPageTitle(`Crop Care | DOAE`);
        setShowHeader(true);
        setTitle('Crop Care : Field A');
        setupBackButton(true, () => {
            setupBackButton(false);
            navigate('/plan');
        });
    };

    const onViewPlan = (id: string) => {
        navigate(`/plan/${id}`);
    };

    const generateIcon = (cropType: string) => {
        switch (cropType) {
            case 'corn':
                return <IconCorn2 className="w-20 h-20" />;
            case 'cassava':
                return <IconCassava className="w-20 h-20" />;
            case 'taro':
                return <IconPlant className="w-20 h-20" />;
            case 'apple':
                return <IconPlant className="w-20 h-20" />;
            default:
                return null;
        }
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
        plans: [],
        onSelectPlan: () => {},
        onViewPlan,
        step,
        setStep,
    };
};

export default ViewModel;
