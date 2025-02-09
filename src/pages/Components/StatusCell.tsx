import { type FC } from 'react';
import { clsx } from '@mantine/core';

interface Props {
    status: 'success' | 'warning' | 'error' | 'info';
    title: string;
}

const StatusCell: FC<Props> = ({ status, title }) => {
    return (
        <div
            className={clsx('rounded-2xl text-center w-full xxl:w-1/2 py-1 font-bold', {
                'bg-green-100 border-green-400': status === 'success',
                'bg-yellow-100 border-yellow-400': status === 'warning',
                'bg-red-100 border-red-400': status === 'error',
                'bg-blue-100 border-blue-400': status === 'info',
            })}
        >
            <div
                className={clsx({
                    'text-green-600': status === 'success',
                    'text-yellow-600': status === 'warning',
                    'text-red-600': status === 'error',
                    'text-blue-600': status === 'info',
                })}
            >
                {title}
            </div>
        </div>
    );
};

export default StatusCell;
