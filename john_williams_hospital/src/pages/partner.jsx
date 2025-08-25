import React from 'react'
import karmen from '../assets/images/karmen.png'
import siloam from '../assets/images/siloam.png'
import jude from '../assets/images/jude.png'
import mayapada from '../assets/images/mayapada.png'
import ciputra from '../assets/images/ciputra.png'

const Partner = () => {
    const partners_image = [
        { id: 1, src: karmen, alt: 'Karmen' },
        { id: 2, src: siloam, alt: 'Siloam' },
        { id: 3, src: jude, alt: 'Jude' },
        { id: 4, src: mayapada, alt: 'Mayapada' },
        { id: 5, src: ciputra, alt: 'Ciputra' }
    ]

    // Duplicate the array for seamless infinite scroll
    const duplicatedPartners = [...partners_image, ...partners_image]

    return (
        <div className='min-h-[200px] sm:min-h-[220px] md:min-h-[250px] lg:h-[260px] bg-[#E2EDFF]'>
            <div className='px-4 sm:px-6 lg:px-11 py-12 sm:py-10 lg:py-14'>
                <div className='flex justify-center items-center font-sora text-xl sm:text-2xl lg:text-[32px] font-semibold text-blue-950 pb-4 sm:pb-6 lg:pb-6'>
                    <h1>Partner & Friend</h1>
                </div>
                
                {/* Desktop View - Static Grid */}
                <div className='hidden lg:flex justify-center items-center gap-12 xl:gap-20'>
                    {partners_image.map((partner) => (
                        <img 
                            key={partner.id}
                            src={partner.src} 
                            alt={partner.alt}
                            className='h-12 xl:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300'
                        />
                    ))}
                </div>

                {/* Mobile/Tablet View - Auto Scrolling */}
                <div className='lg:hidden overflow-hidden relative'>
                    <div className='flex animate-scroll gap-8 sm:gap-12'>
                        {duplicatedPartners.map((partner, index) => (
                            <img 
                                key={`${partner.id}-${index}`}
                                src={partner.src} 
                                alt={partner.alt}
                                className='h-8 sm:h-10 md:h-12 w-auto object-contain flex-shrink-0 opacity-70'
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 15s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    )
}

export default Partner