// components/TermsBanner.js
import { useEffect, useState } from 'react';

export default function TermsBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('termsAccepted');
    if (!accepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('termsAccepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-900 text-white p-4 text-sm flex flex-col md:flex-row items-center justify-between z-50 shadow-lg">
      <p className="mb-2 md:mb-0 text-center md:text-left">
        Al continuar, aceptás nuestros{' '}
        <a href="/terminos" className="underline text-blue-300 hover:text-blue-400">
          Términos y Condiciones
        </a>.
      </p>
      <button
        onClick={handleAccept}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition mt-2 md:mt-0"
      >
        Acepto
      </button>
    </div>
  );
}
