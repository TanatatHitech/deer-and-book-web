import { FC, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import FertilizerPlan from './FertilizerPlan';
import useViewModel from '../ViewModel';

interface ViewEditFertilizerProps {
    getPlanById: (planId: number) => Promise<any>;
    EditCropPlanFertilizer: (planId: number, data: any) => Promise<any>;
}

const ViewEditFertilizer: FC<ViewEditFertilizerProps> = ({ getPlanById, EditCropPlanFertilizer }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data, handleChangeFertilizer, fetchPlanFertilizers, FERTILIZER_STATE, preprocessFertilizerData } = useViewModel({ getPlanById, EditCropPlanFertilizer });
    const [fertilizerRounds, setFertilizerRounds] = useState(data.cropPlanFertilizers);

    useEffect(() => {
        if (id) {
            fetchPlanFertilizers(parseInt(id));
        }
    }, []);

    useEffect(() => {
        setFertilizerRounds(data.cropPlanFertilizers);
    }, [data.cropPlanFertilizers]);

    const addFertilizerRound = () => {
        setFertilizerRounds([...fertilizerRounds, { fertilizerText: '', amount: 0.0, planDate: 0 }]);
    };

    const removeFertilizerRound = () => {
        if (fertilizerRounds.length > 1) {
            setFertilizerRounds(fertilizerRounds.slice(0, -1));
        }
    };

    const saveFertilizerPlan = async () => {
        if (id) {
            const result = await Swal.fire({
                title: 'ยืนยันที่จะเปลี่ยนแปลงแผนใช่หรือไม่',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#068042',
                confirmButtonText: 'ใช่',
                cancelButtonText: 'ไม่',
            });

            if (result.isConfirmed) {
                const processedData = preprocessFertilizerData(FERTILIZER_STATE);
                await EditCropPlanFertilizer(parseInt(id), processedData);
                navigate('/plan');
            }
        }
    };

    return (
        <div>
            <FertilizerPlan
                fertilizerRounds={fertilizerRounds}
                addFertilizerRound={addFertilizerRound}
                removeFertilizerRound={removeFertilizerRound}
                handleChangeFertilizer={(index, key: string, value) => handleChangeFertilizer(index, key, value)}
                saveFertilizerPlan={saveFertilizerPlan}
            />
        </div>
    );
};

export default ViewEditFertilizer;
