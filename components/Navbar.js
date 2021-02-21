import React, { useState} from 'react';
import ListSidebar from '../components/UI/listsidebar';
import { Input, Tooltip, Drawer, Button } from 'antd';
import { BellOutlined, UserOutlined, MenuOutlined, SearchOutlined   } from '@ant-design/icons';
import styled from '@emotion/styled';

const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 4em;
    z-index: 100;
    background: linear-gradient(90deg, rgba(155,168,252,1) 0%, rgba(113,179,248,1) 100%);
    color: white;
    .inner-nav{
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const InfoNav = styled.div`
    display: flex;
    align-items: center;
    border-left: 1px solid #99C4FA;
    padding: 0.8em 1.5em;
    .name-user{
        text-align: center;
        width: max-content;
        margin-right: 1em;
        @media(max-width: 768px){
            display: none
        }
    }
`;



const BrandNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 187px;
    background: #868FDB;
    height: 4em;
    display: flex;
    .open-sidebar-mobile{
        display: none;
        @media(max-width: 768px){
            display: block;
            margin-right: 1em;
        }
    }
`;

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
      const onClose = () => {
        setVisible(false);
    };

    const alertBell = true;
    const userName = 'M. Thompson';
    const text = <span className="font s-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>;


    return(
        <Nav>
            <div className="inner-nav">
                <div style={{display: 'flex'}}>
                    <BrandNav>
                        <MenuOutlined className="open-sidebar-mobile" onClick={showDrawer} />
                        <span className="font s-20 a-center">TaskSky</span>
                    </BrandNav>
                    
                    <Input className="input" placeholder="Search for tasks.." bordered={false} prefix={<SearchOutlined />} />
                </div>
                <div style={{display: 'flex'}}>
                    <InfoNav>
                        {alertBell && <span className="alert pulsation"></span>}
                        <Tooltip placement="bottom" title={text}>
                            <BellOutlined className="font-icon s-md" />
                        </Tooltip>
                    </InfoNav>
                    <InfoNav>
                        <span className="font s16 a-center w-light name-user">{userName}</span>
                        <UserOutlined className="font-icon s-lg bg-color color-default" />
                    </InfoNav>
                </div>
            </div>    
            <Drawer
                placement="left"
                width={120}
                closable={false}
                onClose={onClose}
                visible={visible}
                style={{padding: '0'}}
            >
                <ListSidebar/>
            </Drawer>   
        </Nav>
    )
}

export default Navbar