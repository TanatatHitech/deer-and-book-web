import { createContext, useState, useContext, FC, ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getCurrentLanguage, toggleLanguage, setLanguage } from '@/utils/languageToggle';
import { MobileHeaderContext } from './MobileHeader';

// Language toggle button component
export const LanguageToggleButton: FC<{ className?: string }> = ({ className }) => {
    const { t } = useTranslation();
    const { currentLanguage, toggleAppLanguage } = useContext(MobileHeaderContext);

    return (
        <button
            onClick={toggleAppLanguage}
            className={`bg-white text-[#6789EE] px-3 py-1 rounded-full font-bold shadow-md flex items-center justify-center ${className || ''}`}
            title={t('home.switchLanguage')}
        >
            {currentLanguage === 'th' ? 'EN' : 'TH'}
        </button>
    );
};

// Language toggle context wrapper
const LanguageToggleProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    const { i18n } = useTranslation();

    // Initialize language from localStorage or browser settings on app start
    useEffect(() => {
        const savedLang = localStorage.getItem('i18nextLng');
        if (savedLang && (savedLang === 'en' || savedLang === 'th')) {
            setLanguage(savedLang);
        }
    }, []);

    return <>{children}</>;
};

export default LanguageToggleProvider;
