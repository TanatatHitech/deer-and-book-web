import { Fragment, type FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlanItem from '../Components/PlanItem';
import { formatThaiDateNotime } from '@/utils/format-time';
import { useCropPlanStore } from '@/store/cropPlanStore';
import { formatNumberCommasNoDecimal } from '@/utils/format-number';

const TodayPlan: FC = () => {
    const { getTodayJob, plan } = useCropPlanStore();

    useEffect(() => {
        getTodayJob();
    }, []);

    return (
        <Fragment>
            <div className="p-6 pb-20 lg:pb-6">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12">
                        <h2 className="font-semibold lg:hidden mt-2">รายการที่ต้องทำวันนี้ {plan?.filteredFertilizers?.length + plan?.filteredPesticides?.length || 0} รายการ</h2>
                        <h2 className="hidden lg:flex text-[17px] items-center">
                            รายการที่ต้องทำวันนี้{' '}
                            <span className="bg-crop-quaternary w-7 h-7 text-white rounded-full flex items-center justify-center mx-2">
                                {plan?.filteredFertilizers?.length + plan?.filteredPesticides?.length || 0}
                            </span>
                            รายการ
                        </h2>
                        <div className="hidden lg:flex lg:flex-row justify-between mt-1">
                            <div className="text-gray-500">วันนี้, {formatThaiDateNotime(new Date())}</div>
                            <Link to="/crop-calendar">
                                <div className="text-crop-primary flex cursor-pointer">
                                    <span>ดูทั้งหมด</span> <img src="/assets/crop/icon/arrow-right.png" className="ml-1" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    {plan?.filteredFertilizers?.map((item: any) => (
                        <div className="col-span-12" key={item.id}>
                            <PlanItem name={item.fertilizerText} description={`ใส่ปุ๋ย ${formatNumberCommasNoDecimal(item.amount)}`} date={item.planDate} />
                        </div>
                    ))}
                    {plan?.filteredPesticides?.map((item: any) => (
                        <div className="col-span-12" key={item.id}>
                            <PlanItem name={item.pesticideTextText} description={`ใส่สารเคมี ${item.amount}`} date={item.planDate} />
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default TodayPlan;
