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

    const data: any = MockLandData;

    const setupPage = () => {
        setPageTitle(`รายละเอียดแปลงที่ดิน | DOAE`);
        setShowHeader(true);
        setTitle('รายละเอียดแปลงที่ดิน');
        setupBackButton(true, () => {
            navigate(`/land/${id}`);
            setupBackButton(false);
        });
    };

    const setupMainWrapperPadding = () => {
        const element = document.querySelector('#content-wrapper');
        if (element) {
            element.classList.remove('p-6');
        }
    };

    const setupBackMainWrapperPadding = () => {
        const element = document.querySelector('#content-wrapper');
        if (element) {
            element.classList.add('p-6');
        }
    }

    useEffect(() => {
        setupPage();
        setupMainWrapperPadding();
    }, []);

    useEffect(() => {
        return () => {
            setShowHeader(false);
            setTitle('');
            setupBackMainWrapperPadding();
        };
    }, []);

    return {
        data,
    };
};

export default ViewModel;
