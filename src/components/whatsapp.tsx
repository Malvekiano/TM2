import React from 'react';

export default function WhatsappButton(){
    const phoneNumber = '51998650685'
    const message = 'Hola! Quisiera hacer una consulta.';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
      <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50"
    >
      <img
        src="/images/iconwhatsapp.svg"
        alt="WhatsApp"
        className="w-14 h-14 md:w-16 md:h-16 hover:scale-110 transition-transform"
      />
    </a>
    );
}