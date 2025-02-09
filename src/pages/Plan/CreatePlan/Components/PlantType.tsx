import IconCalendar from '@/components/Icon/IconCalendar';
import { type FC, Fragment } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import th from 'date-fns/locale/th';
import { format } from 'date-fns';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import IconCorn from '@/components/Icon/Crop/IconCorn';
import IconCircleCheck from '@/components/Icon/IconCircleCheck';
import { INITIAL_STATE } from '../ViewModel';
import IconCorn2 from '@/components/Icon/Crop/IconCorn2';
import IconCassava from '@/components/Icon/Crop/IconCassava';
import IconPlant from '@/components/Icon/Crop/IconPlant';
import PlantItem from '@/pages/Components/PlantItem';

const PlantType: FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const plants = [
        { type: 'ข้าวโพดเลี้ยงสัตว์', label: 'ข้าวโพดเลี้ยงสัตว์', icon: <IconCorn2 className="w-20 h-20" /> },
        { type: 'มันสัมปะหลัง', label: 'มันสัมปะหลัง', icon: <IconCassava className="w-20 h-20" /> },
        { type: 'apple', label: 'สตอเบอร์รี่', icon: <IconPlant className="w-20 h-20" /> },
    ];
    const [selectedPlant, setSelectedPlant] = useState<string | null>(null);
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    return (
        <Fragment>
            <div className="">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-12">
                        {/* cropPlan.planTitle */}
                        <label htmlFor="planTitle" className="text-gray-500 font-normal">
                            ชื่อแผนการปลูก
                        </label>
                        <input
                            type="text"
                            name="planTitle"
                            className="form-input rounded-xl"
                            defaultValue={INITIAL_STATE.cropPlan.planTitle}
                            onChange={(e) => {
                                INITIAL_STATE.cropPlan.planTitle = e.target.value;
                            }}
                        />
                        {/* cropPlan.planTitle */}
                    </div>
                    <div className="col-span-12 lg:col-span-12">
                        <label htmlFor="plantSpecies" className="text-gray-500 font-normal">
                            พืชที่เพาะปลูก
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            {plants.map((item) => (
                                <div key={item.type}>
                                    <PlantItem
                                        plantName={item.label}
                                        cropIcon={item.icon}
                                        canSelect
                                        isSelected={selectedPlant === item.type}
                                        onSelect={() => {
                                            setSelectedPlant(item.type);
                                            setSelectedIdx(null);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <label htmlFor="rate" className="text-gray-500 font-normal">
                            วันที่สร้างแผน
                        </label>
                        <div className="flex flex-row items-center relative form-input rounded-full ไขดีสส">
                            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} className="" placeholderText="เลือกวันที่" dateFormat="dd MMMM yyyy" locale={th} />

                            <div className="absolute right-4" onClick={() => setSelectedDate(null)}>
                                <IconCalendar className=" w-6 h-6 text-crop-primary" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <label htmlFor="plantSpecies" className="text-gray-500 font-normal">
                            สายพันธุ์พืช
                        </label>
                        <input
                            type="text"
                            name="plantSpecies"
                            className="form-input rounded-full"
                            defaultValue={INITIAL_STATE.cropPlan.plantSpecies}
                            onChange={(e) => {
                                INITIAL_STATE.cropPlan.plantSpecies = e.target.value;
                            }}
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-12">
                        <label htmlFor="notes" className="text-gray-500 font-normal">
                            บันทึกเพิ่มเติม
                        </label>
                        <input
                            type="text"
                            name="notes"
                            className="form-input rounded-xl h-24"
                            defaultValue={INITIAL_STATE.cropPlan.notes}
                            onChange={(e) => {
                                INITIAL_STATE.cropPlan.notes = e.target.value;
                            }}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PlantType;
