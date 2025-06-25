'use client';

interface AboutMeProps {
    imageUrl: string;
    title: string;
    description: string;
}

export default function AboutMeItems ({imageUrl, title, description} : AboutMeProps) {
    return(
        <div>
            <div className="flex justify-center mb-10">
            <h1 className="text-white text-3xl md:text-5xl font-medium">Sobre mi</h1>

            </div>
        <div className='p-5 rounded-2xl mb-5 hover:bg-gray-900 hover:shadow-2xl transition-all duration-300'>
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <div className="flex-shrink-0 border-gray-800 rounded-2xl mx-auto md:mx-0">
                    <img className="w-50 h-50 md:w-100 md:h-100 border-2 rounded-2xl" src={imageUrl} alt={title} /> 
                </div>
                <div className="flex flex-col justify-center mt-6 md:mt-0">
                <h3 className='text-white text-2xl md:text-3xl font-medium text-center md:text-left'>{title}</h3>
                <p className='text-gray-600 font-medium text-lg md:text-xl text-center md:text-left mt-3'>{description}</p>
                </div>
            </div>
        </div>

        </div>
    );
}