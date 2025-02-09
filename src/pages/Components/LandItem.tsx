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
import IconBook from '@/components/Icon/IconBook';

interface LandItemProps {
    disabled?: boolean;
    cropIcon?: JSX.Element | null;
    cropName?: string;
    name?: string;
    location?: string;
    latitude?: number;
    longitude?: number;
    tooltip?: string;
    assignPlan?: string;
    canSelect?: boolean;
    showButton?: boolean;
    isSelected?: boolean;
    onSelect?: () => void;
    onClick?: () => void;
}

const LandItem: FC<LandItemProps> = ({ disabled, cropIcon, cropName, name, location, latitude, longitude, tooltip, onClick, canSelect, showButton = true, isSelected, onSelect, assignPlan }) => {
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
                                    <div className="text-crop-primary font-bold text-lg">{name}</div>
                                </div>
                                {cropName ? (
                                    <div className="flex flex-row items-center gap-3 bg-yellow-100 rounded-l-full p-1 border-[0.5px] border-yellow-200">
                                        <img src="/assets/crop/icon/corn.png" className="w-5 h-5" />
                                        <span className="text-black">{cropName}</span>
                                    </div>
                                ) : (
                                    <IconHorizontalDots fill className="text-gray-400" />
                                )}
                            </div>
                            {/* <img src="/assets/crop/harvest-field/map-pic.png" className="w-auto hidden lg:block" /> */}
                            <hr className="md:mt-4" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row gap-2 items-center">
                                <IconRedPin className="w-6 h-6 " />
                                <span className="text-black">{location}</span>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <IconCompass className="w-6 h-6" />
                                <span className="text-gray-500">
                                    {latitude?.toFixed(5)}, {longitude?.toFixed(5)}
                                </span>
                            </div>
                            {assignPlan ? (
                                <div className="flex flex-row gap-2 items-center">
                                    <IconCircleCheck className="w-6 h-6 bg-crop-quaternary text-white rounded-full" />
                                    <span className="text-gray-500">{assignPlan}</span>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    {showButton ? (
                        <div className="col-span-12">
                            {cropName ? (
                                <div className="btn bg-crop-quaternary text-white rounded-full hover:opacity-70 py-4 cursor-pointer lg:h-8 lg:font-[400]" onClick={onClick}>
                                    รายละเอียด
                                </div>
                            ) : (
                                <div className="btn bg-crop-quaternary text-white rounded-full hover:opacity-70 py-4 cursor-pointer lg:h-8 lg:font-[400]" onClick={onClick}>
                                    ดูบนแผนที่
                                </div>
                            )}
                        </div>
                    ) : (
                        <></>
                    )}

                    {/* <div
                            className={clsx('col-span-5 sm:col-span-4', {
                                hidden: !cropIcon,
                            })}
                        >
                            {cropIcon}
                        </div> */}
                </div>
            </div>
            {/* </Tippy>W */}
        </Fragment>
    );
};

export default LandItem;
