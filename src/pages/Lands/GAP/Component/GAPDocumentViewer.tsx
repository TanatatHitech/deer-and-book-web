import { type FC, Fragment, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

// Import the worker from the local package
import { GlobalWorkerOptions } from 'pdfjs-dist';

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface GAPDocumentViewerProps {
    fileUrl: string;
    downloadFileName: string;
    hideSendButton?: boolean;
    hideDocument?: boolean;
    toggleUploadModal?: () => void;
}

const GAPDocumentViewer: FC<GAPDocumentViewerProps> = ({ fileUrl, downloadFileName, hideSendButton, hideDocument, toggleUploadModal }) => {
    const navigate = useNavigate();
    const [numPages, setNumPages] = useState<number | null>(null);
    const [isSendButtonVisible, setIsSendButtonVisible] = useState(true);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = downloadFileName;
        link.click();
    };

    const confirmSendDocument = () => {
        if (toggleUploadModal) {
            toggleUploadModal();
        }
        setIsSendButtonVisible(false);
    };

    return (
        <Fragment>
            <div className="flex justify-between">
                <button className="btn bg-gray-300 shadow-none" onClick={() => navigate('/land/gap')}>
                    กลับ
                </button>
                <button className="btn bg-crop-quaternary text-white shadow-none" onClick={downloadPDF}>
                    ดาวน์โหลดไฟล์เอกสาร
                </button>
            </div>
            {!hideDocument && (
                <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                        ))}
                    </div>
                </Document>
            )}

            {!hideSendButton && isSendButtonVisible && (
                <>
                    {/* <div className="flex justify-center mt-4">
                        <button className="btn btn-lg bg-crop-primary text-white shadow-none" onClick={confirmSendDocument}>
                            ส่งเอกสาร
                        </button>
                    </div> */}
                </>
            )}
        </Fragment>
    );
};

export default GAPDocumentViewer;
