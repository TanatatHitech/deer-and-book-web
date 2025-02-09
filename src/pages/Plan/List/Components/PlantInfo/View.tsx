import { type FC, Fragment } from 'react';
import Select, { components } from 'react-select';
import Flatpickr from 'react-flatpickr';
import LandItem from '@/pages/Components/LandItem';
import IconCalendar from '@/components/Icon/IconCalendar';
import useViewModel, { Props } from './ViewModel';

const PlantInfo: FC<Props> = (props) => {
    const { formCalendarRef, landData, cropOptions, cropBreeedOptions, formState, onChangeFormState, onPrevious, onSubmit } = useViewModel(props);

    return (
        <Fragment>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                    <LandItem disabled name={landData.name} location={landData.location} latitude={landData.latitude} longitude={landData.longitude} />
                </div>
                <div className="col-span-12">
                    <div className="panel">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-12 lg:col-span-4">
                                <label htmlFor="province" className="text-black">
                                    พืชที่ปลูก
                                </label>
                                <Select
                                    placeholder={'เลือกพืชที่ต้องการเพาะปลูก'}
                                    options={cropOptions}
                                    styles={{
                                        menu: (provided) => ({
                                            ...provided,
                                            zIndex: 9999,
                                        }),
                                    }}
                                    components={{
                                        IndicatorSeparator: () => null,
                                        Option: (props) => {
                                            return (
                                                <components.Option {...props}>
                                                    <div className="flex flex-row items-center gap-3">
                                                        {props.data.icon}
                                                        <span>{props.data.label}</span>
                                                    </div>
                                                </components.Option>
                                            );
                                        },
                                        SingleValue: (props) => {
                                            return (
                                                <components.SingleValue {...props}>
                                                    <div className="flex flex-row items-center gap-3">
                                                        {props.data.icon}
                                                        <span>{props.data.label}</span>
                                                    </div>
                                                </components.SingleValue>
                                            );
                                        },
                                    }}
                                />
                            </div>
                            <div className="hidden lg:block col-span-8"></div>

                            <div className="col-span-12 lg:col-span-4">
                                <label htmlFor="province" className="text-black">
                                    วันที่ปลูก
                                </label>
                                <div className="relative">
                                    <Flatpickr
                                        ref={formCalendarRef}
                                        value={[formState.plantDate]}
                                        lang="en"
                                        options={{
                                            dateFormat: 'F j, Y',
                                            position: 'auto left',
                                            maxDate: new Date(),
                                        }}
                                        className="form-input placeholder:text-gray-400 text-black focus:border-crop-primary cursor-pointer rounded-lg font-semibold"
                                        onChange={(date) => {
                                            if (date?.[0]) {
                                                onChangeFormState('plantDate', date[0]);
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
                            <div className="hidden lg:block col-span-8"></div>

                            <div className="col-span-12 lg:col-span-4">
                                <label htmlFor="province" className="text-black">
                                    สายพันธุ์พืช
                                </label>
                                <Select
                                    placeholder={'เลือกสายพันธุ์พืช'}
                                    options={cropBreeedOptions}
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
                            <div className="hidden lg:block col-span-8"></div>

                            <div className="col-span-12 lg:col-span-4">
                                <label htmlFor="province" className="text-black">
                                    จำนวนเมล็ดพันธุ์
                                </label>
                                <input type="text" className="form-input" />
                            </div>
                            <div className="hidden lg:block col-span-8"></div>

                            <div className="col-span-12 lg:col-span-4">
                                <label htmlFor="province" className="text-black">
                                    หมายเหตุ
                                </label>
                                <textarea rows={3} className="form-input" />
                            </div>
                            <div className="hidden lg:block col-span-8"></div>

                            <div className="col-span-12">
                                <div className="flex flex-row items-center gap-3">
                                    <button
                                        type="button"
                                        className="btn bg-white border border-crop-primary text-crop-primary font-bold px-4 py-2 hover:opacity-80 cursor-pointer w-full shadow"
                                        onClick={onPrevious}
                                    >
                                        ยกเลิก
                                    </button>
                                    <button type="button" className="btn bg-crop-primary text-white font-bold px-4 py-2 hover:opacity-80 cursor-pointer w-full shadow border-none" onClick={onSubmit}>
                                        ดำเนินการต่อ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PlantInfo;
