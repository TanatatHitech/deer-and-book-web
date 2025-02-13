import { create } from 'zustand';
import axios from 'axios';

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export interface BookStore {
    books: any[];
    error: string | null;
    getAllBooks: () => Promise<{ success: boolean; data?: any[] }>;
    setBooks: (books: any[]) => void;
}

export const useBookStore = create<BookStore>((set) => ({
    books: [],
    error: null,
    getAllBooks: async () => {
        console.log('getAllBooks called');
        const token = localStorage.getItem('token');
        return axios
            .get(`${API_ENDPOINT}/api/books`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log('Books fetched from API:', response.data);
                set({ books: Array.isArray(response.data.books) ? response.data.books : [] });
                console.log('Books state updated:', Array.isArray(response.data.books) ? response.data.books : []);
                return { success: true, data: response.data.books };
            })
            .catch((error) => {
                console.error('Error fetching books:', error);
                set({ error: error?.response?.data.message ?? error.message });
                return { success: false };
            });
    },
    setBooks: (books) => set({ books }),
}));
