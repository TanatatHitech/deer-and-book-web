import { type FC, Fragment } from 'react';
import { useState } from 'react';
import IconHorizontalDots from '@/components/Icon/IconHorizontalDots';
import IconClock from '@/components/Icon/IconClock';
import { INITIAL_STATE } from '../ViewModel';
import { formatNumberWithCommas } from '@/utils/formatNumberWithCommas';

const Summary: FC = () => {
    const [showFertilizer, setShowFertilizer] = useState(true);
    const [showWeedInfection, setShowWeedInfection] = useState(false);
    const onFertilizerClick = () => {
        setShowFertilizer(true);
        setShowWeedInfection(false);
    };
    const onWeedInfectionClick = () => {
        setShowFertilizer(false);
        setShowWeedInfection(true);
    };
    return (
        <Fragment>
            <div className="col-span-12">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12">
                        <div className="flex flex-row text-md w-full justify-start">
                            <div
                                onClick={onFertilizerClick}
                                className={`rounded-full py-2 px-4 mr-3 cursor-pointer ${showFertilizer ? 'bg-crop-tertiary text-white' : ' bg-white text-black border-[0.5px] border-gray-200'}`}
                            >
                                แผนการใส่ปุ๋ย
                            </div>
                            <div
                                onClick={onWeedInfectionClick}
                                className={`rounded-full py-2 px-4 mr-3 cursor-pointer ${showWeedInfection ? 'bg-crop-tertiary text-white' : ' bg-white text-black border-[0.5px] border-gray-200'}`}
                            >
                                แผนการใส่ยา
                            </div>
                        </div>
                    </div>
                    {showFertilizer && (
                        <div className="col-span-12">
                            {INITIAL_STATE.cropPlanFertilizers.map((item, index) => (
                                <div key={index} className="panel mb-5">
                                    <div className="flex flex-row justify-between mb-2">
                                        <div className="border-l-2 border-crop-primary pl-2 bg-green-100 rounded-r-full pr-3 py-1 text-crop-primary">ใส่ปุ๋ยรอบ {index + 1}</div>
                                        <IconHorizontalDots fill className="opacity-50" />
                                    </div>
                                    <div>สูตรปุ๋ย : {item.fertilizerText || 'N/A'}</div>
                                    <div>
                                        ปริมาณต่อไร่ : {formatNumberWithCommas(item.amount)} {item.unitId === 1 ? 'กิโลกรัม' : ''}
                                    </div>
                                    <hr className="border-gray-200 mt-2 mb-2" />
                                    <div className="flex flex-row justify-between">
                                        <div className="flex text-gray-500 ">
                                            <IconClock className="w-5 h-5 mr-2" /> เริ่มกิจกรรมในอีก {item.planDate} วัน
                                        </div>
                                        <span className="text-gray-500">...</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {showWeedInfection && (
                        <div className="col-span-12">
                            {INITIAL_STATE.cropPlanPesticides.map((item, index) => (
                                <div key={index} className="panel mb-5">
                                    <div className="flex flex-row justify-between mb-2">
                                        <div className="border-l-2 border-crop-primary pl-2 bg-green-100 rounded-r-full pr-3 py-1 text-crop-primary">ใส่ยา รอบ {index + 1}</div>
                                        <IconHorizontalDots fill className="opacity-50" />
                                    </div>
                                    <div>ชื่อยา : {item.pesticideText || 'N/A'}</div>
                                    <div>
                                        ปริมาณต่อไร่ : {item.amount} {item.unitId === 1 ? 'กิโลกรัม' : ''}
                                    </div>
                                    <hr className="border-gray-200 mt-2 mb-2" />
                                    <div className="flex flex-row justify-between">
                                        <div className="flex text-gray-500 ">
                                            <IconClock className="w-5 h-5 mr-2" /> เริ่มกิจกรรมในอีก {item.planDate} วัน
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default Summary;
