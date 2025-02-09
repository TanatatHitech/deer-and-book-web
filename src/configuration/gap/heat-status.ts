export enum HeatEvaluationStatus {
    PENDING = 'pending',
    PROCESSING = 'in-progress',
    COMPLETED = 'done',
    MISINFORMATION = 'misinformation',
}

export const HEAT_EVALUATION_STATUS = [
    {
        label: 'รอดำเนินการ',
        value: HeatEvaluationStatus.PENDING,
    },
    {
        label: 'กำลังดำเนินการ',
        value: HeatEvaluationStatus.PROCESSING,
    },
    {
        label: 'ดำเนินการแล้ว',
        value: HeatEvaluationStatus.COMPLETED,
    },
    {
        label: 'ข้อมูลเป็นเท็จ',
        value: HeatEvaluationStatus.MISINFORMATION,
    },
];
