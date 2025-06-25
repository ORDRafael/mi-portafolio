'use client';

interface ProyectoProps {
    imagenUrl: string;
    title: string;
    description: string;
    tags: string[];
}

const ProyectoItems = ({imagenUrl, title, description, tags} : ProyectoProps) => {
    return(
    <div className='p-5 rounded-2xl border-1 border-gray-800 mb-5 hover:bg-gray-900 hover:shadow-2xl transition-all duration-300'>
                <div className="flex flex-col md:flex-row justify-start gap-4 md:gap-10">
                    <div className="flex-shrink-0 w-full md:w-100 h-50 border-1 border-gray-800 rounded-2xl overflow-hidden">
                        <img src={imagenUrl} alt={title} className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex flex-col mt-4 md:mt-0">
                    <h3 className='text-white text-xl md:text-2xl font-medium '>{title}</h3>
                    <p className='text-gray-600 text-sm md:text-base'>{description}</p>
                        <div className='flex flex-wrap justify-start mt-4 gap-2 md:gap-0 md:mt-auto '>
                            {tags.map((tag, index) => (
                                <div key={index} className='py-1 px-3 md:px-5 rounded-lg mr-0 md:mr-5 mb-2 md:mb-0 border-1 border-gray-600'>
                                    <span className='text-white text-xs md:text-sm'>{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
    </div>

    );
}

export default ProyectoItems;