import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
