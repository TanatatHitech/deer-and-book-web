import { type FC, Fragment, ReactNode } from 'react';
import { MobileHeaderContextProvider } from './MobileHeader';
import LanguageToggleProvider from './LanguageToggle';

const ContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    return (
        <Fragment>
            <MobileHeaderContextProvider>
                <LanguageToggleProvider>{children}</LanguageToggleProvider>
            </MobileHeaderContextProvider>
        </Fragment>
    );
};

export default ContextProvider;
