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

interface PlantTypeProps {
    plan: any;
    formData: any;
    setFormData: (data: any) => void;
}

const PlantType: FC<PlantTypeProps> = ({ plan, formData, setFormData }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(formData?.createdAt ? new Date(formData.createdAt) : null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Fragment>
            <div className="">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-12">
                        <div className="col-span-12 lg:col-span-12 mb-2">
                            {/* cropPlan.planTitle */}
                            <label htmlFor="rate" className="text-gray-500 font-normal">
                                ชื่อแผนการปลูก
                            </label>
                            <input type="text" name="planTitle" className="form-input rounded-xl" value={formData?.planTitle || ''} onChange={handleInputChange} />
                            {/* cropPlan.planTitle */}
                        </div>
                        <label htmlFor="rate" className="text-gray-500 font-normal">
                            พืชที่เพาะปลูก
                        </label>
                        <div className="grid grid-cols-12 gap-5 mb-2">
                            <div className="col-span-4 md:col-span-3 border border-green-600 p-2 rounded-xl bg-green-100">
                                <IconCircleCheck className="text-white bg-crop-primary rounded-full" />
                                <div className=" flex flex-col items-center justify-center">
                                    <img src="/assets/crop/icon/corn.png" alt="Corn Icon" className="my-2 h-16 lg:h-auto" />
                                    <span className="text-crop-primary text-lg font-semibold">{plan?.plantName || 'ข้าวโพดเลี้ยงสัตว์'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        {/* cropPlan.createdAt */}
                        <label htmlFor="rate" className="text-gray-500 font-normal">
                            วันที่สร้างแผน
                        </label>
                        <div className="flex flex-row items-center relative form-input rounded-full w-full bg-gray-100">
                            <DatePicker
                                disabled
                                selected={selectedDate}
                                onChange={(date) => {
                                    setSelectedDate(date);
                                    setFormData((prevData: any) => ({
                                        ...prevData,
                                        createdAt: date,
                                    }));
                                }}
                                className=""
                                placeholderText="เลือกวันที่"
                                dateFormat="dd MMMM yyyy"
                                locale={th}
                            />

                            <div className="absolute right-4" onClick={() => setSelectedDate(null)}>
                                <IconCalendar className=" w-6 h-6 text-crop-primary" />
                            </div>
                        </div>
                        {/* cropPlan.createdAt */}
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        {/* cropPlan.plantname */}
                        <label htmlFor="rate" className="text-gray-500 font-normal">
                            สายพันธุ์พืช
                        </label>
                        <input type="text" name="plantSpecies" className="form-input rounded-full" value={formData?.plantSpecies || ''} onChange={handleInputChange} />
                        {/* cropPlan.plantname */}
                    </div>
                    {/* <div className="col-span-12 lg:col-span-4">
                        <label htmlFor="rate" className="text-gray-500 font-normal">
                            จำนวนแปลงที่นำไปใช้
                        </label>
                        <input
                            disabled
                            readOnly
                            type="text"
                            name="totalAssigned"
                            className="form-input rounded-full bg-gray-100"
                            defaultValue={plan?.totalAssigned || 0}
                            onChange={handleInputChange}
                        />
                    </div> */}
                    <div className="col-span-12 lg:col-span-12">
                        {/* cropPlan.notes */}
                        <label htmlFor="rate" className="text-gray-500 font-normal">
                            บันทึกเพิ่มเติม
                        </label>
                        <input type="text" name="notes" className="form-input rounded-xl h-24" value={formData?.notes || ''} onChange={handleInputChange} />
                        {/* cropPlan.notes */}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PlantType;
