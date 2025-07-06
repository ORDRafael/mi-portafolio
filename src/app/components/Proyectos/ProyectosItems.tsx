'use client';

import { IconBrandGithub } from "@tabler/icons-react";

interface ProyectoProps {
    imagenUrl: string; 
    title: string;
    description: string;
    tags: string[];
    gitHubUrl?: string;
}

const ProyectoItems = ({imagenUrl, title, description, tags, gitHubUrl} : ProyectoProps) => {
    return(
        <div onClick={gitHubUrl ? () => window.open(gitHubUrl, '_blank') : undefined} data-aos="fade-up" className={`block rounded-2xl mb-5 hover:bg-gray-900 hover:shadow-2xl transition-all duration-300 ${gitHubUrl ? 'cursor-pointer' : ''}`}> 
                <div className="flex flex-col md:flex-row justify-start gap-4 md:gap-10 p-5 rounded-2xl overflow-hidden bg-transparent">
                    <div className="flex-shrink-0 w-full md:w-100 aspect-[4/3] border-1 border-gray-800 rounded-2xl overflow-hidden">
                        <img src={imagenUrl} alt={title} className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"/>
                    </div>
                    <div className="flex flex-col mt-4 md:mt-0">
                    <h3 className='text-white text-xl md:text-2xl font-medium '>{title}</h3>
                    <p className='text-[#8296BD] text-sm md:text-base'>{description}</p>
                        <div className='flex flex-wrap justify-start mt-4 gap-2 md:gap-0 md:mt-auto '>
                            {tags.map((tag, index) => (
                                <div key={index} className='py-1 px-3 md:px-5 rounded-lg mr-0 md:mr-5 mb-2 md:mb-0 border-1 border-gray-600'>
                                    <span className='text-white text-xs md:text-sm'>{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {gitHubUrl && (
                    <div className="flex items-center justify-center md:justify-end md:items-end">
                        <button 
                        onClick={() => window.open(gitHubUrl, '_blank')}
                        className='w-10 h-10 p-2 rounded-2xl cursor-pointer bg-zinc-200 font-medium transition duration-300 hover:bg-[#141C27] hover:text-white md: justify-end'>
                            <IconBrandGithub/>
                        </button>
                    </div>
                    )}
                </div>
    </div>

    );
}

export default ProyectoItems;