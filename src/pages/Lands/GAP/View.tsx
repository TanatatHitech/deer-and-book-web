import { type FC, Fragment, useState } from 'react';
import useViewModel from './ViewModel';
import Search from '@/pages/Components/Search/View';
// import IconPlusCircle from '@/components/Icon/IconPlusCircle';
import GAPItem from '@/pages/Components/GAPItem';
import { formatLocation } from '@/utils/locationFormatter';
import { on } from 'events';

const LandGAPView: FC = () => {
    const { lands, isLoading, onViewLand, onclickNewGAP, onclickRenewGAP, onclickViewGAP } = useViewModel();
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
            <div className="pb-20 lg:pb-0">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12 mb-2">
                        <Search placeholder="ค้นหาแปลงที่ดิน..." onSearch={setSearchTerm} onSearchClick={() => handleSearch(searchTerm)} onClear={() => handleSearch('')} />
                    </div>
                    <div className="col-span-12">
                        <div className="flex flex-row justify-between text-crop-primary">
                            <div className="font-bold text-lg">ใบรับรองตามพื้นที่ปลูก</div>
                            {/* <div className="text-gray-500 flex cursor-not-allowed">
                                สร้างพื้นที่ <IconPlusCircle className="text-white bg-gray-500 rounded-full ml-2" />
                            </div> */}
                        </div>
                    </div>
                    {isLoading ? (
                        <div className="col-span-12 text-center text-crop-primary">Loading...</div>
                    ) : (
                        landsToDisplay.map((item: any, idx: number) => (
                            <div className="col-span-12 md:col-span-4 xl:col-span-3" key={item.id}>
                                <GAPItem
                                    cropIcon={null}
                                    cropName={item.plantName}
                                    name={item?.landTitle || `แปลงที่ ${idx + 1}`}
                                    location={formatLocation(item)}
                                    latitude={item.latitude || '-'}
                                    longitude={item.longitude || '-'}
                                    gapId={item.doaegapid}
                                    onClickRenew={onclickRenewGAP}
                                    onClickShowCert={onclickViewGAP}
                                    onClickNew={onclickNewGAP}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default LandGAPView;
