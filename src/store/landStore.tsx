import { create } from 'zustand';
import axios from 'axios';

export interface LandStore {
    lands: any[];
    land: any;
    getAllLands: () => Promise<{ success: boolean; data: any }>;
    getEmptyCropPlanLands: () => Promise<{ success: boolean; data: any }>;
    getLand: (landId: number) => Promise<{ success: boolean; data: any }>;
    getActiveLandByID: (id: number) => Promise<{ success: boolean; data: any }>;
    getLandDetails: (landId: number) => Promise<{ success: boolean; data: any }>;
    assignCropPlan: (id: number, cropPlanId: number) => Promise<{ success: boolean }>;
    patchCropPlanFertilizer: (id: number, patchData: any) => Promise<{ success: boolean; data?: any }>;
    patchCropPlanPesticide: (id: number, patchData: any) => Promise<{ success: boolean; data?: any }>;
    patchStartDate: (id: number, data: any) => Promise<{ success: boolean; data?: any }>;
    clearState: () => void;
    getAllActiveLand: () => Promise<{ success: boolean; data: any }>;
}

export const useLandStore = create<LandStore>((set) => ({
    lands: [],
    land: null,
    getAllLands: async () => {
        return axios
            .get(`/api/lands`)
            .then((response) => {
                set({ lands: response.data?.data || [] });
                return { success: true, data: response.data?.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data || error.message };
            });
    },
    getEmptyCropPlanLands: async () => {
        return axios
            .get(`/api/lands`)
            .then((response) => {
                const allLands = response.data?.data || [];
                const filtered = allLands.filter((land: any) => Array.isArray(land.cropPlanLands) && land.cropPlanLands.length === 0);
                set({ lands: filtered });
                return { success: true, data: filtered };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data || error.message };
            });
    },
    getLand: async (landId: number) => {
        return axios
            .get(`/api/lands/${landId}`)
            .then((response) => {
                set({ land: response.data?.data || null });
                return { success: true, data: response.data?.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data || error.message };
            });
    },
    getAllActiveLand: async () => {
        return axios
            .get(`/api/lands/assigned-plan`)
            .then((response) => {
                set({ lands: response.data?.data || [] });
                return { success: true, data: response.data?.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    getActiveLandByID: async (id: number) => {
        return axios
            .get(`/api/lands/assigned-plan/${id}`)
            .then((response) => {
                return { success: true, data: response.data?.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    getLandDetails: async (landId: number) => {
        return axios
            .get(`/api/lands/${landId}`)
            .then((response) => {
                set({ land: response.data?.data || null });
                return { success: true, data: response.data?.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    assignCropPlan: async (id: number, cropPlanId: number) => {
        return axios
            .post(`/api/lands/${id}/assign-cropplan`)
            .then((response) => {
                return { success: true };
                cropPlanId: cropPlanId;
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    patchCropPlanFertilizer: async (id: number, patchData: any) => {
        const data = {
            actualFertilizerText: patchData.actualFertilizerText,
            actualDate: patchData.actualDate,
            actualAmount: patchData.actualAmount,
        };
        return axios
            .post(`/api/activities/fertz/${id}`, data)
            .then((response) => {
                return { success: true, data: response.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data || error.message };
            });
    },
    patchCropPlanPesticide: async (id: number, patchData: any) => {
        const data = {
            actualPesticideText: patchData.actualPesticideText,
            actualDate: patchData.actualDate,
            actualAmount: patchData.actualAmount,
        };
        return axios
            .post(`/api/activities/pest/${id}`, data)
            .then((response) => {
                return { success: true, data: response.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data || error.message };
            });
    },
    patchStartDate: async (id: number, data: any) => {
        console.log('Patch data being sent:', data);
        return axios
            .patch(`/api/lands/crop-plan-land/${id}`, data)
            .then((response) => {
                return { success: true, data: response.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data || error.message };
            });
    },
    clearState: () => set({ lands: [] }),
}));
