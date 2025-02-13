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
import IconLogout from '@/components/Icon/IconLogout';

const BottomNavigationBar: FC = () => {
    const { t, isActive } = useViewModel();

    const onLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    return (
        <Fragment>
            <div className="block lg:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-gradient-to-b from-[#6789EE] to-[#B347FD] shadow-lg py-auto">
                <div className="flex flex-row justify-between h-full w-full mx-auto font-medium">
                    <Link to={isActive('home') ? '#' : '/home'} className="inline-flex flex-col h-full w-full">
                        <button type="button" className="h-full w-full inline-flex flex-col items-center justify-center px-2 group rounded-lg transition-all">
                            <IconMenuDashboard
                                className={clsx('h-8 w-8 mb-1', {
                                    'text-white': isActive('home'),
                                    'text-gray-300 ': !isActive('home'),
                                })}
                            />
                            <span
                                className={clsx('  mt-1', {
                                    'text-white font-bold': isActive('home'),
                                    'text-gray-300': !isActive('home'),
                                })}
                            >
                                Home
                            </span>
                        </button>
                    </Link>
                    <Link to={isActive('profile') ? '#' : '/profile'} className="inline-flex flex-col h-full w-full ">
                        <button type="button" className="h-full w-full inline-flex flex-col items-center justify-center group">
                            <IconUser
                                className={clsx('h-8 w-8 mb-1', {
                                    'text-white': isActive('profile'),
                                    'text-gray-300': !isActive('profile'),
                                })}
                            />
                            <span
                                className={clsx(' mt-1', {
                                    'text-white font-bold ': isActive('profile'),
                                    'text-gray-300': !isActive('profile'),
                                })}
                            >
                                User
                            </span>
                        </button>
                    </Link>
                    <Link to="#" onClick={onLogout} className="inline-flex flex-col h-full w-full">
                        <button type="button" className="h-full w-full inline-flex flex-col items-center justify-center px-2 group rounded-lg transition-all">
                            <IconLogout
                                className={clsx('h-8 w-8 mb-1', {
                                    'text-crop-primary': isActive('land'),
                                    'text-gray-300': !isActive('land'),
                                })}
                            />
                            <span
                                className={clsx(' mt-1', {
                                    'text-crop-primary font-bold': isActive('land'),
                                    'text-gray-300': !isActive('land'),
                                })}
                            >
                                Logout
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default BottomNavigationBar;
