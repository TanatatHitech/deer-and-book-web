import { type FC, useState } from 'react';
import GAPDocumentViewer from '../../Component/GAPDocumentViewer';
import UploadModal from '../../Component/UploadModal';
import UploadPicture from '../../Component/UploadPicture';

const ViewGAP: FC = () => {
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [hideSendButton, setHideSendButton] = useState(false);

    const toggleUploadModal = () => {
        setShowUploadModal(!showUploadModal);
        setHideSendButton(true);
    };

    return (
        <>
            <GAPDocumentViewer
                fileUrl="/assets/pdf/f-1.pdf"
                downloadFileName="F-1-แบบคำขอใบรับรองแหล่งผลิต-GAP-พืช-สำหรับราย-1.pdf"
                hideSendButton={hideSendButton}
                toggleUploadModal={toggleUploadModal}
                hideDocument={true}
            />
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-6">
                    <UploadModal onClose={toggleUploadModal} />
                </div>
                <div className="col-span-6">
                    <UploadPicture onClose={toggleUploadModal} />
                </div>
            </div>
        </>
    );
};

export default ViewGAP;
