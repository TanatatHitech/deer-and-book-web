import { type FC, Fragment, cloneElement } from 'react';
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

interface PlantItemProps {
    disabled?: boolean;
    cropIcon?: JSX.Element | null;
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

const PlantItem: FC<PlantItemProps> = ({
    disabled,
    cropIcon,
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
            <div className={clsx('border p-5 rounded-lg transition-all cursor-pointer', isSelected ? 'border-crop-primary bg-green-50' : 'border-gray-200')} onClick={onSelect}>
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
                                    {/* <div className="text-crop-primary font-bold text-lg">{name || 'แผนการปลูกไม่มีชื่อ'}</div> */}
                                </div>
                                {/* {plantName ? (
                                    <div className="flex flex-row items-center gap-3 bg-yellow-100 rounded-l-full p-1 border-[0.5px] border-yellow-200">
                                        <img src="/assets/crop/icon/corn.png" className="w-5 h-5" />
                                        <span className="text-black">{plantName ?? 'ไม่พบชื่อพืช'}</span>
                                    </div>
                                ) : !canSelect ? (
                                    <>
                                        <div onClick={onDelete}>
                                            <IconTrash className="text-red-500 hover:opacity-80 cursor-pointer" />
                                        </div>
                                    </>
                                ) : null} */}
                            </div>
                        </div>
                        {cropIcon && <div className="flex justify-center my-4">{cloneElement(cropIcon, { className: 'w-32 h-32' })}</div>}
                        <div className="text-crop-primary text-lg flex items-center justify-center font-bold">{plantName ?? 'ไม่พบชื่อพืช'}</div>
                    </div>
                </div>
            </div>
            {/* </Tippy>W */}
        </Fragment>
    );
};

export default PlantItem;
