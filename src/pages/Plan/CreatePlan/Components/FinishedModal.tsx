import IconDownload from '@/components/Icon/IconDownload';
import IconMapPin from '@/components/Icon/IconMapPin';
import IconShare from '@/components/Icon/IconShare';
import { type FC } from 'react';

interface FinishedModalProps {
    onClose: () => void;
}

const FinishedModal: FC<FinishedModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 mx-5">
                <div className="flex justify-between items-center border-b pb-3">
                    <div>
                        <h2 className=" text-gray-500 mb-1">สรุปรายการที่ต้องใช้</h2>
                        <div className="flex text-crop-primary text-xs">
                            <IconMapPin className=" h-4 w-4 mr-1" />
                            อ.แม่ริม จ.เชียงใหม่
                        </div>
                    </div>
                    <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        ✕
                    </button>
                </div>
                <div className=" grid grid-cols-12 gap-5 mt-6 border-b pb-3">
                    <div className="col-span-2 relative">
                        <img src="/assets/crop/harvest-field/map.png" className="absolute top-0 right-0 h-10 w-10" />
                    </div>
                    <div className="col-span-10">
                        <div className="mt-3">Field A</div>
                        <div className="text-xs text-gray-500 mt-2">17 ไร่ 7 งาน 1 ตารางวา</div>
                        <div className="text-xs text-gray-500 mt-2">X:120.120.12112 Y:120.120.12112</div>
                    </div>
                    <div className="col-span-12 text-crop-primary mt-3">สรุป</div>
                </div>
                <div>
                    <div className="mt-5 grid grid-cols-12">
                        <p className="col-span-10 text-gray-700">ปุ๋ยสูตร 16-16-16</p>
                        <p className="col-span-2 text-crop-primary">
                            <span className="font-bold">50</span> กก.
                        </p>
                    </div>
                    <div className="mt-3 grid grid-cols-12">
                        <p className="col-span-10 text-gray-700">ปุ๋ยสูตร 20-10-20</p>
                        <p className="col-span-2 text-crop-primary">
                            <span className="font-bold">50</span> กก.
                        </p>
                    </div>
                    <div className="mt-3 grid grid-cols-12">
                        <p className="col-span-10 text-gray-700">ยาสูตร Emamectin Bensoate</p>
                        <p className="col-span-2 text-crop-primary">
                            <span className="font-bold">50</span> ลิตร
                        </p>
                    </div>
                </div>
                <div className="mt-6 flex justify-center">
                    <div className="btn bg-white  border border-gray-200 rounded-full w-1/2 mx-2 flex shadow-none">
                        <IconShare className="mr-2" /> แชร์
                    </div>
                    <div className="btn bg-crop-tertiary text-white rounded-full w-1/2 mx-2 flex">
                        <IconDownload className="mr-2" /> ดาวน์โหลด
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinishedModal;
