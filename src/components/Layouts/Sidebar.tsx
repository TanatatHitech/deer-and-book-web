import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { NavLink, useLocation } from 'react-router-dom';
import AnimateHeight from 'react-animate-height';
import { useState, useEffect, createElement } from 'react';
import IconCaretsDown from '../Icon/IconCaretsDown';
import IconCaretDown from '../Icon/IconCaretDown';
import IconMenuDashboard from '../Icon/Menu/IconMenuDashboard';
import IconMinus from '../Icon/IconMinus';
import IconMenuContacts from '../Icon/Menu/IconMenuContacts';

import { SidebarMenu } from '@/configuration/sidebar-menu';
import { clsx } from '@mantine/core';

const Sidebar = () => {
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const { semidark, sidebar, toggleSidebar } = useThemeStore(
        useShallow((state) => ({
            semidark: state.semidark,
            sidebar: state.sidebar,
            toggleSidebar: state.toggleSidebar,
        }))
    );
    const location = useLocation();
    const { t } = useTranslation();
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return value;
        });
    };

    // const handleFindCurrentMenuWhenLanding = () => {
    //     const path = location.pathname;
    //     const menu = SidebarMenu.find((item) => path.includes(item.path));
    //     if (menu) {
    //         setCurrentMenu(menu.key);
    //     } else {
    //         const subMenu = SidebarMenu.find((item) => item.submenu.find((sub: any) => sub.path === path));
    //         if (subMenu) {
    //             setCurrentMenu(subMenu.key);
    //         } else {
    //             setErrorSubMenu(true);
    //         }
    //     }
    // };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth < 1024 && sidebar) {
            toggleSidebar(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    useEffect(() => {
        // handleFindCurrentMenuWhenLanding();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`hidden lg:block sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${
                    semidark ? 'text-white-dark' : ''
                }`}
            >
                <div className="h-full !font-light ">
                    <div className="flex justify-center items-center px-4 py-3 bg-crop-quinary">
                        <NavLink to="/home" className="main-logo flex flex-col items-center shrink-0">
                            <img className="w-20 ml-[5px] flex-none" src="/assets/images/logo.svg" alt="logo" />
                            <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline text-white">GAP +</span>
                        </NavLink>

                        {/* <button
                            type="button"
                            className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                            onClick={() => toggleSidebar(false)}
                        >
                            <IconCaretsDown className="m-auto rotate-90 text-white" />
                        </button> */}
                    </div>
                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative bg-crop-quinary">
                        <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                            {SidebarMenu.map((sidebar) => {
                                const isLabelOnly = sidebar?.path === undefined;
                                const hasSubMenu = (sidebar?.submenu ?? []).length > 0;

                                if (isLabelOnly) {
                                    return (
                                        <h2 key={`sidebar-label-${sidebar.key}`} className="py-3 flex items-center uppercase text-white mb-1">
                                            <IconMinus className="w-4 h-5 flex-none hidden" />
                                            <span>{sidebar.title}</span>
                                        </h2>
                                    );
                                } else if (hasSubMenu) {
                                    return (
                                        <li key={`sidebar-menu-${sidebar.key}`} className="menu nav-item">
                                            <button
                                                type="button"
                                                className={`${currentMenu === sidebar.key ? 'active !bg-white !text-crop-primary' : ''} nav-link group w-full`}
                                                onClick={() => toggleMenu(sidebar.key)}
                                            >
                                                <div className="flex items-center">
                                                    {createElement(sidebar.icon, {
                                                        className: clsx('group-hover:!text-crop-primary shrink-0', {
                                                            '!text-crop-primary': currentMenu === sidebar.key,
                                                        }),
                                                    })}
                                                    <span
                                                        className={clsx('ltr:pl-3 rtl:pr-3 !text-crop-primary group-hover:!text-crop-primary', {
                                                            '!text-crop-primary !font-bold': currentMenu === sidebar.key,
                                                        })}
                                                    >
                                                        {sidebar.title}
                                                    </span>
                                                </div>

                                                <div className={currentMenu !== sidebar.key ? 'rtl:rotate-90 -rotate-90' : ''}>
                                                    <IconCaretDown />
                                                </div>
                                            </button>

                                            <AnimateHeight duration={300} height={currentMenu === sidebar.key ? 'auto' : 0}>
                                                <ul className="sub-menu text-white">
                                                    {sidebar.submenu.map((sub: any, idx: number) => (
                                                        <li key={`sidebar-submenu-${idx + 1}-${sidebar.key}`} className="group-hover:!text-background hover:!text-background rounded overflow-hidden">
                                                            <NavLink to={sub.path} className={'hover:text-green-500 '}>
                                                                {sub.title}
                                                            </NavLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </AnimateHeight>
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li key={`sidebar-menu-${sidebar.key}`} className="nav-item">
                                            <NavLink
                                                to={sidebar.path}
                                                className={clsx('group', {
                                                    '!bg-white !text-crop-primary': currentMenu === sidebar.key,
                                                })}
                                                onClick={() => toggleMenu(sidebar.key)}
                                            >
                                                <div className="flex items-center">
                                                    {createElement(sidebar.icon, {
                                                        className: clsx('group-hover:!text-background shrink-0', {
                                                            '!text-crop-primary': currentMenu === sidebar.key,
                                                        }),
                                                    })}

                                                    <span
                                                        className={clsx('ltr:pl-3 rtl:pr-3 text-white group-hover:text-background', {
                                                            '!text-crop-primary': currentMenu === sidebar.key,
                                                        })}
                                                    >
                                                        {sidebar.title}
                                                    </span>
                                                </div>
                                            </NavLink>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
