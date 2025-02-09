import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { setPageTitle, toggleRTL } from '../../store/themeConfigSlice';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import policyData from './policy.json';

import PasswordInput from '../../components/PasswordInput'; // Import the PasswordInput component
import ViewModel from './ViewModel';

const Register = () => {
    const { isSubmitting, formState, formError, errorMessage, onChangeFormState, submitForm, isPolicyAccepted, handlePolicyAcceptance, isFormValid } = ViewModel();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Register Boxed'));
    });
    const navigate = useNavigate();
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const setLocale = (flag: string) => {
        setFlag(flag);
        if (flag.toLowerCase() === 'ae') {
            dispatch(toggleRTL('rtl'));
        } else {
            dispatch(toggleRTL('ltr'));
        }
    };
    const [flag, setFlag] = useState(themeConfig.locale);

    const [passwordVisible, setPasswordVisible] = useState(false); // New state for password visibility
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // New state for confirm password visibility
    const [submitted, setSubmitted] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const MySwal = withReactContent(Swal);

    const handleRegisterClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        if (!isFormValid) {
            return;
        }
        if (!isPolicyAccepted) {
            let isPolicyAcceptedTemp = false;
            MySwal.fire({
                title: policyData.policyTitle,
                html: (
                    <div className="mt-2">
                        <div className="panel text-start text-black h-96 overflow-y-auto">
                            <p>{policyData.description}</p>
                            <br />
                            {Object.keys(policyData.sections).map((key) => (
                                <div key={key}>
                                    <h3>{policyData.sections[key as keyof typeof policyData.sections].title}</h3>
                                    <p>{policyData.sections[key as keyof typeof policyData.sections].content}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="policy" onChange={(e) => (isPolicyAcceptedTemp = e.target.checked)} />
                            <label htmlFor="policy" className="ml-2 pt-1 text-crop-primary">
                                ฉันยอมรับเงื่อนไข
                            </label>
                        </div>
                    </div>
                ),
                width: '80%',
                showCancelButton: true,
                confirmButtonColor: '#068042',
                confirmButtonText: 'ตกลง',
                cancelButtonText: 'ปฏิเสธ',
                preConfirm: () => {
                    if (!isPolicyAcceptedTemp) {
                        Swal.showValidationMessage('You need to accept the policy to proceed');
                    }
                    return isPolicyAcceptedTemp;
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/home');
                    handlePolicyAcceptance(true);
                    submitForm(e);
                }
            });
        } else {
            submitForm(e);
        }
    };

    return (
        <div>
            <div className="absolute inset-0">
                <img src="/assets/images/login/login-bg.png" alt="image" className="h-full w-full object-cover" />
            </div>
            <div className="relative flex min-h-screen items-center justify-center px-6 py-10 dark:bg-[#060818] sm:px-16">
                <div className="relative w-full max-w-[870px] rounded-md  p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
                    <div className="relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-2/3 py-20">
                        <div className="mx-auto w-full max-w-[440px]">
                            <div className="mb-10">
                                <h1 className="text-3xl font-extrabold uppercase !leading-snug text-crop-primary md:text-4xl">ลงทะเบียนเข้าใช้งาน</h1>
                            </div>
                            <form className=" flex flex-col gap-3 dark:text-white" onSubmit={handleRegisterClick}>
                                <div>
                                    <label htmlFor="personalCode">เลขที่บัตรประชาชน</label>
                                    <div className="relative text-white-dark">
                                        <input
                                            id="personalCode"
                                            type="text"
                                            value={formState.personalCode}
                                            onChange={(e) => onChangeFormState('personalCode', e.target.value)}
                                            placeholder="กรอกเลขที่บัตรประชาชน"
                                            className="form-input placeholder:text-white-dark"
                                        />
                                    </div>
                                </div>
                                {submitted && formError.personalCode && <p className="text-red-500">{formError.personalCode}</p>}
                                <PasswordInput
                                    id="password"
                                    label="รหัสผ่าน"
                                    value={formState.password}
                                    onChange={(e) => onChangeFormState('password', e.target.value)}
                                    visible={passwordVisible}
                                    toggleVisibility={togglePasswordVisibility}
                                    placeholder="ตั้งรหัสผ่านของคุณ"
                                />
                                <PasswordInput
                                    id="confirmPassword"
                                    label="ยืนยันรหัสผ่าน"
                                    value={formState.confirmPassword}
                                    onChange={(e) => onChangeFormState('confirmPassword', e.target.value)}
                                    visible={confirmPasswordVisible}
                                    toggleVisibility={toggleConfirmPasswordVisibility}
                                    placeholder="ยืนยันรหัสผ่านของคุณ"
                                />
                                {submitted && formError.confirmPassword && <p className="text-red-500">{formError.confirmPassword}</p>}
                                {submitted && errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                <div className="flex flex-row items-center justify-between mt-4">
                                    <button type="button" className="btn  bg-gray-700 text-white w-[40%] border-0 hover:opacity-70" onClick={() => navigate(-1)}>
                                        ย้อนกลับ
                                    </button>
                                    <button type="submit" className="btn bg-crop-primary text-white w-[40%] border-0 hover:opacity-70 " disabled={isSubmitting}>
                                        ยืนยันการลงทะเบียน
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
