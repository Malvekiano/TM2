export default function CheckoutPage() {
    return (
      <main className="min-h-screen p-6 max-w-2xl mx-auto bg-white text-black">
        <h1 className="text-2xl font-bold text-center mb-6 text-yellow-500">Checkout - Promoción 2x1</h1>
  
        <section className="bg-gray-100 rounded-2xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-2 text-black">Resumen del pedido</h2>
          <ul className="mb-4">
            <li className="mb-2 flex justify-between">
              <span>Apoteosis (eBook)</span>
              
            </li>
            <li className="mb-2 flex justify-between">
              <span>Voces Ancestrales (eBook)</span>
              
            </li>
            <li className="border-t border-gray-300 pt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>$50.00</span>
            </li>
          </ul>
        </section>
  
        <section className="bg-gray-100 rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-black">Datos del comprador</h2>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Nombre completo"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
  
            <button
              type="button"
              className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-xl shadow"
            >
              Pagar con tarjeta (pasarela en integración)
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Actualmente estamos integrando la pasarela de pagos. Una vez habilitada, el pago podrá realizarse directamente desde esta página.
          </p>
        </section>
      </main>
    );
  }
  