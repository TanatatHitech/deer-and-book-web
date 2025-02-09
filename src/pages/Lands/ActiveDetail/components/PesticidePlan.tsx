import { FC } from 'react';
import IconHorizontalDots from '@/components/Icon/IconHorizontalDots';
import IconClock from '@/components/Icon/IconClock';
import moment from 'moment';
import { formatNumberWithCommas } from '@/utils/formatNumberWithCommas';
import { formatActivityDate } from '@/utils/formatActivityDate';
import useViewModel from '../ViewModel';

interface PesticidePlanProps {
    cropPlanLandPesticides: any[];
}

const PesticidePlan: FC<PesticidePlanProps> = ({ cropPlanLandPesticides }) => {
    const { showSweetAlert, handleOpenModal } = useViewModel();

    return (
        <div className="col-span-12">
            {cropPlanLandPesticides.map((item, index) => (
                <div key={index} className="panel mb-5">
                    <div className="flex flex-row justify-between mb-2">
                        <div className="border-l-2 border-crop-primary pl-2 bg-green-100 rounded-r-full pr-3 py-1 text-crop-primary">ใส่ยารอบ {index + 1}</div>
                        {/* <IconHorizontalDots fill className="opacity-50" /> */}
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>
                            <div>ชื่อยา : {item.pesticideText || 'N/A'}</div>
                            <div>
                                ปริมาณต่อไร่ : {formatNumberWithCommas(item.amount)} ลิตร
                                {/* {item.unitId === 1 ? 'กิโลกรัม' : ''} */}
                            </div>
                        </div>
                        {item.actualDate && item.actualPesticideText && item.actualAmount ? (
                            <div className="btn bg-white  border-gray-200 shadow-none cursor-pointer hover:opacity-60" onClick={() => showSweetAlert('pesticide', item)}>
                                ดูรายละเอียด
                            </div>
                        ) : (
                            <div className="btn bg-crop-quinary text-white shadow-none cursor-pointer hover:opacity-80" onClick={() => handleOpenModal('pesticide', item)}>
                                ดำเนินการ
                            </div>
                        )}
                    </div>

                    <hr className="border-gray-200 mt-2 mb-2" />
                    <div className="flex flex-row justify-between">
                        <div className="flex text-gray-500 ">
                            {item.actualDate && item.actualPesticideText && item.actualAmount ? (
                                <>
                                    <div className="text-crop-primary">ดำเนินการเสร็จสิ้นแล้ว</div>
                                </>
                            ) : (
                                <>
                                    {' '}
                                    <IconClock className="w-5 h-5 mr-2" /> {formatActivityDate(item.planDate)}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PesticidePlan;
