import { createContext, useState, FC, ReactNode } from 'react';
import { getCurrentLanguage, toggleLanguage } from '@/utils/languageToggle';
import { useTranslation } from 'react-i18next';

interface IContext {
    showHeader: boolean;
    showBackButton: boolean;
    showCustomRightComponent?: JSX.Element;
    title: string;
    backFunction?: () => void;
    setShowHeader: (showHeader: boolean) => void;
    setShowBackButton: (showBackButton: boolean) => void;
    setShowCustomRightComponent: (showCustomRightComponent: JSX.Element) => void;
    setTitle: (title: string) => void;
    setupBackButton: (showBackButton: boolean, backFunction?: () => void) => void;
    // Language toggle
    currentLanguage: string;
    toggleAppLanguage: () => void;
}

export const MobileHeaderContext = createContext<IContext>({
    showHeader: false,
    showBackButton: false,
    title: '',
    showCustomRightComponent: undefined,
    backFunction: () => {},
    setShowHeader: () => {},
    setShowBackButton: () => {},
    setShowCustomRightComponent: () => {},
    setTitle: () => {},
    setupBackButton: () => {},
    // Language toggle
    currentLanguage: 'th',
    toggleAppLanguage: () => {},
});

export const MobileHeaderContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    const { i18n } = useTranslation();
    const [showHeader, setShowHeader] = useState(false);
    const [showBackButton, setShowBackButton] = useState(false);
    const [showCustomRightComponent, setShowCustomRightComponent] = useState<JSX.Element>();
    const [title, setTitle] = useState('');
    const [backFunction, setBackFunction] = useState<() => void>();
    const [currentLanguage, setCurrentLanguage] = useState(getCurrentLanguage());

    const setupBackButton = (showBackButton: boolean, backFunction?: () => void) => {
        setShowBackButton(showBackButton);
        if (backFunction) {
            setBackFunction(() => backFunction);
        }
    };

    const toggleAppLanguage = () => {
        const newLang = toggleLanguage();
        setCurrentLanguage(newLang);
    };

    // Keep language state in sync with i18n
    i18n.on('languageChanged', (lang) => {
        setCurrentLanguage(lang);
    });

    return (
        <MobileHeaderContext.Provider
            value={{
                showHeader,
                showBackButton,
                showCustomRightComponent,
                title,
                backFunction,
                setShowHeader,
                setShowBackButton,
                setShowCustomRightComponent,
                setTitle,
                setupBackButton,
                currentLanguage,
                toggleAppLanguage,
            }}
        >
            {children}
        </MobileHeaderContext.Provider>
    );
};
