import { useContext, useEffect, useState } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { useNavigate } from 'react-router-dom';
import MockLandData from '@/Data/mock-lands.json';
import { useLandStore } from '@/store/landStore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ViewModel = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );
    const { setShowHeader, setTitle, setupBackButton } = useContext(MobileHeaderContext);

    const data: any = MockLandData.map((item) => ({
        ...item,
        location: `${item.tumbon.name} ${item.amphure.name} ${item.province.name}`,
    }));

    const setupPage = () => {
        setPageTitle(`แปลงที่ดิน | DOAE`);
        setShowHeader(true);
        setTitle('พื้นที่แปลงปลูก');
        setupBackButton(true, () => {
            setupBackButton(false);
            navigate('/home');
        });
    };

    const onclickNewGAP = () => {
        navigate('/land/gap/select');
    };
    const onclickViewGAP = () => {
        navigate('/land/gap/view');
    };
    const onclickRenewGAP = () => {
        navigate('/land/gap/renew');
    };
    const onViewLand = (landId: string) => {
        navigate(`/land/${landId}`);
    };

    const { lands, getAllLands, clearState } = useLandStore(
        useShallow((state) => ({
            lands: state.lands,
            getAllLands: state.getAllLands,
            clearState: state.clearState,
        }))
    );

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

    return { lands, data, isLoading, onViewLand, onclickNewGAP, onclickViewGAP, onclickRenewGAP };
};

export default ViewModel;
