import { type FC, Fragment } from 'react';
import { formatNumberWithCommas } from '@/utils/formatNumberWithCommas';

interface Props {
    data: { pesticideText: string; planDate: number; amount: number };
    onChange: (key: string, value: any) => void;
}

const WeedInfection: FC<Props> = ({ data, onChange }) => {
    return (
        <Fragment>
            <div className="">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-4">
                        <label htmlFor="pesticideText" className="text-gray-500 font-normal">
                            ชื่อยา
                        </label>
                        <input value={data.pesticideText ?? ''} onChange={(e) => onChange('pesticideText', e.target.value)} type="text" className="form-input rounded-full" />
                    </div>
                    <div className="col-span-10 lg:col-span-3">
                        <label htmlFor="planDate" className="text-gray-500 font-normal">
                            แผนใส่ยานับจากเริ่มปลูก
                        </label>
                        <input value={data.planDate ?? ''} onChange={(e) => onChange('planDate', e.target.value)} type="text" className="form-input rounded-full" />
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex flex-row items-end">
                        <span className="justify-end h-7">วัน</span>
                    </div>
                    <div className="col-span-10 lg:col-span-3">
                        <label htmlFor="amount" className="text-gray-500 font-normal">
                            ปริมาณต่อไร่
                        </label>
                        <input value={formatNumberWithCommas(data.amount) ?? ''} onChange={(e) => onChange('amount', e.target.value)} type="text" className="form-input rounded-full" />
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex flex-row items-end">
                        <span className="justify-end h-7">กิโลกรัม</span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default WeedInfection;
