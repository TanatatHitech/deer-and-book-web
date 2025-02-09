import { type FC, Fragment } from 'react';
import FullCalendar from '@fullcalendar/react';
// import '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

import useViewModel from './ViewModel';

const CropCalendar: FC = () => {
    const { events } = useViewModel();

    return (
        <Fragment>
            <div className='pb-20 lg:pb-0'>
                <div className="panel">
                    <div className="mb-4 flex items-center sm:flex-row flex-col sm:justify-between justify-center">
                        <div className="sm:mb-0 mb-4">
                            <div className="hidden lg:block text-lg font-semibold ltr:sm:text-left rtl:sm:text-right text-center">กิจกรรมการปลูก</div>
                            <div className="flex items-center mt-2 flex-wrap sm:justify-start justify-center">
                                <div className="flex items-center ltr:mr-4 rtl:ml-4">
                                    <div className="h-2.5 w-2.5 rounded-sm ltr:mr-2 rtl:ml-2 bg-primary"></div>
                                    <div>ให้ปุ๋ย</div>
                                </div>
                                <div className="flex items-center ltr:mr-4 rtl:ml-4">
                                    <div className="h-2.5 w-2.5 rounded-sm ltr:mr-2 rtl:ml-2 bg-info"></div>
                                    <div>ให้ยา</div>
                                </div>
                                {/* <div className="flex items-center ltr:mr-4 rtl:ml-4">
                                <div className="h-2.5 w-2.5 rounded-sm ltr:mr-2 rtl:ml-2 bg-success"></div>
                                <div>Personal</div>
                            </div>
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-sm ltr:mr-2 rtl:ml-2 bg-danger"></div>
                                <div>Important</div>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="calendar-wrapper">
                        <FullCalendar
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            headerToolbar={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay',
                            }}
                            editable={true}
                            dayMaxEvents={true}
                            selectable={true}
                            droppable={true}
                            // eventClick={(event: any) => editEvent(event)}
                            // select={(event: any) => editDate(event)}
                            events={events}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CropCalendar;
