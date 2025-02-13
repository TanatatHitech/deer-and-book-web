import { Fragment, type FC, useEffect, useState } from 'react';
import useViewModel from './ViewModel';
import { useNavigate } from 'react-router-dom';
import { useBookStore } from '@/store/bookStore';

const HomeView: FC = () => {
    console.log('HomeView component rendered');
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const { books } = useBookStore();

    useViewModel();

    const navigateTo = (param: number) => {
        navigate(`/book-details/${param}`);
    };

    const mockCategories = [
        { name: 'Boy Love', icon: '/assets/images/icon/boy-love-icon.png' },
        { name: 'Girl Love', icon: '/assets/images/icon/girl-love-icon.png' },
        { name: 'Travel', icon: '/assets/images/icon/travel-icon.png' },
        { name: 'Healthy', icon: '/assets/images/icon/healthy-icon.png' },
        { name: 'Food & Drinks', icon: '/assets/images/icon/food-and-drinks-icon.png' },
        { name: 'Comics', icon: '/assets/images/icon/comics-icon.png' },
    ];

    return (
        <Fragment>
            <div className="h-screen flex flex-col lg:hidden">
                <div className="flex flex-col h-72 bg-gradient-to-b from-[#B347FD] to-[#6789EE] rounded-b-3xl">
                    <div className="flex items-center justify-center h-24">
                        <div className="flex h-12">
                            <img src="/assets/images/icon/logo.png" alt="logo"></img>
                        </div>
                    </div>
                    <div className="flex flex-col sm:items-center">
                        <div className="px-6 font-bold text-white text-sm my-1">Categories</div>
                        <div className="flex flex-row overflow-auto no-scrollbar w-full sm:justify-center">
                            {mockCategories.map((icon, index) => (
                                <div key={index} className={index === 0 ? 'flex flex-col items-center py-2 ml-5 mr-3' : 'flex flex-col items-center py-2 mx-3'}>
                                    <div style={{ height: 47, width: 47 }} className="rounded-full bg-dark-light shadow flex items-center justify-center">
                                        <img style={{ height: 30, width: 30 }} src={icon.icon} alt={icon.name}></img>
                                    </div>
                                    <div className="text-[11px] text-white mt-1 truncate font-bold">{icon.name}</div>
                                </div>
                            ))}
                        </div>
                        <div style={{ width: '80%' }} className="relative self-center my-2">
                            <input
                                type="text"
                                placeholder="Search by name"
                                className="w-full px-4 py-2 text-white placeholder-white bg-transparent border border-white rounded-full outline-none focus:ring-2 focus:ring-white"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full">
                                <img style={{ height: 20, width: 20 }} src="/assets/images/icon/search-icon.png" alt="search-icon"></img>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full overflow-y-auto grid grid-cols-2 sm:grid-cols-4 gap-6 p-10 bg-white pb-24 content-start">
                    {books.map((book) => (
                        <div key={book.id} className="flex flex-col items-center p-3 bg-gray-100 rounded-lg sm:h-60" onClick={() => navigateTo(book.id)}>
                            <p className="text-center font-semibold">{book.book_name}</p>
                            <img src={`https://deerandbook.com/${book.cover_image}`} alt={book.book_category_name} className="mt-2 w-full h-40 rounded-md object-contain" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:block hidden">
                <div className="flex flex-row h-screen mx-auto w-full">
                    <p className="text-crop-primary">ไม่สามารถแสดงผลได้</p>
                </div>
            </div>
        </Fragment>
    );
};

export default HomeView;
