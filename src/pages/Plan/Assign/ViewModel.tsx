import { useContext, useEffect, useState } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { useNavigate, useParams } from 'react-router-dom';
import { useCropPlanStore } from '@/store/cropPlanStore';
import IconCorn from '@/components/Icon/Crop/IconCorn';
import IconCassava from '@/components/Icon/Crop/IconCassava';
import IconPlant from '@/components/Icon/Crop/IconPlant';
import IconCorn2 from '@/components/Icon/Crop/IconCorn2';

const ViewModel = () => {
    const { id, id: landId } = useParams();
    const navigate = useNavigate();
    const { plans, getAllPlans, assignCropPlan } = useCropPlanStore();
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
    const onSelectPlan = async (cropPlanId: string, startCropDate: string) => {
        if (landId) {
            await assignCropPlan(landId, cropPlanId, startCropDate);
            navigate('/start');
        } else {
            console.error('landId is undefined');
        }
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
        getAllPlans();
    }, []);

    useEffect(() => {
        return () => {
            setShowHeader(false);
            setTitle('');
        };
    }, []);

    return {
        plans: plans.map((plan) => ({
            ...plan,
            icon: generateIcon(plan.cropIcon),
        })),
        onSelectPlan,
        onViewPlan,
        step,
        setStep,
    };
};

export default ViewModel;
