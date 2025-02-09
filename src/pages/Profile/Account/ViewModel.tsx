import { useContext, useEffect, useState } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useNavigate } from 'react-router-dom';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';

const INITIAL_FORM_STATE = {
    name: "User's Name User's Surname",
    idCard: '1234567890123',
    tel: '0812345678',
    email: 'user@mail.com',
    address: '123/456',
    tumbonId: 1,
    amphureId: 1,
    provinceId: 1,
};

const ViewModel = () => {
    const navigate = useNavigate();
    const { setShowHeader, setTitle, setupBackButton } = useContext(MobileHeaderContext);
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );

    const [viewType, setViewType] = useState<'view' | 'edit'>('view');
    const [formState, setFormState] = useState(INITIAL_FORM_STATE);

    const tumbonOptions = [
        {
            label: 'ตำบล 1',
            value: 1,
        },
        {
            label: 'ตำบล 2',
            value: 2,
        },
        {
            label: 'ตำบล 3',
            value: 3,
        },
    ];
    const amphureOptions = [
        {
            label: 'อำเภอ 1',
            value: 1,
        },
        {
            label: 'อำเภอ 2',
            value: 2,
        },
        {
            label: 'อำเภอ 3',
            value: 3,
        },
    ];
    const provinceOptions = [
        {
            label: 'จังหวัด 1',
            value: 1,
        },
        {
            label: 'จังหวัด 2',
            value: 2,
        },
        {
            label: 'จังหวัด 3',
            value: 3,
        },
    ];

    const setupPage = () => {
        setPageTitle(`Account | DOAE`);
        setShowHeader(true);
        setTitle('โปรไฟล์');
        setupBackButton(true, () => {
            setupBackButton(false);
            navigate('/home');
        });
    };

    const onChangeFormState = (key: string, value: any) => {
        setFormState((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    useEffect(() => {
        setupPage();
    }, []);

    useEffect(() => {
        return () => {
            setShowHeader(false);
            setTitle('');
        };
    }, []);

    return {
        tumbonOptions,
        amphureOptions,
        provinceOptions,
        viewType,
        setViewType,
        formState,
        onChangeFormState,
    };
};

export default ViewModel;
