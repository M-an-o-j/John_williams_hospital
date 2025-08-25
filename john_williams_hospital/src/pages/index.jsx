import React from 'react'
import Home from './home'
import Partner from './partner'
import Services from './services'
import Facility from './facility'
import Booking from './booking'

const Index = () => {
    return (
        <>
            <div className=" h-screen">
                <Home />
                <Partner />
                <Services />
                <Facility />
                <Booking />
            </div>
        </>

    )
}

export default Index