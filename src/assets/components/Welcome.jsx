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
    dia: ["Good morning", "Rise and shine"],
    tarde: ["Good afternoon", "How are you"],
    noite: ["Good evening", "Sweet dreams"],
  };

  const periodo =
    horaAtual >= 5 && horaAtual < 12
      ? "dia"
      : horaAtual >= 12 && horaAtual < 18
      ? "tarde"
      : "noite";
  const saudacao = mensagens[periodo][0];

  return (
    <div className="p-50">
      <h1 className="text-6xl mb-4">{saudacao}, user</h1>
      {erro && <p className="text-4xl w-120 font-extralight italic py-5">Unable to retrieve phrase of the day. However, that is not your fault.</p>}

      {!frase && !erro && <p className="text-4xl w-120 font-extralight italic py-5">Loading...</p>}

      {frase && <p className="text-4xl w-120 font-extralight italic py-5">{frase.q} - {frase.a}</p>}
    </div>
  );
}

export default Welcome;
