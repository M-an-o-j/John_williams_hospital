import React from 'react'
import doctor_img from '../assets/images/doctor.svg'

const Home = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-20 xl:gap-32 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
            {/* Text Content */}
            <div className='w-full max-w-[655px] lg:w-[655px] text-center lg:text-left'>
                <div className='bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] bg-clip-text text-transparent'>
                    <h1 className='text-3xl sm:text-3xl md:text-6xl lg:text-4xl xl:text-[40px] font-bold leading-tight'>
                        Welcome to
                    </h1>
                    <h1 className='text-3xl sm:text-3xl md:text-6xl lg:text-4xl xl:text-[40px] font-bold leading-tight'>
                        John Williams
                    </h1>
                    <h1 className='text-3xl sm:text-3xl md:text-6xl lg:text-4xl xl:text-[40px] font-bold leading-tight'>
                        Hospital
                    </h1>
                </div>
                <div className='text-slate-500 mt-4 sm:mt-6'>
                    <p className='text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0'>
                        A hospital is an integral part of a social and health organization with the function of providing comprehensive services.
                    </p>
                </div>
                
                {/* Optional CTA Button for mobile */}
                <div className='mt-6 sm:mt-8 lg:hidden'>
                    <button className='px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] font-semibold text-white text-sm sm:text-base'>
                        Book Appointment
                    </button>
                </div>
            </div>

            {/* Doctor Image */}
            <div className='max-w-[400px] sm:max-w-[487px] lg:max-w-none lg:flex-shrink-0'>
                <img 
                    src={doctor_img} 
                    alt="Doctor illustration" 
                    className='w-full h-auto max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] mx-auto'
                />
            </div>
        </div>
    )
}

export default Home