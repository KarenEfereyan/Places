import React from 'react';
import GlobalStyles from './styles/GlobalStyles'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
        <GlobalStyles />
        <main>{children}</main>
        </React.Fragment>
    )
}
export default Layout;