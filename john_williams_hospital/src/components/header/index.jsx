import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import sethescope_icon from '../../assets/images/pasient.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menus = [
        {
            "id": 1,
            "name": "Home",
            "link": "/"
        },
        {
            "id": 2,
            "name": "Doctors",
            "link": "/doctors"
        },
        {
            "id": 3,
            "name": "Services",
            "link": "/services"
        },
        {
            "id": 4,
            "name": "Contacts",
            "link": "/contacts"
        }
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className='w-full p-4 lg:p-5'>
            {/* Desktop Header */}
            <div className='hidden lg:flex flex-row justify-center items-center gap-[60px] xl:gap-[100px]'>
                <h1 className="bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] bg-clip-text text-transparent font-semibold text-[28px] xl:text-[32px] font-sora">
                    JW Hospital
                </h1>
                <nav className='flex flex-row gap-[80px] xl:gap-[140px] text-[16px] text-slate-400 font-sora'>
                    {menus.map((menu) => {
                        return (
                            <Link
                                key={menu.id}
                                to={menu.link}
                                className="hover:text-[#3A8EF6] transition-colors duration-200"
                            >
                                {menu.name}
                            </Link>
                        )
                    })}
                </nav>
                <button className='px-[20px] py-[10px] rounded-full bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] font-semibold text-white text-[18px] font-sora hover:shadow-lg transition-shadow duration-200'>
                    Appointment
                </button>
            </div>

            {/* Mobile Header */}
            <div className='lg:hidden'>
                <div className='flex justify-between items-center'>
                    <h1 className="bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] bg-clip-text text-transparent font-semibold text-[20px] sm:text-[24px] font-sora">
                        JW Hospital
                    </h1>

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
                        aria-label="Toggle menu"
                    >
                        <div className={`w-6 h-0.5 bg-slate-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-slate-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-slate-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`mt-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <nav className='flex flex-col space-y-4 pb-4'>
                        {menus.map((menu) => {
                            return (
                                <Link
                                    key={menu.id}
                                    to={menu.link}
                                    className="text-slate-400 font-sora text-[16px] hover:text-[#3A8EF6] transition-colors duration-200 py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {menu.name}
                                </Link>
                            )
                        })}
                        <button className='mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] font-semibold text-white text-[16px] font-sora self-start'>
                            Appointment
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header