import { type FC } from 'react';
import IconLogout from '@/components/Icon/IconLogout';

const AccountSettingsList: FC<{ onInformationClick: () => void; navigate: (path: string) => void }> = ({ onInformationClick, navigate }) => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 mx-2 my-2">ข้อมูลส่วนตัว</div>
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
