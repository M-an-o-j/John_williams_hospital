import React from 'react'
import clinic from '../assets/images/facility.png'
import whatsapp from '../assets/images/whatsapp.png'

const Facility = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-around items-center lg:items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32'>
            <div className='w-[300px] md:w-[430px] lg:w-[485px] font-sora'>
                <h2 className='font-semibold text-[24px] md:text-[28px] lg:text-[32px]'>Luxury facilities that humanize humans</h2>
                <p className='text-slate-500 mt-4 text-[14px] md:text-[16px] lg:text-[16px]'>Experience healthcare redefined through luxury amenities and compassionate service, where advanced medical care meets comfort in an environment designed for healing.</p>
                <button className='my-4 px-6 py-2 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] font-semibold text-white text-sm sm:text-base flex flex-row items-center justify-around'>
                    <div className=''>
                        <img
                            className='h-4 w-auto object-contain'
                            src={whatsapp}
                            alt='whatsapp'
                        />
                    </div>
                    <div className='px-3'>
                        <p className='font-semibold font-sora text-[14px] sm:text-[20px]'>Reservation</p>
                    </div>
                </button>
            </div>
            <div>
                <img src={clinic} alt="" />
            </div>
        </div>
    )
}

export default Facility