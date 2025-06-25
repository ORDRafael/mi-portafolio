import React from 'react';

function Header() {
    return(
        <header className='block mt-2 rounded-2xl shadow-sm bg-[#141C27] text-white text-center p-1 justify-center transition-all duration-200 md:inline-block md:mt-2 md:rounded-2xl md:shadow-2xl md:hover:scale-x-105 md:p-3'>
            <nav className="flex flex-row flex-wrap justify-center gap-x-1 gap-y-1 md:gap-x-4 md:gap-y-0">
                <a href='#inicio' className='px-1 py-0.5 rounded-lg text-xs transition-all duration-300 hover:bg-[#393E46] md:px-2 md:py-1 md:rounded-2xl md:text-base'>Inicio</a>
                <a href='#proyectos' className='px-1 py-0.5 rounded-lg text-xs transition-all duration-300 hover:bg-[#393E46] md:px-2 md:py-1 md:rounded-2xl md:text-base'>Proyectos</a>
                <a href='#experiencia' className='px-1 py-0.5 rounded-lg text-xs transition-all duration-300 hover:bg-[#393E46] md:px-2 md:py-1 md:rounded-2xl md:text-base'>Experiencia</a>
                <a href='#sobre-mi' className='px-1 py-0.5 rounded-lg text-xs transition-all duration-300 hover:bg-[#393E46] md:px-2 md:py-1 md:rounded-2xl md:text-base'>Sobre mi</a>
                <a href='#contacto' className='px-1 py-0.5 rounded-lg text-xs transition-all duration-300 hover:bg-[#393E46] md:px-2 md:py-1 md:rounded-2xl md:text-base'>Contacto</a>
            </nav>
        </header>
    );
}

export default Header;