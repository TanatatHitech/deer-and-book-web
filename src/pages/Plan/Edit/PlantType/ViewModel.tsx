import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCropPlanStore } from '@/store/cropPlanStore';
import { mapWhitelist } from '@/utils/mapWhitelist';

export const useViewModel = () => {
    const { id } = useParams<{ id: string }>();
    const { getPlanById, plan, updateCropPlan } = useCropPlanStore();
    const [formData, setFormData] = useState<any>({});

    useEffect(() => {
        if (plan?.cropPlan) {
            setFormData({
                planTitle: plan.cropPlan.planTitle || '',
                plantSpecies: plan.cropPlan.plantSpecies || '',
                notes: plan.cropPlan.notes || '',
                createdAt: plan.cropPlan.createdAt,
                totalAssigned: plan.cropPlan.totalAssigned || 0,
                plantName: plan.cropPlan.plantName || '',
                plantId: plan.cropPlan.plantId || '1',
            });
        }
    }, [plan]);

    useEffect(() => {
        const fetchPlan = async () => {
            await getPlanById(Number(id));
        };
        fetchPlan();
    }, [getPlanById, id]);

    const handleUpdate = async () => {
        const filteredData = mapWhitelist(formData);
        await updateCropPlan(Number(id), filteredData);
        console.log('update success');
    };

    return {
        plan,
        formData,
        setFormData,
        handleUpdate,
    };
};
