import { useEffect, useState } from 'react';
import { useBookStore } from '@/store/bookStore';
import { useNavigate } from 'react-router-dom';

export const categories = [
    { id: 1, name: 'All Categories', icon: '/assets/images/icon/all-cat.png' },
    { id: 2, name: 'Boy Love', icon: '/assets/images/icon/boy-love-icon.png' },
    { id: 3, name: 'Girl Love', icon: '/assets/images/icon/girl-love-icon.png' },
    { id: 4, name: 'Travel', icon: '/assets/images/icon/travel-icon.png' },
    { id: 5, name: 'Healthy', icon: '/assets/images/icon/healthy-icon.png' },
    { id: 6, name: 'Food & Bev', icon: '/assets/images/icon/food-and-drinks-icon.png' },
    { id: 7, name: 'Comic', icon: '/assets/images/icon/comics-icon.png' },
    { id: 8, name: 'Learning', icon: '/assets/images/icon/learning-icon.png' },
    { id: 9, name: 'Business', icon: '/assets/images/icon/business-icon.png' },
    { id: 10, name: 'Life Style', icon: '/assets/images/icon/lifestyle-icon.png' },
    { id: 11, name: 'Magazine', icon: '/assets/images/icon/magazine-icon.png' },
];

const ViewModel = () => {
    console.log('ViewModel component rendered');
    const { getAllBooks, setBooks, books } = useBookStore();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

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

    const navigateTo = (param: number) => {
        navigate(`/book-details/${param}`);
    };

    const filteredBooks = books.filter((book) => {
        const matchesSearch = book.book_name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === null || selectedCategory === 1 || book.book_category_id === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return {
        categories,
        navigateTo,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        filteredBooks,
    };
};

export default ViewModel;
