export default function DescargaEbook() {
    return (
      <main className="p-6 max-w-2xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Descarga tus eBooks</h1>
        <p className="mb-8 text-white-700 text-sm md:text-base">
          Gracias por tu compra. Los libros fueron enviados a tu correo de compra. 
          A continuación también puedes descargar los libros en formato PDF.
        </p>
  
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="/Apoteosis.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow-md w-full md:w-auto text-sm md:text-base text-center"
          >
            Descargar Apoteosis
          </a>
  
          <a
            href="/Voces%20Ancestrales.pdf"
            download
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow-md w-full md:w-auto text-sm md:text-base text-center"
          >
            Descargar Voces Ancestrales
          </a>
        </div>
      </main>
    );
  }
  