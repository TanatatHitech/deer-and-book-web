import { createContext, useState, FC, ReactNode } from 'react';

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
});

export const MobileHeaderContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    const [showHeader, setShowHeader] = useState(false);
    const [showBackButton, setShowBackButton] = useState(false);
    const [showCustomRightComponent, setShowCustomRightComponent] = useState<JSX.Element>();
    const [title, setTitle] = useState('');
    const [backFunction, setBackFunction] = useState<() => void>();

    const setupBackButton = (showBackButton: boolean, backFunction?: () => void) => {
        setShowBackButton(showBackButton);
        if (backFunction) {
            setBackFunction(() => backFunction);
        }
    };

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
            }}
        >
            {children}
        </MobileHeaderContext.Provider>
    );
};
