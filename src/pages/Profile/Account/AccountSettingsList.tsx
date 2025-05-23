import { useEffect, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import IconLogout from '@/components/Icon/IconLogout';
import IconMail from '@/components/Icon/IconMail';
import IconCreditCard from '@/components/Icon/IconCreditCard';
import IconStar from '@/components/Icon/IconStar';
import IconUser from '@/components/Icon/IconUser';

const AccountSettingsList: FC<{ onInformationClick: () => void; navigate: (path: string) => void; profileDetails: any }> = ({ onInformationClick, navigate, profileDetails }) => {
    const { t } = useTranslation();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="grid grid-cols-12 gap-5 px-2 py-2">
            <div className="col-span-12 font-semibold">{t('profile.personalInformation')}</div>
            <div className="col-span-12">
                <div className="flex flex-row items-center mx-5">
                    <IconUser className="fill-crop-primary mr-2" /> : {profileDetails?.display_name ?? t('profile.displayName')}
                </div>
            </div>
            <div className="col-span-12">
                <div className="flex flex-row items-center mx-5">
                    <IconMail className="fill-crop-primary mr-2" /> : {profileDetails?.email ?? t('profile.email')}
                </div>
            </div>
            <div className="col-span-12">
                <div className="flex flex-row items-center mx-5">
                    <IconCreditCard className=" fill-crop-quinary mr-2" /> : {profileDetails?.remaining_credit ?? '-'} {t('profile.baht')}
                </div>
            </div>
            <div className="col-span-12">
                <div className="flex flex-row items-center mx-5">
                    <IconStar className=" fill-crop-quinary mr-2" /> : {profileDetails?.point ?? '-'} {t('profile.points')}
                </div>
            </div>
            {/* <div className="col-span-12" onClick={onInformationClick}>
                <div className="flex flex-row justify-between mx-5">
                    <div className="flex">
                        <IconUser className="mr-2 h-4 w-4" /> ข้อมูลส่วนตัว
                    </div>
                    <IconChevronRight />
                </div>
                <hr className="border-gray-200 mt-2" />
            </div> */}

            <div className="col-span-12 text-red-600 mb-2" onClick={handleLogout}>
                <div className="flex flex-row justify-between mx-5">
                    <div className="flex">
                        <IconLogout className="mr-2 h-4 w-4" /> {t('profile.logout')}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettingsList;
