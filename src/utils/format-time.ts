import moment from 'moment-timezone';

const months: {
    [key: number]: string;
} = {
    0: 'มกราคม',
    1: 'กุมภาพันธ์',
    2: 'มีนาคม',
    3: 'เมษายน',
    4: 'พฤษภาคม',
    5: 'มิถุนายน',
    6: 'กรกฎาคม',
    7: 'สิงหาคม',
    8: 'กันยายน',
    9: 'ตุลาคม',
    10: 'พฤศจิกายน',
    11: 'ธันวาคม',
};
const monthsAbbreviation: {
    [key: number]: string;
} = {
    0: 'ม.ค.',
    1: 'ก.พ.',
    2: 'มี.ค.',
    3: 'เม.ย.',
    4: 'พ.ค.',
    5: 'มิ.ย.',
    6: 'ก.ค.',
    7: 'ส.ค.',
    8: 'ก.ย.',
    9: 'ต.ค.',
    10: 'พ.ย.',
    11: 'ธ.ค.',
};

const daysAbbreviation: {
    [key: number]: string;
} = {
    0: 'อา.',
    1: 'จ.',
    2: 'อ.',
    3: 'พ.',
    4: 'พฤ.',
    5: 'ศ.',
    6: 'ส.',
};

export const convertToBuddhistYear = (year: number) => {
    const isBuddhistYear = year > 2500;
    return isBuddhistYear ? year : year + 543;
};

export const formatThaiDate = (dateString: string | Date, isAbbreviation?: boolean, format?: string) => {
    const date = moment(dateString).locale('th').tz('Asia/Bangkok');
    const buddhistYear = convertToBuddhistYear(date.year());

    const formattedDate = date
        .format(format ?? `DD MMMM YYYY, H:mm`)
        .replace(date.year().toString(), buddhistYear.toString())
        .replace(date.format('MMMM'), isAbbreviation ? monthsAbbreviation[date.month()] : months[date.month()]);
    return formattedDate;
};

export const formatThaiDateNotime = (dateString: string | Date, isAbbreviation?: boolean, format?: string) => {
    const date = moment(dateString).locale('th').tz('Asia/Bangkok');
    const buddhistYear = convertToBuddhistYear(date.year());

    const formattedDate = date
        .format(format ?? `DD MMMM YYYY`)
        .replace(date.year().toString(), buddhistYear.toString())
        .replace(date.format('MMMM'), isAbbreviation ? monthsAbbreviation[date.month()] : months[date.month()]);
    return formattedDate;
};

export const formatThaiDateNoDay = (dateString: string | Date, isAbbreviation?: boolean, format?: string) => {
    const date = moment(dateString).locale('th').tz('Asia/Bangkok');
    const buddhistYear = convertToBuddhistYear(date.year());

    const formattedDate = date
        .format(format ?? `MMMM YYYY`)
        .replace(date.year().toString(), buddhistYear.toString())
        .replace(date.format('MMMM'), isAbbreviation ? monthsAbbreviation[date.month()] : months[date.month()]);
    return formattedDate;
};

export const formatThaiDateOnlyDay = (dateString: string | Date) => {
    const date = moment(dateString).locale('th').tz('Asia/Bangkok');
    const dayAbbreviation = daysAbbreviation[date.day()];
    const day = date.format('DD');
    return `${dayAbbreviation}, ${day}`;
};
