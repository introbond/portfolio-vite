import React, { useState, useEffect } from "react";
import { Statistic } from 'antd';
import CountUp from 'react-countup';
import Watchers from "../../components/badges/Watchers";


const formatter = (value) => <CountUp end={value} separator="," />;
const TotalUsers = ({totalUsersCount}) => (
    <Statistic title="Active Users" value={totalUsersCount} formatter={formatter} />
);

const Background = () => {
    const [activeUsersCount, setActiveUsersCount] = useState(0);
    const [totalUsersCount, setTotalUsersCount] = useState(0);
    const wsUrl = import.meta.env.VITE_WS_URL;
    let ws;

    useEffect(() => {
        ws = new WebSocket(wsUrl);

        ws.onopen = () => {
            console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);

                let activeUsers = parseInt(data.activeUsers) || 0;
                setActiveUsersCount(activeUsers);

                let totalUsers = parseInt(data.totalUsers) || 0;
                setTotalUsersCount(totalUsers);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        };

        ws.onclose = () => {
            console.log("WebSocket disconnected");
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
            ws.close();
        };
    }, []);

    const handleBeforeUnload = () => {
        ws.close();
    };

    return (
        <Watchers activeUsersCount={activeUsersCount} />
    );
};

export default Background;
