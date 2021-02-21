import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Sidebar from './Sidebar';



const Layout = props => {

    return(
        <>
            <Head>
                <html lang="en"/>
            </Head>
            <Navbar/>
            <Sidebar/> 
            <p>sidear</p>
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout;


