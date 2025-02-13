import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import IconCorn from '@/components/Icon/Crop/IconCorn';
import IconCassava from '@/components/Icon/Crop/IconCassava';
import MockReciepe from '@/Data/mock-reciepe.json';
import Swal from 'sweetalert2';

export interface Props {
    onNextStep: (plantId?: string) => void;
}

const ViewModel = (props: Props) => {
    const { onNextStep } = props;
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { setShowHeader, setTitle } = useContext(MobileHeaderContext);
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );

    const [showSearchPlant, setShowSearchPlant] = useState<boolean>(false);

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
        setShowHeader(true);
        setTitle(`${t('แผนการปลูก')}`);
    };

    const onViewPlan = (id: string) => {
        navigate(`/plan/${id}`);
    };
    const onViewDetail = (id: string, roundId: string) => {
        navigate(`/plan/${id}/round/${roundId}`);
    };
    const onFindPlant = () => {
        setShowSearchPlant(true);
    };

    const onSubmitSearchPlant = (crop: string) => {
        setShowSearchPlant(false);
        onNextStep(crop);
    };

    const onCloseSearchPlant = () => {
        setShowSearchPlant(false);
    };

    const confirmDeleteCropPlan = (id: any, planName: string) => {
        Swal.fire({
            title: 'คุณต้องการจะลบแผนการปลูก',
            text: `แผนการปลูก "${planName}" ใช่หรือไม่`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'ใช่, ลบเลย!',
            customClass: {
                confirmButton: 'btn btn-danger text-white',
            },
            cancelButtonText: 'ยกเลิก',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCropPlan(id);
            }
        });
    };

    const generateIcon = (crop: string) => {
        switch (crop) {
            case 'corn':
                return <IconCorn className="w-20 h-20" />;
            case 'cassava':
                return <IconCassava className="w-20 h-20" />;
            default:
                return null;
        }
    };

    const mobileData = MockReciepe.map((item) => ({
        ...item,
        icon: generateIcon(item.crop.key),
    }));

    const onEditFertilizer = (id: any) => {
        navigate(`/plan/edit/fertilizer/${id}`);
    };

    const onEditPesticide = (id: any) => {
        navigate(`/plan/edit/pesticide/${id}`);
    };
    const onEditPlan = (id: any) => {
        navigate(`/plan/edit/plant-type/${id}`);
    };

    useEffect(() => {
        setupPage();
    }, []);

    useEffect(() => {
        return () => {
            setShowHeader(false);
            setTitle('');
        };
    }, []);

    return {
        t,
        showSearchPlant,
        cropOptions,
        mobileData,
        onViewPlan,
        onViewDetail,
        onNextStep,
        onFindPlant,
        onSubmitSearchPlant,
        onCloseSearchPlant,
        onEditFertilizer,
        onEditPesticide,
        onEditPlan,
        confirmDeleteCropPlan,
    };
};

export default ViewModel;
