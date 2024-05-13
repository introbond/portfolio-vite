import React, { useState, useMemo } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { IoMdPulse, IoMdSchool } from "react-icons/io";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { Avatar} from "antd";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";


const TimelineElement = ({ date, icon, iconStyle, title, content, avatarSrc, avatarBorderColor  }) => {
    const formatKeyValue = (text) => {
        const parts = text.split(':');
        if (parts.length === 2) {
            return (
                <>
                    <strong>{parts[0]}</strong>:{parts[1]}
                </>
            );
        } else {
            return text;
        }
    };

    const formattedContent = content.split('\n').map((item, index) => (
        <React.Fragment key={index}>
            {formatKeyValue(item)}
            <br />
        </React.Fragment>
    ));

    const avatarStyle = {
        backgroundColor: "transparent",
        border: avatarBorderColor ? `1px solid ${avatarBorderColor}` : "none"
    };

    return (
        <VerticalTimelineElement
            className="vertical-timeline-elemt--education"
            date={date}
            icon={icon}
            iconStyle={iconStyle}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {avatarSrc && <Avatar size={30} style={avatarStyle} src={avatarSrc} />} &nbsp;
                <h3 className="vertical-timeline-element-title">{title}</h3>
            </div>
            <p>{formattedContent}</p>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    const [reverseOrder, setReverseOrder] = useState(false);

    const timelineElementStyle = {
        background: "var(--color-secondary)",
        color: "var(--text-color-primary)",
    }

    const calculateAge = (birthdate) => {
        const today = new Date();
        const birthdateObj = new Date(birthdate);
        const years = today.getFullYear() - birthdateObj.getFullYear();
        const months = today.getMonth() - birthdateObj.getMonth();

        if (months < 0 || (months === 0 && today.getDate() < birthdateObj.getDate())) {
            return `${years - 1} year ${12 - birthdateObj.getMonth() + today.getMonth()} months`;
        } else {
            return `${years} years ${months} months`;
        }
    };

    const timelineElementsData = [
        {
            date: `Feb 1994 (Age: ${calculateAge("02/03/1994")})`,
            icon: <IoMdPulse />,
            title: "Born in Ubon Rachatani, Thailand",
            content: "",
            avatarSrc: null,
            avatarBorderColor: null
        },
        {
            date: "2009 - 2012 (3 years)",
            icon: <IoMdSchool />,
            title: "Benchama Maharat Ubon Ratchatani",
            content: "High School Diploma Sci-Math",
            avatarSrc: null,
            avatarBorderColor: null
        },
        {
            date: "2012 - 2016 (4 years)",
            icon: <IoMdSchool />,
            title: "King Mongkut's Institute of Technology Ladkrabang",
            content: "Bachelor's Degree Automation Engineering",
            avatarSrc: null,
            avatarBorderColor: null
        },
        {
            date: "Jul 2016 - Jan 2022 (5 years 7 months)",
            icon: <MdWork />,
            title: "Synergetech Co., Ltd., Nonthaburi, Thailand",
            content: `Role: Automation System Engineer
            Responsibilities:
                - Spearheaded the design, development, debugging, deployment, and delivery of industrial automation projects, with a specialization in automated batch control systems.
                - Proficient in industrial automation and control system programming, including PLC, SCADA, MES, and database integration.
                - Successfully implemented analog signals, digital devices, I/O servers, and various 3rd-party integrations utilizing preferred protocols.
            `,
            avatarSrc: "/syner.png",
            avatarBorderColor: null
        },
        {
            date: "Jan 2022 - Oct 2022 (10 months)",
            icon: <FaBookOpenReader />,
            iconStyle: {timelineElementStyle},
            title: "Self-Learning Journey: Software Development",
            content: `
            Q2:
                - Dedicated self-learning period focused on traditional system programming practices with an emphasis on logic, data structures, and algorithms.
                - Constructed a blockchain data monitoring mobile application leveraging Google cloud services such as GoogleSheet, AppSheet, and AppsScript.
            Q3:
                - Initiated learning of Git and GitHub, alongside exploration of web development libraries and frameworks, particularly the JavaScript stack encompassing React.js and Express.js.
            Q4:
                - Delved into backend services with Python and Go, as well as infrastructure tools and software lifecycle practices.
            `,
            avatarSrc: null,
            avatarBorderColor: null
        },
        {
            date: "Nov 2022 -May 2024 (1 year 7 months)",
            icon: <MdWork />,
            iconStyle: {timelineElementStyle},
            title: "Swift Dynamics Co., Ltd., Bangkok, Thailand",
            content: `Role: Backend Developer
            Responsibilities:
            - Concentrating efforts on designing and developing a variety of backend services while collaborating with fellow engineers through coding and code reviews.
            - Tackling challenges to master backend engineering, deepen understanding of software architectural patterns (with a focus on microservices and event-driven architecture), and expand knowledge in DevSecOps and cloud technologies.
            `,
            avatarSrc: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-1/292435380_451632743632915_622577729761028579_n.png?stp=dst-png_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DRrgz_Q2XJsQ7kNvgEn4WS3&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfCs9HKqTi1JArnrp3F232ln9ghW_pwsD6sEkObbqJkTQg&oe=6637B948",
            avatarBorderColor: null
        },
        {
            date: `May 2024 - Present (${calculateAge("05/08/2024")})`,
            icon: <MdWork />,
            iconStyle: {timelineElementStyle},
            title: "Zero Friction Co., Ltd., Bangkok, Thailand",
            content: `Role: Software Engineer
            Responsibilities:
            - Collaborating with team members to implement and optimize core stack components using Golang, Apache Kafka, Apache APISIX, and gRPC protocol.
            - Particular emphasis on microservices architecture and optimizing data streaming efficiency.
            `,
            avatarSrc: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/271695293_5120976787936934_222433247332051886_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TBNWaANkdYsQ7kNvgG5e4OV&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfAaQVfDVqEqFk5py3w7zd0ePq-IJOvpVWI4xG7NRh_PoQ&oe=66417BD8",
            avatarBorderColor: null
        },
    ];

    // Memoized timeline elements
    const timelineElements = useMemo(() => {
        const elements = timelineElementsData.map((element, index) => (
            <TimelineElement
                key={index}
                date={element.date}
                icon={element.icon}
                iconStyle={timelineElementStyle}
                title={element.title}
                content={element.content}
                avatarSrc={element.avatarSrc}
                avatarBorderColor={element.avatarBorderColor}
            />
        ));
        return reverseOrder ? elements.reverse() : elements;
    }, [reverseOrder, timelineElementStyle, timelineElementsData]);

    const toggleOrder = () => {
        setReverseOrder(!reverseOrder);
    };

    return (
        <div className="experience">
            <button onClick={toggleOrder}>
                {reverseOrder ? "Reverse" : "Normal"}
            </button>
            <VerticalTimeline lineColor="var(--color-primary)">
                {timelineElements}
            </VerticalTimeline>
        </div>
    );
};

export default Experience;
