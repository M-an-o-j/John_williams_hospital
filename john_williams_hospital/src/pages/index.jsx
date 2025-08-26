import React from 'react'
import Home from './home'
import Partner from './partner'
import Services from './services'
import Facility from './facility'
import Booking from './booking'
import Testimonials from './testimonials'
import Footer from '../components/footer'

const Index = () => {
    return (
        <>
            <div className=" h-screen">
                <Home />
                <Partner />
                <Services />
                <Facility />
                <Booking />
                <Testimonials />
                <Footer />
            </div>
        </>

    )
}

export default Index