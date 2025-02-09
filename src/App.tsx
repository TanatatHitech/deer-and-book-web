import { PropsWithChildren, useEffect } from 'react';
import { useThemeStore } from './store/theme';
import { useShallow } from 'zustand/react/shallow';

function App({ children }: PropsWithChildren) {
    const {
        theme,
        menu,
        layout,
        rtlClass,
        animation,
        navbar,
        locale,
        semidark,
        sidebar,
        toggleRTL,
        toggleTheme,
        toggleLocale,
        toggleMenu,
        toggleLayout,
        toggleAnimation,
        toggleNavbar,
        toggleSemidark,
    } = useThemeStore(
        useShallow((state) => ({
            theme: state.theme,
            menu: state.menu,
            layout: state.layout,
            rtlClass: state.rtlClass,
            animation: state.animation,
            navbar: state.navbar,
            locale: state.locale,
            semidark: state.semidark,
            sidebar: state.sidebar,
            toggleTheme: state.toggleTheme,
            toggleMenu: state.toggleMenu,
            toggleLayout: state.toggleLayout,
            toggleRTL: state.toggleRTL,
            toggleAnimation: state.toggleAnimation,
            toggleNavbar: state.toggleNavbar,
            toggleLocale: state.toggleLocale,
            toggleSemidark: state.toggleSemidark,
        }))
    );

    useEffect(() => {
        toggleTheme(localStorage.getItem('theme') || theme);
        toggleMenu(localStorage.getItem('menu') || menu);
        toggleLayout(localStorage.getItem('layout') || layout);
        toggleRTL(localStorage.getItem('rtlClass') || rtlClass);
        toggleAnimation(localStorage.getItem('animation') || animation);
        toggleNavbar(localStorage.getItem('navbar') || navbar);
        toggleLocale(localStorage.getItem('i18nextLng') || locale);
        toggleSemidark(localStorage.getItem('semidark') || semidark);
    }, [theme, menu, layout, rtlClass, animation, navbar, locale, semidark]);

    return <div className={`${(sidebar && 'toggle-sidebar') || ''} ${menu} ${layout} ${rtlClass} main-section antialiased relative font-prompt text-sm font-normal`}>{children}</div>;
}

export default App;
