import { type FC, Fragment } from 'react';
import LandItem from '@/pages/Components/LandItem';
import IconMapPin from '@/components/Icon/IconMapPin';
import useViewModel from './ViewModel';
import { clsx } from '@mantine/core';
import { MapContainer, TileLayer, Polygon, Marker, LayersControl } from 'react-leaflet';
import { Icon } from 'leaflet';
import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/th';
import IconRedPin from '@/components/Icon/Crop/IconRedPin';
import IconCompass from '@/components/Icon/Crop/IconCompass';
import { formatThaiDateNotime } from '@/utils/format-time';
import { formatNumberWithCommas } from '@/utils/formatNumberWithCommas';
import FertilizerPlan from './components/FertilizerPlan';
import PesticidePlan from './components/PesticidePlan';
import IconPencil from '@/components/Icon/IconPencil';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { calculateCropAge } from '@/utils/calculate';
import { convertToJSONPatch } from '@/utils/convertToJSONPatch';

moment.locale('th');

const ActiveLandDetailView: FC = () => {
    const {
        data,
        startDate,
        setStartDate,
        editingDate,
        startEditingDate,
        cancelEditingDate,
        saveDate,
        onViewBoundaryMap,
        handleBackLand,
        showFertilizer,
        showPesticide,
        onFertilizerClick,
        onWeedInfectionClick,
    } = useViewModel();

    return (
        Object.keys(data).length > 0 && (
            <Fragment>
                {/* Desktop Version */}
                <div className="">
                    <div className="pb-20 lg:pb-0">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-6">
                                <div className="border border-gray-200 p-5 rounded-xl bg-white h-[105%]">
                                    <div className="text-crop-primary flex items-center">
                                        <img src="/assets/crop/icon/arrow-right.png" className="rotate-180 mr-1 cursor-pointer h-6" onClick={handleBackLand} />
                                        <span className="text-lg font-semibold">แปลงที่ 1</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <span className="text-gray-500 ml-2">{data.area} ไร่</span>
                                    </div>
                                    <hr />

                                    <div className="grid grid-cols-12 gap-2 mt-2">
                                        <div className="p-1 col-span-12">
                                            <div className="flex items-center mb-2">
                                                <IconRedPin className="h-6 text-crop-quaternary " />
                                                <span className="text-gray-500 ml-2">ที่ตั้ง :</span>
                                            </div>
                                            <span className="text-black">
                                                หมู่ {data.pMoo} ตำบล {data.pTambon} อำเภอ {data.pAmphur} จังหวัด {data.pProvince}
                                            </span>
                                        </div>
                                        <div className="p-1 col-span-12">
                                            <div className="flex items-center mb-2">
                                                <IconCompass className="h-6 text-crop-quaternary " />
                                                <span className="text-gray-500 ml-2">เส้นแบ่งตามพิกัดภูมิศาสตร์:</span>
                                            </div>
                                            <span className="text-black">{data.latitude && data.longitude ? `${data.latitude}, ${data.longitude}` : 'N/A'}</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-3 mt-4">
                                        <span className="text-gray-500 col-span-12">รายละเอียดเพิ่มเติม</span>
                                        <div className="p-1 col-span-12 mb-2">
                                            <div className="grid grid-cols-12 gap-3">
                                                <div className="col-span-3 text-gray-500 text-right">วันที่เริ่มปลูก :</div>
                                                <div className="col-span-9 ml-4 flex items-center">
                                                    {editingDate ? (
                                                        <div className="flex flex-col items-start">
                                                            <DatePicker selected={startDate} onChange={(date: Date | null) => setStartDate(date)} dateFormat="dd/MM/yyyy" className="form-input" />
                                                            <div className="flex items-center mt-2 space-x-2">
                                                                <button onClick={saveDate} className="btn bg-crop-primary text-white shadow-none hover:opacity-80">
                                                                    บันทึก
                                                                </button>
                                                                <button onClick={cancelEditingDate} className="btn btn-danger shadow-none hover:opacity-80">
                                                                    ยกเลิก
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            {formatThaiDateNotime(data.cropPlanLands?.[0]?.startCropDate) || 'ไม่มีวันที่เริ่มปลูก'}
                                                            <div onClick={startEditingDate}>
                                                                <IconPencil className="h-3 w-3 ml-1 cursor-pointer" />
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="col-span-3 text-gray-500 text-right">พื้นที่ทั้งหมด :</div>
                                                <div className="col-span-9 ml-4">{data.area} ไร่</div>
                                                <div className="col-span-3 text-gray-500 text-right">พืชพันธุ์ :</div>
                                                <div className="col-span-9 ml-4">{data.plantName}</div>
                                                <div className="col-span-3 text-gray-500 text-right">อายุแปลง :</div>
                                                <div className="col-span-9 ml-4">{`${calculateCropAge(data.cropPlanLands?.[0]?.startCropDate)} วัน`}</div>
                                                <div className="col-span-3 text-gray-500 text-right">ระบบการให้น้ำ :</div>
                                                <div className="col-span-9 ml-4">{data.wateringSystem}</div>
                                                <div className="col-span-3 text-gray-500 text-right">ประเภทดิน :</div>
                                                <div className="col-span-9 ml-4">{data.soilType}</div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 h-48">
                                            <MapContainer
                                                center={{
                                                    lat: data.latitude ?? 0,
                                                    lng: data.longitude ?? 0,
                                                }}
                                                zoom={15}
                                                scrollWheelZoom={true}
                                                dragging
                                                style={{ height: '170%' }}
                                                className="relative"
                                            >
                                                <LayersControl position="topright">
                                                    <LayersControl.BaseLayer checked name="Street">
                                                        <TileLayer attribution="@Copyright 2024 DOAE" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                                    </LayersControl.BaseLayer>
                                                    <LayersControl.BaseLayer name="Satellite">
                                                        <TileLayer
                                                            attribution="Esri, Maxar, Earthstar Geographics"
                                                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                                                        />
                                                    </LayersControl.BaseLayer>
                                                </LayersControl>
                                                <TileLayer attribution="@Copyright 2024 DOAE" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                                <Marker
                                                    draggable={false}
                                                    position={{
                                                        lat: data.latitude ?? 0,
                                                        lng: data.longitude ?? 0,
                                                    }}
                                                    icon={
                                                        new Icon({
                                                            iconUrl: '/assets/crop/icon/red-location-marker.svg',
                                                            iconSize: [40, 40],
                                                        })
                                                    }
                                                />
                                                {/* <Polygon pathOptions={{ color: 'red' }} positions={data.boundary} /> */}
                                            </MapContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6 bg-green-100 p-5 rounded-xl">
                                <div className="grid grid-cols-12 gap-5 ">
                                    <div className="col-span-12 ">
                                        <div className="flex flex-row text-md w-full justify-start">
                                            <div
                                                onClick={onFertilizerClick}
                                                className={`rounded-full py-2 px-4 mr-3 cursor-pointer ${
                                                    showFertilizer ? 'bg-crop-tertiary text-white' : 'bg-white text-black border-[0.5px] border-gray-200'
                                                }`}
                                            >
                                                แผนการใส่ปุ๋ย
                                            </div>
                                            <div
                                                onClick={onWeedInfectionClick}
                                                className={`rounded-full py-2 px-4 mr-3 cursor-pointer ${
                                                    showPesticide ? 'bg-crop-tertiary text-white' : 'bg-white text-black border-[0.5px] border-gray-200'
                                                }`}
                                            >
                                                แผนการใส่ยา
                                            </div>
                                        </div>
                                    </div>
                                    {showFertilizer && <FertilizerPlan cropPlanLandFertilizers={data.cropPlanLands?.[0]?.cropPlanLandFertilizers} />}
                                    {showPesticide && <PesticidePlan cropPlanLandPesticides={data.cropPlanLands?.[0]?.cropPlanLandPesticides} />}
                                    <div className="col-span-12 ">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            บันทึกเพิ่มเติม
                                        </label>
                                        <input type="text" name="description" id="description" className="mt-1 block w-full shadow-sm sm:text-md border-gray-300 rounded-md p-4" />
                                        <div className="btn bg-crop-quinary text-white mt-2 hover:opacity-80">บันทึก</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Desktop Version */}
            </Fragment>
        )
    );
};

export default ActiveLandDetailView;
