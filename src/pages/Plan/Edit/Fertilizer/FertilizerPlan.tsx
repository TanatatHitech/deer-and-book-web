import { FC } from 'react';
import IconPlusCircle from '@/components/Icon/IconPlusCircle';
import IconTrash from '@/components/Icon/IconTrash';
import Fertilizer from '../Components/Fertilizer';
import { FERTILIZER_STATE } from '../ViewModel';

interface FertilizerPlanProps {
    fertilizerRounds: any[];
    addFertilizerRound: () => void;
    removeFertilizerRound: () => void;
    handleChangeFertilizer: (index: number, key: string, value: any) => void;
    saveFertilizerPlan: () => void;
}

const FertilizerPlan: FC<FertilizerPlanProps> = ({ fertilizerRounds, addFertilizerRound, removeFertilizerRound, handleChangeFertilizer, saveFertilizerPlan }) => {
    // console.log(FERTILIZER_STATE);
    return (
        <div className="flex flex-col gap-2">
            <div className="col-span-12 ">
                <div className="flex flex-row justify-between">
                    <span className="text-md font-semibold">แก้ไขแผนการใส่ปุ๋ย</span>
                    <div className="flex text-crop-primary hover:text-crop-tertiary transition-all" onClick={addFertilizerRound}>
                        เพิ่มรอบใส่ปุ๋ย
                        <IconPlusCircle className="text-white bg-crop-primary rounded-full ml-1 hover:bg-crop-tertiary transition-all" />
                    </div>
                </div>
            </div>
            {fertilizerRounds.map((item: any, index: number) => (
                <div className="col-span-12" key={`fertilizer-${index + 1}`}>
                    <div className=" border border-gray-200 p-5 rounded-xl bg-white">
                        <div className="mb-2 flex flex-row justify-between items-center">
                            <h2 className="text-md  text-gray-400 lg:border-l-4 lg:border-crop-quaternary lg:pr-3 lg:bg-green-100 lg:text-crop-primary lg:p-1 lg:rounded-r-full lg:font-semibold">
                                รอบที่ {index + 1}
                            </h2>
                            <h2 onClick={removeFertilizerRound} className=" text-red-400 cursor-pointer">
                                {fertilizerRounds.length > 3 && <IconTrash className="h-6 w-6" />}
                            </h2>
                        </div>
                        <hr className="mb-2" />
                        <Fertilizer data={item} onChange={(key, value) => handleChangeFertilizer(index, key, value)} />
                    </div>
                </div>
            ))}

            <button onClick={saveFertilizerPlan} className="btn bg-crop-primary text-white rounded-full text-lg mt-3 hover:opacity-80">
                บันทึก
            </button>
        </div>
    );
};

export default FertilizerPlan;
