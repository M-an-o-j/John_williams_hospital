import React from 'react'

const Booking = () => {
    return (
        <div className='w-full max-w-[1110px] min-h-[280px] sm:min-h-[320px] lg:h-[329px] mt-6 sm:mt-8 lg:mt-10 mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] mx-auto rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-0' >
            <div className='h-full flex flex-col items-center justify-center font-sora text-white py-8 sm:py-10 lg:py-0'>
                {/* Title */}
                <h1 className='text-center font-semibold text-2xl sm:text-3xl lg:text-[32px] leading-tight'>
                    Book our services now
                </h1>
                
                {/* Description */}
                <p className='text-sm sm:text-base lg:text-[16px] w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[676px] text-center mt-3 sm:mt-4 leading-relaxed px-2'>
                    A hospital is an integral part of a social and health organization with the function of providing comprehensive services.
                </p>
                
                {/* Buttons */}
                <div className='flex flex-col sm:flex-row w-full max-w-[900px] justify-center sm:justify-around items-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-10 py-5 sm:py-6 mt-2 sm:mt-4'>
                    <button className='w-full sm:w-auto text-sm sm:text-base lg:text-[18px] font-sora font-semibold border-2 border-white px-4 sm:px-5 py-3 sm:py-4 lg:p-5 rounded-full hover:bg-white hover:text-[#3A8EF6] transition-all duration-300 whitespace-nowrap'>
                        Check the Doctor's Schedule
                    </button>
                    <button className='w-full sm:w-auto bg-white text-sm sm:text-base lg:text-[18px] font-sora font-semibold border-2 border-white px-4 sm:px-5 py-3 sm:py-4 lg:p-5 rounded-full hover:shadow-lg transition-all duration-300'>
                        <h1 className='bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] bg-clip-text text-transparent'>
                            Reservation
                        </h1>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Booking