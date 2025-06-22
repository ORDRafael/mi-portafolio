'use client';

interface ProyectoProps {
    imagenUrl: string;
    title: string;
    description: string;
    tags: string[];
}

const ProyectoItems = ({imagenUrl, title, description, tags} : ProyectoProps) => {
    return(
    <div className='p-5 rounded-2xl mb-5 hover:bg-gray-900 hover:shadow-2xl transition-all duration-300'>
                <div className="flex justify-start gap-10">
                    <div className="flex-shrink-0 w-100 h-50 border-1 border-gray-800 rounded-2xl">
                        <img src={imagenUrl} alt={title} />
                    </div>
                    <div className="flex flex-col">
                    <h3 className='text-white text-2xl font-medium '>{title}</h3>
                    <p className='text-gray-600'>{description}</p>
                        <div className='flex justify-start mt-auto '>
                            {tags.map((tag, index) => (
                                <div className='py-1 px-5 rounded-lg mr-5 border-1 border-gray-600'>
                                    <span className='text-white'>{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default ProyectoItems;