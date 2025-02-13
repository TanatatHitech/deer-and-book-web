import { create } from 'zustand';
import axios from 'axios';
import { cl } from '@fullcalendar/core/internal-common';

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export interface AuthStore {
    profile: any;
    error: string | null;
    signinUser: (data: any) => Promise<{ success: boolean; data?: any }>;
    // register: (data: any) => Promise<{ success: boolean; data: any }>;
    verify: () => Promise<{ success: boolean }>;
    // verifyRegister: (data: any) => Promise<{ success: boolean; data: any }>;
    refreshFarmer: () => Promise<{ success: boolean }>;
    // signout: () => Promise<{ success: boolean; data: any }>;
    // forgotPassword: (email: string) => Promise<{ success: boolean; data: any }>;
    // resetPassword: (data: any) => Promise<{ success: boolean; data: any }>;
    // getProfile: () => Promise<{ success: boolean; data: any }>;
    registerFarmer: (data: any) => Promise<{ success: boolean }>;
    getProfile: () => Promise<{ success: boolean }>; // Add this line
}

export const useAuthStore = create<AuthStore>((set, get) => ({
    profile: {},
    error: null,
    signinUser: async (data) => {
        return axios
            .post(`${API_ENDPOINT}/api/login`, data, { withCredentials: true })
            .then((response) => {
                const { user } = response.data;
                set({ profile: user });
                return { success: true, data: user }; // Ensure token is included in response data
            })
            .catch((error) => {
                console.log(error?.response?.data);
                set({ error: error?.response?.data.message ?? error.message });
                return { success: false };
            });
    },
    // register: async (data) => {
    //     return axios
    //         .post(`${API_SLUG}/register`, data)
    //         .then((response) => {
    //             // set({ profile: response.data?.data ?? {} })
    //             return { success: true, data: response.data };
    //         })
    //         .catch((error) => {
    //             return { success: false, data: error?.response?.data };
    //         });
    // },
    verify: async () => {
        return axios
            .get(`${API_ENDPOINT}/api/verify`)
            .then((response) => {
                // set({ profile: response.data?.data?.user ?? {} })
                return { success: true };
            })
            .catch((error) => {
                set({ error: error?.response?.data });
                return { success: false };
            });
    },
    // verifyRegister: async (data) => {
    //     return axios
    //         .post(`${API_SLUG}/verify-register`, data)
    //         .then((response) => {
    //             // set({ profile: response.data?.data?.user ?? {} })
    //             return { success: true, data: response.data };
    //         })
    //         .catch((error) => {
    //             return { success: false, data: error?.response?.data };
    //         });
    // },
    refreshFarmer: async () => {
        return axios
            .post(`${API_ENDPOINT}/api/auth/refresh-token`)
            .then((response) => {
                // set({ profile: response.data })
                return { success: true, data: response.data };
            })
            .catch((error) => {
                return { success: false, data: error?.response?.data };
            });
    },
    registerFarmer: async (data) => {
        return axios
            .post(`${API_ENDPOINT}/api/auth/register`, data, { withCredentials: true })
            .then((response) => {
                // set({ profile: response.data?.data ?? {} })
                return { success: true };
            })
            .catch((error) => {
                console.log(error?.response?.data);
                set({ error: error?.response?.data.message ?? error.message });
                return { success: false };
            });
    },
    getProfile: async () => {
        return axios
            .get(`${API_ENDPOINT}/api/auth/profile`, { withCredentials: true })
            .then((response) => {
                set({ profile: response.data.data });
                return { success: true };
            })
            .catch((error) => {
                set({ error: error?.response?.data.message ?? error.message });
                return { success: false };
            });
    },
    // signout: async () => {
    //     return axios
    //         .post(`${API_SLUG}/logout`)
    //         .then((response) => {
    //             // set({ profile: {} })
    //             return { success: true, data: response.data };
    //         })
    //         .catch((error) => {
    //             return { success: false, data: error?.response?.data };
    //         });
    // },
    // forgotPassword: async (email) => {
    //     return axios
    //         .post(`${API_SLUG}/forgot-password`, { email })
    //         .then((response) => {
    //             return { success: true, data: response.data };
    //         })
    //         .catch((error) => {
    //             return { success: false, data: error?.response?.data };
    //         });
    // },
    // resetPassword: async (data) => {
    //     return axios
    //         .post(`${API_SLUG}/reset-password`, data)
    //         .then((response) => {
    //             return { success: true, data: response.data };
    //         })
    //         .catch((error) => {
    //             return { success: false, data: error?.response?.data };
    //         });
    // },
    // getProfile: async () => {
    //     return axios
    //         .get(`${API_SLUG}/me`)
    //         .then((response) => {
    //             set({ profile: response.data?.data ?? {} });
    //             return { success: true, data: response.data?.data ?? {} };
    //         })
    //         .catch((error) => {
    //             return { success: false, data: error?.response?.data };
    //         });
    // },
}));
