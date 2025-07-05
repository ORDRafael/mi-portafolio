import { useState } from 'react';
import { ContactFormData, ContactFormProps } from './types';

export default function ContactForm({ onSubmit }: ContactFormProps) {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        
        try {
            await onSubmit(formData);
            setSubmissionSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setError(null);
        } catch (error) {
            setError('Error al enviar el mensaje');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <h3 className='text-white text-2xl font-medium'>Nombre</h3>
            <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete='off'
                placeholder="Ingresa tu nombre" 
                className='p-2 rounded-2xl border-1 font-bold text-[#8296BD] border-gray-800'
                required
            />
            <h3 className='text-white text-2xl font-medium'>Email</h3>
            <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete='off'
                placeholder="Ingresa tu email" 
                className='p-2 rounded-2xl border-1 font-bold text-[#8296BD] border-gray-800'
                required
            />
            <h3 className='text-white text-2xl font-medium'>Mensaje</h3>
            <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                autoComplete='off'
                placeholder="Ingresa tu mensaje" 
                className='p-2 rounded-2xl border-1 font-bold text-[#8296BD] border-gray-800'
                required
            ></textarea>

            {error && (
                <p className="text-red-500 text-center mt-2">{error}</p>
            )}
            <button 
                type="submit" 
                disabled={isSubmitting}
                className='p-2 rounded-2xl border-1 font-bold text-[#8296BD] border-gray-800 hover:bg-gray-800 hover:shadow-2xl transition-all duration-300'
            >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
            {submissionSuccess && (
                <p className='text-green-400 text-center'>¡Mensaje enviado exitosamente!</p>
            )}
        </form>
    );
}