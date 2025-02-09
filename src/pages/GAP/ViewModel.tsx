import { useContext, useEffect, useState } from 'react';
import { MobileHeaderContext } from '@/Context/MobileHeader';
import { useNavigate } from 'react-router-dom';
import { useThemeStore } from '@/store/theme';
import { useShallow } from 'zustand/react/shallow';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { useResizeObserver } from '@mantine/hooks';

type PDFFile = string | File | null;

const ViewModel = () => {
    const navigate = useNavigate();
    const { setShowHeader, setTitle, setShowCustomRightComponent, setupBackButton } = useContext(MobileHeaderContext);
    const { setPageTitle } = useThemeStore(
        useShallow((state) => ({
            setPageTitle: state.setPageTitle,
        }))
    );

    const [file, setFile] = useState<PDFFile>('/assets/crop/gap-file/F-68.pdf');
    const [numPages, setNumPages] = useState<number>();
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
    const [ref, rect] = useResizeObserver();

    const setupPage = () => {
        setPageTitle(`GAP | DOAE`);
        setShowHeader(true);
        setTitle('GAP');
        setupBackButton(true, () => {
            setupBackButton(false);
            navigate('/home');
        });
    };

    const setupMainWrapperPadding = () => {
        const element = document.querySelector('#content-wrapper');
        if (element) {
            element.classList.remove('p-6');
        }
    };

    const setupBackMainWrapperPadding = () => {
        const element = document.querySelector('#content-wrapper');
        if (element) {
            element.classList.add('p-6');
        }
    };

    const onDocumentLoadSuccess = ({ numPages: nextNumPages }: PDFDocumentProxy): void => {
        setNumPages(nextNumPages);
    };

    useEffect(() => {
        setupPage();
        setupMainWrapperPadding();
    }, []);

    useEffect(() => {
        return () => {
            setupBackMainWrapperPadding();
            setShowHeader(false);
            setTitle('');
        };
    }, []);

    return {
        ref,
        rect,
        file,
        numPages,
        containerRef,
        setContainerRef,
        onDocumentLoadSuccess,
    };
};

export default ViewModel;
