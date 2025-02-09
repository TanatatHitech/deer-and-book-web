import { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import IconCorn from '@/components/Icon/Crop/IconCorn';
import IconCassava from '@/components/Icon/Crop/IconCassava';
import MockPlannedLand from '@/Data/mock-planned-land.json';
import { useLandStore } from '@/store/landStore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export interface Props {
    onNextStep: (plantId?: string) => void;
}

// interface UseSetupPageProps {
//     navigate: ReturnType<typeof useNavigate>;
//     t: (key: string) => string;
//     setShowHeader: (show: boolean) => void;
//     setTitle: (title: string) => void;
//     setupBackButton: (show: boolean, onClick?: () => void) => void;
//     setPageTitle: (title: string) => void;
// }

// const useSetupPage = ({ navigate, t, setShowHeader, setTitle, setupBackButton, setPageTitle }: UseSetupPageProps) => {
//     useEffect(() => {
//         setPageTitle(`${t('planLand.title')} | DOAE`);
//         setShowHeader(true);
//         setTitle(`${t('planLand.landingTitle')}`);
//         setupBackButton(true, () => {
//             setupBackButton(false);
//             navigate('/home');
//         });

//         return () => {
//             setShowHeader(false);
//             setTitle('');
//         };
//     }, [navigate, t, setShowHeader, setTitle, setupBackButton, setPageTitle]);
// };

// interface UseFetchDataProps {
//     getAllActiveLand: () => Promise<{ success: boolean }>;
//     setIsLoading: (isLoading: boolean) => void;
//     clearState: () => void;
// }

// const useFetchData = ({ getAllActiveLand, setIsLoading, clearState }: UseFetchDataProps) => {
//     useEffect(() => {
//         setIsLoading(true);
//         getAllActiveLand().then((response) => {
//             setIsLoading(false);
//             if (!response.success) {
//                 const toast = withReactContent(Swal).mixin({
//                     toast: true,
//                     position: 'top-end',
//                     showConfirmButton: false,
//                     timer: 3000,
//                 });
//                 toast.fire({
//                     icon: 'error',
//                     title: 'Failed to fetch lands',
//                     padding: '10px 20px',
//                 });
//             }
//         });

//         return () => {
//             clearState();
//         };
//     }, [getAllActiveLand, setIsLoading, clearState]);
// };

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

    const { lands, getAllActiveLand, clearState } = useLandStore(
        useShallow((state) => ({
            lands: state.lands,
            getAllActiveLand: state.getAllActiveLand,
            clearState: state.clearState,
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

    // useSetupPage({ navigate, t, setShowHeader, setTitle, setupBackButton, setPageTitle });
    // useFetchData({ getAllActiveLand, setIsLoading, clearState });

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

    useEffect(() => {
        return () => {
            clearState();
        };
    }, []);

    return {
        t,
        showSearchPlant,
        cropOptions,
        isLoading,
        lands,
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
