import { useEffect } from 'react';

const ViewModel = () => {
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

    useEffect(() => {
        setupMainWrapperPadding();
    }, []);

    useEffect(() => {
        return () => {
            setupBackMainWrapperPadding();
        };
    }, []);

    return {};
};

export default ViewModel;
