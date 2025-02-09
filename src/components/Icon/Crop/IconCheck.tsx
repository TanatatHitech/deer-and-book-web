import { type FC, Fragment } from 'react';

interface IconCheckProps {
    className?: string;
}

const IconCheck: FC<IconCheckProps> = ({ className }) => {
    return (
        <Fragment>
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.7998 6.9L4.94266 10.5L12.7998 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </Fragment>
    );
};

export default IconCheck;
