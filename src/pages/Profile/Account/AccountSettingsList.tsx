import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import IconChevronRight from '@/components/Icon/IconChevronRight';
import IconUser from '@/components/Icon/IconUser';
import IconBell from '@/components/Icon/IconBell';
import IconLock from '@/components/Icon/IconLock';
import IconLogout from '@/components/Icon/IconLogout';

const AccountSettingsList: FC<{ onInformationClick: () => void; navigate: (path: string) => void }> = ({ onInformationClick, navigate }) => (
    <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 mx-2 my-2">การตั้งค่าบัญชีผู้ใช้</div>
        <div className="col-span-12" onClick={onInformationClick}>
            <div className="flex flex-row justify-between mx-5">
                <div className="flex">
                    <IconUser className="mr-2 h-4 w-4" /> ข้อมูลส่วนตัว
                </div>
                <IconChevronRight />
            </div>
            <hr className="border-gray-200 mt-2" />
        </div>
        <div className="col-span-12">
            <div className="flex flex-row justify-between mx-5">
                <div className="flex">
                    <IconBell className="mr-2 h-4 w-4" /> การแจ้งเตือน
                </div>
                <IconChevronRight />
            </div>
            <hr className="border-gray-200 mt-2" />
        </div>
        <div className="col-span-12">
            <div className="flex flex-row justify-between mx-5">
                <div className="flex">
                    <IconLock className="mr-2 h-4 w-4" /> เปลี่ยนรหัสผ่าน
                </div>
                <IconChevronRight />
            </div>
            <hr className="border-gray-200 mt-2" />
        </div>
        <div className="col-span-12 text-red-600 mb-2" onClick={() => navigate('/login')}>
            <div className="flex flex-row justify-between mx-5">
                <div className="flex">
                    <IconLogout className="mr-2 h-4 w-4" /> ออกจากระบบ
                </div>
            </div>
        </div>
    </div>
);

export default AccountSettingsList;
