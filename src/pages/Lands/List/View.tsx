import { type FC, Fragment, useState } from 'react';
import LandItem from '@/pages/Components/LandItem';
import useViewModel from './ViewModel';
import Search from '@/pages/Components/Search/View';
import IconPlusCircle from '@/components/Icon/IconPlusCircle';
import { formatLocation } from '@/utils/locationFormatter';

const LandListView: FC = () => {
    const { lands, onViewLand, isLoading } = useViewModel();
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
                            <div className="font-bold text-lg">พื้นที่ทั้งหมด</div>
                            <div className="text-gray-500 flex cursor-not-allowed">
                                สร้างพื้นที่ <IconPlusCircle className="text-white bg-gray-500 rounded-full ml-2" />
                            </div>
                        </div>
                    </div>
                    {isLoading ? (
                        <div className="col-span-12 text-center text-crop-primary">Loading...</div>
                    ) : (
                        landsToDisplay.map((item: any, idx: number) => (
                            <div className="col-span-12 md:col-span-4 xl:col-span-3" key={item.id}>
                                <LandItem
                                    name={item?.landTitle || `แปลงที่ ${idx + 1}`}
                                    location={formatLocation(item)}
                                    latitude={item.latitude || '-'}
                                    longitude={item.longitude || '-'}
                                    onClick={() => onViewLand(item.id)}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default LandListView;
