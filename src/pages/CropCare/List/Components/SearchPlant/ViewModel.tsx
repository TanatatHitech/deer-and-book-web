import { useState, useContext, useEffect } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import IconGoldGrainRice from '@/components/Icon/Crop/IconGoldGrainRice';
import IconCorn from '@/components/Icon/Crop/IconCorn';
import IconCassava from '@/components/Icon/Crop/IconCassava';

export interface Props {
    isOpen: boolean;
    handleSubmit: (crop: string) => void;
    handleClose: () => void;
}

const ViewModel = (props: Props) => {
    const navigate = useNavigate();
    const { isOpen, handleClose, handleSubmit } = props;
    const { t } = useTranslation();
    const { setupBackButton } = useContext(MobileHeaderContext);
    const [searchText, setSearchText] = useState('');
    const isDesktop = window.innerWidth > 1024;

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
        {
            icon: <IconGoldGrainRice className="w-8 h-8" />,
            label: 'ข้าว',
            value: 'rice',
        },
    ];

    const setupPage = () => {
        setupBackButton(true, () => {
            setupPageOnLeave();
            handleClose();
        });
    };

    const setupPageOnLeave = () => {
        setupBackButton(false);
    };

    const onClose = () => {
        handleClose();
    };

    const onSubmit = (crop: string) => {
        handleSubmit(crop);
    };

    useEffect(() => {
        if (isOpen) {
            setupPage();
        }
    }, [isOpen]);

    useEffect(() => {
        return () => {
            setupPageOnLeave();
        };
    }, []);

    return {
        t,
        isDesktop,
        isOpen,
        cropOptions,
        searchText,
        setSearchText,
        onSubmit,
        onClose,
    };
};

export default ViewModel;
