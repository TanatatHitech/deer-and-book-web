import { Fragment, type FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconUser from '@/components/Icon/IconUser';
import IconMapPin from '@/components/Icon/IconMapPin';
import PlanItem from '../Components/PlanItem';
import IconCalendar from '@/components/Icon/IconCalendar';
import IconSearch from '@/components/Icon/IconSearch';
import { formatThaiDateNotime, formatThaiDateNoDay, formatThaiDateOnlyDay } from '@/utils/format-time';
import { useCropPlanStore } from '@/store/cropPlanStore';
import { useLandStore } from '@/store/landStore';
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

import { FaSearch } from "react-icons/fa";

const HomeView: FC = () => {
    const mockWeatherData = [
        { date: new Date(new Date().setDate(new Date().getDate() + 1)), temperature: 20, weather: 'cloudy', humidity: 82 },
        { date: new Date(new Date().setDate(new Date().getDate() + 2)), temperature: 18, weather: 'sun', humidity: 70 },
        { date: new Date(new Date().setDate(new Date().getDate() + 3)), temperature: 19, weather: 'cloudy', humidity: 65 },
        { date: new Date(new Date().setDate(new Date().getDate() + 4)), temperature: 22, weather: 'cloudy', humidity: 60 },
        { date: new Date(new Date().setDate(new Date().getDate() + 5)), temperature: 19, weather: 'sun', humidity: 80 },
    ];
    const { getTodayJob, plan } = useCropPlanStore();
    const { getAllLands, lands } = useLandStore();

    useEffect(() => {
        getTodayJob();
        getAllLands();
    }, []);

    const books = [
        { title: "พี่ครับผมอยากลดพุง", image: "assets/images/icon/book-1.png" },
        { title: "ใครๆ ก็ไปเที่ยวอเมริกา", image: "assets/images/icon/book-2.png" },
        { title: "Eat Smart", image: "/assets/images/icon/book-3.png" },
        { title: "วันหนึ่งผมเดินเข้าป่า", image: "/assets/images/icon/book-4.png" },
        { title: "Book 5", image: "/assets/images/icon/book-1.png" },
        { title: "Book 6", image: "/assets/images/icon/book-2.png" },
        { title: "Book 7", image: "/assets/images/icon/book-3.png" },
        { title: "Book 8", image: "/assets/images/icon/book-4.png" },
    ]

    const categories = [
        { name: "Boy Love", icon: "/assets/images/icon/boy-love-icon.png" },
        { name: "Girl Love", icon: "/assets/images/icon/girl-love-icon.png" },
        { name: "Travel", icon: "/assets/images/icon/travel-icon.png" },
        { name: "Healthy", icon: "/assets/images/icon/healthy-icon.png" },
        { name: "Food & Drinks", icon: "/assets/images/icon/food-and-drinks-icon.png" },
        { name: "Comics", icon: "/assets/images/icon/comics-icon.png" }
    ]

    return (
        <Fragment>
            <div className='h-screen flex flex-col lg:hidden'>
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
                                <div className={index === 0 ? "flex flex-col items-center py-2 ml-5 mr-3" : "flex flex-col items-center py-2 mx-3"}>
                                    <div style={{ height: 47, width: 47 }} className="rounded-full bg-dark-light shadow flex items-center justify-center">
                                        <img style={{ height: 30, width: 30 }} src={icon.icon} alt={icon.name}></img>
                                    </div>
                                    <div className="text-[11px] text-white mt-1 truncate font-bold">{icon.name}</div>
                                </div>
                            ))}
                        </div >
                        <div style={{ width: "80%" }} className="relative self-center my-2">
                            <input
                                type="text"
                                placeholder="Search by name"
                                className="w-full px-4 py-2 text-white placeholder-white bg-transparent border border-white rounded-full outline-none focus:ring-2 focus:ring-white"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full">
                                <FaSearch size={16} />
                            </button>
                        </div>
                    </div >

                </div >
                <div className="w-full h-full overflow-y-auto grid grid-cols-2 sm:grid-cols-4 gap-6 p-10 bg-white pb-20">
                    {books.map((book, index) => (
                        <div key={index} className="flex flex-col items-center p-3 bg-gray-100 rounded-lg h-50">
                            <p className="text-center font-semibold">{book.title}</p>
                            <img src={book.image} alt={book.title} className="mt-2 w-full h-40 object-cover rounded-md object-contain" />
                        </div>
                    ))}
                </div>
            </div >
            {/* <div className='bg-[url("/assets/crop/bg/home-bg.png")] bg-center bg-cover bg-no-repeat min-h-screen md:bg-white md:bg-none'>
                <div className="grid grid-cols-12 gap-5 p-6 pb-20 lg:pb-6">
                    <div className="col-span-9 lg:hidden">
                        <div className="flex flex-row items-center gap-3">
                            <div className="rounded-full bg-dark-light shadow h-14 w-14 flex items-center justify-center">
                                <img src="/assets/crop/profile-pic.png" alt="profile-picture"></img>
                            </div>
                            <div>
                                <div className=" text-black flex flex-row">
                                    สวัสดีตอนเช้า <img src="/assets/crop/logo/sun.png" className="w-4 h-4 ml-1" />
                                </div>
                                <div className="font-semibold">ภัควัฒน์ เงินแท้</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 h-full lg:hidden">
                        <div className="flex flex-row items-center justify-center gap-5 h-full">
                            <div className="flex items-center justify-center">
                                <IconCalendar className="w-6 h-6 text-crop-primary" />
                            </div>
                            <div className="flex items-center justify-center">
                                <IconSearch className="w-6 h-6 text-crop-primary" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-9 col-span-12">
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-12 md:col-span-7 xl:col-span-5">
                                <div className="md:bg-[#eaffec] md:p-0 md:px-3 md:rounded-2xl">
                                    <label className="hidden md:block text-gray-500 font-light mt-1 ml-2 pt-2">
                                        สภาพอากาศวันนี้, {new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })} น.
                                    </label>
                                    <div
                                        className="weather grid grid-cols-12 min-h-44 bg-center bg-contain bg-no-repeat p-4 rounded-md"
                                        style={{ backgroundImage: "url('/assets/crop/bg/weather-bg.png')" }}
                                    >
                                        <div className="col-span-6 mt-2">
                                            <div className="text-[11px] text-white mt-1 truncate font-bold text-gray-500">วันนี้,</div>
                                            <div className="text-gray-500">{formatThaiDateNotime(new Date())}</div>
                                            <div className="mt-5 mb-2">
                                                <span className="text-3xl font-semibold">18°C</span>
                                                <span className="text-[11px] text-white mt-1 truncate font-bold "> ความชื้น 82%</span>
                                            </div>
                                            <hr className="border-t-1 border-black" />
                                            <div className=" text-gray-500 mt-2">แม่ริม, เชียงใหม่</div>
                                        </div>
                                        <div className="col-span-6 flex flex-col justify-center items-center">
                                            <img src="/assets/crop/icon/weather-icon.png" alt="Weather Icon" className="w-full h-auto" />
                                            <div className="text-xl font-semibold mb-3" style={{ marginTop: '-20px' }}>
                                                เมฆมาก
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-5 xl:col-span-7 hidden md:block">
                                <div className="bg-[#eaffec] p-3 px-3 rounded-2xl h-full">
                                    <div className="flex flex-row justify-between mb-2">
                                        <div className="font-semibold text-xl">พยากรณ์อากาศ</div>
                                        <div className=" text-crop-primary flex h-5 cursor-pointer">
                                            <span>ดูพยากรณ์ทั้งเดือน</span> <img src="/assets/crop/icon/arrow-right.png" className="ml-1" />
                                        </div>
                                    </div>
                                    <span className="text-gray-500">{formatThaiDateNoDay(new Date())}</span>
                                    <div className="flex flex-wrap mt-2">
                                        {mockWeatherData.slice(0, 2).map((item, index) => (
                                            <div className="hidden xl:hidden md:block md:w-[50%] px-1" key={index}>
                                                <WeatherCard temperature={item.temperature} date={formatThaiDateOnlyDay(item.date)} weather={item.weather} humidity={item.humidity} />
                                            </div>
                                        ))}
                                        {mockWeatherData.map((item, index) => (
                                            <div className="hidden xl:block xl:w-[20%] px-1" key={index}>
                                                <WeatherCard temperature={item.temperature} date={formatThaiDateOnlyDay(item.date)} weather={item.weather} humidity={item.humidity} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 block lg:hidden">
                                <div className="flex flex-row justify-between">
                                    <div className="font-semibold">เมนูลัด</div>
                                </div>


                                <div className="panel" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                                    <div className="grid grid-cols-12 gap-2 md:gap-7">
                                        <div className="col-span-4 lg:col-span-3">
                                            <Link to="/land">
                                                <button type="button" className="panel flex flex-col items-center justify-center p-2 h-full w-full hover:opacity-80 transition-all">
                                                    <IconMapPin className="text-crop-primary h-6 w-6" />
                                                    <div className="text-[0.7rem] w-full text-center font-bold">พื้นที่แปลงปลูก</div>
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="col-span-4 lg:col-span-3">
                                            <Link to="/plan">
                                                <button type="button" className="panel flex flex-col items-center justify-center p-2 h-full w-full hover:opacity-80 transition-all">
                                                    <img src="/assets/crop/icon/scan-leaf.svg" alt="Scan Leaf " className="h-6 w-6" />
                                                    <div className="text-[0.7rem] w-full text-center font-bold">เริ่มปลูก</div>
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="col-span-4 lg:col-span-3">
                                            <Link to="/plan">
                                                <button type="button" className="panel flex flex-col items-center justify-center p-2 h-full w-full hover:opacity-80 transition-all">
                                                    <img src="/assets/crop/icon/location-2.svg" alt="Crop Care " className="h-6 w-6" />
                                                    <div className="text-[0.7rem] w-full text-center font-bold">Crop Care</div>
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="col-span-4 lg:col-span-3">
                                            <Link to="/gap">
                                                <button type="button" className="panel flex flex-col items-center justify-center p-2 h-full w-full hover:opacity-80 transition-all">
                                                    <img src="/assets/crop/icon/diamond.svg" alt="Diamond GAP+" className="h-6 w-6" />
                                                    <div className="text-[0.7rem] w-full text-center font-bold">GAP+</div>
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="col-span-4 lg:col-span-3">
                                            <Link to="#">
                                                <button type="button" className="panel flex flex-col items-center justify-center p-2 h-full w-full hover:opacity-80 transition-all">
                                                    <img src="/assets/crop/icon/person-boy.svg" alt="Expert Advice" className="h-6 w-6" />
                                                    <div className="text-[0.7rem] w-full text-center font-bold">Expert Advice</div>
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="col-span-4 lg:col-span-3">
                                            <Link to="/crop-calendar">
                                                <button type="button" className="panel flex flex-col items-center justify-center p-2 h-full w-full hover:opacity-80 transition-all">
                                                    <img src="/assets/crop/icon/green-star.svg" alt="Green Star" className="h-6 w-6" />
                                                    <div className="text-[0.7rem] w-full text-center font-bold">กิจกรรมการปลูก</div>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-6 mt-3">
                                <div className=" block md:hidden col-span-12">
                                    <div
                                        className="text-[11px] text-white mt-1 truncate font-bold flex flex-row justify-between rounded-lg py-4 px-2"
                                        style={{
                                            background: 'linear-gradient(to right, #FFF8B633, #FFD35B33)',
                                        }}
                                    >
                                        <div className="flex flex-row text-gray-400">
                                            <span>กำลังจะมาถึงอีก</span>
                                            <div className="bg-crop-quaternary w-4 h-4 text-white rounded-full flex items-center justify-center mx-1">6</div>
                                            <span>รายการ</span>
                                        </div>
                                        <div className=" text-crop-primary flex items-center">
                                        </div>
                                    </div>
                                </div>


                                <div className="grid grid-cols-12 gap-5">
                                    <div className="col-span-12">
                                        <h2 className="font-semibold lg:hidden mt-2">รายการที่ต้องทำวันนี้ {plan?.filteredFertilizers?.length + plan?.filteredPesticides?.length || 0} รายการ</h2>
                                        <h2 className="hidden lg:flex text-[17px] items-center">
                                            รายการที่ต้องทำวันนี้{' '}
                                            <span className="bg-crop-quaternary w-7 h-7 text-white rounded-full flex items-center justify-center mx-2">
                                                {plan?.filteredFertilizers?.length + plan?.filteredPesticides?.length || 0}
                                            </span>
                                            รายการ
                                        </h2>
                                        <div className="hidden lg:flex lg:flex-row justify-between mt-1">
                                            <div className="text-gray-500">วันนี้, {formatThaiDateNotime(new Date())}</div>
                                            <Link to="/today-plan">
                                                <div className="text-crop-primary flex cursor-pointer">
                                                    <span>ดูทั้งหมด</span> <img src="/assets/crop/icon/arrow-right.png" className="ml-1" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {plan?.filteredFertilizers?.map((item: any) => (
                                        <div className="col-span-12" key={item.id}>
                                            <PlanItem name={item.fertilizerText} description={`ใส่ปุ๋ย ${formatNumberCommasNoDecimal(item.amount)}`} date={item.planDate} />
                                        </div>
                                    ))}
                                    {plan?.filteredPesticides?.map((item: any) => (
                                        <div className="col-span-12" key={item.id}>
                                            <PlanItem name={item.pesticideTextText} description={`ใส่สารเคมี ${item.amount}`} date={item.planDate} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden lg:block lg:col-span-6 mt-3 pl-5">
                                <img src="/assets/images/farmer-pic.png" />
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:col-span-3 lg:block">
                        <div className="grid grid-cols-12 gap-3 border border-gray-200 rounded-xl p-3">
                            <div className="col-span-12 ">
                                <div className="flex justify-between items-center text-crop-primary">
                                    <div className="font-semibold text-lg">แปลงของฉัน</div>
                                    <Link to="/land">
                                        <div className=" text-crop-primary flex items-center">
                                            ดูทั้งหมด
                                            <img src="/assets/crop/icon/arrow-right.png" className="ml-1" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-12">
                                <img src="/assets/crop/icon/corn-eclipse.png" />
                                <div className="text-center text-gray-500">
                                    คุณสามารถสร้างกิจกรรมสำหรับ
                                    <br /> การติดตามแปลงปลูกของคุณได้
                                </div>
                            </div>
                            {lands.map((land: any, idx: number) => (
                                <div className="col-span-12" key={land.id}>
                                    <MyLand
                                        fieldName={land.fieldName || `แปลงที่ ${idx + 1}`}
                                        // cropName={land.plantName || ''}
                                        location={formatLocation(land)}
                                        latitude={land.latitude || '-'}
                                        longitude={land.longitude || '-'}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}
        </Fragment >
    );
};

export default HomeView;
