import { FC } from 'react';
import IconPlusCircle from '@/components/Icon/IconPlusCircle';
import IconTrash from '@/components/Icon/IconTrash';
import WeedInfection from '../Components/Pesticide';
import { PESTICIDE_STATE } from '../ViewModel';

interface WeedInfectionPlanProps {
    WeedInfectionRounds: any[];
    addWeedInfectionRound: () => void;
    removeWeedInfectionRound: () => void;
    handleChangePesticide: (index: number, key: string, value: any) => void;
    savePesticidePlan: () => void;
}

const WeedInfectionPlan: FC<WeedInfectionPlanProps> = ({ WeedInfectionRounds, addWeedInfectionRound, removeWeedInfectionRound, handleChangePesticide, savePesticidePlan }) => {
    // console.log(PESTICIDE_STATE);
    return (
        <div className="flex flex-col gap-2">
            <div className="col-span-12 ">
                <div className="flex flex-row justify-between">
                    <span className="text-md font-semibold">แก้ไขแผนการใส่ยา</span>
                    <div className="flex text-crop-primary hover:text-crop-tertiary transition-all" onClick={addWeedInfectionRound}>
                        เพิ่มรอบใส่ยา
                        <IconPlusCircle className="text-white bg-crop-primary rounded-full ml-1 hover:bg-crop-tertiary transition-all" />
                    </div>
                </div>
            </div>
            {WeedInfectionRounds.map((item: any, index: number) => (
                <div className="col-span-12" key={`agrochemical-${index + 1}`}>
                    <div className=" border border-gray-200 p-5 rounded-xl bg-white">
                        <div className="mb-2 flex flex-row justify-between items-center">
                            <h2 className="text-md text-gray-400  lg:border-l-4 lg:border-crop-quaternary lg:pr-3 lg:bg-green-100 lg:text-crop-primary lg:p-1 rounded-r-full font-semibold">
                                รอบที่ {index + 1}
                            </h2>
                            <h2 onClick={removeWeedInfectionRound} className=" text-red-400 cursor-pointer">
                                {WeedInfectionRounds.length > 1 && <IconTrash className="h-6 w-6" />}
                            </h2>
                        </div>
                        <hr className="mb-2" />
                        <WeedInfection data={item} onChange={(key, value) => handleChangePesticide(index, key, value)} />
                    </div>
                </div>
            ))}

            <button onClick={savePesticidePlan} className="btn bg-crop-primary text-white rounded-full text-lg mt-3 hover:opacity-80">
                บันทึก
            </button>
        </div>
    );
};

export default WeedInfectionPlan;
