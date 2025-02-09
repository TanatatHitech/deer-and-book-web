import { type FC } from 'react';
import GAPDocumentViewer from '../../Component/GAPDocumentViewer';

const ViewGAP: FC = () => {
    return <GAPDocumentViewer fileUrl="/assets/pdf/sop.pdf" downloadFileName="SOP_ขั้นตอนการตรวจรับรองแหล่งผลิต GAP พืช และพ-147.pdf" hideSendButton />;
};

export default ViewGAP;
