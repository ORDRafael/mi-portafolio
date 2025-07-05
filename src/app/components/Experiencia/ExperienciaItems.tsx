'use client';

interface ExperienciaProps{
    timeline: string;
    title: string;
    subtitle?: string;
    description: string;
}

export default function ExperienciaItems ({timeline, title, subtitle, description} : ExperienciaProps) {
    return(
        <div data-aos="fade-up" className='p-3 md:p-5 rounded-2xl mb-5 hover:bg-gray-900 hover:shadow-2xl transition-all duration-300'>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                <div className="flex-shrink-0 border-gray-800 rounded-2xl">
                    <h2 className="text-white text-lg md:text-xl font-medium">{timeline}</h2>
                </div>
                <div className="flex flex-col">
                    <h3 className='text-white text-xl md:text-3xl font-medium'>{title}</h3>
                    <p className='text-[#8296BD] font-medium text-base md:text-lg mt-2'>{description}</p>
                </div>
            </div>
        </div>
    );
}