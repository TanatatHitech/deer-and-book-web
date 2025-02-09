import moment from 'moment';

export const calculateCropAge = (startDate: Date | null) => {
    if (!startDate) return 'N/A';
    const today = moment();
    const start = moment(startDate);
    return today.diff(start, 'days');
};
