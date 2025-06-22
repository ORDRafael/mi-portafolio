import React from 'react';

function Header() {
    return(
        <header className='inline-block mt-2 rounded-2xl shadow-2xl bg-[#141C27] text-white text-center p-3  justify-center transition-all duration-200 hover:scale-x-105  '>
            <nav>
                <a href='#inicio' className='mx-4 px-2 py-1 rounded-2xl transition-all duration-300 hover:bg-[#393E46]'>Inicio</a>
                <a href='#proyectos' className='mx-4 px-2 py-1 rounded-2xl transition-all duration-300 hover:bg-[#393E46]'>Proyectos</a>
                <a href='#experiencia' className='mx-4 px-2 py-1 rounded-2xl transition-all duration-300 hover:bg-[#393E46]'>Experiencia</a>
                <a href='#contacto' className='mx-4 px-2 py-1 rounded-2xl transition-all duration-300 hover:bg-[#393E46]'>Contacto</a>
            </nav>
        </header>
    );
}

export default Header;