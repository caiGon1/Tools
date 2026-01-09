import { useEffect, useState } from "react";

function Welcome() {
  const [frase, setFrase] = useState(null);
  const [erro, setErro] = useState(false);
  const horaAtual = new Date().getHours();

  useEffect(() => {
    async function buscarFrase() {
      try {
        // Usando um proxy gratuito para contornar o bloqueio de CORS
        const response = await fetch(
          "https://api.allorigins.win/raw?url=https://zenquotes.io/api/today"
        );
        if (!response.ok) throw new Error("Erro na rede");

        const data = await response.json();
        // A API retorna um array [ {q: "...", a: "..."} ]
        setFrase(data[0]);
      } catch (error) {
        console.error("Erro ao buscar frase:", error);
        setErro(true);
      }
    }
    buscarFrase();
  }, []);

  // Lógica de mensagens de boas-vindas
  const mensagens = {
    dia: ["Good morning", "Rise and shine", "Time to work"],
    tarde: ["Good afternoon", "How are you", "How may I help"],
    noite: ["Good evening", "Sweet dreams", "Rest well"],
  };

  const periodo =
    horaAtual >= 5 && horaAtual < 12
      ? "dia"
      : horaAtual >= 12 && horaAtual < 18
      ? "tarde"
        : "noite";
  
const listaMensagens = mensagens[periodo];

// gera um índice aleatório
const indiceAleatorio = Math.floor(Math.random() * listaMensagens.length);

// escolhe a saudação aleatória
const saudacao = listaMensagens[indiceAleatorio];

  return (
    <div className="mt-16 md:mt-45 max-w-xl mx-auto md:mx-0 md:ml-24 px-4 text-center md:text-left">
      <h1 className="text-6xl">{saudacao}, user</h1>
      <div className="max-w-xl w-full">
      {erro && <p className="text-4xl font-extralight italic py-5">Unable to retrieve phrase of the day. However, that is not your fault.</p>}

      {!frase && !erro && <p className="text-4xl font-extralight italic py-5">Loading...</p>}

      
      {frase && <p className="text-4xl font-extralight italic py-5">{frase.q} - {frase.a}</p>}
      </div>
      </div>
  );
}

export default Welcome;
