import { useContext, useEffect } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import MockLands from '@/Data/mock-lands.json';

export interface Props {
    formState: any;
    onShare: () => void;
    onDownload: () => void;
    onBackHome: () => void;
}

const ViewModel = (props: Props) => {
    const { formState, onShare, onDownload, onBackHome } = props;
    const { t } = useTranslation();
    const { setShowHeader, setTitle, setupBackButton } = useContext(MobileHeaderContext);
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );

    const landData = MockLands?.[0]
        ? {
              name: MockLands[0].name,
              location: `${MockLands[0].tumbon.name} ${MockLands[0].amphure.name} ${MockLands[0].province.name}`,
              latitude: MockLands[0].latitude,
              longitude: MockLands[0].longitude,
          }
        : ({} as any);

    const setupPage = () => {
        setPageTitle(`${t('planLand.selectLand.title')} | DOAE`);
        setShowHeader(true);
        setTitle('สรุปรายการที่ใช้');
        setupBackButton(false, () => {});
    };

    useEffect(() => {
        setupPage();
    }, []);

    return {
        landData,
        formState,
        onShare,
        onDownload,
        onBackHome,
    };
};

export default ViewModel;
