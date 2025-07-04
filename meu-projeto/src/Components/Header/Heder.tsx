
const Heder = () => {
  return (
      <header className="bg-gradient-to-b from-[#1E2A3A] via-[#0D1117] to-[#0D1117] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transformo ideias<br className="hidden md:block" /> em soluções digitais
          </h1>
          <h2 className="text-lg text-gray-400 mb-4">Adryel Martins</h2>
          <p className="text-lg text-gray-400 mb-6">
            Desenvolvedor Full Stack e Designer UI/UX
          </p>
          <p className="text-lg text-gray-400 max-w-md mx-auto md:mx-0">
           Transformo ideias em sites que vendem. Rápido, sem complicação e com foco em resultados.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="#projetos"
              className="bg-azulClaro text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#2978B5] transition"
            >
              Ver Projetos
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5585984166186&text=Olá, gostaria de contratar seu serviço."
              className="border border-azulClaro text-azulClaro px-6 py-3 rounded-lg hover:bg-azulClaro hover:text-black transition"
            >
              Entrar em Contato
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex-1 flex justify-center">
          <img
            src="/sua-foto.png" // substitua pelo nome real
            alt="Foto de Adryel"
            className="w-64 h-64 object-cover rounded-full border-4 border-azulClaro shadow-lg"
          />
        </div>
      </div>
    </header>  

  )
}

export default Heder