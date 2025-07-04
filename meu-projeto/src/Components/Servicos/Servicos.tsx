import React from 'react'

const Servicos = () => {
  return (
    <section id="servicos" className="py-24 px-6 bg-[#0D1117] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12  text-center text-blue-400">Meus Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exemplo de serviço */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Desenvolvimento Web</h3>
            <p className="text-gray-400 mb-4">Criação de sites e aplicações web responsivas e otimizadas.</p>
            <a href="#" className="text-blue-400 hover:underline">Saiba mais</a>
          </div>
          {/* Adicione mais serviços aqui */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Design UI/UX</h3>
            <p className="text-gray-400 mb-4">Criação de interfaces intuitivas e experiências de usuário envolventes.</p>
            <a href="#" className="text-blue-400 hover:underline">Saiba mais</a>
            </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Sistemas de Gerenciamento</h3>
            <p className="text-gray-400 mb-4">Desenvolvimento de sistemas
              personalizados para atender às necessidades específicas do seu negócio.</p>
            <a href="#" className="text-blue-400 hover:underline">Saiba mais</a>
            </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Otimização de Performance</h3>
            <p className="text-gray-400 mb-4">Melhoria da velocidade e eficiência de sites e aplicações existentes.</p>
            <a href="#" className="text-blue-400 hover:underline">Saiba mais</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Servicos