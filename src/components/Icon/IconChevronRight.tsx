import { type FC, Fragment } from 'react';

interface IconChevronRightProps {
    className?: string;
}

const IconChevronRight: FC<IconChevronRightProps> = ({ className }) => {
    return (
        <Fragment>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="#525252" />
                <path
                    d="M-1596 -1017C-1596 -1018.1 -1595.1 -1019 -1594 -1019H496C497.104 -1019 498 -1018.1 498 -1017V2479C498 2480.1 497.104 2481 496 2481H-1594C-1595.1 2481 -1596 2480.1 -1596 2479V-1017Z"
                    fill="#292929"
                />
                <path
                    d="M-1594 -1018H496V-1020H-1594V-1018ZM497 -1017V2479H499V-1017H497ZM496 2480H-1594V2482H496V2480ZM-1595 2479V-1017H-1597V2479H-1595ZM-1594 2480C-1594.55 2480 -1595 2479.55 -1595 2479H-1597C-1597 2480.66 -1595.66 2482 -1594 2482V2480ZM497 2479C497 2479.55 496.552 2480 496 2480V2482C497.657 2482 499 2480.66 499 2479H497ZM496 -1018C496.552 -1018 497 -1017.55 497 -1017H499C499 -1018.66 497.657 -1020 496 -1020V-1018ZM-1594 -1020C-1595.66 -1020 -1597 -1018.66 -1597 -1017H-1595C-1595 -1017.55 -1594.55 -1018 -1594 -1018V-1020Z"
                    fill="white"
                    fill-opacity="0.1"
                />
                <g filter="url(#filter0_d_0_1)">
                    <rect x="-358" y="-354" width="414" height="910" rx="8" fill="#FDFDFD" />
                    <rect x="-341.5" y="-61.5" width="381" height="237" rx="15.5" fill="white" />
                    <rect x="-341.5" y="-61.5" width="381" height="237" rx="15.5" stroke="#E5E7EB" />
                    <mask id="path-5-inside-1_0_1" fill="white">
                        <path d="M-342 -8H40V32H-342V-8Z" />
                    </mask>
                    <path d="M40 31H-342V33H40V31Z" fill="#F3F4F6" mask="url(#path-5-inside-1_0_1)" />
                    <mask id="mask0_0_1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_0_1)">
                        <path d="M8.01495 21.6538L6.5957 20.2345L14.8302 12L6.5957 3.7655L8.01495 2.34625L17.6687 12L8.01495 21.6538Z" fill="#068042" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_d_0_1" x="-402" y="-358" width="502" height="998" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="40" />
                        <feGaussianBlur stdDeviation="22" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.026 0 0 0 0 0 0 0 0 0 0.325 0 0 0 0.1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                    </filter>
                </defs>
            </svg>
        </Fragment>
    );
};

export default IconChevronRight;
