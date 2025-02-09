import { type FC, useState } from 'react';
import GAPDocumentViewer from '../../Component/GAPDocumentViewer';
import UploadModal from '../../Component/UploadModal';

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
                fileUrl="/assets/pdf/f-3.pdf"
                downloadFileName="F-3-แบบคำขอต่ออายุใบรับรองแหล่งผลิต-GAP-พืช.pdf"
                hideSendButton={hideSendButton}
                toggleUploadModal={toggleUploadModal}
                hideDocument={true}
            />
            {showUploadModal && <UploadModal onClose={toggleUploadModal} />}
        </>
    );
};

export default ViewGAP;
