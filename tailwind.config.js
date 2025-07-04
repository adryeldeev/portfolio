export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Aqui já cobre sua pasta Components!
  ],
  theme: {
    extend: {
      colors: {
        azulClaro: "#3DA9FC",
        azulEscuro: "#1E2A3A",
        fundo: "#0D1117",
        cinzaClaro: "#AAB8C2",
      },
    },
  },
  plugins: [],
}
