import { Fragment, type FC } from 'react';
import LandItem from '@/pages/Components/LandItem';
import RoundItem from './Components/Round';
import IconPlusCircle from '@/components/Icon/IconPlusCircle';
import useViewModel, { Props } from './ViewModel';

const AgrochemicalView: FC<Props> = (props) => {
    const { landData, chemicalOptions, formState, onAddNewAgrochemical, onRemoveAgrochemical, onChangeFormState, onPrevious, onSubmit } = useViewModel(props);

    return (
        <Fragment>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                    <LandItem disabled name={landData.name} location={landData.location} latitude={landData.latitude} longitude={landData.longitude} />
                </div>
                <div className="col-span-12">
                    <button type="button" className="btn bg-crop-primary text-white font-bold px-4 py-2 hover:opacity-80 cursor-pointer w-full shadow border-none" onClick={onAddNewAgrochemical}>
                        <IconPlusCircle className="w-6 h-6 mr-2" />
                        <span>เพิ่มจำนวนรอบ</span>
                    </button>
                </div>
                {(formState?.agrochemicals ?? []).map((_: any, index: number) => (
                    <div className="col-span-12">
                        <RoundItem key={index} index={index} formState={formState} onChange={onChangeFormState} onRemove={onRemoveAgrochemical} options={chemicalOptions} />
                    </div>
                ))}

                <div className="col-span-12">
                    <div className="panel">
                        <div className="flex flex-row items-center gap-3">
                            <button
                                type="button"
                                className="btn bg-white border border-crop-primary text-crop-primary font-bold px-4 py-2 hover:opacity-80 cursor-pointer w-full shadow"
                                onClick={onPrevious}
                            >
                                ย้อนกลับ
                            </button>
                            <button type="button" className="btn bg-crop-primary text-white font-bold px-4 py-2 hover:opacity-80 cursor-pointer w-full shadow border-none" onClick={onSubmit}>
                                ดำเนินการต่อ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AgrochemicalView;
