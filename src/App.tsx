import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Flashcards from './Flashcards';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="container">
            <div className="titulo">
              <h1 className="titulo-gotico">Flashstudy</h1>
            </div>
            <div className='sub'>
              <p>Aprenda idiomas de forma inteligente</p>
            </div>
            <div className="botoes">
              <Link to="/flashcards">
                <button>
                  Flashcards
                  <p className='subtitulo'>Estude palavras e expressões em qualquer idioma</p>
                </button>
              </Link>
              <Link to="/literatura">
              <button>
                Literatura
                <p className='subtitulo'>Aprenda vocabulário através de livros e HQs</p>
              </button>
              </Link>
            </div>
          </div>
        } />
        <Route path="/flashcards" element={<Flashcards />} />
      </Routes>
    </Router>
  );
}

export default App;