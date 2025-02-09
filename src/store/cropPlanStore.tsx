import { create } from 'zustand';
import axios from 'axios';
import { CropPlanCreateForm } from '../interfaces/cropPlan/create';
import { convertToJSONPatch } from '../utils/convertToJSONPatch';
import { start } from 'repl';

export const WHITELIST = ['notes', 'planTitle', 'isFavorite', 'plantSpecies', 'plantId'];

export interface cropPlanStore {
    plans: any[];
    plan: any;
    getAllPlans: () => Promise<{ success: boolean }>;
    clearState: () => void;
    getPlanById: (id: number) => Promise<{ success: boolean; data?: any }>;
    createCropPlan: (data: CropPlanCreateForm) => Promise<{ success: boolean }>;
    updateCropPlan: (id: number, data: any) => Promise<{ success: boolean }>;
    assignCropPlan: (landId: string, cropPlanId: string, startCropDate: string) => Promise<{ success: boolean }>;
    getTodayJob: () => Promise<{ success: boolean; data?: any }>;
    deleteCropPlan: (id: number) => Promise<{ success: boolean }>;
    EditCropPlanFertilizer: (id: number, data: any) => Promise<{ success: boolean }>;
    EditCropPlanPesticide: (id: number, data: any) => Promise<{ success: boolean }>;
}

export const useCropPlanStore = create<cropPlanStore>((set) => ({
    plans: [],
    plan: null,
    getAllPlans: async () => {
        return axios
            .get(`/api/crop-plan`)
            .then((response) => {
                set({ plans: response.data?.data });
                return { success: true };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    getPlanById: async (id: number) => {
        return axios
            .get(`/api/crop-plan/${id}`)
            .then((response) => {
                set({ plan: response.data?.data });
                return { success: true, data: response.data?.data };
            })
            .catch((error) => {
                return { success: false };
            });
    },
    createCropPlan: async (data: CropPlanCreateForm) => {
        return axios
            .post(`/api/crop-plan`, data)
            .then((response) => {
                return { success: true };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    updateCropPlan: async (id: number, data: any) => {
        const patches = convertToJSONPatch(data);
        return axios
            .patch(`/api/crop-plan/${id}`, patches, {
                headers: {
                    'Content-Type': 'application/json-patch+json',
                },
            })
            .then((response) => {
                set({ plan: response.data?.data?.cropPlan });
                return { success: true };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    assignCropPlan: async (landId: string, cropPlanId: string, startCropDate: string) => {
        return axios
            .post(`/api/lands/${landId}/assign-cropplan`, { cropPlanId, startCropDate })
            .then(() => {
                return { success: true };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    getTodayJob: async () => {
        return axios
            .get(`/api/crop-plan/today-job`)
            .then((response) => {
                set({ plan: response.data?.data });
                return { success: true, data: response.data?.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    deleteCropPlan: async (id: number) => {
        return axios
            .delete(`/api/crop-plan/${id}`)
            .then(() => {
                set((state) => ({
                    plans: state.plans.filter((plan) => plan.id !== id),
                }));
                return { success: true };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    EditCropPlanFertilizer: async (id: number, data: any) => {
        return axios
            .patch(`/api/crop-plan/${id}/fertilizer`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                return { success: true };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    EditCropPlanPesticide: async (id: number, data: any) => {
        return axios
            .patch(`/api/crop-plan/${id}/pest`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                return { success: true };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    clearState: () => set({ plans: [] }),
}));
