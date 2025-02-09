import { useEffect, useContext } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';

const ViewModel = () => {
    const { showHeader, title, showBackButton, backFunction, showCustomRightComponent } = useContext(MobileHeaderContext);

    return {
        showHeader,
        title,
        showBackButton,
        showCustomRightComponent,
        backFunction,
    };
};

export default ViewModel;
