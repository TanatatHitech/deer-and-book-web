import { useContext, useEffect } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import MockLands from '@/Data/mock-lands.json';
import IconCorn from '@/components/Icon/Crop/IconCorn';
import IconCassava from '@/components/Icon/Crop/IconCassava';
import IconGoldGrainRice from '@/components/Icon/Crop/IconGoldGrainRice';

export interface Props {
    formState: any;
    onBack: () => void;
    onConfirm: () => void;
}

const ViewModel = (props: Props) => {
    const { formState, onBack, onConfirm } = props;
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

    const fertilizerOptions = [
        {
            label: 'ปุ๋ยเคมี',
            value: 'chemical',
        },
        {
            label: 'ปุ๋ยอินทรีย์',
            value: 'organic',
        },
        {
            label: 'ปุ๋ย 16-16-16',
            value: '16-16-16',
        },
        {
            label: 'ปุ๋ย 15-15-15',
            value: '15-15-15',
        },
    ];

    const chemicalOptions = [
        {
            label: 'Emamectin benzoate',
            value: 'Emamectin benzoate',
        },
        {
            label: 'Chlorantraniliprole',
            value: 'Chlorantraniliprole',
        },
        {
            label: 'Fipronil',
            value: 'Fipronil',
        },
        {
            label: 'Imidacloprid',
            value: 'Imidacloprid',
        },
    ];

    const cropOptions = [
        {
            icon: <IconCorn className="w-8 h-8" />,
            label: 'ข้าวโพด',
            value: 'corn',
        },
        {
            icon: <IconCassava className="w-8 h-8" />,
            label: 'มันสำปะหลัง',
            value: 'cassava',
        },
        {
            icon: <IconGoldGrainRice className="w-8 h-8" />,
            label: 'ข้าว',
            value: 'rice',
        },
    ];

    const setupPage = () => {
        setPageTitle(`${t('planLand.selectLand.title')} | DOAE`);
        setShowHeader(true);
        setTitle('ขั้นตอนที่ 5 : สรุปแผนการเพาะปลูก');
        setupBackButton(true, () => {
            setupBackButton(false);
            onBack();
        });
    };

    const onPrevious = () => {
        onBack();
    };

    const onSubmit = () => {
        onConfirm();
    };

    useEffect(() => {
        setupPage();
    }, []);

    return {
        landData,
        fertilizerOptions,
        chemicalOptions,
        cropOptions,
        formState,
        onPrevious,
        onSubmit,
    };
};

export default ViewModel;
