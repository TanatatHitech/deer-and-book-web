import { type FC, Fragment } from 'react';
import LandItem from '@/pages/Components/LandItem';
import IconMapPin from '@/components/Icon/IconMapPin';
import useViewModel from './ViewModel';
import { clsx } from '@mantine/core';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/th';
import IconArchive from '@/components/Icon/IconArchive';
import IconAward from '@/components/Icon/IconAward';
import IconInfoHexagon from '@/components/Icon/IconInfoHexagon';
import { formatThaiDate } from '@/utils/format-time';
import { formatNumberCommas, formatNumberCommasNoDecimal } from '@/utils/format-number';
import { useNavigate } from 'react-router-dom';

moment.locale('th');

const PlanDetailView: FC = () => {
    const { planDetails, loading, error, onViewBoundaryMap } = useViewModel();
    const navigate = useNavigate();

    const handleBackPlan = () => {
        navigate(-1);
    };

    return (
        <Fragment>
            <div className="">
                <div className="pb-20 lg:pb-0">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="hidden lg:block lg:col-span-4 my-auto">
                            <img src="/assets/crop/icon/corn-eclipse.png" className="h-auto w-full" />
                            {/* <IconInfoHexagon className="h-full w-full" /> */}
                        </div>
                        <div className="col-span-12 lg:col-span-8 ">
                            <div className="border border-gray-200 p-5 rounded-xl bg-white h-full">
                                {loading && <div className="text-center">Loading...</div>}
                                {error && <div className="text-center text-red-500">{error}</div>}
                                {!loading && !error && planDetails && (
                                    <>
                                        <div className="text-crop-primary flex items-center">
                                            <img src="/assets/crop/icon/arrow-right.png" className="rotate-180 mr-2 cursor-pointer h-6" onClick={handleBackPlan} />
                                            <span className="text-lg font-semibold">{planDetails?.cropPlan?.planTitle}</span>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            {/* <IconMapPin className="h-6" /> */}
                                            {/* <span className="text-black ml-2">อ.แม่ริม จ.เชียงใหม่</span> */}
                                        </div>
                                        <hr />

                                        <div className="grid grid-cols-12 gap-3 mt-2 lg:mt-4">
                                            <span className="text-gray-500 col-span-12 lg:hidden">รอบใส่ปุ๋ยและยา</span>
                                            <div className="border border-gray-200 rounded-xl p-3 col-span-12 lg:col-span-6">
                                                <div className="flex items-center mb-2">
                                                    <IconArchive className="h-6 text-crop-quaternary " />
                                                    <span className="text-gray-500 ml-2">รอบใส่ปุ๋ย :</span>
                                                </div>
                                                {planDetails?.cropPlanFertilizers?.length === 0 ? (
                                                    <div className="flex justify-center items-center h-full">ไม่พบข้อมูลในระบบ</div>
                                                ) : (
                                                    planDetails?.cropPlanFertilizers?.map((fertilizer: any, idx: number) => (
                                                        <div key={idx} className="text-black mb-2">
                                                            <div className="mb-1">รอบที่ {idx + 1} :</div>
                                                            <div className="text-gray-500 grid grid-cols-12 gap-1 mx-3">
                                                                <div className="col-span-12">สูตรปุ๋ย : {fertilizer.fertilizerText}</div>
                                                                <div className="col-span-12">วันที่ใส่ปุ๋ย : {formatThaiDate(fertilizer.planDate, true, 'D MMMM YYYY')}</div>
                                                                <div className="col-span-12">จำนวนที่ใช้ : {formatNumberCommasNoDecimal(fertilizer.amount)} กิโลกรัม</div>
                                                            </div>
                                                            <hr className="mt-2" />
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                            <div className="border border-gray-200 rounded-xl p-3 col-span-12 lg:col-span-6">
                                                <div className="flex items-center mb-2">
                                                    <IconAward className="h-6 text-crop-quaternary " />
                                                    <span className="text-gray-500 ml-2">รอบใส่ยา :</span>
                                                </div>
                                                {planDetails?.cropPlanPesticides?.length === 0 ? (
                                                    <div className="flex justify-center items-center h-full">ไม่พบข้อมูลในระบบ</div>
                                                ) : (
                                                    planDetails?.cropPlanPesticides?.map((pesticide: any, idx: number) => (
                                                        <div key={idx} className="text-black mb-2">
                                                            <div className="mb-1">รอบที่ {idx + 1} :</div>
                                                            <div className="text-gray-500 grid grid-cols-12 gap-1 mx-3">
                                                                <div className="col-span-12">สูตรปุ๋ย : {pesticide.pesticideText}</div>
                                                                <div className="col-span-12">วันที่ใส่ยา : {pesticide.planDate}</div>
                                                                <div className="col-span-12">จำนวนที่ใช้ : {formatNumberCommasNoDecimal(pesticide.amount)} ลิตร</div>
                                                            </div>
                                                            <hr className="mt-2" />
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PlanDetailView;
