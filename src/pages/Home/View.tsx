import { Fragment, type FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IconUser from '@/components/Icon/IconUser';
import IconMapPin from '@/components/Icon/IconMapPin';
import PlanItem from '../Components/PlanItem';
import IconCalendar from '@/components/Icon/IconCalendar';
import IconSearch from '@/components/Icon/IconSearch';
import { formatThaiDateNotime, formatThaiDateNoDay, formatThaiDateOnlyDay } from '@/utils/format-time';
import { formatNumberCommasNoDecimal } from '@/utils/format-number';

import useViewModel from './ViewModel';
import LandItem from '../Components/LandItem';
import IconRedPin from '@/components/Icon/Crop/IconRedPin';
import IconCompass from '@/components/Icon/Crop/IconCompass';
import IconCorn from '@/components/Icon/Crop/IconCorn';
import { newDate } from 'react-datepicker/dist/date_utils';
import MyLand from './Component/myLand';
import WeatherCard from './Component/WeatherCard';
import { formatLocation } from '@/utils/locationFormatter';

import { FaSearch, FaHome, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HomeView: FC = () => {
    const navigate = useNavigate();

    const navigateTo = (param: number) => {
        navigate(`/book-details/${param}`);
    };

    const mockBooks = [
        {
            id: 1,
            book_category_id: 4,
            book_cover_id: 18,
            book_name: 'พี่ครับผมอยากลดพุง',
            cover_image: 'assets/images/icon/book-1.png',
            book_category_name: 'Travel',
        },
        {
            id: 2,
            book_category_id: 4,
            book_cover_id: 18,
            book_name: 'ใครๆ ก็ไปเที่ยวอเมริกา',
            cover_image: 'assets/images/icon/book-2.png',
            book_category_name: 'Travel',
        },
        {
            id: 3,
            book_category_id: 4,
            book_cover_id: 18,
            book_name: 'Eat Smart',
            cover_image: 'assets/images/icon/book-3.png',
            book_category_name: 'Travel',
        },
        {
            id: 4,
            book_category_id: 4,
            book_cover_id: 18,
            book_name: 'วันหนึ่งผมเดินเข้าป่า',
            cover_image: 'assets/images/icon/book-4.png',
            book_category_name: 'Travel',
        },
        {
            id: 5,
            book_category_id: 4,
            book_cover_id: 18,
            book_name: 'พี่ครับผมอยากลดพุง',
            cover_image: 'assets/images/icon/book-1.png',
            book_category_name: 'Travel',
        },
        {
            id: 6,
            book_category_id: 4,
            book_cover_id: 18,
            book_name: '1ใครๆ ก็ไปเที่ยวอเมริกา',
            cover_image: 'assets/images/icon/book-2.png',
            book_category_name: 'Travel',
        },
        {
            id: 7,
            book_category_id: 4,
            book_cover_id: 18,
            book_name: 'Eat Smart',
            cover_image: 'assets/images/icon/book-3.png',
            book_category_name: 'Travel',
        },
        {
            id: 8,
            book_category_id: 4,
            book_cover_id: 18,
            book_name: 'วันหนึ่งผมเดินเข้าป่า',
            cover_image: 'assets/images/icon/book-4.png',
            book_category_name: 'Travel',
        },
    ];

    const categories = [
        { name: 'Boy Love', icon: '/assets/images/icon/boy-love-icon.png' },
        { name: 'Girl Love', icon: '/assets/images/icon/girl-love-icon.png' },
        { name: 'Travel', icon: '/assets/images/icon/travel-icon.png' },
        { name: 'Healthy', icon: '/assets/images/icon/healthy-icon.png' },
        { name: 'Food & Drinks', icon: '/assets/images/icon/food-and-drinks-icon.png' },
        { name: 'Comics', icon: '/assets/images/icon/comics-icon.png' },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    // Filter books based on search term
    const filteredBooks = mockBooks.filter((book) => book.book_name.toLowerCase().includes(searchTerm.toLowerCase()));

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
                            {categories.map((icon, index) => (
                                <div className={index === 0 ? 'flex flex-col items-center py-2 ml-5 mr-3' : 'flex flex-col items-center py-2 mx-3'}>
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
                    {mockBooks.map((book, index) => (
                        <div key={index} className="flex flex-col items-center p-3 bg-gray-100 rounded-lg sm:h-60" onClick={() => navigateTo(book.id)}>
                            <p className="text-center font-semibold">{book.book_name}</p>
                            <img src={book.cover_image} alt={book.book_category_name} className="mt-2 w-full h-40 object-cover rounded-md object-contain" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:block hidden">
                <div className="flex flex-row h-screen mx-auto w-full">
                    <p className="text-crop-primary">ไม่สามารถแสดงผลงได้</p>
                </div>
            </div>
        </Fragment>
    );
};

export default HomeView;
