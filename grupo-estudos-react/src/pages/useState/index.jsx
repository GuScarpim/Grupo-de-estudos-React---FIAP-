import { useState } from 'react';
import { NavBar } from '../../components/NavBar';

function ExemploUseState() {
  const [contagem, setContagem] = useState(0);

  return (
    <div>
      <NavBar />
      <h1>ExemploUseState</h1>
      <p>Você clicou {contagem} vezes</p>
      <button onClick={() => setContagem(contagem + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

export default ExemploUseState;
