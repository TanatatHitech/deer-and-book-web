import { type FC, Fragment, useRef } from 'react';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import IconCalendar from '@/components/Icon/IconCalendar';
import IconTrash from '@/components/Icon/IconTrash';

interface RoundItemProps {
    index: number;
    options: { label: string; value: string }[];
    formState: any;
    onChange: (index: number, key: string, value: any) => void;
    onRemove: (index: number) => void;
}

const RoundItem: FC<RoundItemProps> = ({ index, options, formState, onChange, onRemove }) => {
    const formCalendarRef = useRef<any>(null);

    return (
        <div className="panel border border-crop-primary">
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 font-bold">รอบที่ {index + 1}</div>
                <div className="col-span-12">
                    <label htmlFor="fertilize" className="text-black font-normal">
                        ปุ๋ย
                    </label>
                    <Select
                        placeholder={'เลือกปุ๋ย'}
                        options={options}
                        styles={{
                            menu: (provided) => ({
                                ...provided,
                                zIndex: 9999,
                            }),
                        }}
                        components={{
                            IndicatorSeparator: () => null,
                        }}
                    />
                </div>
                <div className="col-span-12">
                    <label htmlFor="date" className="text-black font-normal">
                        วันที่ใส่ปุ๋ย
                    </label>
                    <div className="relative">
                        <Flatpickr
                            ref={formCalendarRef}
                            value={[formState.fertilizer[index].date]}
                            lang="en"
                            options={{
                                dateFormat: 'F j, Y',
                                position: 'auto left',
                                maxDate: new Date(),
                            }}
                            className="form-input placeholder:text-gray-400 text-black focus:border-crop-primary cursor-pointer rounded-lg font-semibold"
                            onChange={(date) => {
                                if (date?.[0]) {
                                    onChange(index, 'date', date[0]);
                                }
                            }}
                        />
                        <span className="absolute end-2 top-1/2 -translate-y-1/2">
                            <button
                                onClick={() => {
                                    formCalendarRef.current.flatpickr.open();
                                }}
                                type="button"
                                className="bg-none border-none shadow-none px-1 py-1 hover:bg-white-light transition-all text-crop-primary btn"
                            >
                                <IconCalendar fill={true} className="h-4" />
                            </button>
                        </span>
                    </div>
                </div>
                <div className="col-span-12">
                    <label htmlFor="quantityPerRai" className="text-black font-normal">
                        ปริมาณต่อไร่
                    </label>
                    <input type="text" className="form-input" value={formState.fertilizer[index].quantityPerRai} onChange={(e) => onChange(index, 'quantityPerRai', e.target.value)} />
                </div>
                {index !== 0 && (
                    <div className="col-span-12">
                        <button type="button" className="btn bg-danger text-white font-bold px-4 py-2 hover:opacity-80 cursor-pointer w-full shadow border-none" onClick={() => onRemove(index)}>
                            <IconTrash className="mr-2" />
                            ลบ
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RoundItem;
