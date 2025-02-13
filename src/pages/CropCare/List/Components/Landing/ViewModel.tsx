import { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import IconCorn from '@/components/Icon/Crop/IconCorn';
import IconCassava from '@/components/Icon/Crop/IconCassava';
import MockPlannedLand from '@/Data/mock-planned-land.json';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export interface Props {
    onNextStep: (plantId?: string) => void;
}

const ViewModel = (props: Props) => {
    const { onNextStep } = props;
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { setShowHeader, setTitle, setupBackButton } = useContext(MobileHeaderContext);
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );

    const isFetchData = useRef<boolean>(false);
    const [showSearchPlant, setShowSearchPlant] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);

    const cropOptions = [
        {
            icon: <IconCorn className="w-8 h-8" />,
            label: 'ข้าวโพด',
            value: 'corn',
        },
        {
            icon: <IconCassava className="w-8 h-8" />,
            label: 'มันสำปะหลัง',
            value: 'cassava',
        },
    ];

    const setupPage = () => {
        setPageTitle(`${t('planLand.title')} | DOAE`);
        setShowHeader(true);
        setTitle(`${t('planLand.landingTitle')}`);
        setupBackButton(true, () => {
            setupBackButton(false);
            navigate('/home');
        });
    };

    const resetPage = () => {
        setShowHeader(false);
        setTitle('');
    };

    const fetchData = () => {
        setIsLoading(true);

        getAllActiveLand().then((response) => {
            setIsLoading(false);

            if (!response.success) {
                const toast = withReactContent(Swal).mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                });
                toast.fire({
                    icon: 'error',
                    title: 'Failed to fetch lands',
                    padding: '10px 20px',
                });
            }
        });
    };

    const onViewLand = (id: any) => {
        navigate(`/active-land/${id}`);
    };
    const onStartPlant = () => {
        navigate(`/start/select-land`);
    };
    const onViewDetail = (id: string, roundId: string) => {
        navigate(`/plan/${id}/round/${roundId}`);
    };
    const onFindPlant = () => {
        setShowSearchPlant(true);
    };

    const onSubmitSearchPlant = (crop: string) => {
        setShowSearchPlant(false);
        onNextStep(crop);
    };

    const onCloseSearchPlant = () => {
        setShowSearchPlant(false);
    };

    const generateIcon = (crop: string) => {
        switch (crop) {
            case 'corn':
                return <IconCorn className="w-20 h-20" />;
            case 'cassava':
                return <IconCassava className="w-20 h-20" />;
            default:
                return null;
        }
    };

    useEffect(() => {
        setupPage();

        return () => {
            resetPage();
        };
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return {
        t,
        showSearchPlant,
        cropOptions,
        isLoading,
        onViewLand,
        onViewDetail,
        onNextStep,
        onFindPlant,
        onSubmitSearchPlant,
        onCloseSearchPlant,
        onStartPlant,
    };
};

export default ViewModel;
