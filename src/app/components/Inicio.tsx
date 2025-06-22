import React, { useEffect, useState } from 'react';
import { IconBrandFlutter } from '@tabler/icons-react';
import { IconBrandJavascript } from '@tabler/icons-react';
import { IconBrandTailwind } from '@tabler/icons-react';
import { IconBrandReact } from '@tabler/icons-react';
import { IconBrandPhp } from '@tabler/icons-react';
import { IconSql } from '@tabler/icons-react';

function Inicio() {
    const [showIcons, setShowIcons] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowIcons(true), 100);
        return () => clearTimeout(timer);
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
            <div className='flex justify-between mx-10'>
                <div className='max-w-md'>
                    <h1 className='text-7xl font-bold text-zinc-200'>Rafael Ordaz</h1>
                    <h3 className='text-4xl font-medium text-zinc-100 my-5'>Front end developer</h3>
                    <p className='text-xl text-[#8296BD]'>
                        I am a systems engineer passionate about technology and developing mobile and web applications, as well as finding efficient solutions to various problems in different programming languages.
                    </p>

                    <button className='p-5 mt-6 rounded-2xl cursor-pointer bg-zinc-200 font-medium transition duration-300 hover:bg-[#141C27] hover:text-white'>
                        Download CV
                    </button>
                </div>
                <div className='w-3/8 h-90 bg-slate-900 rounded-2xl'>
                    <img src="" alt="" />
                </div>
            </div>

            {/* Contenedor de iconos con fade-in y líneas animadas */}
            <div className='mx-60 mt-20 flex items-center justify-between'>
                {icons.map((Icon, idx) => (
                    <React.Fragment key={idx}>
                        {/* Icono con animación */}
                        <div
                            className={`transition-all duration-700 ease-out transform ${
                                showIcons
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                            }`}
                            style={{ transitionDelay: `${idx * 120}ms` }}
                        >
                            <Icon
                                size={40}
                                color='#ffffff'
                                className='transition-transform duration-300 hover:scale-150'
                            />
                        </div>

                        {/* Línea vertical con animación */}
                        {idx < icons.length - 1 && (
                            <div
                                className={`h-10 w-px bg-slate-700 transition-opacity duration-700 ${
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