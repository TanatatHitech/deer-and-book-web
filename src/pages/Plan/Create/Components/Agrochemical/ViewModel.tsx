import { useContext, useEffect } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import MockLands from '@/Data/mock-lands.json';

export interface Props {
    formState: any;
    onChangeFormState: (index: number, key: string, value: any) => void;
    onAddNewAgrochemical: () => void;
    onRemoveAgrochemical: (index: number) => void;
    onBack: () => void;
    onConfirm: () => void;
}

const ViewModel = (props: Props) => {
    const { formState, onChangeFormState, onAddNewAgrochemical, onRemoveAgrochemical, onBack, onConfirm } = props;
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

    const setupPage = () => {
        setPageTitle(`${t('planLand.selectLand.title')} | DOAE`);
        setShowHeader(true);
        setTitle('ขั้นตอนที่ 4 : แผนใส่ยา');
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
        chemicalOptions,
        formState,
        onAddNewAgrochemical,
        onRemoveAgrochemical,
        onChangeFormState,
        onPrevious,
        onSubmit,
    };
};

export default ViewModel;
