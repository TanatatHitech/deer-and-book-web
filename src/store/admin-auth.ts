import { create } from 'zustand';
import axios from 'axios';

export interface AdminAuthStore {
    profile: any;
    signin: (data: any) => Promise<{ success: boolean; data: any }>;
    verify: () => Promise<{ success: boolean; data: any }>;
    refresh: () => Promise<{ success: boolean; data: any }>;
    signout: () => Promise<{ success: boolean; data: any }>;
    getProfile: () => Promise<{ success: boolean; data: any }>;
    // forgotPassword: (email: string) => Promise<{ success: boolean; data: any }>;
    // resetPassword: (data: any) => Promise<{ success: boolean; data: any }>;
}

export const useAdminAuthStore = create<AdminAuthStore>((set, get) => ({
    profile: {},
    signin: async (data) => {
        return axios
            .post(`/api/inspector-auth/login`, data, { withCredentials: true })
            .then((response) => {
                return { success: true, data: response.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data?.message ?? 'Email or password is incorrect' };
            });
    },
    verify: async () => {
        return axios
            .get(`/api/inspector-auth/verify`)
            .then((response) => {
                return { success: true, data: response.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data?.message ?? 'Email or password is incorrect' };
            });
    },
    refresh: async () => {
        return axios
            .post(`/api/inspector-auth/refresh-token`)
            .then((response) => {
                return { success: true, data: response.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    signout: async () => {
        return axios
            .post(`/api/inspector-auth/logout`)
            .then((response) => {
                return { success: true, data: response.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    getProfile: async () => {
        return axios
            .get(`/api/inspector-auth/profile`)
            .then((response) => {
                return { success: true, data: response.data.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
}));
