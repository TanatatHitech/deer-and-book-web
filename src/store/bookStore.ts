import { create } from 'zustand';
import axios from 'axios';

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export interface BookStore {
    books: any[];
    error: string | null;
    getAllBooks: () => Promise<{ success: boolean; data?: any[] }>;
    getBookById: (id: string) => Promise<{ success: boolean; data?: any }>;
    setBooks: (books: any[]) => void;
}

export const useBookStore = create<BookStore>((set) => ({
    books: [],
    error: null,
    getAllBooks: async () => {
        const token = localStorage.getItem('token');
        return axios
            .get(`${API_ENDPOINT}/api/books`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "ngrok-skip-browser-warning": true
                },
                withCredentials: true,
            })
            .then((response) => {
                set({ books: Array.isArray(response.data.books) ? response.data.books : [] });

                return { success: true, data: response.data.books };
            })
            .catch((error) => {
                set({ error: error?.response?.data.message ?? error.message });
                return { success: false };
            });
    },
    getBookById: async (id) => {
        const token = localStorage.getItem('token');
        return axios
            .get(`${API_ENDPOINT}/api/book/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "ngrok-skip-browser-warning": true,
                },
                withCredentials: true,
            })
            .then((response) => {
                return { success: true, data: response.data.book };
            })
            .catch((error) => {
                set({ error: error?.response?.data.message ?? error.message });
                return { success: false };
            });
    },
    setBooks: (books) => set({ books }),
}));
