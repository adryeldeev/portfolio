import fourseguro from '../../assets/4slp.png'; // Certifique-se de que este caminho está correto
import lpfc from '../../assets/LPFC.png';     // Certifique-se de que este caminho está correto
import sistema from '../../assets/4sSitema.png'; // Certifique-se de que este caminho está correto

const Projetos = () => {
  return (
    <section id="projetos" className="py-24 px-6 bg-[#0D1117] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">Projetos</h2>

        {/* O grid agora será o contêiner para os cards verticais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adicionado lg:grid-cols-3 para 3 colunas em telas maiores */}

          {/* PRIMEIRO PROJETO: Card Vertical */}
          <div className="bg-[#111827] rounded-xl shadow-lg overflow-hidden border border-[#1E293B] flex flex-col"> {/* Removido md:flex-row */}
            {/* Imagem no topo do card */}
            <div className="w-full h-48 sm:h-56 md:h-64 flex items-center justify-center p-4"> {/* Altura fixa para a imagem do card */}
              <img
                src={fourseguro}
                alt="Car Dealership System"
                className="w-full h-full object-contain rounded-lg border border-[#374151]" // Ajuste sutil na borda
              />
            </div>

            {/* Texto abaixo da imagem */}
            <div className="flex-1 p-6 flex flex-col"> {/* Ajustado padding */}
              <h3 className="text-2xl font-bold text-white mb-2">4s Seguros</h3>
              <p className="text-blue-400 font-medium mb-2">React + Tawilind + Node js com express</p>
              <p className="text-gray-400 mb-4 text-sm"> {/* Texto um pouco menor para economizar espaço */}
                4s Seguros é uma empresa de corretagem de seguros que oferece soluções personalizadas para seus clientes. Está landing page foi desenvolvida para apresentar os serviços da empresa de forma clara e atraente.
              </p>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mb-6 mt-auto"> {/* mt-auto para empurrar botões para baixo */}
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-white">React</span> {/* Tags um pouco menores */}
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-white">Tawilind</span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-white">Node.js</span> {/* Exemplo de mais uma tag */}
              </div>

              {/* Botões */}
              <div className="flex gap-4">
                <a
                  href="https://www.4sseguros.com.br/"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm" // Botões um pouco menores
                >
                  View Project
                </a>
               
              </div>
            </div>
          </div>

          {/* SEGUNDO PROJETO: Card Vertical (duplicado e adaptado) */}
          <div className="bg-[#111827] rounded-xl shadow-lg overflow-hidden border border-[#1E293B] flex flex-col">
            {/* Imagem no topo do card */}
            <div className="w-full h-48 sm:h-56 md:h-64 flex items-center justify-center p-4">
              <img
                src={lpfc} 
                alt="Landing Page - FC Imóveis"
                className="w-full h-full object-contain rounded-lg border border-[#374151]"
              />
            </div>

            {/* Texto abaixo da imagem */}
            <div className="flex-1 p-6 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Landing Page - Felipe Carneiro Motors</h3>
              <p className="text-blue-400 font-medium mb-2">React + Styled Components + Node js com express</p>
              <p className="text-gray-400 mb-4 text-sm">
               A Landing Page do Felipe Carneiro Motors foi desenvolvida para apresentar seu veículos de forma clara e atraente. O design responsivo garante uma ótima experiência em dispositivos móveis e desktops.
              </p>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mb-6 mt-auto">
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-white">React</span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-white">Styled Components</span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-white">Node js</span>
              </div>

              {/* Botões */}
              <div className="flex gap-4">
                <a
                  href="https://www.felipecarneiromotors.com.br/"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm"
                >
                  View Project
                </a>
              
              
              </div>
            </div>
          </div>

          {/* TERCEIRO PROJETO: Card Vertical (duplicado e adaptado) */}
          <div className="bg-[#111827] rounded-xl shadow-lg overflow-hidden border border-[#1E293B] flex flex-col">
            {/* Imagem no topo do card */}
            <div className="w-full h-48 sm:h-56 md:h-64 flex items-center justify-center p-4">
              <img
                src={sistema} 
                alt="Management System - 4S Seguros"
                className="w-full h-full object-contain rounded-lg border border-[#374151]"
              />
            </div>

            {/* Texto abaixo da imagem */}
            <div className="flex-1 p-6 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Sistema - 4S Seguros</h3>
              <p className="text-blue-400 font-medium mb-2">React + Styled Components + Node js com Express</p>
              <p className="text-gray-400 mb-4 text-sm">
                 4s Seguros é uma empresa de corretagem de seguros que oferece soluções personalizadas para seus clientes. Este sistema foi desenvolvido para gerenciar apólices, clientes e sinistros de forma eficiente.
              </p>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mb-6 mt-auto">
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-white">React</span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-white">Styled Components</span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-white"> Node js</span>
              </div>

             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projetos;