'use client';

import Form from './Form';
import { ContactFormData } from './types';

const handleSubmitToFormspree = async (data: ContactFormData) => {
    const response = await fetch('https://formspree.io/f/mdkzvzvb', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Error al enviar el formulario');
    }
    return response;
};

export default function Contact() {
    return (
        <div className="mt-20 mb-30">
            <div className="pt-15">
                <h2 data-aos="fade-right" className='text-white text-5xl font-medium'>Contacto</h2>
            </div>

            <div data-aos="fade-up" className='p-5 rounded-2xl mt-15 shadow-2xl border-1 border-gray-800 hover:bg-gray-900 hover:shadow-2xl transition-all duration-300 md:mx-50'>
                <Form onSubmit={handleSubmitToFormspree} />
            </div>
        </div>
    );
}