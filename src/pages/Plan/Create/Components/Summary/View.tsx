import { Fragment, type FC } from 'react';
import LandItem from '@/pages/Components/LandItem';
import useViewModel, { Props } from './ViewModel';
import { clsx } from '@mantine/core';

const SummaryView: FC<Props> = (props) => {
    const { landData, fertilizerOptions, chemicalOptions, cropOptions, formState, onPrevious, onSubmit } = useViewModel(props);

    return (
        <Fragment>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                    <LandItem disabled name={landData.name} location={landData.location} latitude={landData.latitude} longitude={landData.longitude} />
                </div>
                {/* Plant */}
                <div className="col-span-12">
                    <div className="panel">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-12">
                                <div>
                                    <span className="font-bold mr-2">พืชที่เพาะปลูก:</span>
                                    ข้าวโพด
                                </div>
                                <div>
                                    <span className="font-bold mr-2">วันที่ปลูก:</span>
                                    30 พฤศจิกายน 2568
                                </div>
                                <div>
                                    <span className="font-bold mr-2">สายพันธุ์พืช:</span>
                                    CP777
                                </div>
                                <div>
                                    <span className="font-bold mr-2">จำนวนเมล็ดพันธุ์:</span>
                                    20
                                </div>
                                <div>
                                    <span className="font-bold mr-2">หมายเหตุ:</span>
                                    หมายเหตุของการเพาะปลูก
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fertilizer */}
                <div className="col-span-12">
                    <div className="panel">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-12">การให้ปุ๋ย</div>
                            {[...formState.fertilizer, ...formState.fertilizer, ...formState.fertilizer].map((_: any, index: number) => (
                                <div
                                    key={`fertilizer-${index + 1}`}
                                    className={clsx('col-span-12', {
                                        'mb-3': index !== 0,
                                    })}
                                >
                                    <div className="font-bold">รอบที่: {index + 1}</div>
                                    <div>สูตรปุ๋ย: สูตร 16-16-16</div>
                                    <div>วันที่: 31 ธันวาคม 2568</div>
                                    <div>ปริมาณต่อไร่: 1 กิโลกรัม</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Agrochemicals */}
                <div className="col-span-12">
                    <div className="panel">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-12">การให้ยาฆ่าแมลง</div>
                            {[...formState.agrochemicals, ...formState.agrochemicals, ...formState.agrochemicals].map((_: any, index: number) => (
                                <div
                                    key={`agrochemicals-${index + 1}`}
                                    className={clsx('col-span-12', {
                                        'mb-3': index !== 0,
                                    })}
                                >
                                    <div className="font-bold">รอบที่: {index + 1}</div>
                                    <div>Emamectin benzoate</div>
                                    <div>วันที่: 31 ธันวาคม 2568</div>
                                    <div>ปริมาณต่อไร่: 1 กิโลกรัม</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-span-12">
                    <div className="panel">
                        <div className="flex flex-row items-center gap-3">
                            <button
                                type="button"
                                className="btn bg-white border border-crop-primary text-crop-primary font-bold px-4 py-2 hover:opacity-80 cursor-pointer w-full shadow"
                                onClick={onPrevious}
                            >
                                ย้อนกลับ
                            </button>
                            <button type="button" className="btn bg-crop-primary text-white font-bold px-4 py-2 hover:opacity-80 cursor-pointer w-full shadow border-none" onClick={onSubmit}>
                                สร้างแผน
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SummaryView;
