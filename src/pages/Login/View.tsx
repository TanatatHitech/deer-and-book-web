import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { useEffect, useState } from 'react';
import { toggleRTL } from '../../store/themeConfigSlice';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';

import useViewModel from './ViewModel';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import policyData from './policy.json';

const Login = () => {
    const { isSubmitting, formState, formError, errorMessage, showPassword, setShowPassword, onChangeFormState, handleSubmitForm } = useViewModel();
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );

    const setupPage = () => {
        setPageTitle('ลงชื่อเข้าใช้ระบบ | DOAE');
    };

    const setLocale = (flag: string) => {
        setFlag(flag);
        if (flag.toLowerCase() === 'ae') {
            dispatch(toggleRTL('rtl'));
        } else {
            dispatch(toggleRTL('ltr'));
        }
    };
    const [flag, setFlag] = useState(themeConfig.locale);

    const submitForm = () => {
        navigate('/');
    };

    const MySwal = withReactContent(Swal);

    const handleThaiIdClick = () => {
        let isPolicyAccepted = false;
        navigate('/auth/signin');
        // MySwal.fire({
        //     title: policyData.policyTitle,
        //     html: (
        //         <div className="mt-2">
        //             <div className="panel text-start text-black h-96 overflow-y-auto">
        //                 <p>{policyData.description}</p>
        //                 <br />
        //                 {Object.keys(policyData.sections).map((key) => (
        //                     <div key={key}>
        //                         <h3>{policyData.sections[key as keyof typeof policyData.sections].title}</h3>
        //                         <p>{policyData.sections[key as keyof typeof policyData.sections].content}</p>
        //                     </div>
        //                 ))}
        //             </div>
        //             <div className="flex items-center">
        //                 <input type="checkbox" id="policy" onChange={(e) => (isPolicyAccepted = e.target.checked)} />
        //                 <label htmlFor="policy" className="ml-2 pt-1 text-crop-primary">
        //                     ฉันยอมรับเงื่อนไข
        //                 </label>
        //             </div>
        //         </div>
        //     ),
        //     width: '80%',
        //     showCancelButton: true,
        //     confirmButtonText: 'ตกลง',
        //     cancelButtonText: 'ปฏิเสธ',
        //     preConfirm: () => {
        //         if (!isPolicyAccepted) {
        //             Swal.showValidationMessage('You need to accept the policy to proceed');
        //         }
        //         return isPolicyAccepted;
        //     },
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         navigate('/home');
        //         handleSubmitForm();
        //     }
        // });
    };

    useEffect(() => {
        setupPage();
    }, []);

    return (
        <div>
            <div className="absolute inset-0">
                <img src="/assets/images/login/login-bg.png" alt="image" className="h-full w-full object-cover" />
            </div>

            <div className="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
                <div className="relative w-full max-w-[870px] rounded-md  p-2 ">
                    <div className="relative flex flex-col justify-center rounded-md px-6 lg:min-h-[758px] pt-16 pb-5">
                        <div className="mx-auto w-full max-w-[440px]">
                            <div className="mb-32">
                                <h1 className="text-2xl font-semibold !leading-snug text-white md:text-2xl">Welcome to</h1>
                                <p className="text-4xl font-semibold leading-normal text-green-600">GAP +</p>
                            </div>
                            <p className="text-base font-regular leading-normal text-white">Make easy farming with fast delivery at your door.</p>
                            {/* <form className="space-y-5 " onSubmit={submitForm}>
                                <div>
                                    <label htmlFor="Email">กรุณากรอกเบอร์โทรศัพท์</label>
                                    <div className="relative text-white-dark">
                                        <input id="text" type="text" placeholder="" className="form-input ps-10 placeholder:text-white-dark" />
                                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                            <IconPhone fill={true} />
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="Password">รหัสผ่าน</label>
                                    <div className="relative text-white-dark">
                                        <input id="Password" type="password" placeholder="" className="form-input ps-10 placeholder:text-white-dark" />
                                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                            <IconLockDots fill={true} />
                                        </span>
                                    </div>
                                </div>

                                <button type="submit" className="btn bg-[#F79731] !mt-6 w-full border-0 text-white uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                                    เข้าสู่ระบบ
                                </button>
                            </form> */}
                            <div className="relative mt-7 text-center">
                                <div className="relative inset-x-0 top-1/2 flex items-center -translate-y-1/2">
                                    <span className="flex-grow h-px bg-white-light dark:bg-white-dark"></span>
                                    <span className="relative px-2 font-regular text-white">สำหรับเกษตกร</span>
                                    <span className="flex-grow h-px bg-white-light dark:bg-white-dark"></span>
                                </div>
                            </div>
                            <div className="grid grid-col-12 gap-3 mb-3">
                                <div className="col-span-12">
                                    <div onClick={handleThaiIdClick} className="btn btn-white text-white hover:bg-white hover:text-black rounded-3xl cursor-pointer">
                                        <img src="" />
                                        Login
                                    </div>
                                </div>
                                {/* <div className="col-span-12">
                                    <div onClick={handleThaiIdClick} className="btn btn-white bg-white hover:bg-transparent hover:text-white rounded-3xl py-1 cursor-pointer">
                                        <img src="assets/images/login/thai-id.png" className="w-7 h-auto mr-2" />
                                        Thai ID
                                    </div>
                                </div> */}
                                <div className="relative mt-7 text-center col-span-12">
                                    <div className="relative inset-x-0 top-1/2 flex items-center -translate-y-1/2">
                                        <span className="flex-grow h-px bg-white-light dark:bg-white-dark"></span>
                                        <span className="relative px-2 font-regular text-white">สำหรับเจ้าหน้าที่</span>
                                        <span className="flex-grow h-px bg-white-light dark:bg-white-dark"></span>
                                    </div>
                                </div>
                                <div className="col-span-12">
                                    <div onClick={() => navigate('/admin/auth/signin')} className="btn btn-white text-white hover:bg-white hover:text-black rounded-3xl cursor-pointer">
                                        <img src="" />
                                        Login
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
