import React, { useState } from 'react';
import { Layout } from 'antd';
import Toolbar from '../Profile/Toolbar/Toolbar';
import Scheduler from '../Profile/Scheduler/Scheduler';

const Profile: React.FC = () => {
    const data = [
        {
            start_date: "2020-06-10 6:00",
            end_date: "2020-06-10 8:00",
            text: "Event 1",
            id: 1
        },
        {
            start_date: "2020-06-13 10:00",
            end_date: "2020-06-13 18:00",
            text: "Event 2",
            id: 2
        }
    ];
    const [timeFormatState, setTimeFormatState] = useState(true);
    const [messages, setMessages] = useState([]);
    const logDataUpdate = (action: string, ev: any, id: any) => {
        const text = ev && ev.text ? ` (${ev.text})` : "";
        const message = `event ${action}: ${id} ${text}`;
    };
    return (
        <>
            <Toolbar
                timeFormatState={timeFormatState}
                handleTimeFormatStateChange={(event: any) =>
                    setTimeFormatState(event.target.checked)
                }
            />
            <Scheduler
                events={data}
                timeFormatState={timeFormatState}
                onDataUpdated={logDataUpdate}
            />
        </>
    );
};

export default Profile;
