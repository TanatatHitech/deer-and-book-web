import moment from 'moment';

export const formatActivityDate = (planDate: string) => {
    const daysDiff = moment(planDate).diff(moment(), 'days');
    if (daysDiff < 0) {
        return `เลยกำหนดการมาแล้ว ${Math.abs(daysDiff)} วัน`;
    }
    return `เริ่มกิจกรรมในอีก ${daysDiff} วัน`;
};
