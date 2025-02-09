import { type FC, Fragment, useState } from 'react';
import IconPlusCircle from '@/components/Icon/IconPlusCircle';
import IconSearch from '@/components/Icon/IconSearch';
import LandItem from '@/pages/Components/LandItem';
import SearchPlant from '../SearchPlant/View';
import { formatLocation } from '@/utils/locationFormatter';

import useViewModel, { Props } from './ViewModel';
import { clsx } from '@mantine/core';
// import Search from '@/pages/Elements/Search';
import SelectPlan from '../SelectPlan/View';
import LandBoundaryMapView from '@/pages/Lands/BoundaryMap/View';
import Search from '@/pages/Components/Search/View';

const LandList: FC<{ lands: any[]; onViewLand: (id: string) => void; onStartPlant: () => void }> = ({ lands, onViewLand, onStartPlant }) => (
    <div className="">
        <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12">
                <div className="flex flex-row justify-between text-crop-primary">
                    <div className="font-bold text-lg">แปลงที่มีการปลูก</div>
                    <div className=" flex cursor-pointer" onClick={() => onStartPlant()}>
                        เริ่มปลูกใหม่ <IconPlusCircle className="text-white bg-crop-primary rounded-full ml-1" />
                    </div>
                </div>
            </div>
            {lands.map((item, idx) => (
                <div key={`land-item-${idx + 1}`} className="col-span-12 md:col-span-4 xl:col-span-3">
                    <LandItem
                        cropIcon={null}
                        cropName={item.plantName}
                        name={item?.landTitle || `แปลงที่ ${idx + 1}`}
                        location={formatLocation(item)}
                        longitude={item.longitude || '-'}
                        latitude={item.latitude || '-'}
                        assignPlan={item?.cropPlans?.cropPlansId || 'ไม่มีชื่อแผนการปลูก'}
                        onClick={() => onViewLand(item.id)}
                    />
                </div>
            ))}
        </div>
    </div>
);

const PlanLanding: FC<Props> = (props) => {
    const { t, cropOptions, lands, showSearchPlant, onViewLand, onViewDetail, onNextStep, onFindPlant, onSubmitSearchPlant, onCloseSearchPlant, onStartPlant } = useViewModel(props);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredLands = lands.filter((land: any) => land.landTitle?.toLowerCase().includes(searchQuery.toLowerCase()));
    const landsToDisplay = searchQuery ? filteredLands : lands;

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        setSearchQuery(term);
    };

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
                <div className="col-span-12">
                    <Search placeholder="ค้นหาแปลงที่ดิน..." onSearch={setSearchTerm} onSearchClick={() => handleSearch(searchTerm)} onClear={() => handleSearch('')} />
                </div>
                <div className="col-span-12">
                    <LandList lands={landsToDisplay} onViewLand={onViewLand} onStartPlant={onStartPlant} />
                </div>
            </div>
            {/* Mobile Version */}

            {/* Desktop Version */}
            <div className="hidden lg:grid grid-cols-12 gap-5">
                <div className="col-span-12">
                    <Search placeholder="ค้นหาแปลงที่ดิน..." onSearch={setSearchTerm} onSearchClick={() => handleSearch(searchTerm)} onClear={() => handleSearch('')} />
                </div>
                <div className="col-span-12">
                    <LandList lands={landsToDisplay} onViewLand={onViewLand} onStartPlant={onStartPlant} />
                </div>
            </div>
            {/* Desktop Version */}
        </Fragment>
    );
};

export default PlanLanding;
