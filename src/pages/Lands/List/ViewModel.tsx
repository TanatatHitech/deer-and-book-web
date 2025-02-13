import { useContext, useEffect, useState } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { useNavigate } from 'react-router-dom';
import MockLandData from '@/Data/mock-lands.json';
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

    const onViewLand = (landId: string) => {
        navigate(`/land/${landId}`);
    };

    const fetchData = () => {
        setIsLoading(true);
        // Mock fetch data
        setTimeout(() => {
            setIsLoading(false);
            // Handle fetch failure
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
        }, 1000);
    };

    useEffect(() => {
        setupPage();
        fetchData();
    }, []);

    useEffect(() => {
        return () => {
            setShowHeader(false);
            setTitle('');
        };
    }, []);

    return { data, onViewLand, isLoading };
};

export default ViewModel;
