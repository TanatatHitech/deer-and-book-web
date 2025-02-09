import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ViewModel = () => {
    const location = useLocation();
    const { t } = useTranslation();

    const isActive = (path: string) => {
        return location.pathname.includes(path);
    };

    return {
        t,
        isActive,
    };
};

export default ViewModel;
