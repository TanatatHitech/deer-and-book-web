import { useEffect } from 'react';
import { useBookStore } from '@/store/bookStore';

const ViewModel = () => {
    console.log('ViewModel component rendered');
    const { getAllBooks, setBooks } = useBookStore();

    const setupMainWrapperPadding = () => {
        console.log('setupMainWrapperPadding called');
        const element = document.querySelector('#content-wrapper');
        if (element) {
            element.classList.remove('p-6');
        }
    };

    const setupBackMainWrapperPadding = () => {
        console.log('setupBackMainWrapperPadding called');
        const element = document.querySelector('#content-wrapper');
        if (element) {
            element.classList.add('p-6');
        }
    };

    useEffect(() => {
        console.log('useEffect for getAllBooks called');
        setupMainWrapperPadding();
    }, []);

    useEffect(() => {
        console.log('useEffect for getAllBooks called');
        setupMainWrapperPadding();
        getAllBooks().then((response: { success: boolean; data?: any }) => {
            if (response.success) {
                console.log('Books fetched successfully');
                setBooks(response.data);
            } else {
                console.error('Failed to fetch books');
            }
        });
    }, []);

    useEffect(() => {
        return () => {
            console.log('Cleanup useEffect called');
            setupBackMainWrapperPadding();
        };
    }, []);

    return {};
};

export default ViewModel;
