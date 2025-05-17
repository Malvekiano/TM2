'use client';

import { useState, FormEvent } from 'react';

// Define la interfaz para los datos del formulario
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Define la interfaz para el estado de envío
type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const FORM_ENDPOINT = 'https://formspree.io/f/xanovvdk'; // <-- 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Por favor, completa los campos obligatorios: Nombre, Email y Mensaje.');
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Limpiar formulario
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Hubo un problema de red. Inténtalo de nuevo.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto p-6 sm:p-8 bg-neutral-900 rounded-xl shadow-2xl border border-neutral-700">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-amber-400 uppercase tracking-wider"
            style={{ fontFamily: "'Impact', 'Haettenschweiler', 'Arial Narrow Bold', sans-serif" }} // Fuente similar a "PROMO"
        >
          Consultanos cualquier duda
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">
              Nombre Completo <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-3 transition-colors duration-200"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
              Correo Electrónico <span className="text-amber-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-3 transition-colors duration-200"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-1">
              Asunto
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-3 transition-colors duration-200"
              placeholder="Asunto de tu consulta"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">
              Mensaje <span className="text-amber-400">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-3 transition-colors duration-200"
              placeholder="Escribe tu consulta aquí..."
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-bold text-black bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 uppercase tracking-wider"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar Consulta'}
            </button>
          </div>

          {status === 'success' && (
            <p className="mt-4 text-center text-green-400 bg-green-900/50 p-3 rounded-md">
              ¡Mensaje enviado con éxito! Te contactaremos pronto.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-center text-red-400 bg-red-900/50 p-3 rounded-md">
              {errorMessage || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}