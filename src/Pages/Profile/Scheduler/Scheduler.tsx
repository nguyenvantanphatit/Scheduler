
import React, { useCallback, useEffect } from "react";
import "dhtmlx-scheduler";
import "dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css";
import './Scheduler.css';

const windowInstance: any = window;
const scheduler = windowInstance.scheduler;

const Scheduler = (props: any) => {
    const { onDataUpdated, events, timeFormatState } = props;

    //const schedulerRef = useRef();
    const schedulerRef = useCallback((node: any) => {
        if (node !== null) {
            console.log(node);
            scheduler.init(node, new Date(2020, 5, 10));
            scheduler.clearAll();
            scheduler.parse(events);
            scheduler.render();

            setHoursScaleFormat(timeFormatState);
        }
    }, []);

    const initSchedulerEvents = () => {
        if (scheduler._$initialized) {
            return;
        }

        scheduler.attachEvent("onEventAdded", (id: any, ev: any) => {
            if (onDataUpdated) {
                onDataUpdated("create", ev, id);
            }
        });

        scheduler.attachEvent("onEventChanged", (id: any, ev: any) => {
            if (onDataUpdated) {
                onDataUpdated("update", ev, id);
            }
        });

        scheduler.attachEvent("onEventDeleted", (id: any, ev: any) => {
            if (onDataUpdated) {
                onDataUpdated("delete", ev, id);
            }
        });

        scheduler._$initialized = true;
    };

    const setHoursScaleFormat = (state: any) => {
        scheduler.config.hour_date = state ? "%H:%i" : "%g:%i %A";
        scheduler.templates.hour_scale = scheduler.date.date_to_str(
            scheduler.config.hour_date
        );
    };

    useEffect(() => {
        console.log(scheduler);
        scheduler.skin = "material";
        scheduler.config.header = [
            "day",
            "week",
            "month",
            "date",
            "prev",
            "today",
            "next"
        ];
        scheduler.config.hour_date = "%g:%i %A";
        scheduler.xy.scale_width = 70;

        initSchedulerEvents();

        console.log(schedulerRef);
    }, []);

    return (
        <div className="scheduler-container">
            <div ref={schedulerRef} style={{ width: "100%", height: "600px" }} />
        </div>
    );
};

export default React.memo(Scheduler, (props, nextProps) => {
    return props.timeFormatState !== nextProps.timeFormatState;
});
