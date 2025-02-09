import { useContext, useEffect } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import MockLands from '@/Data/mock-lands.json';

export interface Props {
    formState: any;
    onChangeFormState: (index: number, key: string, value: any) => void;
    onAddNewFertilizer: () => void;
    onRemoveFertilizer: (index: number) => void;
    onBack: () => void;
    onConfirm: () => void;
}

const ViewModel = (props: Props) => {
    const { formState, onChangeFormState, onAddNewFertilizer, onRemoveFertilizer, onBack, onConfirm } = props;
    const { t } = useTranslation();
    const { setShowHeader, setTitle, setShowCustomRightComponent, setupBackButton } = useContext(MobileHeaderContext);
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

    const setupPage = () => {
        setPageTitle(`${t('planLand.selectLand.title')} | DOAE`);
        setShowHeader(true);
        setTitle('ขั้นตอนที่ 3 : แผนใส่ปุ๋ย');
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
        formState,
        onAddNewFertilizer,
        onRemoveFertilizer,
        onChangeFormState,
        onPrevious,
        onSubmit,
    };
};

export default ViewModel;
