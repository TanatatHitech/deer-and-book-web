export interface CropPlanCreateForm {
    cropPlan: {
        planTitle: string;
        notes: string;
        plantSpecies: string;
        plantId: string | number | null;
    };
    cropPlanFertilizers: {
        fertilizerText: string | number | null;
        amount: number;
        unitId?: number;
        planDate: number;
    }[];
    cropPlanPesticides: {
        pesticideText: string | number | null;
        amount: number;
        unitId: number;
        planDate: number;
    }[];
}
