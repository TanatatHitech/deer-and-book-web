import { type FC, Fragment, useState, ChangeEvent, useEffect } from 'react';
import useViewModel from './ViewModel';
import { useNavigate } from 'react-router-dom';
import InformationSettingForm from '../Form/Profile';
import ProfilePicture from './ProfilePicture';
import AccountSettingsList from './AccountSettingsList';
import { useAuthStore } from '@/store/auth';

const ProfileAccountView: FC = () => {
    const { tumbonOptions, amphureOptions, provinceOptions, viewType, setViewType, formState, onChangeFormState, profileDetails } = useViewModel();
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
                                <ProfilePicture
                                    profilePic={profileDetails?.profile_image ? `https://deerandbook.com${profileDetails?.profile_image}` : 'https://deerandbook.com/img/default-user.png'}
                                    onChange={handleProfilePicChange}
                                    triggerFileInput={triggerFileInput}
                                />
                                <div className="font-semibold">{profile.firstName}</div>
                            </div>
                            <div className="border border-gray-200 text-gray-500 rounded-lg bg-white p-0 py-1 mx-2">
                                {!isInformationSetting && <AccountSettingsList onInformationClick={handleInformationClick} navigate={navigate} profileDetails={profileDetails} />}
                                {isInformationSetting && (
                                    <div className="px-5 mt-5">
                                        <InformationSettingForm profile={profile} onCancel={() => setInformationSetting(false)} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className=" p-0 py-1 mx-2">
                                <button className="flex items-center space-x-2 text-white font-semibold bg-gradient-to-r from-[#B347FD] to-[#7B77F2] border border-gray-400 rounded-full px-4 py-2 shadow-none w-[100%]">
                                    Top Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProfileAccountView;
