import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'; // Importa os ícones necessários

const Contato = () => {
  // Substitua estes valores pelos seus próprios links!
  const githubUrl = "https://github.com/adryeldeev";
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5585984166186&text=Olá, gostaria de saber mais sobre seus serviços."; // Ex: 5585999998888 (para Brasil, Ceará)
  const linkedinUrl = "https://www.linkedin.com/in/adryel-martins-b01544249/";

  return (
    <section id="contato" className="py-24 px-6 bg-[#0D1117] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-400">Contato</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades e colaborações. Se você tem uma ideia, projeto ou apenas quer conversar, sinta-se à vontade para entrar em contato através das minhas redes!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
          {/* GitHub Button */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg font-semibold text-lg transition-colors duration-300 shadow-md w-full sm:w-auto justify-center"
          >
            <FaGithub className="mr-2 text-2xl" /> {/* Ícone do GitHub */}
            GitHub
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-lg transition-colors duration-300 shadow-md w-full sm:w-auto justify-center"
          >
            <FaWhatsapp className="mr-2 text-2xl" /> {/* Ícone do WhatsApp */}
            WhatsApp
          </a>

          {/* LinkedIn Button */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-semibold text-lg transition-colors duration-300 shadow-md w-full sm:w-auto justify-center"
          >
            <FaLinkedinIn className="mr-2 text-2xl" /> {/* Ícone do LinkedIn */}
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contato;