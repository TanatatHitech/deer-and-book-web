import { type FC, Fragment } from 'react';
import IconCalendar from '@/components/Icon/IconCalendar';
import IconCaretDown from '@/components/Icon/IconCaretDown';
import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/th';

interface RoundCardProps {
    img: string | JSX.Element;
    round: number;
    date: string;
    onClick?: () => void;
}

const RoundCard: FC<RoundCardProps> = ({ img, round, date, onClick }) => {
    return (
        <Fragment>
            <div className="panel border border-crop-primary">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-5">
                        {typeof img === 'string' ? <img className="rounded-lg shadow h-full w-full max-w-full max-h-full object-cover" src={img} alt={`round-${round}`} /> : img}
                    </div>
                    <div className="col-span-7">
                        <div className="text-crop-primary font-bold text-xl mb-3">รอบที่ {round}</div>
                        <div className="mb-3 flex flex-row items-center">
                            <IconCalendar className="text-crop-primary mr-2 h-6 inline" />
                            <span>{moment(date).locale('th').format('DD MMMM YYYY')}</span>
                        </div>
                        <button type="button" className="btn bg-crop-primary text-white border-0 shadow hover:opacity-80" onClick={onClick}>
                            <span>ดูรายละเอียด</span>
                            <IconCaretDown className="ml-2 h-4 -rotate-90" />
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default RoundCard;
