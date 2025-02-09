import { create } from 'zustand';
import axios from 'axios';

export interface InspectorStore {
    inspectors: any[];
    fetchInspectors: () => Promise<{ success: boolean; data: any }>;
    clearState: () => void;
}

export const useInspectorStore = create<InspectorStore>((set) => ({
    inspectors: [],
    fetchInspectors: async () => {
        return axios
            .get(`/api/inspector`)
            .then((response) => {
                set({ inspectors: response.data?.data || [] });
                return { success: true, data: response.data?.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    clearState: () => set({ inspectors: [] }),
}));
