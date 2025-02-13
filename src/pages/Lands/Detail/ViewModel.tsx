import { useContext, useEffect } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { useNavigate, useParams } from 'react-router-dom';
import MockLandData from '@/Data/mock-land.json';

const ViewModel = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );
    const { setShowHeader, setTitle, setupBackButton } = useContext(MobileHeaderContext);
    const data: any = MockLandData
        ? {
              ...MockLandData,
              location: `${MockLandData.address} ${MockLandData.tumbon.name} ${MockLandData.amphure.name} ${MockLandData.province.name} ${MockLandData.tumbon.zipCode}`,
          }
        : {};

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
    const handleBackLand = () => {
        navigate('/land');
    };
    const onViewBoundaryMap = () => {
        navigate(`/land/${id}/boundary-map`);
    };

    useEffect(() => {
        setupPage();
        // Mock fetch data
        // getLand(Number(id));
    }, [id]);

    useEffect(() => {
        return () => {
            setShowHeader(false);
            setTitle('');
        };
    }, []);

    return {
        data,
        onViewBoundaryMap,
        handleBackLand,
    };
};

export default ViewModel;
