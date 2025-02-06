export default function Nav() {
  //#0e15a3
  return (
    <nav className="bg-[#0e15a3] text-white shadow-md sticky top-0 z-50 flex">
      <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
        <img width={200} src="../../public/MCC.png" alt="Logo" />
        <ul className="flex gap-6 text-lg h-full">
          <li className="cursor-pointer transition-all duration-300 hover:bg-[#121ac7] h-full flex justify-center items-center">
            <a className="px-2" href="#home">
              Inicio
            </a>
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:bg-[#121ac7] h-full flex justify-center items-center">
            <a className="px-2" href="#aboutus">
              Sobre Nosotros
            </a>
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:bg-[#121ac7] h-full flex justify-center items-center">
            <a className="px-2" href="#contactus">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
