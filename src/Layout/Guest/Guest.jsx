import React from 'react'
import GuestNav from '../../Pages/Shared/GuestNav/GuestNav'
import { Outlet } from 'react-router-dom'
import Footer from '../../Pages/Shared/Footer/Footer'

const Guest = () => {
    return (
        <>
            <GuestNav></GuestNav>
            <Outlet></Outlet>
            <Footer ></Footer>
        </>
    )
}

export default Guest