import { type FC } from 'react';
import IconLogout from '@/components/Icon/IconLogout';
import IconMail from '@/components/Icon/IconMail';
import IconCreditCard from '@/components/Icon/IconCreditCard';
import IconStar from '@/components/Icon/IconStar';
import IconUser from '@/components/Icon/IconUser';

const AccountSettingsList: FC<{ onInformationClick: () => void; navigate: (path: string) => void }> = ({ onInformationClick, navigate }) => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="grid grid-cols-12 gap-5 px-2 py-2">
            <div className="col-span-12">ข้อมูลส่วนตัว</div>
            <div className="col-span-12">
                <div className="flex flex-row items-center mx-5">
                    <IconUser className="fill-crop-primary mr-2" /> : สมชาย ขอทดสอบ
                </div>
            </div>
            <div className="col-span-12">
                <div className="flex flex-row items-center mx-5">
                    <IconMail className="fill-crop-primary mr-2" /> : test@email.com
                </div>
            </div>
            <div className="col-span-12">
                <div className="flex flex-row items-center mx-5">
                    <IconCreditCard className=" fill-crop-quinary mr-2" /> : 9999.00 บาท
                </div>
            </div>
            <div className="col-span-12">
                <div className="flex flex-row items-center mx-5">
                    <IconStar className=" fill-crop-quinary mr-2" /> : 9999.00 พ้อยต์
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
                        <IconLogout className="mr-2 h-4 w-4" /> ออกจากระบบ
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettingsList;
