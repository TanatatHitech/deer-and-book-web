import { type FC, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import IconCaretDown from '@/components/Icon/IconCaretDown';
import Swal from 'sweetalert2';

interface UploadModalProps {
    onClose: () => void;
}

const UploadModal: FC<UploadModalProps> = ({ onClose }) => {
    const navigate = useNavigate();
    const { id, round } = useParams<{ id: string; round: string }>();
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFiles = Array.from(event.target.files);
            if (selectedFiles.length + files.length <= 20) {
                setFiles([...files, ...selectedFiles]);
            } else {
                alert('You can only upload a maximum of 20 files.');
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
                // onClose();
            }
        });
    };
    const handleDeleteFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const handleClearAll = () => {
        setFiles([]);
    };

    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleBack = () => {
        navigate(`/admin/gap/${id}/detail`);
    };

    return (
        <div className="modal">
            <div className="modal-box">
                <div className="flex justify-between my-5">
                    <h2 className="text-xl font-bold">อัพโหลดคำขอ GAP (PDF)</h2>
                    <div className="flex">
                        <button className="btn bg-crop-primary text-white hover:opacity-80" onClick={triggerFileInput}>
                            เลือกไฟล์
                        </button>
                        <button type="button" className="btn bg-danger text-white  ml-4 hover:opacity-80" onClick={handleClearAll}>
                            ลบทั้งหมด
                        </button>
                    </div>
                </div>
                <input type="file" ref={fileInputRef} className="hidden" accept="application/pdf" multiple onChange={handleFileChange} />
                <table className="mt-4 w-full">
                    <thead>
                        <tr>
                            <th className="text-left">ชื่อไฟล์</th>
                            <th className="text-right"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((file, index) => (
                            <tr key={index} className="border-b">
                                <td>{file.name}</td>
                                <td className="text-right">
                                    <div className="flex justify-end">
                                        <button type="button" className="btn btn-danger ml-2 hover:opacity-80" onClick={() => handleDeleteFile(index)}>
                                            ลบ
                                        </button>
                                        <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer" className="btn btn-info ml-2 hover:opacity-80">
                                            ดูเอกสาร
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <div className="flex justify-center mt-5">
                    <button type="button" className="btn bg-crop-quaternary text-white mt-4 hover:opacity-80" onClick={handleUpload}>
                        ยืนยันการส่งเอกสาร
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default UploadModal;
