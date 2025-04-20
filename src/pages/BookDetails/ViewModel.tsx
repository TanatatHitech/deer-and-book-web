import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useBookStore } from '@/store/bookStore';

const ViewModel = () => {
    const { id } = useParams();
    const { getBookById } = useBookStore();
    const [bookDetails, setBookDetails] = useState<any>(null);

    useEffect(() => {
        if (id) {
            getBookById(id).then((response) => {
                if (response.success) {
                    setBookDetails(response.data);
                }
            });
        }
    }, [id, getBookById]);

    const AppDeepLink = 'exp+deer-and-book-pdf-reader:\expo-development-client\?url=https%3A%2F%2Finjwrqs-liltanatat-8081.exp.direct';
    const fallbackUrl = '';

    const handleOpenApp = () => {
        const link = document.createElement('a');
        link.href = `${AppDeepLink}&slug=${bookDetails.file_path}`;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        console.log('link', link);
        setTimeout(() => {
            window.open(fallbackUrl, '_blank');
        }, 1000);
    };

    return {
        id,
        bookDetails,
        handleOpenApp,
    };
};

export default ViewModel;
