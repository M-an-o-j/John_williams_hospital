import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-slate-900 text-white mt-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
                    {/* Hospital Info */}
                    <div className='lg:col-span-2'>
                        <h1 className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] bg-clip-text text-transparent mb-4'>
                            JW Hospital
                        </h1>
                        <div className='space-y-3 text-slate-300'>
                            <p className='text-sm sm:text-base leading-relaxed'>
                                1250 Medical Center Drive, Nashville, TN 37203
                            </p>
                            <p className='text-sm sm:text-base'>
                                <span className='font-semibold text-white'>For Appointments:</span><br />
                                (615) 555-0123, (615) 555-0124
                            </p>
                            <p className='text-sm sm:text-base'>
                                <span className='font-semibold text-white'>Email:</span><br />
                                <a href="mailto:info@jwhospital.com" className='text-[#3A8EF6] hover:text-[#6F3AFA] transition-colors duration-200'>
                                    info@jwhospital.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className='text-lg sm:text-xl font-semibold mb-4'>Quick Links</h3>
                        <ul className='space-y-2 text-slate-300'>
                            <li>
                                <a href="/" className='hover:text-white transition-colors duration-200 text-sm sm:text-base'>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/doctors" className='hover:text-white transition-colors duration-200 text-sm sm:text-base'>
                                    Doctors
                                </a>
                            </li>
                            <li>
                                <a href="/services" className='hover:text-white transition-colors duration-200 text-sm sm:text-base'>
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/contacts" className='hover:text-white transition-colors duration-200 text-sm sm:text-base'>
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className='text-lg sm:text-xl font-semibold mb-4'>Our Services</h3>
                        <ul className='space-y-2 text-slate-300'>
                            <li className='text-sm sm:text-base'>24 Hour Pharmacy</li>
                            <li className='text-sm sm:text-base'>General Checkup</li>
                            <li className='text-sm sm:text-base'>Professional Doctors</li>
                            <li className='text-sm sm:text-base'>Emergency Care</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className='border-t border-slate-700 mt-8 sm:mt-12 pt-6 sm:pt-8'>
                    <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                        <p className='text-slate-400 text-xs sm:text-sm text-center sm:text-left'>
                            © 2024 JW Hospital. All rights reserved.
                        </p>
                        <div className='flex space-x-4 sm:space-x-6'>
                            <a href="#" className='text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm'>
                                Privacy Policy
                            </a>
                            <a href="#" className='text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm'>
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer