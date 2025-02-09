import { type FC, Fragment, ReactNode } from 'react';
import { MobileHeaderContextProvider } from './MobileHeader';

const ContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    return (
        <Fragment>
            <MobileHeaderContextProvider>{children}</MobileHeaderContextProvider>
        </Fragment>
    );
};

export default ContextProvider;
