import React from 'react';
import Nav from './Nav';

const Layout = ({children}) => (
    <>
        <Nav/>
        {children}
    </>
)

export default Layout