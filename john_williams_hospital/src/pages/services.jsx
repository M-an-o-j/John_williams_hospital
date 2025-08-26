import React from 'react'
import pharmacy from '../assets/images/pharmacy.png'
import checkup from '../assets/images/checkup.png'
import professional from '../assets/images/professional.png'
import whatsapp from '../assets/images/whatsapp.png'
import clinic from '../assets/images/mayo_clinic.png'

const Services = () => {
    const service_card = [
        {
            'id': 1,
            'image': pharmacy,
            'title': '24 Hour Pharmacy',
            'description': 'Our round-the-clock pharmacy ensures you have access to essential medications anytime. Staffed with licensed pharmacists who provide expert consultation and medication management services.'
        },
        {
            'id': 2,
            'image': checkup,
            'title': 'General Checkup',
            'description': 'Comprehensive health screenings and preventive care services. Our experienced physicians conduct thorough examinations to detect early signs of health issues and maintain your overall wellness.'
        },
        {
            'id': 3,
            'image': professional,
            'title': 'Professional Doctors',
            'description': 'Our team of board-certified specialists and experienced physicians are dedicated to providing exceptional medical care with personalized treatment plans tailored to your specific health needs.'
        }
    ]

    return (
        <div className='w-full'>
            <div className='flex flex-col px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32'>
                {/* Header Section */}
                <div className='flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6 lg:gap-10 lg:justify-between mb-8 sm:mb-12 lg:mb-16 xl:mb-24'>
                    <div className='flex-shrink-0'>
                        <h1 className='font-sora font-semibold text-2xl sm:text-3xl lg:text-[32px] text-center lg:text-left'>
                            List of Services
                        </h1>
                    </div>
                    <div className='font-sora text-slate-500 text-sm sm:text-base lg:max-w-[565px] text-center lg:text-left'>
                        <p>
                            We offer a complete spectrum of healthcare services delivered by experienced medical professionals committed to your health and well-being.
                        </p>
                    </div>
                </div>

                {/* Services Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-8'>
                    {service_card.map((card) => (
                        <div
                            key={card.id}
                            className='flex flex-col justify-start items-start gap-4 sm:gap-6 w-full max-w-[400px] mx-auto xl:max-w-none xl:w-full min-h-[320px] sm:min-h-[361px] bg-slate-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:bg-slate-50 transition-all duration-300'
                        >
                            <img
                                className='h-12 sm:h-16 w-auto object-contain'
                                src={card.image}
                                alt={card.title}
                            />
                            <h1 className='font-sora font-semibold text-xl sm:text-[24px] leading-tight'>
                                {card.title}
                            </h1>
                            <p className='font-sora text-slate-500 text-sm sm:text-[16px] leading-relaxed flex-grow'>
                                {card.description}
                            </p>
                            <button className='px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] font-semibold text-white w-full text-sm sm:text-base flex flex-row items-center justify-around'>
                                <div className=''>
                                    <img
                                        className='h-6 w-auto object-contain'
                                        src={whatsapp}
                                        alt='whatsapp'
                                    />
                                </div>
                                <div className='px-14'>
                                    <p className='font-semibold font-sora text-[18px] sm:text-base'>Reservation</p>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-around items-center lg:items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32'>
                <div>
                    <img src={clinic} alt="" />
                </div>
                <div className='w-[300px] md:w-[430px] lg:w-[485px] font-sora'>
                    <h2 className='font-semibold text-[24px] md:text-[28px] lg:text-[32px]'>The best service from the most experienced medical experts</h2>
                    <p className='text-slate-500 mt-4 text-[14px] md:text-[16px] lg:text-[16px]'>Trust our skilled healthcare team to deliver comprehensive medical care with proven expertise, cutting-edge treatments, and compassionate service excellence.</p>
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
            </div>
        </div>
    )
}

export default Services