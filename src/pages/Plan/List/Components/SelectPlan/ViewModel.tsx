import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import IconCorn from '@/components/Icon/Crop/IconCorn';
import IconCassava from '@/components/Icon/Crop/IconCassava';

export interface Props {
    onBack?: () => void;
    onNextStep: (landId: string) => void;
    lands: any[];
    getAllLands: () => Promise<any>;
    clearState: () => void;
}

const ViewModel = (props: Props) => {
    const { onNextStep, onBack, lands, getAllLands, clearState } = props;
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { setShowHeader, setTitle } = useContext(MobileHeaderContext);
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );

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
    };

    const onViewPlan = (id: string) => {
        navigate(`/plan/${id}`);
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

    const fetchData = () => {
        setIsLoading(true);
        getAllLands().then((response) => {
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

    const landData = lands.map((item) => ({
        id: item.id,
        farmerId: item.farmerId,
        plantDate: item.plantDate,
        expectedHarvestDate: item.expectedHarvestDate,
        seedQuantity: item.seedQuantity,
        notes: item.notes,
        plantId: item.plantId,
        isFavorite: item.isFavorite,
        icon: generateIcon(item.plantId),
        location: `แม่แรม แม่ริม`, // Adjust as needed
    }));

    useEffect(() => {
        setupPage();
        fetchData();
    }, []);

    useEffect(() => {
        return () => {
            setShowHeader(false);
            setTitle('');
            clearState();
        };
    }, []);

    return {
        t,
        showSearchPlant,
        cropOptions,
        landData,
        isLoading,
        onViewPlan,
        onViewDetail,
        onNextStep,
        onFindPlant,
        onSubmitSearchPlant,
        onCloseSearchPlant,
    };
};

export default ViewModel;
