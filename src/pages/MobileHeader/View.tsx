import { type FC, Fragment, useContext } from 'react';
import IconArrowLeft from '@/components/Icon/IconArrowLeft';
import { LanguageToggleButton } from '@/Context/LanguageToggle';
import useViewModel from './ViewModel';
import { clsx } from '@mantine/core';
import { MobileHeaderContext } from '@/Context/MobileHeader';

const MobileHeader: FC = () => {
    const { title, showHeader, showBackButton, showCustomRightComponent, backFunction } = useViewModel();
    const { toggleAppLanguage, currentLanguage } = useContext(MobileHeaderContext);

    return (
        <Fragment>
            <header
                className={clsx('lg:hidden z-40', {
                    block: showHeader,
                    hidden: !showHeader,
                })}
            >
                <div className="">
                    <div className="relative bg-crop-primary flex w-full items-center justify-center px-5 py-2.5 h-16">
                        {/* Left Section */}
                        <div className="absolute left-5 horizontal-logo flex lg:hidden">
                            <ul className="flex items-center space-x-2 rtl:space-x-reverse">
                                {showBackButton && (
                                    <li>
                                        <div
                                            className="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 text-black hover:text-crop-primary hover:bg-white-light/90 dark:hover:bg-dark/60 rotate-180 cursor-pointer transition-all"
                                            onClick={backFunction}
                                        >
                                            <IconArrowLeft />
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>

                        {/* Center Title */}
                        <div className="font-bold text-md text-white text-center">{title}</div>

                        {/* Right Section */}
                        <div className="absolute right-5 flex items-center gap-2">
                            {showCustomRightComponent && <div>{showCustomRightComponent}</div>}
                            {!showCustomRightComponent && <LanguageToggleButton />}
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default MobileHeader;
