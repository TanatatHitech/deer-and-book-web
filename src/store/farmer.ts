import { create } from 'zustand';
import axios from 'axios';

export const API_SLUG = '/api/farmer';

export interface Farmers {
    data: any[];
    getAll: (filters?: any) => Promise<{ success: boolean; data: any[] }>;
    clearState: () => void;
}

export const useFarmers = create<Farmers>((set, get) => ({
    data: [],
    getAll: async (filters) => {
        return axios
            .get(`${API_SLUG}`, { params: filters })
            .then((response) => {
                set({ data: response.data?.data || [] });
                return { success: true, data: response.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data?.message ?? 'Error fetching data' };
            });
    },
    clearState: () => {
        set({ data: [] });
    },
}));
