import { useContext, useEffect, useRef } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import IconGoldGrainRice from '@/components/Icon/Crop/IconGoldGrainRice';
import IconCorn from '@/components/Icon/Crop/IconCorn';
import IconCassava from '@/components/Icon/Crop/IconCassava';
import MockLands from '@/Data/mock-lands.json';

export interface Props {
    formState: any;
    onChangeFormState: (key: string, value: any) => void;
    onBack: () => void;
    onConfirm: () => void;
}

const ViewModel = (props: Props) => {
    const { formState, onChangeFormState, onBack, onConfirm } = props;
    const { t } = useTranslation();
    const { setShowHeader, setTitle, setupBackButton } = useContext(MobileHeaderContext);
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );
    const formCalendarRef = useRef<any>(null);

    const landData = MockLands?.[0]
        ? {
              name: MockLands[0].name,
              location: `${MockLands[0].tumbon.name} ${MockLands[0].amphure.name} ${MockLands[0].province.name}`,
              latitude: MockLands[0].latitude,
              longitude: MockLands[0].longitude,
          }
        : ({} as any);

    const cropOptions = [
        {
            icon: <IconCorn className="w-6 h-6" />,
            label: 'ข้าวโพด',
            value: 'corn',
        },
        {
            icon: <IconCassava className="w-6 h-6" />,
            label: 'มันสำปะหลัง',
            value: 'cassava',
        },
        {
            icon: <IconGoldGrainRice className="w-6 h-6" />,
            label: 'ข้าว',
            value: 'rice',
        },
    ];

    const cropBreeedOptions = [
        {
            label: 'พันธุ์ข้าวโพด 1',
            value: 'corn1',
        },
        {
            label: 'พันธุ์ข้าวโพด 2',
            value: 'corn2',
        },
        {
            label: 'พันธุ์ข้าวโพด 3',
            value: 'corn3',
        },
    ];

    const setupPage = () => {
        setPageTitle(`${t('planLand.selectLand.title')} | DOAE`);
        setShowHeader(true);
        setTitle('ขั้นตอนที่ 2 : ระบุข้อมูลพันธุ์พืช');
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
        formCalendarRef,
        landData,
        cropOptions,
        cropBreeedOptions,
        formState,
        onChangeFormState,
        onPrevious,
        onSubmit,
    };
};

export default ViewModel;
