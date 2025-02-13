import { type FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '@/components/Dropdown';
import IconCaretDown from '@/components/Icon/IconCaretDown';
import IconEye from '@/components/Icon/IconEye';
import IconMail from '@/components/Icon/IconMail';
import IconLockDots from '@/components/Icon/IconLockDots';

import useViewModel from './ViewModel';
import { clsx } from '@mantine/core';

const View: FC = () => {
    const { t, currentLanguage, languageList, changeLanguage, isSubmitting, formState, formError, errorMessage, showPassword, setShowPassword, onChangeFormState, submitForm } = useViewModel();

    return (
        <Fragment>
            <div className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat dark:bg-[#060818]">
                {/* Form */}
                <div className="relative w-full bg-white min-h-screen">
                    <div className="relative flex flex-col justify-center rounded-lg bg-white backdrop-blur-lg dark:bg-black/50 px-6 min-h-[758px] lg:h-screen">
                        <div className="mx-auto w-full max-w-[440px]">
                            <img src="/assets/crop/logo/logo.svg" alt="Main Logo" className="block lg:hidden h-36 lg:h-48 lg:mb-7 select-none pointer-events-none mx-auto" />
                            <div className="mb-10">
                                <div className="flex flex-row justify-between">
                                    <h1 className="text-3xl font-extrabold !leading-snug text-crop-primary md:text-3xl mb-3 uppercase">Deer and Book Login</h1>
                                    {/* {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>} */}
                                </div>

                                <p className="text-base font-bold leading-normal text-white-dark">เข้าสู่ระบบอ่านหนังสือ</p>
                            </div>
                            <form className="space-y-5 dark:text-white" onSubmit={submitForm}>
                                <div>
                                    <label htmlFor="email">Username</label>
                                    <div className="relative text-white-dark">
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder=""
                                            className={clsx('form-input ps-10 placeholder:text-white-dark', {
                                                'border-red-500': formError.email,
                                            })}
                                            autoComplete="off"
                                            name="email"
                                            value={formState.email}
                                            onChange={(e) => onChangeFormState('email', e.target.value)}
                                        />
                                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                            <IconMail fill={true} />
                                        </span>
                                    </div>
                                    {formError.email && <div className="text-red-500 text-sm mt-2">{formError.email}</div>}
                                </div>
                                <div>
                                    <label htmlFor="Password">Password</label>
                                    <div className="relative text-white-dark">
                                        <input
                                            id="Password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder={'กรอกรหัสผ่าน'}
                                            className={clsx('form-input ps-10 placeholder:text-white-dark', {
                                                'border-red-500': formError.password,
                                            })}
                                            autoComplete="off"
                                            name="password"
                                            value={formState.password}
                                            onChange={(e) => onChangeFormState('password', e.target.value)}
                                        />
                                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                            <IconLockDots fill={true} />
                                        </span>
                                        <span className="absolute end-2 top-1/2 -translate-y-1/2">
                                            <button
                                                type="button"
                                                className="btn bg-none border-0 shadow-none px-2 py-1 hover:bg-white-light transition-all"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                <IconEye fill={true} />
                                            </button>
                                        </span>
                                    </div>
                                    {formError.password && <div className="text-red-500 text-sm mt-2">{formError.password}</div>}
                                </div>

                                <div className="flex flex-row items-center justify-between">
                                    <Link to="/forgot-password">
                                        <span className="text-black cursor-pointer hover:underline font-bold">ลืมรหัสผ่าน?</span>
                                    </Link>
                                    <Link to="/register">
                                        <span className="text-crop-primary cursor-pointer hover:underline font-bold">ลงทะเบียนเข้าใช้งาน</span>
                                    </Link>
                                </div>
                                {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={clsx('btn bg-crop-primary text-white font-bold uppercase !mt-6 w-full border-0 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]', {
                                        'disabled:cursor-not-allowed pointer-events-none': isSubmitting,
                                        'hover:opacity-80': !isSubmitting,
                                    })}
                                >
                                    {isSubmitting ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
                                </button>
                            </form>

                            <div className="text-center pt-0 mt-10">© {new Date().getFullYear()}. DOAE All Right Reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default View;
