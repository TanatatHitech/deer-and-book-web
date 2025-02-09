import { create } from 'zustand';
import axios from 'axios';

export const API_SLUG = '/api/detected-heatspot';

export interface HeatAlertStore {
    heatAlert: any[];
    actionHeatAlert: any[];
    getHeatAlerts: (filters?: any) => Promise<{ success: boolean; data: any[] }>;
    getActionHeatAlerts: (filters?: any) => Promise<{ success: boolean; data: any[] }>;
    selectInspector: (id: string, data: any) => Promise<{ success: boolean; data: any }>;
    informMisInformation: (id: string) => Promise<{ success: boolean; data: any }>;
    completeHeatAlert: (id: string) => Promise<{ success: boolean; data: any }>;
    clearState: () => void;
}

export const useHeatAlertStore = create<HeatAlertStore>((set, get) => ({
    heatAlert: [],
    actionHeatAlert: [],
    getHeatAlerts: async (filters) => {
        return axios
            .get(`${API_SLUG}`, { params: filters })
            .then((response) => {
                set({ heatAlert: response.data?.data || [] });
                return { success: true, data: response.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data?.message ?? 'Error fetching data' };
            });
    },
    getActionHeatAlerts: async (filters) => {
        return axios
            .get(`${API_SLUG}/action`, { params: filters })
            .then((response) => {
                set({ actionHeatAlert: response.data?.data || [] });
                return { success: true, data: response.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data?.message ?? 'Error fetching data' };
            });
    },
    selectInspector: async (id, data) => {
        return axios
            .post(`${API_SLUG}/select-inspector/${id}`, data)
            .then((response) => {
                return { success: true, data: response.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data?.message ?? 'Error fetching data' };
            });
    },
    informMisInformation: async (id) => {
        return axios
            .post(`${API_SLUG}/inform-misinformation/${id}`)
            .then((response) => {
                return { success: true, data: response.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data?.message ?? 'Error fetching data' };
            });
    },
    completeHeatAlert: async (id) => {
        return axios
            .post(`${API_SLUG}/complete-action/${id}`)
            .then((response) => {
                return { success: true, data: response.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data?.message ?? 'Error fetching data' };
            });
    },
    clearState: () => {
        set({ heatAlert: [] });
    },
}));
