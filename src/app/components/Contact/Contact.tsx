'use client';

export default function Contact(){
    return(
        <div>
            <div>
                <h2 className='text-white text-5xl font-medium' >Contacto</h2>
            </div>

            <div className='p-5 rounded-2xl mb-5 shadow-2xl border-1 border-gray-800 hover:bg-gray-900 hover:shadow-2xl transition-all duration-300 md:mx-50'>
                <form className='flex flex-col gap-4'   >
                    <h3 className='text-white text-2xl font-medium' >Nombre</h3>
                    <input type="text" placeholder="Ingresa tu nombre" className='p-2 rounded-2xl border-1 text-white border-gray-800'/>
                    <h3 className='text-white text-2xl font-medium' >Email</h3>
                    <input type="email" placeholder="Ingresa tu email" className='p-2 rounded-2xl border-1 text-white border-gray-800'/>
                    <h3 className='text-white text-2xl font-medium' >Mensaje</h3>
                    <textarea placeholder="Ingresa tu mensaje" className='p-2 rounded-2xl border-1 text-white border-gray-800'></textarea>
                    <button type="submit" className='p-2 rounded-2xl border-1 text-white border-gray-800 hover:bg-gray-800 hover:shadow-2xl transition-all duration-300'>Enviar</button>
                </form>
            </div>
        </div>
    );
}