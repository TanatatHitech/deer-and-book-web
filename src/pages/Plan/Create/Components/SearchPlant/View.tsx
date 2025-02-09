import { type FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PlantCard from './Components/PlantCard';
import IconSearch from '@/components/Icon/IconSearch';
import IconX from '@/components/Icon/IconX';
import useViewModel, { Props } from './ViewModel';

const SearchPlant: FC<Props> = (props) => {
    const { t, isDesktop, isOpen, cropOptions, searchText, setSearchText, onSubmit, onClose } = useViewModel(props);

    return (
        <Fragment>
            {isOpen && (
                <Fragment>
                    {/* Mobile Version */}
                    <div className="block lg:hidden">
                        <div className="panel">
                            <div className="grid grid-cols-12 gap-5">
                                <div className="col-span-12">
                                    <div className="flex flex-row items-center justify-center gap-3">
                                        <IconSearch fill className="text-crop-primary w-6 h-6" />
                                        <h5 className="text-xl font-bold text-center text-crop-primary">{t('planLand.findPlant.header')}</h5>
                                    </div>
                                </div>
                                <div className="col-span-12">
                                    <hr />
                                </div>
                                <div className="col-span-12">
                                    <input
                                        type="text"
                                        className="form-input border-gray-500"
                                        placeholder={t('planLand.findPlant.inputPlaceholder')}
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />
                                </div>
                                {cropOptions.map((crop, idx) => (
                                    <div className="col-span-12">
                                        <PlantCard icon={crop.icon} name={crop.label} onClick={() => onSubmit(crop.value)} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Mobile Version */}

                    {/* Desktop Version */}
                    {isDesktop && (
                        <div className="hidden lg:block">
                            <Transition appear show={isOpen} as={Fragment}>
                                <Dialog as="div" open={isOpen} onClose={onClose} className="hidden lg:block">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="fixed inset-0" />
                                    </Transition.Child>
                                    <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                                        <div className="flex min-h-screen items-center justify-center px-4">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <Dialog.Panel as="div" className="panel my-8 w-full max-w-xl overflow-hidden rounded-lg border p-0 text-black bg-white relative border-crop-primary">
                                                    <div className="absolute right-0 flex items-center justify-end px-5 py-3">
                                                        <button type="button" className="text-black hover:bg-white-light transition-all rounded-md p-2" onClick={onClose}>
                                                            <IconX />
                                                        </button>
                                                    </div>
                                                    <h5 className="pt-5 text-xl font-bold text-center text-crop-primary">{t('findPlant.header')}</h5>
                                                </Dialog.Panel>
                                            </Transition.Child>
                                        </div>
                                    </div>
                                </Dialog>
                            </Transition>
                        </div>
                    )}
                    {/* Desktop Version */}
                </Fragment>
            )}
        </Fragment>
    );
};

export default SearchPlant;
