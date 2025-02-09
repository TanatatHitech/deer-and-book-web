import { Fragment, type FC } from 'react';
import { Link } from 'react-router-dom';
import IconMenuDashboard from '@/components/Icon/Menu/IconMenuDashboard';
import IconHome from '@/components/Icon/IconHome';
import IconMapPin from '@/components/Icon/IconMapPin';
import IconBellBing from '@/components/Icon/IconBellBing';
import IconUser from '@/components/Icon/IconUser';
import IconCorn from '@/components/Icon/Crop/IconCorn';

import useViewModel from './ViewModel';
import { clsx } from '@mantine/core';
import { Icon } from 'leaflet';
import IconPlant from '@/components/Icon/Crop/IconPlant';
import IconPaperclip from '@/components/Icon/IconPaperclip';
import IconImagePlaceHolder from '@/components/Icon/IconImagePlaceholder';
import IconPlusCircle from '@/components/Icon/IconPlusCircle';

const BottomNavigationBar: FC = () => {
    const { t, isActive } = useViewModel();

    return (
        <Fragment>
            <div className="block lg:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 rounded-t-3xl shadow-lg py-auto">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                    <Link to={isActive('home') ? '#' : '/home'} className="inline-flex flex-col h-full w-full">
                        <button type="button" className="h-full w-full inline-flex flex-col items-center justify-center px-2 hover:bg-green-50 group rounded-lg transition-all">
                            <IconMenuDashboard
                                className={clsx('h-5 w-5 mb-1', {
                                    'text-crop-primary': isActive('home'),
                                })}
                            />
                            <span
                                className={clsx(' group-hover:text-crop-primary mt-1', {
                                    'text-crop-primary font-bold': isActive('home'),
                                    'text-gray-500': !isActive('home'),
                                })}
                            >
                                หน้าแรก
                            </span>
                        </button>
                    </Link>
                    <Link to={isActive('land') ? '#' : '/land/my-land'} className="inline-flex flex-col h-full w-full">
                        <button type="button" className="h-full w-full inline-flex flex-col items-center justify-center px-2 hover:bg-green-50 group rounded-lg transition-all">
                            <IconMapPin
                                className={clsx('h-5 w-5 mb-1', {
                                    'text-crop-primary': isActive('land'),
                                })}
                            />
                            <span
                                className={clsx(' group-hover:text-crop-primary mt-1', {
                                    'text-crop-primary font-bold': isActive('land'),
                                    'text-gray-500': !isActive('land'),
                                })}
                            >
                                พื้นที่แปลง
                            </span>
                        </button>
                    </Link>

                    <Link to={isActive('start') ? '#' : '/start'} className="inline-flex flex-col h-full w-full">
                        <button type="button" className="h-full w-full inline-flex flex-col items-center justify-center relative">
                            {/* <IconCorn
                                className={clsx(' absolute -top-5 h-5 w-5 mb-1', {
                                    'text-crop-primary': isActive('land'),
                                })}
                            /> */}
                            <IconCorn className=" absolute pl-2 p-1 -top-8 h-16 w-16 mb-1 transform rotate-45 bg-white border border-gray-300 rounded-full hover:bg-gray-50 group transition-all" />
                            <span
                                className={clsx('mt-7 group-hover:text-crop-primary ', {
                                    'text-crop-primary font-bold': isActive('start'),
                                    'text-gray-500': !isActive('start'),
                                })}
                            >
                                เริ่มปลูก
                            </span>
                        </button>
                    </Link>

                    <Link to={isActive('plan') ? '#' : '/plan'} className="inline-flex flex-col h-full w-full">
                        <button type="button" className="h-full w-full inline-flex flex-col items-center justify-center px-2 hover:bg-green-50 group rounded-lg transition-all">
                            <IconPlusCircle
                                className={clsx('h-5 w-5 mb-1 ', {
                                    'text-crop-primary': isActive('plan'),
                                })}
                            />
                            <span
                                className={clsx(' group-hover:text-crop-primary mt-1', {
                                    'text-crop-primary font-bold': isActive('plan'),
                                    'text-gray-500': !isActive('plan'),
                                })}
                            >
                                แผนปลูก
                                {/* {t('bottomNav.notification')} */}
                            </span>
                        </button>
                    </Link>
                    <Link to={isActive('profile') ? '#' : '/profile'} className="inline-flex flex-col h-full w-full ">
                        <button type="button" className="h-full w-full inline-flex flex-col items-center justify-center 2 hover:bg-green-50 group">
                            <IconUser
                                className={clsx('h-5 w-5 mb-1', {
                                    'text-crop-primary': isActive('profile'),
                                })}
                            />
                            <span
                                className={clsx(' group-hover:text-crop-primary mt-1', {
                                    'text-crop-primary font-bold': isActive('profile'),
                                    'text-gray-500': !isActive('profile'),
                                })}
                            >
                                โปรไฟล์
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default BottomNavigationBar;
