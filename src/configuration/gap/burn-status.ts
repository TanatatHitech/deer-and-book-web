export enum BurnStatus {
    PARTIALLY = 'partially',
    ALL = 'all',
}

export const BURN_STATUS = [
    {
        label: 'ลุกไหม้บางส่วน',
        value: BurnStatus.PARTIALLY,
    },
    {
        label: 'ลุกไหม้ทั้งหมด',
        value: BurnStatus.ALL,
    },
];
