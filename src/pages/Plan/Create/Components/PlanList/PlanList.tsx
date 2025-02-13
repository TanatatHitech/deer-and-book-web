import { type FC } from 'react';
import IconPlusCircle from '@/components/Icon/IconPlusCircle';
import PlantItem from '@/pages/Components/PlantItem';
import StartPlanItem from '@/pages/Components/StartPlanItem';

interface PlanListProps {
    plans: any[];
    onViewDetail: (id: string, detail: string) => void;
    onEditFertilizer: (id: string) => void;
    onEditPesticide: (id: string) => void;
    onEditPlan: (id: string) => void;
    onViewPlan: (id: string) => void;
    deleteCropPlan: (id: string, planTitle: string) => void;
}

const PlanList: FC<PlanListProps> = ({ plans, onViewDetail, onEditFertilizer, onEditPesticide, onEditPlan, onViewPlan, deleteCropPlan }) => {
    return (
        <div className="col-span-12">
            <div className="">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12">
                        <div className="flex flex-row justify-between text-crop-primary">
                            <div className="font-bold text-lg">แผนการปลูกของฉัน</div>
                            <div className=" flex cursor-pointer" onClick={() => onViewDetail('1234', '1234')}>
                                สร้างแผนการปลูกใหม่ <IconPlusCircle className="text-white bg-crop-primary rounded-full ml-1" />
                            </div>
                        </div>
                    </div>
                    {plans.map((plan, idx) => (
                        <div key={`plan-item-${idx + 1}`} className="col-span-12 md:col-span-6 xl:col-span-6">
                            <StartPlanItem
                                plantSpecies={plan.plantSpecies}
                                onEditFertilizer={() => onEditFertilizer(plan.id)}
                                onEditPesticide={() => onEditPesticide(plan.id)}
                                onEditPlan={() => onEditPlan(plan.id)}
                                onDelete={() => deleteCropPlan(plan.id, plan.planTitle)}
                                name={plan.planTitle}
                                cropIcon={plan.icon}
                                plantName={plan.plantName}
                                plantDate={plan.createdAt}
                                applyLand={plan.totalAssigned}
                                onClick={() => onViewPlan(plan.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlanList;
