import { useContext, useEffect, useState } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';

import IconCorn from '@/components/Icon/Crop/IconCorn';
import IconCassava from '@/components/Icon/Crop/IconCassava';
import moment from 'moment';
import 'moment-timezone';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const INITIAL_FORM_STATE = {
    plantDate: moment().tz('Asia/Bangkok').toDate(),
    seletedPlannedLand: '',
    cropId: '',
    cropBreeds: [
        {
            id: '',
            quantity: '',
        },
    ] as {
        id: string;
        quantity: string;
    }[],
    cropNote: '',
    fertilizer: [
        {
            formula: '',
            date: '',
            quantityPerRai: '',
        },
    ] as {
        formula: string;
        date: string;
        quantityPerRai: string;
    }[],
    agrochemicals: [
        {
            id: '',
            date: '',
            quantityPerRai: '',
        },
    ] as {
        id: string;
        date: string;
        quantityPerRai: string;
    }[],
};

const ViewModel = () => {
    const { t, i18n } = useTranslation();
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );
    const { setShowHeader, setTitle } = useContext(MobileHeaderContext);

    /**
     * Step 0: หน้าหลักการวางแผน
     * Step 1: หน้าเลือกแปลงที่ดิน
     * Step 2: หน้าระบุพันธ์พืข
     * Step 3: หน้าแผนการใส่ปุ๋ย
     * Step 4: หน้าแผนใส่ยา
     * Step 5: หน้าสรุปแผน
     * Step 6: หน้าสรุปรายการ
     */
    const [step, setStep] = useState<number>(0);
    const [formState, setFormState] = useState<typeof INITIAL_FORM_STATE>(INITIAL_FORM_STATE);

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
    ];

    const setupPage = () => {
        setPageTitle(`${t('planLand.title')} | DOAE`);
    };

    // Step 0
    const onStartPlan = (cropId?: string) => {
        setStep(1);
        if (cropId) {
            setFormState((prev) => ({
                ...prev,
                cropId,
            }));
        }
    };

    // Step 1
    const onSelectedLand = (landId: string) => {
        setFormState((prev) => ({
            ...prev,
            seletedPlannedLand: landId,
        }));
        setStep(2);
    };
    const onBackStep1 = () => {
        setStep(0);
    };

    // Step 2
    const onConfirmStep2 = () => {
        setStep(3);
    };
    const onBackStep2 = () => {
        setStep(1);
    };

    // Step 3
    const onAddNewFertilizer = () => {
        setFormState((prev) => ({
            ...prev,
            fertilizer: [
                ...prev.fertilizer,
                {
                    formula: '',
                    date: '',
                    quantityPerRai: '',
                },
            ],
        }));
    };
    const onRemoveFertilizer = (index: number) => {
        if (index !== 0) {
            setFormState((prev) => ({
                ...prev,
                fertilizer: prev.fertilizer.filter((_, i) => i !== index),
            }));
        }
    };
    const onChangeFertilizer = (index: number, key: string, value: any) => {
        setFormState((prev) => ({
            ...prev,
            fertilizer: prev.fertilizer.map((item, i) => (i === index ? { ...item, [key]: value } : item)),
        }));
    };
    const onConfirmStep3 = () => {
        setStep(4);
    };
    const onBackStep3 = () => {
        setStep(2);
    };

    // Step 4
    const onAddNewAgrochemical = () => {
        setFormState((prev) => ({
            ...prev,
            agrochemicals: [
                ...prev.agrochemicals,
                {
                    id: '',
                    date: '',
                    quantityPerRai: '',
                },
            ],
        }));
    };
    const onRemoveAgrochemical = (index: number) => {
        if (index !== 0) {
            setFormState((prev) => ({
                ...prev,
                agrochemicals: prev.agrochemicals.filter((_, i) => i !== index),
            }));
        }
    };
    const onChangeAgrochemical = (index: number, key: string, value: any) => {
        setFormState((prev) => ({
            ...prev,
            agrochemicals: prev.agrochemicals.map((item, i) => (i === index ? { ...item, [key]: value } : item)),
        }));
    };
    const onConfirmStep4 = () => {
        setStep(5);
    };
    const onBackStep4 = () => {
        setStep(3);
    };

    // Step 5
    const onConfirmStep5 = () => {
        withReactContent(Swal)
            .fire({
                title: 'คุณต้องการสร้างแผนการเพาะปลูกใช่หรือไม่?',
                showCancelButton: true,
                confirmButtonText: 'ใช่',
                cancelButtonText: 'ไม่ใช่',
            })
            .then((result) => {
                if (result.isConfirmed) {
                    setStep(6);
                }
            });
    };
    const onBackStep5 = () => {
        setStep(4);
    };

    // Step 6
    const onShare = () => {
        const toast = withReactContent(Swal).mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
        toast.fire({
            icon: 'success',
            title: 'แชร์แผนการเพาะปลูกสำเร็จ',
        });
    };
    const onDownload = () => {
        const toast = withReactContent(Swal).mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
        toast.fire({
            icon: 'success',
            title: 'ดาวน์โหลดแผนการเพาะปลูกสำเร็จ',
        });
    };
    const onBackHome = () => {
        setStep(0);
    };

    const onChangeFormState = (key: string, value: any) => {
        setFormState((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    useEffect(() => {
        setupPage();
    }, [i18n.language]);

    useEffect(() => {
        return () => {
            setShowHeader(false);
            setTitle('');
        };
    }, []);

    return {
        t,
        cropOptions,
        step,
        formState,
        onChangeFormState,
        onStartPlan,
        onSelectedLand,
        onBackStep1,
        onBackStep2,
        onConfirmStep2,
        onAddNewFertilizer,
        onChangeFertilizer,
        onRemoveFertilizer,
        onConfirmStep3,
        onBackStep3,
        onAddNewAgrochemical,
        onChangeAgrochemical,
        onRemoveAgrochemical,
        onConfirmStep4,
        onBackStep4,
        onConfirmStep5,
        onBackStep5,
        onShare,
        onDownload,
        onBackHome,
    };
};

export default ViewModel;
