export function formatNumberCommas(x: number): string {
    if (x === undefined) return '0';
    var str = x.toFixed(2).toString().split('.');
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return str.join('.');
}

export function formatNumberCommasNoDecimal(x: number | string): string {
    if (x === undefined || x === null) return '0';

    // Convert to number if it's a string
    const num = typeof x === 'string' ? parseFloat(x) : x;

    // Remove decimal part and add commas
    const formattedNum = num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return formattedNum;
}

export const formatIdCard = (value: string) => {
    const cleaned = ('' + value).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{1})(\d{4})(\d{5})(\d{2})(\d{1})$/);
    if (match) {
        return `${match[1]}-${match[2]}-${match[3]}-${match[4]}-${match[5]}`;
    }
    return value;
};
