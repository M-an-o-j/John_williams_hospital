import React from 'react'
import client from '../assets/images/client.png'

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Dr. Priya Natarajan",
            role: "Cardiologist",
            image: client,
            comment: "The hospital's advanced cardiac unit and attentive staff saved my patient's life. Truly grateful for the professional care provided here."
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "Nurse Practitioner",
            image: client,
            comment: "As a visiting nurse, I've seen how organized and patient-friendly this hospital is. The teamwork here is commendable."
        },
        {
            id: 3,
            name: "Mohammed Ali",
            role: "Business Analyst",
            image: client,
            comment: "From admission to discharge, everything was smooth. The doctors explained everything clearly, and the support staff were very kind."
        },
        {
            id: 4,
            name: "Emily Carter",
            role: "Medical Student",
            image: client,
            comment: "I did my internship here and learned so much. The hospital not only cares for patients but also nurtures the next generation of doctors."
        }
    ]

    return (
        <div className='mt-12 sm:mt-16 lg:mt-20 xl:mt-32 py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8'>
            {/* Header Section */}
            <div className='flex justify-center items-center flex-col font-sora max-w-4xl mx-auto'>
                <h1 className='font-sora font-semibold text-2xl sm:text-3xl lg:text-[32px] text-center'>
                    Testimonials by Patients
                </h1>
                <p className='text-slate-500 mt-3 sm:mt-4 text-sm sm:text-base lg:text-[16px] text-center max-w-2xl leading-relaxed'>
                    Hear from our patients who have experienced exceptional care at JW Hospital. Their stories reflect our commitment to providing quality healthcare and compassionate service.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 justify-items-center mt-8 sm:mt-10 lg:mt-12 max-w-7xl mx-auto'>
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className='flex flex-col font-sora w-full max-w-[535px] bg-slate-100 p-5 sm:p-6 lg:p-8 rounded-2xl hover:shadow-lg hover:bg-slate-50 transition-all duration-300'
                    >
                        {/* Comment */}
                        <p className='text-slate-500 text-sm sm:text-base lg:text-[16px] italic font-sora leading-relaxed flex-grow'>
                            "{testimonial.comment}"
                        </p>

                        {/* Author Info */}
                        <div className='flex flex-row justify-start w-full gap-4 sm:gap-5 items-center mt-6 sm:mt-8 pt-4 border-t border-slate-200'>
                            <div className='flex-shrink-0'>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover'
                                />
                            </div>
                            <div className='flex-grow min-w-0'>
                                <h1 className='font-semibold text-blue-500 text-lg sm:text-xl lg:text-[20px] truncate'>
                                    {testimonial.name}
                                </h1>
                                <p className='text-slate-500 text-sm sm:text-base lg:text-[16px] mt-1 truncate'>
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials