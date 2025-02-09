import { type FC, Fragment } from 'react';

import PlanLanding from './Components/PlanList/View';
import SelectLand from './Components/SelctLand/View';
import PlantInfo from './Components/PlantInfo/View';
import Fertilizer from './Components/Fertilizer/View';
import AgrochemicalView from './Components/Agrochemical/View';
import SummaryView from './Components/Summary/View';
import SuccessView from './Components/Success/View';

import useViewModel from './ViewModel';

const PlanView: FC = () => {
    const {
        step,
        formState,
        onChangeFormState,
        onStartPlan,
        onSelectedLand,
        onBackStep1,
        onBackStep2,
        onConfirmStep2,
        onChangeFertilizer,
        onAddNewFertilizer,
        onRemoveFertilizer,
        onConfirmStep3,
        onBackStep3,
        onAddNewAgrochemical,
        onChangeAgrochemical,
        onRemoveAgrochemical,
        onConfirmStep4,
        onBackStep4,
        onConfirmStep5,
        onBackStep5,
        onShare,
        onDownload,
        onBackHome,
    } = useViewModel();

    return (
        <Fragment>
            <div className="pb-20 lg:pb-0">
                {step === 0 && <PlanLanding onNextStep={onStartPlan} />}
                {/* {step === 1 && <SelectLand onBack={onBackStep1} onNextStep={onSelectedLand} />} */}
                {step === 1 && <PlantInfo formState={formState} onChangeFormState={onChangeFormState} onBack={onBackStep1} onConfirm={onConfirmStep2} />}
                {step === 2 && (
                    <Fertilizer
                        formState={formState}
                        onChangeFormState={onChangeFertilizer}
                        onAddNewFertilizer={onAddNewFertilizer}
                        onRemoveFertilizer={onRemoveFertilizer}
                        onBack={onBackStep3}
                        onConfirm={onConfirmStep3}
                    />
                )}
                {step === 3 && (
                    <AgrochemicalView
                        formState={formState}
                        onChangeFormState={onChangeAgrochemical}
                        onAddNewAgrochemical={onAddNewAgrochemical}
                        onRemoveAgrochemical={onRemoveAgrochemical}
                        onBack={onBackStep4}
                        onConfirm={onConfirmStep4}
                    />
                )}
                {step === 4 && <SummaryView formState={formState} onBack={onBackStep5} onConfirm={onConfirmStep5} />}
                {step === 5 && <SuccessView formState={formState} onShare={onShare} onDownload={onDownload} onBackHome={onBackHome} />}
            </div>
        </Fragment>
    );
};

export default PlanView;
