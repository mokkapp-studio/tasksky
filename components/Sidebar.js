import React from 'react';
import styled from '@emotion/styled';
import ListSidebar from '../components/UI/listsidebar';

const Aside = styled.aside`
    width: 120px;
    height: 100vh;
    position: fixed;
    top: 4em;
    overflow: auto;
    padding-bottom: 3em;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px, rgba(0, 0, 0, 0.06) 0px 2px 12px;
    @media(max-width: 768px){
     transform: translateX(-200px);
    }
`;

const Sidebar = () => {


    return(
        <Aside>
            <ListSidebar/>
        </Aside>
    )
}

export default Sidebar