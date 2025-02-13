import { type FC, Fragment } from 'react';
import LandItem from '@/pages/Components/LandItem';
import IconMapPin from '@/components/Icon/IconMapPin';
import useViewModel from './ViewModel';
import { clsx } from '@mantine/core';
import { MapContainer, TileLayer, Polygon, Marker, LayersControl } from 'react-leaflet';
import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/th';
import IconRedPin from '@/components/Icon/Crop/IconRedPin';
import IconCompass from '@/components/Icon/Crop/IconCompass';
import { Icon } from 'leaflet';
moment.locale('th');

const LandDetailView: FC = () => {
    const { data, onViewBoundaryMap, handleBackLand } = useViewModel();
    // Compute zero-based index then add 1
    const fallbackIndex = 2;

    return (
        data && (
            <Fragment>
                {/* Mobile Version */}
                <div className="lg:hidden block">
                    <div className="pb-20 lg:pb-0">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-12">
                                <LandItem {...data} showButton={false} disabled />
                            </div>
                            <div className="col-span-12">
                                <button
                                    type="button"
                                    className="btn bg-white border border-crop-primary text-crop-primary font-bold px-4 py-2 hover:opacity-80 cursor-pointer w-full shadow"
                                    onClick={onViewBoundaryMap}
                                >
                                    <IconMapPin className="h-6" />
                                    ดูบนแผนที่
                                </button>
                            </div>
                            <div className="col-span-12">
                                <label htmlFor="rate" className="text-black font-normal">
                                    ชื่อแปลง
                                </label>
                                <input
                                    type="text"
                                    className={clsx('form-input', {
                                        'bg-gray-100': true,
                                    })}
                                    value={data.name}
                                    disabled
                                />
                            </div>
                            <div className="col-span-12">
                                <label htmlFor="rate" className="text-black font-normal">
                                    วันที่ลงทะเบียน
                                </label>
                                <input
                                    type="text"
                                    className={clsx('form-input', {
                                        'bg-gray-100': true,
                                    })}
                                    value={moment(data.registerDate).format('DD/MM/YYYY')}
                                    disabled
                                />
                            </div>
                            <div className="col-span-12">
                                <label htmlFor="rate" className="text-black font-normal">
                                    พื้นที่ทั้งหมด (ไร่)
                                </label>
                                <input
                                    type="text"
                                    className={clsx('form-input', {
                                        'bg-gray-100': true,
                                    })}
                                    value={data.rai}
                                    disabled
                                />
                            </div>
                            <div className="col-span-12">
                                <label htmlFor="rate" className="text-black font-normal">
                                    ระบบการให้น้ำ
                                </label>
                                <input
                                    type="text"
                                    className={clsx('form-input', {
                                        'bg-gray-100': true,
                                    })}
                                    value={data.wateringSystem}
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Version */}
                {/* Desktop Version */}
                <div className="hidden lg:block">
                    <div className="pb-20 lg:pb-0">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-7">
                                <MapContainer
                                    center={{
                                        lat: data.latitude,
                                        lng: data.longitude,
                                    }}
                                    zoom={15}
                                    scrollWheelZoom={true}
                                    dragging
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
                            <div className="col-span-5 ">
                                <div className="border border-gray-200 p-5 rounded-xl bg-white h-full">
                                    <div className="text-crop-primary flex items-center">
                                        <img src="/assets/crop/icon/arrow-right.png" className="rotate-180 mr-1 cursor-pointer h-6" onClick={handleBackLand} />
                                        <span className="text-lg font-semibold">{data?.landTitle || `แปลงที่ ${fallbackIndex}`}</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <IconMapPin className="h-6" />
                                        <span className="text-black ml-2">
                                            อ.{data.pAmphur} จ.{data.pProvince}
                                        </span>
                                    </div>
                                    <hr />
                                    <div className=" grid grid-cols-12 gap-5 mt-6 pb-3 items-center">
                                        <div className="col-span-3">
                                            <img src="/assets/crop/harvest-field/map.png" className="h-20 w-20" />
                                        </div>
                                        <div className="col-span-8">
                                            <div className="text-xs mt-2">
                                                {data.areaT} {`(ไร่-งาน-ตรว.)`}
                                            </div>
                                            <div className="text-xs text-gray-500 mt-2">
                                                X:{data.latitude} Y:{data.longitude}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-3 mt-2">
                                        <span className="text-gray-500 col-span-12">ตำแหน่งพื้นที่ตั้ง</span>
                                        <div className="border border-gray-200 rounded-xl p-3 col-span-12">
                                            <div className="flex items-center mb-2">
                                                <IconRedPin className="h-6 text-crop-quaternary " />
                                                <span className="text-gray-500 ml-2">ที่ตั้ง :</span>
                                            </div>
                                            <span className="text-black">
                                                หมู่ {data.pMoo} ตำบล {data.pTambon} อำเภอ {data.pAmphur} จังหวัด {data.pProvince}
                                            </span>
                                        </div>
                                        <div className="border border-gray-200 rounded-xl p-3 col-span-12">
                                            <div className="flex items-center mb-2">
                                                <IconCompass className="h-6 text-crop-quaternary " />
                                                <span className="text-gray-500 ml-2">เส้นแบ่งตามพิกัดภูมิศาสตร์:</span>
                                            </div>
                                            <span className="text-black">
                                                <span className="text-black">{data.latitude && data.longitude ? `${data.latitude}, ${data.longitude}` : 'N/A'}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-3 mt-4">
                                        <span className="text-gray-500 col-span-12">รายละเอียดเพิ่มเติม</span>
                                        <div className="border border-gray-200 rounded-xl p-3 col-span-12">
                                            {/* Updated grid layout for individual details */}
                                            <div className="grid grid-cols-12 gap-3">
                                                <div className="col-span-12">
                                                    <div className="grid grid-cols-12">
                                                        <span className="text-gray-500 text-right col-span-4">วันที่ลงทะเบียนแปลง :</span>
                                                        <span className="col-span-8 ml-2">1 มกราคม 2568</span>
                                                    </div>
                                                </div>
                                                <div className="col-span-12">
                                                    {' '}
                                                    <div className="grid grid-cols-12">
                                                        <span className="text-gray-500 text-right col-span-4">พื้นที่ทั้งหมด :</span>
                                                        <span className="col-span-8 ml-2">{data.areaT} (ไร่-งาน-ตรว.)</span>
                                                    </div>
                                                </div>
                                                <div className="col-span-12">
                                                    <div className="grid grid-cols-12">
                                                        <span className="text-gray-500 text-right col-span-4">ระบบการให้น้ำ :</span>
                                                        <span className="col-span-8 ml-2">แก้มลิง</span>
                                                    </div>
                                                </div>
                                                <div className="col-span-12">
                                                    <div className="grid grid-cols-12">
                                                        <span className="text-gray-500 text-right col-span-4">ประเภทดิน :</span>
                                                        <span className="col-span-8 ml-2">ดินร่วน</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default LandDetailView;
