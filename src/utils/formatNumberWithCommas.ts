export function formatNumberWithCommas(number: number | string | undefined): string {
    if (number === undefined) {
        return '';
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
