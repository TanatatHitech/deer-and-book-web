import { useState, useEffect, createElement, Fragment } from 'react';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { NavLink, useLocation } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import AnimateHeight from 'react-animate-height';
import IconCaretDown from '@/components/Icon/IconCaretDown';
import IconCaretsDown from '@/components/Icon/IconCaretsDown';
import IconMinus from '@/components/Icon/IconMinus';

import { AdminSidebarMenu } from '@/configuration/admin-sidebar.menu';
import { clsx } from '@mantine/core';

const AdminSidebar = () => {
    const { semidark, sidebar, toggleSidebar } = useThemeStore(
        useShallow((state) => ({
            semidark: state.semidark,
            sidebar: state.sidebar,
            toggleSidebar: state.toggleSidebar,
        }))
    );
    const location = useLocation();
    const activeMenu = AdminSidebarMenu.find((menu) => menu.submenu.find((submenu: any) => submenu.path === location.pathname));
    const [openMenus, setOpenMenus] = useState<string[]>([]);

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
    }, [location]);

    return (
        <Fragment>
            <div className={semidark ? 'dark' : ''}>
                <nav
                    id="admin-navigation"
                    className={`hidden lg:block sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 bg-gray-200 ${
                        semidark ? 'text-white-dark' : ''
                    }`}
                >
                    <div className="h-full !font-light ">
                        <div className="flex justify-between items-center px-4 py-3">
                            <NavLink to="#" className="main-logo flex items-center shrink-0">
                                <img className="w-8 ml-[5px] flex-none" src="/assets/images/logo.svg" alt="logo" />
                                <span className="text-lg ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline text-crop-primary">ระบบตรวจสอบ GAP+</span>
                            </NavLink>

                            <button
                                type="button"
                                className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                                onClick={() => toggleSidebar(false)}
                            >
                                <IconCaretsDown className="m-auto rotate-90 text-black" />
                            </button>
                        </div>
                        <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
                            <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                                {AdminSidebarMenu.map((sidebar, index) => {
                                    const isLabelOnly = sidebar?.path === undefined;
                                    const hasSubMenu = (sidebar?.submenu ?? []).length > 0;
                                    const uniqueKey = `sidebar-menu-${sidebar.key}-${index}`;

                                    if (isLabelOnly) {
                                        return (
                                            <h2 key={uniqueKey} className={'py-3 px-7 flex items-center uppercase font-bold text-crop-primary bg-crop-tertiary bg-opacity-[0.2] -mx-4 mb-1'}>
                                                <IconMinus className="w-4 h-5 flex-none hidden" />
                                                <div>{sidebar.title}</div>
                                            </h2>
                                        );
                                    } else if (hasSubMenu) {
                                        return (
                                            <li key={uniqueKey} className="menu nav-item">
                                                <button
                                                    type="button"
                                                    className={`${activeMenu === sidebar.key ? 'active !bg-primary-light' : ''} nav-link group w-full`}
                                                    onClick={() => {
                                                        if (openMenus.includes(sidebar.key)) {
                                                            setOpenMenus(openMenus.filter((item) => item !== sidebar.key));
                                                        } else {
                                                            setOpenMenus([...openMenus, sidebar.key]);
                                                        }
                                                    }}
                                                >
                                                    <div className="flex items-center">
                                                        {createElement(sidebar.icon, {
                                                            className: clsx('group-hover:!text-crop-primary shrink-0', {
                                                                '!text-cropprimary': activeMenu === sidebar.key,
                                                            }),
                                                        })}
                                                        <span
                                                            className={clsx('ltr:pl-3 rtl:pr-3 text-crop-secondary group-hover:text-gray-500', {
                                                                '!text-background !font-bold': activeMenu === sidebar.key,
                                                            })}
                                                        >
                                                            {sidebar.title}
                                                        </span>
                                                    </div>

                                                    <div className={activeMenu !== sidebar.key ? 'rtl:rotate-90 -rotate-90' : ''}>
                                                        <IconCaretDown />
                                                    </div>
                                                </button>

                                                <AnimateHeight duration={300} height={openMenus.includes(sidebar.key) ? 'auto' : 0}>
                                                    <ul className="sub-menu text-white">
                                                        {sidebar.submenu.map((sub: any, idx: number) => (
                                                            <li
                                                                key={`sidebar-submenu-${idx + 1}-${sidebar.key}`}
                                                                className="group-hover:!text-crop-secondary hover:!text-crop-secondary rounded overflow-hidden"
                                                            >
                                                                <NavLink to={sub.path} className={'text-crop-secondary '}>
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
                                            <li key={uniqueKey} className="nav-item">
                                                <NavLink
                                                    to={sidebar.path}
                                                    className={clsx('group', {
                                                        '!bg-crop-primary': activeMenu === sidebar.key,
                                                    })}
                                                >
                                                    <div className="flex items-center">
                                                        {createElement(sidebar.icon, {
                                                            className: clsx('group-hover:!text-background shrink-0', {
                                                                '!text-crop-secondary': activeMenu === sidebar.key,
                                                            }),
                                                        })}

                                                        <span
                                                            className={clsx('ltr:pl-3 rtl:pr-3 text-crop-secondary dark:group-hover:text-background', {
                                                                '!text-crop-secondary': activeMenu === sidebar.key,
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

            <style>{`
                nav#admin-navigation .nav-item a.active {
                    background-color: #068042 !important;
                    color: #ffffff !important;
                    border-radius: 0.5rem;
                }

                nav#admin-navigation .nav-item a.active span {
                    color: #ffffff !important;
                }

                nav#admin-navigation .nav-item a.active svg {
                    fill: #ffffff !important;
                    color: #ffffff !important;
                }

                nav#admin-navigation .nav-item button.active svg {
                    fill: #ffffff !important;
                    color: #ffffff !important;
                }
            `}</style>
        </Fragment>
    );
};

export default AdminSidebar;
