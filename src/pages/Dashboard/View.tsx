import { Fragment, type FC } from 'react';
import { Link } from 'react-router-dom';
import IconUser from '@/components/Icon/IconUser';
import IconMapPin from '@/components/Icon/IconMapPin';
import PlanItem from '../Components/PlanItem';

import useViewModel from './ViewModel';

const View: FC = () => {
    const {} = useViewModel();

    return (
        <Fragment>
            <div className='min-h-screen'>
                <div className="grid grid-cols-12 gap-5 p-6 pb-20 lg:pb-6 min-h-screen">
                    <div className="col-span-12 h-full">
                        <iframe
                            src="https://app.powerbi.com/view?r=eyJrIjoiN2U5YzU3ZWYtN2ViYS00OTI1LTlhNjItMDhkMWE4ZWZjZDZmIiwidCI6IjFiMTZiOWU4LWNiZjgtNGRjNi1hODY3LTJlNDIzNDJiM2Y4NiIsImMiOjEwfQ%3D%3D&pageName=ReportSectionb6f2705f2fc881586cf8"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                        ></iframe>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default View;
