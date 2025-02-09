import { type FC, Fragment } from 'react';
import IconPlusCircle from '@/components/Icon/IconPlusCircle';
import IconSearch from '@/components/Icon/IconSearch';
import LandItem from '@/pages/Components/LandItem';
import SearchPlant from '../SearchPlant/View';

import useViewModel, { Props } from './ViewModel';
import { clsx } from '@mantine/core';
import Search from '@/pages/Components/Search/View';
import LandBoundaryMapView from '@/pages/Lands/BoundaryMap/View';

const SelectLand: FC<Props> = (props) => {
    const { t, cropOptions, mobileData, showSearchPlant, onViewPlan, onViewDetail, onFindPlant, onSubmitSearchPlant, onCloseSearchPlant } = useViewModel(props);

    return (
        <Fragment>
            <SearchPlant isOpen={showSearchPlant} handleSubmit={onSubmitSearchPlant} handleClose={onCloseSearchPlant} />

            {/* Mobile Version */}
            <div
                className={clsx('lg:hidden grid-cols-12 gap-5', {
                    grid: !showSearchPlant,
                    hidden: showSearchPlant,
                })}
            >
                {/* <div className="col-span-12">
                    <button type="button" className="btn bg-crop-primary text-white font-bold px-4 py-2 hover:opacity-80 cursor-pointer w-full shadow border-none" onClick={() => onNextStep()}>
                        <IconPlusCircle className="w-6 h-6 mr-2" />
                        <span>{t('planLand.landing.add')}</span>
                    </button>
                </div> */}
                {/* <div className="col-span-12">
                    <button
                        type="button"
                        className="btn bg-white border border-crop-primary text-crop-primary font-bold px-4 py-2 hover:opacity-80 cursor-pointer w-full shadow"
                        onClick={() => onFindPlant()}
                    >
                        <IconSearch className="w-6 h-6 mr-2" />
                        <span>{t('planLand.landing.findPlant')}</span>
                    </button>
                </div> */}
                <div className="col-span-12">
                    <Search placeholder="ค้นหาแปลงที่ดิน..." />
                </div>
                <div className="col-span-12">
                    <div className="">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-12">
                                <div className="flex flex-row justify-between text-crop-primary">
                                    แผนการปลูกของฉัน
                                    <div className=" flex cursor-pointer" onClick={() => onViewDetail('1234', '1234')}>
                                        สร้างแผนการปลูกใหม่ <IconPlusCircle className="text-white bg-crop-primary rounded-full ml-1" />
                                    </div>
                                </div>
                            </div>
                            {mobileData.map((item, idx) => (
                                <div key={`land-item-${idx + 1}`} className="col-span-12">
                                    <LandItem
                                        cropIcon={item.icon}
                                        cropName={item.crop.name}
                                        name={item.name}
                                        location={item.location}
                                        latitude={item.latitude}
                                        longitude={item.longitude}
                                        onClick={() => onViewPlan('1234')}
                                        canSelect={true}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Version */}

            {/* Desktop Version */}
            <div></div>
            {/* Desktop Version */}
        </Fragment>
    );
};

export default SelectLand;
