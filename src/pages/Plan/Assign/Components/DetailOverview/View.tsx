import { type FC, Fragment } from 'react';
import useViewModel from './ViewModel';
import LandItem from '@/pages/Components/LandItem';
import { useState } from 'react';
import Step from '../Step';
import IconCheck from './IconCheck';
import { formatLocation } from '@/utils/locationFormatter';

const PlanDetailOverviewView: FC = () => {
    const { lands, onSelectPlan } = useViewModel();
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    const handleSelect = (idx: number) => {
        setSelectedIdx(idx);
    };

    return (
        <Fragment>
            <div className="pb-20 lg:pb-0">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12">
                        <Step step={1} setStep={() => {}} />
                    </div>
                    <div className="col-span-12 text-lg font-bold">เลือกแปลง</div>

                    {lands.map((item, idx) => (
                        <div key={`land-item-${idx + 1}`} className="col-span-12 md:col-span-4 xl:col-span-3">
                            <LandItem
                                cropIcon={null}
                                cropName={item.plantName}
                                name={item?.landTitle || 'ที่ดินไม่มีชื่อ'}
                                location={formatLocation(item)}
                                isSelected={selectedIdx === idx}
                                onSelect={() => handleSelect(idx)}
                                canSelect={true}
                                showButton={false}
                            />
                        </div>
                    ))}
                </div>
                <div
                    onClick={() => selectedIdx !== null && onSelectPlan(lands[selectedIdx].id)}
                    className="col-span-12 btn bg-crop-quaternary hover:bg-crop-secondary rounded-full text-white p-4 mt-5 lg:w-60 lg:mx-auto lg:h-10 lg:mt-10 cursor-pointer"
                >
                    ดำเนินการต่อ
                </div>
            </div>
        </Fragment>
    );
};

export default PlanDetailOverviewView;
