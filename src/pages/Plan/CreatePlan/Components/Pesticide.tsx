import IconCalendar from '@/components/Icon/IconCalendar';
import { type FC, Fragment } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import th from 'date-fns/locale/th';
import { format } from 'date-fns';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
    name: string;
    onChange?: (key: 'pesticideText' | 'amount' | 'unitId' | 'planDate', value: any) => void;
}

const WeedInfection: FC<Props> = ({ name, onChange }) => {
    return (
        <Fragment>
            <div className="">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-4">
                        <label htmlFor="pesticideText" className="text-gray-500 font-normal">
                            ชื่อยา
                        </label>
                        <input value={name} onChange={(e) => onChange && onChange('pesticideText', e.target.value)} type="text" className="form-input rounded-full" />
                    </div>
                    <div className="col-span-9 lg:col-span-3">
                        <label htmlFor="planDate" className="text-gray-500 font-normal">
                            แผนใส่ยานับจากเริ่มปลูก
                        </label>
                        <input type="text" onChange={(e) => onChange && onChange('planDate', e.target.value)} className="form-input rounded-full" />
                    </div>
                    <div className="col-span-3 lg:col-span-1 flex flex-row items-end">
                        <span className="justify-end h-7">วัน</span>
                    </div>
                    <div className="col-span-9 lg:col-span-3">
                        <label htmlFor="amount" className="text-gray-500 font-normal">
                            ปริมาณต่อไร่
                        </label>
                        <input type="text" onChange={(e) => onChange && onChange('amount', e.target.value)} className="form-input rounded-full" />
                    </div>
                    <div className="col-span-3 lg:col-span-1 flex flex-row items-end">
                        <span className="justify-center items-center h-7">ลิตร</span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default WeedInfection;
