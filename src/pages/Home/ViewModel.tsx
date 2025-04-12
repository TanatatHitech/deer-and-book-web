import { useEffect, useState, useContext } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useBookStore } from '@/store/bookStore';
import { useNavigate } from 'react-router-dom';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useThemeStore } from '@/store/theme';

export const categories = [
    { id: 1, name: 'All Books', icon: '/assets/images/icon/all-cat.png' },
    { id: 11, name: 'Magazine', icon: '/assets/images/icon/magazine-icon.png' },
    { id: 2, name: 'Boy Love', icon: '/assets/images/icon/boy-love-icon.png' },
    { id: 3, name: 'Girl Love', icon: '/assets/images/icon/girl-love-icon.png' },
    { id: 4, name: 'Travel', icon: '/assets/images/icon/travel-icon.png' },
    { id: 5, name: 'Healthy', icon: '/assets/images/icon/healthy-icon.png' },
    { id: 6, name: 'Food & Bev', icon: '/assets/images/icon/food-and-drinks-icon.png' },
    { id: 7, name: 'Comic', icon: '/assets/images/icon/comics-icon.png' },
    { id: 8, name: 'Learning', icon: '/assets/images/icon/learning-icon.png' },
    { id: 9, name: 'Business', icon: '/assets/images/icon/business-icon.png' },
    { id: 10, name: 'Life Style', icon: '/assets/images/icon/lifestyle-icon.png' },
];

const ViewModel = () => {
    const { setShowHeader, setTitle, setupBackButton } = useContext(MobileHeaderContext);
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );
    const { getAllBooks, setBooks, books } = useBookStore();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    const setupPage = () => {
        setPageTitle(`Home`);
        setShowHeader(false);
        setTitle('หน้าหลัก');
    };

    const handleCategoryChange = (categoryId: number | null) => {
        if (categoryId === 1) {
            setSelectedCategory(1);
            setSearchTerm('');
        } else {
            setSelectedCategory(categoryId);
        }
    };

    const setupMainWrapperPadding = () => {
        const element = document.querySelector('#content-wrapper');
        if (element) {
            element.classList.remove('p-6');
        }
    };

    const setupBackMainWrapperPadding = () => {
        const element = document.querySelector('#content-wrapper');
        if (element) {
            element.classList.add('p-6');
        }
    };

    useEffect(() => {
        setupMainWrapperPadding();
        setupPage();
    }, []);

    useEffect(() => {
        setupMainWrapperPadding();
        getAllBooks().then((response: { success: boolean; data?: any }) => {
            if (response.success) {
                setBooks(response.data);
            } else {
            }
        });
    }, []);

    useEffect(() => {
        return () => {
            setupBackMainWrapperPadding();
        };
    }, []);

    const navigateTo = (param: number) => {
        navigate(`/book-details/${param}`);
    };

    const filteredBooks = books.filter((book) => {
        const matchesSearch = book.book_name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === null || book.book_category_id === selectedCategory;
        return matchesSearch && (selectedCategory === 1 || matchesCategory);
    });

    return {
        categories,
        navigateTo,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory: handleCategoryChange,
        filteredBooks,
    };
};

export default ViewModel;
