import { useState } from 'react';
import { useCropPlanStore } from '@/store/cropPlanStore';

export const FERTILIZER_STATE = [
    { fertilizerText: '', amount: 0.0, planDate: 0 },
    { fertilizerText: '', amount: 0.0, planDate: 0 },
    { fertilizerText: '', amount: 0.0, planDate: 0 },
];

export const PESTICIDE_STATE = [{ pesticideText: '', amount: 0.0, planDate: 0 }];

interface PlanData {
    cropPlanPesticides: any[];
    cropPlanFertilizers: any[];
}

const initialData: PlanData = {
    cropPlanPesticides: PESTICIDE_STATE,
    cropPlanFertilizers: FERTILIZER_STATE,
};

const preprocessFertilizerData = (fertilizers: any[]) => {
    return fertilizers.map(({ fertilizerText, planDate, amount }) => ({
        fertilizerText,
        planDate,
        amount,
    }));
};

const preprocessPesticideData = (pesticides: any[]) => {
    return pesticides.map(({ pesticideText, planDate, amount }) => ({
        pesticideText,
        planDate,
        amount,
    }));
};

export default function useViewModel() {
    const [data, setData] = useState<PlanData>(initialData);

    const handleChangeFertilizer = (index: number, key: string, value: any) => {
        setData((prev) => {
            const updatedFertilizers = [...prev.cropPlanFertilizers];
            updatedFertilizers[index] = { ...updatedFertilizers[index], [key]: value };
            FERTILIZER_STATE[index] = updatedFertilizers[index];
            return { ...prev, cropPlanFertilizers: updatedFertilizers };
        });
    };

    const handleChangePesticide = (index: number, key: string, value: any) => {
        setData((prev) => {
            const updatedPesticides = [...prev.cropPlanPesticides];
            updatedPesticides[index] = { ...updatedPesticides[index], [key]: value };
            PESTICIDE_STATE[index] = updatedPesticides[index];
            return { ...prev, cropPlanPesticides: updatedPesticides };
        });
    };

    const fetchPlanFertilizers = async (planId: number) => {
        const { getPlanById } = useCropPlanStore.getState();
        const result = await getPlanById(planId);
        if (result.success) {
            const fertilizers = result.data?.cropPlanFertilizers;
            const updatedFertilizers = Array.isArray(fertilizers) && fertilizers.length > 0 ? fertilizers : FERTILIZER_STATE;
            FERTILIZER_STATE.splice(0, FERTILIZER_STATE.length, ...updatedFertilizers); // Update FERTILIZER_STATE
            setData((prev) => ({
                ...prev,
                cropPlanFertilizers: updatedFertilizers,
            }));
        } else {
            setData((prev) => ({ ...prev, cropPlanFertilizers: FERTILIZER_STATE }));
        }
    };

    const fetchPlanPesticides = async (planId: number) => {
        const { getPlanById } = useCropPlanStore.getState();
        const result = await getPlanById(planId);
        if (result.success) {
            const pesticides = result.data?.cropPlanPesticides;
            const updatedPesticides = Array.isArray(pesticides) && pesticides.length > 0 ? pesticides : PESTICIDE_STATE;
            PESTICIDE_STATE.splice(0, PESTICIDE_STATE.length, ...updatedPesticides);
            setData((prev) => ({
                ...prev,
                cropPlanPesticides: updatedPesticides,
            }));
        } else {
            setData((prev) => ({ ...prev, cropPlanPesticides: PESTICIDE_STATE }));
        }
    };

    return {
        data,
        handleChangeFertilizer,
        handleChangePesticide,
        fetchPlanFertilizers,
        fetchPlanPesticides,
        preprocessFertilizerData,
        preprocessPesticideData,
        FERTILIZER_STATE,
        PESTICIDE_STATE,
    };
}
