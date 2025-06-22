import React from 'react';

function Proyectos() {
    return (
        <div>
            <div className="flex justify-center mb-10">
                <h2 className='text-white text-5xl font-medium'>Proyectos</h2>
            </div>
        <div className='p-5 rounded-2xl mb-5 hover:bg-gray-900 hover:shadow-2xl'>
            <div className="flex justify-center gap-10">
                <div className="w-125 h-50 border-1 border-gray-800 rounded-2xl">
                    <img src="" alt="" />
                </div>
            <div className="flex flex-col">
                <h1 className='text-white text-2xl font-medium '>Titulo</h1>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vero sapiente recusandae, sed, ea beatae quibusdam praesentium tempora ut voluptatibus deleniti aspernatur hic, illo id doloribus temporibus numquam tenetur quas?</p>
                <div className='flex justify-start mt-auto '>
                    <div className='py-1 px-5 rounded-lg mr-5 border-1 border-gray-600'>
                        <span className='text-white'>Flutter</span>
                    </div>
                    <div className='py-1 px-5 rounded-lg mr-5 border-1 border-gray-600'>
                        <span className='text-white'>Flutter</span>
                    </div>
                    <div className='py-1 px-5 rounded-lg mr-5 border-1 border-gray-600'>
                        <span className='text-white'>Flutter</span>
                    </div>
                    <div className='py-1 px-5 rounded-lg mr-5 border-1 border-gray-600'>
                        <span className='text-white'>Flutter</span>
                    </div>
                </div>
            </div>
       </div>

            </div>
        </div>
    );
}

export default Proyectos;