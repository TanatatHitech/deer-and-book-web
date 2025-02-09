import { FC } from 'react';

interface IconHorizontalDotsProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconHorizontalDots: FC<IconHorizontalDotsProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <>
            {!fill ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle opacity={duotone ? '0.5' : '1'} cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            ) : (
                <svg width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path d="M2.75 4.75C3.99264 4.75 5 3.74264 5 2.5C5 1.25736 3.99264 0.25 2.75 0.25C1.50736 0.25 0.5 1.25736 0.5 2.5C0.5 3.74264 1.50736 4.75 2.75 4.75Z" fill="#E5E7EB" />
                    <path d="M10.25 4.75C11.4926 4.75 12.5 3.74264 12.5 2.5C12.5 1.25736 11.4926 0.25 10.25 0.25C9.00736 0.25 8 1.25736 8 2.5C8 3.74264 9.00736 4.75 10.25 4.75Z" fill="#E5E7EB" />
                    <path d="M17.75 4.75C18.9926 4.75 20 3.74264 20 2.5C20 1.25736 18.9926 0.25 17.75 0.25C16.5074 0.25 15.5 1.25736 15.5 2.5C15.5 3.74264 16.5074 4.75 17.75 4.75Z" fill="#E5E7EB" />
                </svg>
            )}
        </>
    );
};

export default IconHorizontalDots;
