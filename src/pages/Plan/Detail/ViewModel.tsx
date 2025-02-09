import { useContext, useEffect, useState } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { useNavigate, useParams } from 'react-router-dom';
import MockLandData from '@/Data/mock-land.json';
import { useCropPlanStore } from '@/store/cropPlanStore';

const ViewModel = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );
    const { setShowHeader, setTitle, setupBackButton } = useContext(MobileHeaderContext);
    const { plan, getPlanById } = useCropPlanStore(
        useShallow((state) => ({
            plan: state.plan,
            getPlanById: state.getPlanById,
        }))
    );

    useEffect(() => {
        console.log('Current plan:', plan);
    }, [plan]);

    const [planDetails, setPlanDetails] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const setupPage = () => {
        setPageTitle(`รายละเอียดแปลงที่ดิน | DOAE`);
        setShowHeader(true);
        setTitle('รายละเอียดแปลงที่ดิน');
        // setupBackButton(false, () => {});
        setupBackButton(true, () => {
            setupBackButton(false);
            navigate('/land/my-land');
        });
    };
    const handleBackPlan = () => {
        navigate('/plan');
    };
    const onViewBoundaryMap = () => {
        navigate(`/land/${id}/boundary-map`);
    };

    const fetchPlanDetails = async () => {
        if (!id) return;

        setLoading(true);
        setError(null);
        const response = await getPlanById(Number(id));
        if (response.success) {
            console.log('Fetched plan:', response.data);
            setPlanDetails(response.data);
        } else {
            setError('Failed to fetch plan details');
        }
        setLoading(false);
    };

    useEffect(() => {
        setupPage();
        fetchPlanDetails();
    }, []);

    useEffect(() => {
        return () => {
            setShowHeader(false);
            setTitle('');
        };
    }, []);

    return {
        planDetails: plan,
        loading,
        error,
        onViewBoundaryMap,
        handleBackPlan,
    };
};

export default ViewModel;
