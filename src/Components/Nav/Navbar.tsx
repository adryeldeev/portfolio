import { FaBars, FaBriefcase, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-sm text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          Adryel <span className="text-blue-400">Martins</span>
        </h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#sobre" className="hover:text-blue-400 transition-colors duration-200">Sobre</a></li>
          <li><a href="#projetos" className="hover:text-blue-400 transition-colors duration-200">Projetos de Sucesso</a></li>
          <li><a href="#contato" className="hover:text-blue-400 transition-colors duration-200">Contato</a></li>
        </ul>

        {/* Botão Desktop */}
        <a
          href="https://api.whatsapp.com/send?phone=5585984166186&text=Olá, gostaria de contratar seu serviço."
          className="hidden md:flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-md"
        >
          <FaBriefcase className="mr-2" />
          Contrate agora
        </a>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-white focus:outline-none">
            {menuAberto ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuAberto && (
        <div className="md:hidden mt-4 px-4">
          <ul className="flex flex-col gap-4">
            <li><a href="#sobre" className="hover:text-blue-400 transition-colors duration-200">Sobre</a></li>
            <li><a href="#projetos" className="hover:text-blue-400 transition-colors duration-200">Projetos de Sucesso</a></li>
            <li><a href="#contato" className="hover:text-blue-400 transition-colors duration-200">Contato</a></li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5585984166186&text=Olá, gostaria de contratar seu serviço."
                className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-md"
              >
                <FaBriefcase className="mr-2" />
                Contrate agora
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
