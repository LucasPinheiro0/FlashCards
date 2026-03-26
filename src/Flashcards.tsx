import { useState, useEffect } from 'react';
import './Flashcards.css';

type FlashcardType = {
  frente: string;
  verso: string;
}

function Flashcards() {
  const [flashcards, setFlashcards] = useState<FlashcardType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resposta, setResposta] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/flashcards')
      .then(res => res.json())
      .then(data => setFlashcards(data))
      .catch(err => console.error(err));
  }, []);

  const verificarResposta = () => {
    if (flashcards.length === 0) return;

    const card = flashcards[currentIndex];
    if (resposta.trim().toLowerCase() === card.verso.toLowerCase()) {
      setMensagem(`You're right! ${card.frente} is ${card.verso}`);
    } else {
      setMensagem(`You're wrong! Correct: ${card.verso}`);
    }

    // próxima carta aleatória
    let nextIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(nextIndex);
    setResposta('');
  }

  if (flashcards.length === 0) return <div>Carregando flashcards...</div>

  return (
    <div className="container">
      <div className="titulo">
        <h1 className="titulo-gotico">Flashcards</h1>
      </div>

      <div className="flashcard">
        <div className="frente">{flashcards[currentIndex].frente}</div>
        <input
          type="text"
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
          placeholder="Digite a tradução"
        />
        <button onClick={verificarResposta}>Verificar</button>
        {mensagem && <p>{mensagem}</p>}
      </div>
    </div>
  );
}

export default Flashcards;