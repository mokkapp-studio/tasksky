import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { 
    UsergroupAddOutlined, 
    DatabaseFilled,
    CalendarOutlined,
    ProjectFilled,
    SettingOutlined 
} from '@ant-design/icons';
import styled from '@emotion/styled';



const UlListSidebar = styled.ul`
    .inner-li{
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:hover{
            cursor: pointer;
        }
    }
    .default-li{
        border-left: 3px solid #fff;
        .icon{
            color: #CACFD6
        }
        .title{
            color: #CACFD6;
        }
    }
    .active-li{
        border-left: 3px solid #91b3f1;
        .icon{
            color: #92aafb;
        }
        .title{
            color: #707090
        }
    }
    li:last-child{
        position: absolute;
        bottom: 4em;
        width: 100%;
        @media(max-height: 600px){
            position: relative;
            bottom: 0em;
        }
        @media(max-width: 768px){
            bottom: 0em;
        }
    }
`;


const ListSidebar = () => {


    const router = useRouter();


    return(
        <UlListSidebar>
            <li className={router.pathname == "/menage" ? "active-li" : "default-li"}>
                <Link href="/menage">
                <div className="inner-li">
                        <UsergroupAddOutlined  className="icon font-icon s-lg" />
                        <span className="font s-16 a-center title">Manage</span>
                </div>
                </Link>
            </li>
            <li className={router.pathname == "/" ? "active-li" : "default-li"}>
                <Link href="/">
                    <div className="inner-li">
                        <DatabaseFilled   className="icon font-icon s-lg" />
                        <span className="font s-16 a-center title">Tasks</span>
                    </div>
                </Link>
            </li>
            <li className={router.pathname == "/schedule" ? "active-li" : "default-li"}>
                <Link href="/schedule">
                    <div className="inner-li">
                        <CalendarOutlined   className="icon font-icon s-lg" />
                        <span className="font s-16 a-center title">Schedule</span>
                    </div>
                </Link>
            </li>
            <li className={router.pathname == "/reports" ? "active-li" : "default-li"}>
                <Link href="/reports">
                    <div className="inner-li">
                        <ProjectFilled  className="icon font-icon s-lg" />
                        <span className="font s-16 a-center title">Reports</span>
                    </div>
                </Link>
            </li>
            <li className={router.pathname == "/settings" ? "active-li" : "default-li"}>
                <Link href="/settings">
                    <div className="inner-li">
                        <SettingOutlined className="icon font-icon s-lg" />
                        <span className="font s-16 a-center title">Settings</span>
                    </div>
                </Link>
            </li>
        </UlListSidebar>
    )
};

export default ListSidebar;