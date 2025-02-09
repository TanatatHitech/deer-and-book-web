import { StaticRange } from 'react-date-range';
import moment from 'moment';
import 'moment-timezone';

export const StaticRanges: StaticRange[] = [
    {
        isSelected: (date) => {
            const startDate = date.startDate;
            const endDate = date.endDate;

            return moment().startOf('day').isSame(startDate, 'day') && moment().endOf('day').isSame(endDate, 'day');
        },
        label: 'วันนี้',
        range: () => ({
            startDate: new Date(),
            endDate: new Date(),
        }),
    },
    {
        isSelected: (date) => {
            const startDate = date.startDate;
            const endDate = date.endDate;

            return moment().subtract(1, 'days').startOf('day').isSame(startDate, 'day') && moment().subtract(1, 'days').endOf('day').isSame(endDate, 'day');
        },
        label: 'เมื่อวานนี้',
        range: () => ({
            startDate: moment().subtract(1, 'days').toDate(),
            endDate: moment().subtract(1, 'days').toDate(),
        }),
    },
    {
        isSelected: (date) => {
            const startDate = date.startDate;
            const endDate = date.endDate;

            return moment().subtract(7, 'days').startOf('day').isSame(startDate, 'day') && moment().endOf('day').isSame(endDate, 'day');
        },
        label: '7 วันที่ผ่านมา',
        range: () => ({
            startDate: moment().subtract(7, 'days').toDate(),
            endDate: new Date(),
        }),
    },
    {
        isSelected: (date) => {
            const startDate = date.startDate;
            const endDate = date.endDate;

            return moment().subtract(30, 'days').startOf('day').isSame(startDate, 'day') && moment().endOf('day').isSame(endDate, 'day');
        },
        label: '30 วันที่ผ่านมา',
        range: () => ({
            startDate: moment().subtract(30, 'days').toDate(),
            endDate: new Date(),
        }),
    },
    {
        isSelected: (date) => {
            const startDate = date.startDate;
            const endDate = date.endDate;

            return moment().startOf('month').startOf('day').isSame(startDate, 'day') && moment().endOf('month').endOf('day').isSame(endDate, 'day');
        },
        label: 'เดือนนี้',
        range: () => ({
            startDate: moment().startOf('month').toDate(),
            endDate: new Date(),
        }),
    },
    {
        isSelected: (date) => {
            const startDate = date.startDate;
            const endDate = date.endDate;

            return moment().subtract(1, 'month').startOf('month').startOf('day').isSame(startDate, 'day') && moment().subtract(1, 'month').endOf('month').endOf('day').isSame(endDate, 'day');
        },
        label: 'เดือนที่แล้ว',
        range: () => ({
            startDate: moment().subtract(1, 'month').startOf('month').toDate(),
            endDate: moment().subtract(1, 'month').endOf('month').toDate(),
        }),
    },
];
