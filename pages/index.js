import { useState } from "react";

export default function Home() {
  const pergunta = "Vou ter seu cuzin dnv mo?\u{1F979}";

  const [scale, setScale] = useState(1);
  const [started, setStarted] = useState(false);

  const [simPos, setSimPos] = useState({ top: 0, left: 0 });
  const [naoPos, setNaoPos] = useState({ top: 0, left: 0 });

  const youtubeUrl =
    "https://www.youtube.com/watch?v=1Y6vYSUn9TE&list=RD1Y6vYSUn9TE&start_radio=1";

  function randomPosition() {
    return {
      top: Math.random() * 70 + 15,
      left: Math.random() * 70 + 15,
    };
  }

  function handleNao() {
    if (!started) setStarted(true);

    setScale((prev) => prev + 0.4);
    setSimPos(randomPosition());
    setNaoPos(randomPosition());
  }

  function handleSim() {
    window.location.href = youtubeUrl;
  }

  return (
    <div className="container">
      <h1>{pergunta}</h1>

      {/* POSIÇÃO INICIAL */}
      {!started && (
        <div className="initial-buttons">
          <button className="btn-sim" onClick={handleSim}>
            Sim
          </button>
          <button className="btn-nao" onClick={handleNao}>
            Não
          </button>
        </div>
      )}

      {/* APÓS COMEÇAR */}
      {started && (
        <>
          <button
            className="btn-sim absolute"
            onClick={handleSim}
            style={{
              top: `${simPos.top}%`,
              left: `${simPos.left}%`,
              transform: `translate(-50%, -50%) scale(${scale})`,
            }}
          >
            Sim
          </button>

          {scale < 12 && (
            <button
              className="btn-nao absolute"
              onClick={handleNao}
              style={{
                top: `${naoPos.top}%`,
                left: `${naoPos.left}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              Não
            </button>
          )}
        </>
      )}
    </div>
  );
  return <h1>Meu trenzin lindo ta na net</h1>;
}
