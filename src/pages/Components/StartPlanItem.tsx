import { type FC, Fragment } from 'react';
import { useState } from 'react';
import IconPlant from '@/components/Icon/Crop/IconPlant';
import IconCompass from '@/components/Icon/Crop/IconCompass';
import IconRedPin from '@/components/Icon/Crop/IconRedPin';
import Tippy from '@tippyjs/react';
import { clsx } from '@mantine/core';
import IconHorizontalDots from '@/components/Icon/IconHorizontalDots';
import IconCircleCheck from '@/components/Icon/IconCircleCheck';
import IconCorn from '@/components/Icon/Crop/IconCorn';
import IconTrash from '@/components/Icon/IconTrash';

interface ButtonConfig {
    label: string;
    onClick?: () => void;
    condition?: boolean;
}

const buttonConfig = (onClick?: () => void, onEditPlan?: () => void, onEditFertilizer?: () => void, onEditPesticide?: () => void, canSelect?: boolean): ButtonConfig[] => [
    { label: 'รายละเอียด', onClick: onClick },
    { label: 'แก้ไขแผน', onClick: onEditPlan, condition: !canSelect },
    { label: 'แก้ไขแผนใส่ปุ๋ย', onClick: onEditFertilizer, condition: !canSelect },
    { label: 'แก้ไขแผนใส่ยา', onClick: onEditPesticide, condition: !canSelect },
];

interface StartPlanItemProps {
    disabled?: boolean;
    cropIcon?: JSX.Element | null;
    cropName?: string;
    name?: string;
    onClick?: () => void;
    canSelect?: boolean;
    showButton?: boolean;
    isSelected?: boolean;
    onSelect?: () => void;
    plantDate?: string;
    plantName?: string;
    plantSpecies?: string;
    applyLand?: string;
    onEditFertilizer?: () => void;
    onEditPesticide?: () => void;
    onEditPlan?: () => void;
    onDelete?: () => void;
}

const StartPlanItem: FC<StartPlanItemProps> = ({
    disabled,
    cropIcon,
    cropName,
    name,
    plantName,
    plantSpecies,
    plantDate,
    applyLand,
    onClick,
    canSelect,
    showButton = true,
    isSelected,
    onSelect,
    onEditFertilizer,
    onEditPesticide,
    onEditPlan,
    onDelete,
}) => {
    return (
        <Fragment>
            {/* <Tippy disabled={disabled} content={disabled ? '' : tooltip ?? 'กดเพื่อดูรายละเอียด'} className="font-prompt"> */}
            <div className={clsx('border p-5 rounded-lg transition-all', isSelected ? 'border-crop-primary bg-green-50' : 'border-gray-200')}>
                <div className="grid grid-cols-12 gap-5 items-center">
                    <div
                        className={clsx({
                            'col-span-12 sm:col-span-12': cropIcon,
                            'col-span-12': !cropIcon,
                        })}
                    >
                        <div className="col-span-12 mb-2">
                            <div className="flex flex-row justify-between items-center mb-2">
                                <div className="flex">
                                    <input type="radio" name="radioGroup" className="hidden" checked={isSelected} onChange={onSelect} />
                                    {canSelect ? (
                                        !isSelected ? (
                                            <span className="border border-gray-200 h-6 w-6 rounded-full mr-2 " onClick={onSelect}></span>
                                        ) : (
                                            <IconCircleCheck className="text-white bg-crop-primary h-6 w-6 rounded-full mr-2" />
                                        )
                                    ) : (
                                        ''
                                    )}
                                    <div className="text-crop-primary font-bold text-lg">{name || 'แผนการปลูกไม่มีชื่อ'}</div>
                                </div>
                                {cropName ? (
                                    <div className="flex flex-row items-center gap-3 bg-yellow-100 rounded-l-full p-1 border-[0.5px] border-yellow-200">
                                        <img src="/assets/crop/icon/corn.png" className="w-5 h-5" />
                                        <span className="text-black">{cropName ?? 'ไม่พบชื่อแปลง'}</span>
                                    </div>
                                ) : !canSelect ? (
                                    <>
                                        <div onClick={onDelete}>
                                            <IconTrash className="text-red-500 hover:opacity-80 cursor-pointer" />
                                        </div>
                                    </>
                                ) : null}
                            </div>
                            <hr className="md:mt-4" />
                        </div>
                        <div className="col-span-12">
                            <div className="grid grid-cols-12 gap-2">
                                <div className={clsx('flex flex-col lg:flex-row gap-2 items-center', canSelect ? 'col-span-12' : 'col-span-7 lg:col-span-7')}>
                                    <img className="h-12 w-12 items-center" src="/assets/images/fertilizer.png" />

                                    <div className="flex flex-col gap-1">
                                        <div>พืชที่ปลูก : {plantName ?? 'ไม่พบพืชที่ปลูก'}</div>
                                        <div>พันธุ์พืช : {plantSpecies ?? 'ไม่พบพันธุ์'}</div>
                                        <div>วันที่สร้างแผน : {plantDate ?? 'ไม่พบข้อมูล'}</div>
                                        <div>ถูกนำไปใช้งาน : {applyLand ?? 0} แปลง</div>
                                    </div>
                                </div>
                                {showButton ? (
                                    <div className={clsx('flex flex-col gap-1 text-white', canSelect ? 'col-span-12' : 'col-span-5')}>
                                        {buttonConfig(onClick, onEditPlan, onEditFertilizer, onEditPesticide, canSelect)
                                            .filter((button) => button.condition === undefined || button.condition)
                                            .map((button, index) => (
                                                <button key={index} className="py-2 px-4 bg-crop-quaternary hover:opacity-80 rounded-lg" onClick={button.onClick}>
                                                    {button.label}
                                                </button>
                                            ))}
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </Tippy>W */}
        </Fragment>
    );
};

export default StartPlanItem;
