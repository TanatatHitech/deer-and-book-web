import { type FC, Fragment, useState } from 'react';
import IconPlusCircle from '@/components/Icon/IconPlusCircle';
import IconSearch from '@/components/Icon/IconSearch';
import LandItem from '@/pages/Components/LandItem';
import SearchPlant from '../SearchPlant/View';

import useViewModel, { Props } from './ViewModel';
import { clsx } from '@mantine/core';
// import Search from '@/pages/Elements/Search';
import SelectLand from '../SelctLand/View';
import LandBoundaryMapView from '@/pages/Lands/BoundaryMap/View';
import Search from '@/pages/Components/Search/View';
import PlanItem from '@/pages/Components/PlanItem';
import PlantItem from '@/pages/Components/PlantItem';
import PlanList from './PlanList';

const PlanLanding: FC<Props> = (props) => {
    const {
        t,
        cropOptions,
        showSearchPlant,
        plans,
        onViewPlan,
        onViewDetail,
        onNextStep,
        onFindPlant,
        onSubmitSearchPlant,
        onCloseSearchPlant,
        onEditFertilizer,
        onEditPesticide,
        onEditPlan,
        deleteCropPlan,
        confirmDeleteCropPlan,
    } = useViewModel(props);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPlans = plans.filter((plan: any) => plan.planTitle?.toLowerCase().includes(searchQuery.toLowerCase()));
    const plansToDisplay = searchQuery ? filteredPlans : plans;

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
                    <Search placeholder="ค้นหาแผนการปลูก..." onSearch={setSearchTerm} onSearchClick={() => handleSearch(searchTerm)} onClear={() => handleSearch('')} />
                </div>
                <PlanList
                    plans={plansToDisplay}
                    onViewDetail={onViewDetail}
                    onEditFertilizer={onEditFertilizer}
                    onEditPesticide={onEditPesticide}
                    onEditPlan={onEditPlan}
                    onViewPlan={onViewPlan}
                    deleteCropPlan={confirmDeleteCropPlan}
                />
            </div>
            {/* Mobile Version */}

            {/* Desktop Version */}
            <div className="grid-cols-12 gap-5 hidden lg:grid">
                <div className="col-span-12">
                    <Search placeholder="ค้นหาแผนการปลูก..." onSearch={setSearchTerm} onSearchClick={() => handleSearch(searchTerm)} onClear={() => handleSearch('')} />
                </div>
                <PlanList
                    plans={plansToDisplay}
                    onViewDetail={onViewDetail}
                    onEditFertilizer={onEditFertilizer}
                    onEditPesticide={onEditPesticide}
                    onEditPlan={onEditPlan}
                    onViewPlan={onViewPlan}
                    deleteCropPlan={confirmDeleteCropPlan}
                />
            </div>
            {/* Desktop Version */}
        </Fragment>
    );
};

export default PlanLanding;
