import React from 'react';
import { FaBriefcase } from 'react-icons/fa'; // Importa o ícone de maleta

export default function Navbar() {
  return (
    // O container principal mantém o fundo espelhado e ocupa a largura total
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-sm text-white py-4 px-6">
      {/* Este div interno limita a largura do conteúdo a 1200px (aproximadamente) e o centraliza */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Nome/Logo à esquerda */}
        <h1 className="text-xl font-bold">
          Adryel <span className="text-blue-400">Martins</span> {/* "Brito" em azul */}
        </h1>

        {/* Links de navegação no centro */}
        {/* Você pode querer centralizar esses links, mas a imagem mostra eles mais para a esquerda do que para o centro absoluto */}
        <ul className="flex gap-6">
          <li><a href="#sobre" className="hover:text-blue-400 transition-colors duration-200">Sobre</a></li>
          <li><a href="#projetos" className="hover:text-blue-400 transition-colors duration-200">Projetos de Sucesso</a></li> {/* Texto atualizado */}
          <li><a href="#contato" className="hover:text-blue-400 transition-colors duration-200">Contato</a></li>
        </ul>

        {/* Botão "Contrate agora" à direita */}
        <a
          href="https://api.whatsapp.com/send?phone=5585984166186&text=Olá, gostaria de contratar seu serviço." // Mude este href para onde você quer que o botão leve (ex: sua seção de contato ou um formulário específico)
          className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-md"
        >
          <FaBriefcase className="mr-2" /> {/* Ícone de maleta */}
          Contrate agora
        </a>
      </div>
    </nav>
  )
}