import { type FC, Fragment, useState, ChangeEvent, useEffect } from 'react';
import useViewModel from './ViewModel';
import { useNavigate } from 'react-router-dom';
import InformationSettingForm from '../Form/Profile';
import ProfilePicture from './ProfilePicture';
import AccountSettingsList from './AccountSettingsList';
import { useAuthStore } from '@/store/auth';

const ProfileAccountView: FC = () => {
    const { tumbonOptions, amphureOptions, provinceOptions, viewType, setViewType, formState, onChangeFormState } = useViewModel();
    const navigate = useNavigate();
    const [isInformationSetting, setInformationSetting] = useState(false);
    const [profilePic, setProfilePic] = useState<string>('/assets/crop/profile-default.jpg');
    const { getProfile, profile } = useAuthStore();
    useEffect(() => {
        getProfile();
    }, [getProfile]);

    const handleProfilePicChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    setProfilePic(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        const inputElement = document.getElementById('profile-pic-upload') as HTMLInputElement;
        if (inputElement) {
            inputElement.click();
        }
    };

    const handleInformationClick = () => {
        setInformationSetting(true);
    };

    return (
        <Fragment>
            {/* Mobile Version */}
            <div className="block lg:hidden">
                <div className="pb-20 lg:pb-0 mt-5">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12">
                            <div className="min-w-full flex flex-col items-center justify-center gap-3 mb-2">
                                <ProfilePicture profilePic={profilePic} onChange={handleProfilePicChange} triggerFileInput={triggerFileInput} />
                                <div className="font-semibold">{profile.firstName}</div>
                            </div>
                            <div className="border border-gray-200 text-gray-500 rounded-lg bg-white p-0 py-1">
                                {!isInformationSetting && <AccountSettingsList onInformationClick={handleInformationClick} navigate={navigate} />}
                                {isInformationSetting && (
                                    <div className="px-5 mt-5">
                                        <InformationSettingForm profile={profile} onCancel={() => setInformationSetting(false)} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Desktop Version */}
            <div className="hidden lg:block">
                <div className="pb-20 lg:pb-0">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="panel col-span-12">
                            <span className="text-crop-primary font-semibold text-lg">ตั้งค่าบัญชีผู้ใช้</span>
                            <div className="grid grid-cols-12 gap-5 mt-2">
                                <div className="md:col-span-4 xl:col-span-3 panel">
                                    <AccountSettingsList onInformationClick={handleInformationClick} navigate={navigate} />
                                </div>
                                <div className="md:col-span-8 xl:col-span-9 panel">
                                    <div className="grid grid-cols-12 gap-5">
                                        <div className="col-span-4">
                                            <div
                                                className="min-w-full flex flex-col items-center justify-start gap-3 mb-2 h-full w-full bg-contain bg-no-repeat bg-top"
                                                style={{ backgroundImage: 'url(/assets/crop/profile-bg.png)' }}
                                            >
                                                <div className="relative w-auto mt-5">
                                                    <ProfilePicture profilePic={profilePic} onChange={handleProfilePicChange} triggerFileInput={triggerFileInput} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-8 px-7 mt-5">
                                            <InformationSettingForm profile={profile} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProfileAccountView;
