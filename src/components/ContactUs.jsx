export default function ContactUs() {
  return (
    <section
      className="h-screen flex justify-center items-center scroll-mt-10 bg-gray-100"
      id="contactus"
    >
      <form className="max-w-6xl w-3/7 mx-auto bg-white p-6 rounded-lg shadow-md text-left">
        <h3 className="text-2xl font-semibold">Contacto</h3>
        <div className="mb-4 border-t-2 pt-2">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e15a3]"
            placeholder="Tu nombre"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="asunto"
          >
            Asunto
          </label>
          <input
            type="text"
            id="asunto"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e15a3]"
            placeholder="Asunto del mensaje"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="mensaje"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e15a3] resize-none"
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#0e15a3] text-white py-2 rounded-lg hover:bg-[#0c128c] transition-all"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
