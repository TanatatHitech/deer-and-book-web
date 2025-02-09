import { create } from 'zustand';
import axios from 'axios';

export interface InspectionStore {
    formdata: any[];
    getAllFormData: () => Promise<{ success: boolean; data: any }>;
}

export const useInspectionStore = create<InspectionStore>((set) => ({
    formdata: [],

    getAllFormData: async () => {
        return axios
            .get('/api/inspections/md-categories')
            .then((response) => {
                set({ formdata: response.data?.data || [] });
                return { success: true, data: response.data?.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },

    clearState: () => set({ formdata: [] }),
}));