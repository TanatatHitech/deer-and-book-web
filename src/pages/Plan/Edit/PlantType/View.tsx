import { FC, useState } from 'react';
import PlantType from './PlantType';
import { useViewModel } from './ViewModel';
import { useNavigate } from 'react-router-dom';

const ViewEditPlantType: FC = () => {
    const { plan, formData, setFormData, handleUpdate } = useViewModel();
    const [showConfirm, setShowConfirm] = useState(false);
    const navigate = useNavigate();

    const handleConfirmUpdate = () => {
        handleUpdate();
        navigate('/plan');
    };

    return (
        <div>
            <div className="rounded-lg border border-gray-200 p-5 bg-white">
                <span className="mb-5 text-md text-lg font-bold"> แก้ไขพันธุ์พืช </span>
                <PlantType plan={plan} formData={formData} setFormData={setFormData} />
                <div className="flex justify-center mt-5">
                    <button onClick={() => setShowConfirm(true)} className="btn text-center btn-lg bg-crop-tertiary hover:bg-crop-quaternary rounded-full text-white px-24">
                        อัพเดทข้อมูล
                    </button>
                </div>
            </div>
            {showConfirm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg w-1/3 h-1/3 flex flex-col justify-center items-center">
                        <p className="mb-5 text-md text-center text-lg font-bold">ยืนยันการเปลี่ยนแปลงข้อมูล ?</p>
                        <div className="flex justify-around mt-10 w-full">
                            <button onClick={handleConfirmUpdate} className="btn bg-crop-primary hover:opacity-80 text-white rounded-xl px-10">
                                ตกลง
                            </button>
                            <button onClick={() => setShowConfirm(false)} className="btn bg-danger hover:opacity-80 text-white rounded-xl px-10">
                                ปฏิเสธ
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewEditPlantType;
