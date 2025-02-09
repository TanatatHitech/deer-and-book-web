import { type FC, Fragment } from 'react';
import IconCalendar from '@/components/Icon/IconCalendar';
import IconListCheck from '@/components/Icon/IconListCheck';
import IconGoldGrainRice from '@/components/Icon/Crop/IconGoldGrainRice';
import Tippy from '@tippyjs/react';
import { clsx } from '@mantine/core';
import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/th';
import { formatThaiDateNotime } from '@/utils/format-time';
moment.locale('th');

interface PlanItemProps {
    disabled?: boolean;
    tooltip?: string;
    name: string;
    description: string;
    date: string;
    onClick?: () => void;
}

const PlanItem: FC<PlanItemProps> = ({ disabled, tooltip, name, description, date, onClick }) => {
    return (
        <Fragment>
            {/* Mobile Version */}
            <div className="block lg:hidden">
                <div className="panel" onClick={onClick}>
                    <div className="grid grid-cols-12 gap-2 md:gap-5 items-center">
                        <div className="col-span-12">
                            <div className="flex flex-row justify-between text-gray-600 text-xs mb-2">
                                <div className="flex">
                                    <img src="/assets/crop/icon/clock.png" className="w-4 h-4 mr-1" />
                                    {moment(date).format('HH:mm น.')}
                                </div>
                                <div>{moment(date).format('dddd, D MMMM YYYY')}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="col-span-12">
                            <div className="flex flex-row justify-between mb-2 text-lg font-semibold">
                                <div className="">{description}</div>
                                <div className="text-crop-tertiary">{name}</div>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="btn bg-crop-quaternary py-4 text-white rounded-full">ทำกิจกรรม</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Version */}
            <div className="lg:block hidden">
                <div className="border-gray-200 border rounded-xl p-3" onClick={onClick}>
                    <div className="grid grid-cols-12 gap-2 items-center">
                        <div className="col-span-12">
                            <div className="flex flex-row justify-between text-gray-600 text-sm mb-2 items-center">
                                <div className="flex items-center">
                                    <img src="/assets/crop/icon/clock.png" className="w-4 h-4 mr-1" />
                                    {formatThaiDateNotime(date)}
                                    {/* {moment(date).format('DD/MM/YYYY')} */}
                                </div>
                                <div className="text-crop-primary text-lg font-bold">{name}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="col-span-12">
                            <div className="flex flex-row justify-between text-lg font-semibold items-center">
                                <div className="text-sm flex items-center">
                                    <img className="h-16" src="/assets/images/fertilizer.png" />
                                    <div className="ml-4">
                                        <div className="font-bold">{description} กิโลกรัม</div>
                                    </div>
                                </div>
                                <div className="btn bg-crop-quaternary py-2 text-white rounded-full cursor-pointer hover:opacity-80">ทำกิจกรรม</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PlanItem;
