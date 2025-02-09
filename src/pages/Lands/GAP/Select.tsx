import IconClipboardText from '@/components/Icon/IconClipboardText';
import IconMenuForms from '@/components/Icon/Menu/IconMenuForms';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectGAPInput: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-row items-center gap-2 justify-between mx-[30%] my-[20%] text-white text-xl">
            <div onClick={() => navigate('/land/gap/new/form')} className="bg-crop-primary cursor-pointer hover:opacity-95 rounded-xl flex p-5 flex-col items-center justify-center">
                <IconMenuForms className="h-12 w-12 mb-2" />
                กรอกแบบฟอร์ม
            </div>
            <div onClick={() => navigate('/land/gap/new/upload')} className="bg-crop-primary cursor-pointer hover:opacity-95 rounded-xl flex p-5 flex-col items-center justify-center">
                <IconClipboardText className="h-12 w-12 mb-2" />
                อัพโหลดเอกสาร
            </div>
        </div>
    );
};

export default SelectGAPInput;
