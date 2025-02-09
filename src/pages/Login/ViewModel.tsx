import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/auth';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import * as Yup from 'yup';

const INITIAL_STATE = {
    username: 'test',
    password: 'password',
};

const INITIAL_ERROR = {
    username: '',
    password: '',
};

const ViewModel = () => {
    const isFetchVerified = useRef<boolean>(false);
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('กรุณากรอกชื่อผู้ใช้งาน'),
        password: Yup.string().required('กรุณากรอกรหัสผ่าน'),
    });
    const navigate = useNavigate();
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );
    const { signin } = useAuthStore(
        useShallow((state) => ({
            signin: state.signin,
            // verify: state.verify,
        }))
    );
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formState, setFormState] = useState<typeof INITIAL_STATE>(INITIAL_STATE);
    const [formError, setFormError] = useState<typeof INITIAL_ERROR>(INITIAL_ERROR);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const setupPage = () => {
        setPageTitle('เข้าสู่ระบบ | Track & Trace');
    };

    const onChangeFormState = (name: string, value: any) => {
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // const handleVerifyAuth = () => {
    //     verify().then((response) => {
    //         if (response.success) {
    //             navigate('/dashboard');
    //         }
    //     });
    //     isFetchVerified.current = true;
    // };

    const handleSubmitForm = () => {
        setIsSubmitting(true);

        const data = {
            username: formState.username,
            password: formState.password,
        };

        signin(data).then((response) => {
            // const toast = withReactContent(Swal).mixin({
            // 	toast: true,
            // 	position: 'top-end',
            // 	showConfirmButton: false,
            // 	timer: 3000,
            // 	// @ts-ignore
            // 	customClass: 'mls-custom',
            // })

            if (response.success) {
                navigate('/home');
                setIsSubmitting(false);
            } else {
                // toast.fire({
                // 	icon: 'error',
                // 	title: response.data?.message || 'Email or password is incorrect',
                // 	padding: '10px 20px',
                // })
                setErrorMessage(response.data?.message || 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง');
                setIsSubmitting(false);
            }
        });
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

    useEffect(() => {
        setupPage();
    }, []);

    // useEffect(() => {
    //     if (!isFetchVerified.current) {
    //         handleVerifyAuth();
    //     }
    // }, []);

    return {
        isSubmitting,
        formState,
        formError,
        errorMessage,
        showPassword,
        setShowPassword,
        onChangeFormState,
        submitForm,
        handleSubmitForm,
    };
};

export default ViewModel;
