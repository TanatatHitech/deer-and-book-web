import { type FC, Fragment } from 'react';
import Fertilizer from './Components/Fertilizer';
import WeedInfection from './Components/Pesticide';
import useViewModel from './ViewModel';
import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/th';
import IconPlusCircle from '@/components/Icon/IconPlusCircle';
import { useState } from 'react';
import PlantType from './Components/PlantType';
import Summary from './Components/Summary';
import Step from './Components/Step';
import FinishedModal from './Components/FinishedModal';
import IconTrash from '@/components/Icon/IconTrash';

moment.locale('th');

const PlanDetailRoundView: FC = () => {
    const { step, data, onNext, onBack, handleChangeFertilizer, handleChangePesticide, setStep, addFertilizerRound, addPesticideRound, removeFertilizerRound, removePesticideRound, handleSave } =
        useViewModel();
    const [showModal, setShowModal] = useState(false);

    return (
        <Fragment>
            <div className="pb-20 lg:pb-0">
                <div className="grid grid-cols-12 gap-5">
                    {[0].includes(step) && (
                        <div className="col-span-12 ">
                            <Step step={step} setStep={setStep} />
                        </div>
                    )}
                    {[1].includes(step) && (
                        <div className="col-span-12 ">
                            <Step step={step} setStep={setStep} />
                        </div>
                    )}
                    {[2].includes(step) && (
                        <div className="col-span-12 ">
                            <Step step={step} setStep={setStep} />
                        </div>
                    )}
                    {[3].includes(step) && (
                        <div className="col-span-12 ">
                            <Step step={step} setStep={setStep} />
                        </div>
                    )}
                    {[0].includes(step) && (
                        <div className="col-span-12 ">
                            <span className="text-md font-semibold">ระบุพันธุ์พืช</span>
                        </div>
                    )}
                    {[1].includes(step) && (
                        <div className="col-span-12 ">
                            <div className="flex flex-row justify-between">
                                <span className="text-md font-semibold">แผนการใส่ปุ๋ย</span>
                                <div className="flex text-crop-primary hover:text-crop-tertiary transition-all" onClick={addFertilizerRound}>
                                    เพิ่มรอบใส่ปุ๋ย
                                    <IconPlusCircle className="text-white bg-crop-primary rounded-full ml-1 hover:bg-crop-tertiary transition-all" />
                                </div>
                            </div>
                        </div>
                    )}
                    {[2].includes(step) && (
                        <div className="col-span-12 ">
                            <div className="flex flex-row justify-between">
                                <span className="text-md font-semibold">แผนการใส่ยา</span>
                                <div className="flex text-crop-primary hover:text-crop-tertiary transition-all" onClick={addPesticideRound}>
                                    เพิ่มรอบใส่ยา
                                    <IconPlusCircle className="text-white bg-crop-primary rounded-full ml-1 hover:bg-crop-tertiary transition-all" />
                                </div>
                            </div>
                        </div>
                    )}
                    {[3].includes(step) && (
                        <div className="col-span-12 ">
                            <div className="flex flex-row justify-between">
                                <span className="text-md font-semibold">สรุป</span>
                                {/* <div className="flex items-center text-crop-primary hover:text-crop-tertiary transition-all" onClick={addPesticideRound}>
                                    ดูสรุปรายการที่ต้องใช้
                                    <img src="/assets/crop/icon/arrow-right.png" className="ml-1 h-4 w-auto" />
                                    {/* <IconArrowForward className="text-crop-primary w-6 h-6 ml-1" />
                                </div> */}
                            </div>
                        </div>
                    )}
                    {step === 0 && (
                        <Fragment>
                            <div className="col-span-12">
                                <div className=" ">
                                    <PlantType />
                                </div>
                            </div>
                        </Fragment>
                    )}
                    {step === 1 && (
                        <Fragment>
                            {data.cropPlanFertilizers.map((item: any, index: number) => (
                                <div className="col-span-12" key={`fertilizer-${index + 1}`}>
                                    <div className=" border border-gray-200 p-5 rounded-xl bg-white">
                                        <div className="mb-2 flex flex-row justify-between items-center">
                                            <h2 className="text-md  text-gray-400 lg:border-l-4 lg:border-crop-quaternary lg:pr-3 lg:bg-green-100 lg:text-crop-primary lg:p-1 lg:rounded-r-full lg:font-semibold">
                                                รอบที่ {index + 1}
                                            </h2>
                                            <h2 onClick={() => removeFertilizerRound(index)} className=" text-red-400 cursor-pointer">
                                                {data.cropPlanFertilizers.length > 3 && <IconTrash className="h-6 w-6" />}
                                            </h2>
                                            {/* <span>{moment().locale('th').format('DD MMMM YYYY')}</span> */}
                                        </div>
                                        <hr className="mb-2" />
                                        <Fertilizer name={item.fertilizerText} onChange={(key, value) => handleChangeFertilizer(index, key, value)} />
                                    </div>
                                </div>
                            ))}
                        </Fragment>
                    )}
                    {step === 2 && (
                        <Fragment>
                            {data.cropPlanPesticides.map((item: any, index: number) => (
                                <div className="col-span-12" key={`agrochemical-${index + 1}`}>
                                    <div className=" border border-gray-200 p-5 rounded-xl bg-white">
                                        <div className="mb-2 flex flex-row justify-between items-center">
                                            <h2 className="text-md text-gray-400  lg:border-l-4 lg:border-crop-quaternary lg:pr-3 lg:bg-green-100 lg:text-crop-primary lg:p-1 rounded-r-full font-semibold">
                                                รอบที่ {index + 1}
                                            </h2>
                                            <h2 onClick={() => removePesticideRound(index)} className=" text-red-400 cursor-pointer">
                                                {data.cropPlanPesticides.length > 1 && <IconTrash className="h-6 w-6" />}
                                            </h2>
                                            {/* <span>{moment().locale('th').format('DD MMMM YYYY')}</span> */}
                                        </div>
                                        <hr className="mb-2" />
                                        <WeedInfection name={item.pesticideText} onChange={(key, value) => handleChangePesticide(index, key, value)} />
                                    </div>
                                </div>
                            ))}
                        </Fragment>
                    )}
                    {step === 3 && (
                        <Fragment>
                            <Summary />
                        </Fragment>
                    )}
                    {[0, 1, 2].includes(step) && (
                        <div className="col-span-12 flex justify-between">
                            {step !== 0 && (
                                <button
                                    type="button"
                                    className="btn bg-gray-400 text-white font-bold px-4 py-4 rounded-full hover:opacity-80 cursor-pointer w-[48%] shadow border-none"
                                    onClick={onBack}
                                >
                                    ย้อนกลับ
                                </button>
                            )}
                            <button
                                type="button"
                                className={`btn bg-crop-tertiary text-white font-bold px-4 py-4 rounded-full hover:opacity-80 cursor-pointer ${step === 0 ? 'w-full' : 'w-[48%]'} shadow border-none`}
                                onClick={onNext}
                            >
                                ดำเนินการต่อ
                            </button>
                        </div>
                    )}
                    {[3].includes(step) && (
                        <div className="col-span-12 flex justify-between">
                            <button type="button" className="btn bg-gray-500 text-white font-bold px-4 py-4 rounded-full hover:opacity-80 cursor-pointer w-[48%] shadow border-none" onClick={onBack}>
                                ย้อนกลับ
                            </button>
                            <button
                                type="button"
                                className="btn bg-crop-tertiary text-white font-bold px-4 py-4 rounded-full hover:opacity-80 cursor-pointer w-[48%] shadow border-none"
                                onClick={handleSave}
                            >
                                บันทึก
                            </button>
                        </div>
                    )}
                    {showModal && <FinishedModal onClose={() => setShowModal(false)} />}
                </div>
            </div>
        </Fragment>
    );
};

export default PlanDetailRoundView;
