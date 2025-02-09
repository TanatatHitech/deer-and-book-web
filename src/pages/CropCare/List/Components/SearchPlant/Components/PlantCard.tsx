import { type FC, Fragment } from 'react';
import IconCaretDown from '@/components/Icon/IconCaretDown';

interface PlantCardProps {
    icon?: JSX.Element | null;
    name: string;
    onClick?: () => void;
}

const PlantCard: FC<PlantCardProps> = ({ icon, name, onClick }) => {
    return (
        <Fragment>
            <div className="panel border border-crop-primary">
                <div className="grid grid-cols-12 gap-5 items-center">
                    {icon && <div className="col-span-2">{icon}</div>}
                    <div className="col-span-6">{name}</div>
                    <div className="col-span-4">
                        <button type="button" className="btn bg-crop-secondary shadow border-none px-4 py-2 hover:opacity-80" onClick={onClick}>
                            <IconCaretDown className="text-white -rotate-90 font-bold" />
                            <span className='font-bold text-white text-xs'>เลือก</span>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PlantCard;
