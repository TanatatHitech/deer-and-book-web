export enum GapEvaluationStatus {
    PENDING = 'PENDING',
    FIRST_ROUND = 'FIRST_ROUND',
    SECOND_ROUND = 'SECOND_ROUND',
    THIRD_ROUND = 'THIRD_ROUND',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
}

export const GAP_EVALUATION_STATUS = [
    {
        label: 'รอการประเมิน',
        value: GapEvaluationStatus.PENDING,
    },
    {
        label: 'รอบที่ 1',
        value: GapEvaluationStatus.FIRST_ROUND,
    },
    {
        label: 'รอบที่ 2',
        value: GapEvaluationStatus.SECOND_ROUND,
    },
    {
        label: 'รอบที่ 3',
        value: GapEvaluationStatus.THIRD_ROUND,
    },
    {
        label: 'เสร็จสิ้น',
        value: GapEvaluationStatus.COMPLETED,
    },
    {
        label: 'ยกเลิก',
        value: GapEvaluationStatus.CANCELLED,
    },
];
