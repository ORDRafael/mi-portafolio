import React, { useEffect, useState } from 'react';
import { IconBrandFlutter } from '@tabler/icons-react';
import { IconBrandJavascript } from '@tabler/icons-react';
import { IconBrandTailwind } from '@tabler/icons-react';
import { IconBrandReact } from '@tabler/icons-react';
import { IconBrandPhp } from '@tabler/icons-react';
import { IconSql } from '@tabler/icons-react';
import './typewriter.css';

function Inicio() {
    const [showIcons, setShowIcons] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => setShowIcons(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
        if(currentIndex <= text.length) {
            setText(text.slice(0, currentIndex));
            currentIndex++;
        } else {
            clearInterval(interval);
        }
    }, 100);
    return () => clearInterval(interval);
    }, []);

    const icons = [
        IconBrandFlutter,
        IconBrandJavascript,
        IconBrandReact,
        IconBrandTailwind,
        IconBrandPhp,
        IconSql,
    ];

    return (
        <div>
            {/* Sección principal */}
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='max-w-md mx-4 md:mx-0'>
                    <div className="typewriter">
                        <h1 className='text-4xl text-center md:text-left md:text-6xl font-bold text-zinc-200'>Rafael Ordaz</h1>
                    </div>

                    <div className="typewriter">

                    <h3 className='text-2xl md:text-4xl font-medium text-zinc-100 my-5'>Front end developer</h3>
                    </div>
                    <p className='text-lg md:text-xl text-[#8296BD]'>
                    Como ingeniero de sistemas, mi pasión reside en la tecnología y en el desarrollo de aplicaciones móviles y web. Me impulsa especialmente la búsqueda de soluciones eficientes para una variedad de problemas, utilizando diversos lenguajes de programación.
                    </p>

                    <button 
                        onClick={() => window.open('/assets/cv.pdf', '_blank')}
                        className='flex items-center justify-center md:w-1/2 p-5 mt-6 mx-auto md:mx-0 rounded-2xl cursor-pointer bg-zinc-200 font-medium transition duration-300 hover:bg-[#141C27] hover:text-white'
                    >
                        <span className='font-bold'>Download CV</span>
                    </button>
                </div>
                <div data-aos="fade-left" data-aos-mirror="true" className='w-full md:w-3/8 h-64 md:h-90 bg-slate-900 rounded-2xl mt-6 md:mt-0 overflow-hidden md:border-3 md:border-gray-700 md:hover:border-gray-600 transition-all duration-300'>
                    <img src="/assets/mifoto.jpg" alt="" className="w-full h-full object-cover rounded-2xl hover:scale-110 transition-all duration-300"/>
                </div>
            </div>

            {/* Contenedor de iconos con fade-in y líneas animadas */}
            <div className='mx-4 sm:mx-10 md:mx-20 lg:mx-60 mt-10 md:mt-20 flex flex-wrap justify-center md:justify-between'>
                {icons.map((Icon, idx) => (
                    <React.Fragment key={idx}>
                        {/* Icono con animación */}
                        <div
                            className={`transition-all duration-700 ease-out transform ${
                                showIcons
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                            } m-2 md:m-0`}
                            style={{ transitionDelay: `${idx * 120}ms` }}
                        >
                            <Icon
                                size={42}
                                color='#ffffff'
                                className='transition-transform duration-300 hover:scale-150'
                            />
                        </div>

                        {/* Línea vertical con animación */}
                        {idx < icons.length - 1 && (
                            <div
                                className={`hidden md:block h-10 w-px bg-slate-700 transition-opacity duration-700 ${
                                    showIcons
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                }`}
                                style={{ transitionDelay: `${idx * 120 + 60}ms` }}
                            ></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Inicio;