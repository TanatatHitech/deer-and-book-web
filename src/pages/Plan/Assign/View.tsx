import { type FC, Fragment } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step from './Components/Step';
import PlantItem from '@/pages/Components/PlantItem';
import useViewModel from './ViewModel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import StartPlanItem from '@/pages/Components/StartPlanItem';
import IconPlant from '@/components/Icon/Crop/IconPlant'; // used for Taro & Apple
import IconCorn from '@/components/Icon/Crop/IconCorn';
import IconCorn2 from '@/components/Icon/Crop/IconCorn2';
import IconCassava from '@/components/Icon/Crop/IconCassava';

const SelectPlanView: FC = () => {
    const { plans, onSelectPlan, step, setStep, onViewPlan } = useViewModel();
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [selectedPlant, setSelectedPlant] = useState<string | null>(null);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const navigate = useNavigate();

    // mocked plants list
    const plants = [
        { type: 'ข้าวโพดเลี้ยงสัตว์', label: 'ข้าวโพดเลี้ยงสัตว์', icon: <IconCorn2 className="w-20 h-20" /> },
        { type: 'มันสัมปะหลัง', label: 'มันสัมปะหลัง', icon: <IconCassava className="w-20 h-20" /> },
        { type: 'apple', label: 'สตอเบอร์รี่', icon: <IconPlant className="w-20 h-20" /> },
    ];

    const handleAccept = async () => {
        if (selectedIdx !== null && selectedDate !== null) {
            await onSelectPlan(plans[selectedIdx].id, selectedDate.toISOString().split('T')[0]);
        }
        setShowPopup(false);
    };

    const handleDecline = () => {
        setSelectedIdx(null);
        setShowPopup(false);
    };

    return (
        <Fragment>
            <div className="pb-20 lg:pb-0">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12">
                        <Step step={step} setStep={setStep} />
                    </div>
                    <div className="col-span-12 text-lg font-bold mt-2">เลือกวันที่ปลูก</div>
                    <div className="col-span-12">
                        <DatePicker selected={selectedDate || new Date()} onChange={(date) => setSelectedDate(date)} dateFormat="dd/MM/yyyy" className="w-full p-2 border rounded-lg" />
                    </div>
                    <div className="col-span-12 text-lg font-bold mt-2">เลือกพืช</div>
                    <div className="col-span-12 grid grid-cols-3 gap-2">
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
                    <div className="col-span-12 text-lg font-bold mt-2">เลือกแผนการปลูก</div>
                    {plans
                        .filter((item) => !selectedPlant || item.plantName === selectedPlant)
                        .map((item, idx) => (
                            <div key={`land-item-${idx + 1}`} className="col-span-12 md:col-span-4 xl:col-span-3">
                                <StartPlanItem
                                    key={`land-item-${idx}`}
                                    canSelect
                                    isSelected={selectedIdx === idx}
                                    onSelect={() => setSelectedIdx(idx)}
                                    name={item.planTitle}
                                    cropIcon={item.icon}
                                    plantName={item.plantName}
                                    plantDate={item.createdAt}
                                    applyLand={item.totalAssigned}
                                    plantSpecies={item.plantSpecies}
                                    onClick={() => onViewPlan(item.id)}
                                />
                            </div>
                        ))}
                </div>
                {/* {showPopup && selectedIdx !== null && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-5 rounded-lg w-96 px-10 my-10">
                            <h2 className="text-xl font-bold mb-4">คุณเลือกแผนการปลูก</h2>
                            <p className="mb-2">ชื่อแผน: {plans[selectedIdx].planTitle}</p>
                            <p>ชนิดพืช: {plans[selectedIdx].plantName}</p>
                            <div className="mt-4 flex justify-between">
                                <button onClick={handleDecline} className="btn bg-gray-300 hover:bg-gray-400 shadow-none text-black ">
                                    ปิด
                                </button>
                            </div>
                        </div>
                    </div>
                )} */}
                <button onClick={handleAccept} className="btn mt-4 btn bg-crop-quaternary hover:opacity-80 w-full text-white">
                    เริ่มปลูก
                </button>
            </div>
        </Fragment>
    );
};

export default SelectPlanView;
