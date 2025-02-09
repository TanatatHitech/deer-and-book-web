import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/auth';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import * as Yup from 'yup';

const INITIAL_STATE = {
    personalCode: '',
    password: '',
    confirmPassword: '',
};

const INITIAL_ERROR = {
    personalCode: '',
    password: '',
    confirmPassword: '',
};

const ViewModel = () => {
    const navigate = useNavigate();
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );
    const { registerFarmer, error } = useAuthStore(
        useShallow((state) => ({
            registerFarmer: state.registerFarmer,
            error: state.error,
        }))
    );
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [formState, setFormState] = useState<typeof INITIAL_STATE>(INITIAL_STATE);
    const [formError, setFormError] = useState<typeof INITIAL_ERROR>(INITIAL_ERROR);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isPolicyAccepted, setIsPolicyAccepted] = useState<boolean>(false);
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const validationSchema = Yup.object().shape({
        personalCode: Yup.string().required('กรุณากรอกเลขที่บัตรประชาชน').length(13, 'เลขที่บัตรประชาชนต้องมี 13 หลัก'),
        password: Yup.string().required('กรุณากรอกรหัสผ่าน'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'รหัสผ่านไม่ตรงกัน')
            .required('กรุณาใส่รหัสผ่าน'),
    });

    const setupPage = () => {
        setPageTitle('ลงทะเบียนเข้าใช้งาน');
    };

    const onChangeFormState = (name: string, value: any) => {
        if (name === 'personalCode') {
            value = value.replace(/-/g, '');
        }
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handlePolicyAcceptance = (accepted: boolean) => {
        setIsPolicyAccepted(accepted);
    };

    const handleSubmitForm = async () => {
        setIsSubmitting(true);

        const data = {
            personalCode: formState.personalCode,
            password: formState.password,
        };

        const response = await registerFarmer(data);
        console.log(response);
        if (response.success) {
            console.log('Register success');
            navigate('/home');
        } else {
            console.log('Register unsuccess');
            setErrorMessage(error);
        }
        setIsSubmitting(false);
    };

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        validationSchema
            .validate(formState, {
                abortEarly: false,
            })
            .then(() => {
                setFormError(INITIAL_ERROR);
                handleSubmitForm();
            })
            .catch((error: any) => {
                const errorMessages = error.inner.reduce((acc: any, item: any) => {
                    acc[item.path] = item.message;
                    return acc;
                }, {});

                setFormError(errorMessages);
            });
    };

    const validateForm = () => {
        validationSchema
            .validate(formState, { abortEarly: false })
            .then(() => {
                setFormError(INITIAL_ERROR);
                setIsFormValid(true);
            })
            .catch((error: any) => {
                const errorMessages = error.inner.reduce((acc: any, item: any) => {
                    acc[item.path] = item.message;
                    return acc;
                }, {});
                setFormError(errorMessages);
                setIsFormValid(false);
            });
    };

    useEffect(() => {
        validateForm();
    }, [formState]);

    useEffect(() => {
        setupPage();
    }, []);

    return {
        isSubmitting,
        formState,
        formError,
        errorMessage,
        onChangeFormState,
        isPolicyAccepted,
        handlePolicyAcceptance,
        submitForm,
        isFormValid,
    };
};

export default ViewModel;
