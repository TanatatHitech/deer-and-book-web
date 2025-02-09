import { create } from 'zustand';
import axios from 'axios';
import { truncate } from 'node:fs';
export interface HeatspotStore {
    hotspots: any[];
    totalHotspots: number | null;
    error: string | null;
    getAllHotspots: () => Promise<{ success: boolean }>;
    clearState: () => void;
}

export const useHeatspotStore = create<HeatspotStore>((set) => ({
    hotspots: [],
    totalHotspots: null,
    error: null,
    getAllHotspots: async () => {
        set({ error: null });
        return axios
            .get(`${import.meta.env.VITE_API_HOTSPOT_ENDPOINT}/api/hotspots`)
            .then((response) => {
                set({ hotspots: response.data?.data || [] , totalHotspots: response.data?.count || 0 });
                return { success: true };
            })
            .catch((error) => {
                set({ error: error?.response?.data });
                return { success: false };
            });
    },

    clearState: () => set({ hotspots: [] }),
}));
