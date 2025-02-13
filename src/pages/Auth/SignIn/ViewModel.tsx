import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/store/theme';
import { useAuthStore } from '@/store/auth';
import { useShallow } from 'zustand/react/shallow';
import * as Yup from 'yup';
import i18next from 'i18next';

const INITIAL_STATE = {
    email: '',
    password: '',
};

const INITIAL_ERROR = {
    email: '',
    password: '',
};

const ViewModel = () => {
    const isFetchVerified = useRef<boolean>(false);
    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required('กรุณากรอกอีเมล'),
        password: Yup.string().required('กรุณากรอกรหัสผ่าน'),
    });
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const { languageList, setPageTitle } = useThemeStore(
        useShallow((state) => ({
            languageList: state.languageList,
            setPageTitle: state.setPageTitle,
        }))
    );
    const { errorMessage } = useAuthStore(
        useShallow((state) => ({
            errorMessage: state.error,
        }))
    );
    const signinUser = useAuthStore((state) => state.signinUser);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formState, setFormState] = useState<typeof INITIAL_STATE>(INITIAL_STATE);
    const [formError, setFormError] = useState<typeof INITIAL_ERROR>(INITIAL_ERROR);

    const setupPage = () => {
        setPageTitle(`ลงชื่อเข้าใช้งานสำหรับเจ้าหน้าที่ | ระบบตรวจสอบ GAP+`);
    };

    const changeLanguage = (lng: string) => {
        i18next.changeLanguage(lng);
    };

    const onChangeFormState = (name: string, value: any) => {
        if (name === 'email') {
            value = value.replace(/-/g, '');
        }
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleVerifyAuth = () => {
        // verify().then(response => {
        // 	if (response.success) {
        // 		navigate('/home')
        // 	}
        // })
        isFetchVerified.current = true;
    };

    const handleSubmitForm = () => {
        setIsSubmitting(true);

        signinUser({ email: formState.email, password: formState.password })
            .then((response: any) => {
                if (response.success && response.data.token) {
                    // Ensure token is present
                    console.log('success', response.data.token);
                    localStorage.setItem('token', response.data.token);
                    const token = localStorage.getItem('token');
                    console.log('newtoken', token);
                    navigate('/home');
                }
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // validationSchema
        //     .validate(formState, {
        //         abortEarly: false,
        //     })
        //     .then(() => {
        //         setFormError(INITIAL_ERROR);
        handleSubmitForm();
        // })
        // .catch((error: any) => {
        //     const errorMessages = error.inner.reduce((acc: any, item: any) => {
        //         acc[item.path] = item.message;
        //         return acc;
        //     }, {});

        //     setFormError(errorMessages);
        // });
    };

    useEffect(() => {
        setupPage();
    }, [i18n.language]);

    useEffect(() => {
        console.log(errorMessage);
    }, [errorMessage]);

    useEffect(() => {
        if (!isFetchVerified.current) {
            handleVerifyAuth();
        }
    }, []);

    return {
        currentLanguage,
        t,
        languageList,
        changeLanguage,
        isSubmitting,
        formState,
        formError,
        errorMessage,
        showPassword,
        setShowPassword,
        onChangeFormState,
        submitForm,
    };
};

export default ViewModel;
