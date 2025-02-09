import IconCamera from '@/components/Icon/IconCamera';
import IconPlus from '@/components/Icon/IconPlus';
import IconTrash from '@/components/Icon/IconTrash';
import { type FC, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

interface UploadPictureProps {
    onClose: () => void;
}

const categories = [
    'แปลงเพาะปลูก',
    'ทางเข้าแปลงปลูก',
    'โรงเก็บเมล็ดพันธุ์/โรงเพาะต้นอ่อน',
    'โรงเก็บวัตถุทางการเกษตร',
    'โรงเก็บเครื่องมือและอุปกรณ์ทางการเกษตร',
    'โรงเก็บ/ลานเก็บผลผลิต',
    'พื้นที่แหล่งน้ำที่ใช้เพราะปลูก',
    'พื้นที่จัดการขยะมูลฝอยและของเสีย',
];

const UploadPicture: FC<UploadPictureProps> = ({ onClose }) => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [files, setFiles] = useState<{ [key: string]: File[] }>({});
    const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

    const handleFileChange = (category: string, event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFiles = Array.from(event.target.files);
            if ((files[category]?.length || 0) + selectedFiles.length <= 20) {
                setFiles((prevFiles) => ({
                    ...prevFiles,
                    [category]: [...(prevFiles[category] || []), ...selectedFiles],
                }));
            } else {
                alert('You can only upload a maximum of 20 files per category.');
            }
        }
    };

    const handleUpload = () => {
        Swal.fire({
            title: 'ยืนยันการส่งเอกสาร?',
            text: 'คุณต้องการส่งเอกสารเข้าสู่ระบบหรือไม่?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#068042',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ใช่',
            cancelButtonText: 'ไม่',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/land/gap');
                onClose();
            }
        });
    };

    const handleDeleteFile = (category: string, index: number) => {
        setFiles((prevFiles) => ({
            ...prevFiles,
            [category]: prevFiles[category].filter((_, i) => i !== index),
        }));
    };

    const handleClearAll = (category: string) => {
        setFiles((prevFiles) => ({
            ...prevFiles,
            [category]: [],
        }));
    };

    const triggerFileInput = (category: string) => {
        fileInputRefs.current[category]?.click();
    };

    return (
        <div className="modal">
            <div className="modal-box">
                <div className="flex justify-between my-5">
                    <h2 className="text-xl font-bold">อัพโหลดรูปภาพ</h2>
                    <button type="button" className="btn bg-danger text-white ml-4 hover:opacity-80" onClick={() => categories.forEach(handleClearAll)}>
                        ลบทั้งหมด
                    </button>
                </div>
                {categories.map((category) => (
                    <div key={category} className="mb-5">
                        <div className="flex justify-between my-5">
                            <h3 className="text-lg font-bold">{category}</h3>
                            {/* <button className="btn bg-crop-primary text-white hover:opacity-80" onClick={() => triggerFileInput(category)}>
                                เลือกไฟล์
                            </button> */}
                            <div className="text-crop-primary flex flex-row cursor-pointer" onClick={() => triggerFileInput(category)}>
                                เพิ่มรูป
                                <IconCamera className="fill-crop-primary ml-1" />
                            </div>
                        </div>
                        <input type="file" ref={(el) => (fileInputRefs.current[category] = el)} className="hidden" accept="image/*" multiple onChange={(e) => handleFileChange(category, e)} />
                        <div className="grid grid-cols-4 gap-4 mt-4">
                            {files[category]?.map((file, index) => (
                                <div key={index} className="relative">
                                    <img src={URL.createObjectURL(file)} alt={file.name} className="w-full h-32 object-cover" />
                                    <button type="button" className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full" onClick={() => handleDeleteFile(category, index)}>
                                        <IconTrash />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                {/* <div className="flex justify-center mt-5">
                    <button type="button" className="btn bg-crop-quaternary text-white mt-4 hover:opacity-80" onClick={handleUpload}>
                        ยืนยันการส่งเอกสาร
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default UploadPicture;
