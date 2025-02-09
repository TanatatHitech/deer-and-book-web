import { type FC, Fragment } from 'react';
import { Document, Page } from 'react-pdf';

import useViewModel from './ViewModel';

const GAPView: FC = () => {
    const { ref, rect, file, numPages, onDocumentLoadSuccess } = useViewModel();

    return (
        <Fragment>
            <div className="max-w-full" ref={ref}>
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className={['max-w-full']}>
                    {Array.from(new Array(numPages), (_el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} width={rect.width} />
                    ))}
                </Document>
            </div>
        </Fragment>
    );
};

export default GAPView;
