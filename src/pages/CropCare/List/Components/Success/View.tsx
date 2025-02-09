import { Fragment, type FC } from 'react';
import LandItem from '@/pages/Components/LandItem';
import useViewModel, { Props } from './ViewModel';
import { clsx } from '@mantine/core';
import IconShare from '@/components/Icon/IconShare';
import IconDownload from '@/components/Icon/IconDownload';
import IconHome from '@/components/Icon/IconHome';

const SuccessView: FC<Props> = (props) => {
    const { landData, formState, onShare, onDownload, onBackHome } = useViewModel(props);

    return (
        <Fragment>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                    <LandItem disabled name={landData.name} location={landData.location} latitude={landData.latitude} longitude={landData.longitude} />
                </div>
                <div className="col-span-12">
                    <div className="panel">
                        <div className="grid grid-cols-12 gap-y-5">
                            <div className="col-span-12 font-bold">รายการที่ต้องใช้</div>
                            {formState.fertilizer.map((_: any, index: number) => (
                                <Fragment key={`fertilizer-${index + 1}`}>
                                    <div
                                        className={clsx('border-b col-span-6 pb-3', {
                                            'mt-5': index === 0,
                                        })}
                                    >
                                        ปุ๋ย: สูตร 16-16-16
                                    </div>
                                    <div
                                        className={clsx('border-b col-span-6 text-end font-bold text-lg pb-3', {
                                            'mt-5': index === 0,
                                        })}
                                    >
                                        50 กิโลกรัม
                                    </div>
                                </Fragment>
                            ))}
                            {formState.agrochemicals.map((_: any, index: number) => (
                                <Fragment key={`fertilizer-${index + 1}`}>
                                    <div className={clsx('border-b col-span-6 pb-3')}>Emamectin benzoate</div>
                                    <div className={clsx('border-b col-span-6 text-end font-bold text-lg pb-3')}>20 ลิตร</div>
                                </Fragment>
                            ))}
                            <div className="col-span-12 my-6">
                                <div className="flex flex-row items-center justify-center gap-5">
                                    <button
                                        type="button"
                                        className="transition-all flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 text-white hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                                        onClick={onShare}
                                    >
                                        <IconShare className="text-black" />
                                    </button>
                                    <button
                                        type="button"
                                        className="transition-all flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 text-white hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                                        onClick={onDownload}
                                    >
                                        <IconDownload className="text-black" />
                                    </button>
                                    <button
                                        type="button"
                                        className="transition-all flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 text-white hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                                        onClick={onBackHome}
                                    >
                                        <IconHome className="text-black" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SuccessView;
