import IconCalendar from '@/components/Icon/IconCalendar';
import { type FC, Fragment } from 'react';
import { useState } from 'react';
import IconCheck from '@/components/Icon/Crop/IconCheck';

interface Props {
    step: number;
    setStep: (step: number) => void;
}

const Step: FC<Props> = ({ step, setStep }) => {
    const [isActiveStep, setIsActiveStep] = useState(true);

    return (
        <Fragment>
            <div className="relative flex flex-wrap justify-between items-center px-3 py-4 bg-white border rounded-3xl lg:px-12">
                {/* Horizontal Line */}
                <hr className="absolute top-[40%] left-[calc(13%)] w-[calc(75.5%-16px)] z-0 border border-gray-300 sm:left-[calc(11%)] sm:w-[calc(80%-16px)] lg:left-[calc(15%)] lg:w-[calc(70%-16px)]" />

                {/* Step 1 */}
                <div className="relative flex flex-col items-center z-10 flex-1 min-w-[60px]" onClick={() => setStep(0)}>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step === 0 ? 'bg-yellow-200' : `${step > 0 ? ' bg-crop-quaternary ' : 'bg-gray-400 text-white'}`}`}>
                        {step > 0 ? <IconCheck /> : '1'}
                    </div>
                    <div className="text-xs mt-1 text-center">พันธุ์พืช</div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col items-center z-10 flex-1 min-w-[60px]" onClick={() => setStep(1)}>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-yellow-200' : `${step > 1 ? ' bg-crop-quaternary ' : 'bg-gray-400 text-white'}`} `}>
                        {step > 1 ? <IconCheck /> : '2'}
                    </div>
                    <div className="text-xs mt-1 text-center">ใส่ปุ๋ย</div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col items-center z-10 flex-1 min-w-[60px]" onClick={() => setStep(2)}>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-yellow-200' : `${step > 2 ? ' bg-crop-quaternary ' : 'bg-gray-400 text-white'}`}`}>
                        {step > 2 ? <IconCheck /> : '3'}
                    </div>
                    <div className="text-xs mt-1 text-center">เลือกยา</div>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col items-center z-10 flex-1 min-w-[60px]" onClick={() => setStep(3)}>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step === 3 ? 'bg-yellow-200' : `${step > 3 ? ' bg-crop-quaternary ' : 'bg-gray-400 text-white'}`}`}>
                        {step > 3 ? <IconCheck /> : '4'}
                    </div>
                    <div className="text-xs mt-1 text-center">สรุป</div>
                </div>
            </div>
        </Fragment>
    );
};

export default Step;
