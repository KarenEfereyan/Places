import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
        <GlobalStyles />
        <main>{children}</main>
        <Footer />
        </React.Fragment>
    )
}
export default Layout;