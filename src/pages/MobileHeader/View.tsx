import { type FC, Fragment } from 'react';
import IconArrowLeft from '@/components/Icon/IconArrowLeft';

import useViewModel from './ViewModel';
import { clsx } from '@mantine/core';

const MobileHeader: FC = () => {
    const { title, showHeader, showBackButton, showCustomRightComponent, backFunction } = useViewModel();

    return (
        <Fragment>
            <header
                className={clsx('lg:hidden z-40', {
                    block: showHeader,
                    hidden: !showHeader,
                })}
            >
                <div className="">
                    <div className="relative bg-crop-primary flex w-full items-center justify-between px-5 py-2.5 h-16">
                        <div className="horizontal-logo flex lg:hidden justify-between items-center">
                            <ul className="flex items-center space-x-2 rtl:space-x-reverse ">
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

                        <div
                            className={clsx('font-bold text-md text-white', {
                                '-ml-8': showBackButton && !showCustomRightComponent,
                                '-mr-5': showCustomRightComponent,
                            })}
                        >
                            {title}
                        </div>

                        <div>{showCustomRightComponent}</div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default MobileHeader;
