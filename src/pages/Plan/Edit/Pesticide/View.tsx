import { FC, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import WeedInfectionPlan from './PesticidePlan';
import useViewModel from '../ViewModel';
import { useCropPlanStore } from '@/store/cropPlanStore';

const ViewEditPesticide: FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data, handleChangePesticide, fetchPlanPesticides, PESTICIDE_STATE, preprocessPesticideData } = useViewModel();
    const [weedInfectionRounds, setWeedInfectionRounds] = useState(data.cropPlanPesticides);
    const { EditCropPlanPesticide } = useCropPlanStore();

    useEffect(() => {
        if (id) {
            fetchPlanPesticides(parseInt(id));
        }
    }, []);

    useEffect(() => {
        setWeedInfectionRounds(data.cropPlanPesticides);
    }, [data.cropPlanPesticides]);

    const addWeedInfectionRound = () => {
        setWeedInfectionRounds([...weedInfectionRounds, { pesticideText: '', amount: 0.0, planDate: 0 }]);
    };

    const removeWeedInfectionRound = () => {
        if (weedInfectionRounds.length > 1) {
            setWeedInfectionRounds(weedInfectionRounds.slice(0, -1));
        }
    };

    const savePesticidePlan = async () => {
        if (id) {
            const result = await Swal.fire({
                title: 'ยืนยันที่จะเปลี่ยนแปลงแผนใช่หรือไม่',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'ใช่',
                cancelButtonText: 'ไม่',
                confirmButtonColor: '#068042',
                customClass: {
                    confirmButton: 'btn btn-crop-primary',
                },
            });

            if (result.isConfirmed) {
                const processedData = preprocessPesticideData(PESTICIDE_STATE);
                await EditCropPlanPesticide(parseInt(id), processedData);
                navigate('/plan');
            }
        }
    };

    return (
        <div>
            <WeedInfectionPlan
                WeedInfectionRounds={weedInfectionRounds}
                addWeedInfectionRound={addWeedInfectionRound}
                removeWeedInfectionRound={removeWeedInfectionRound}
                handleChangePesticide={(index, key: string, value) => handleChangePesticide(index, key, value)}
                savePesticidePlan={savePesticidePlan}
            />
        </div>
    );
};

export default ViewEditPesticide;
