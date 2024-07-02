import { useState, useEffect } from 'react';
import { NavBar } from '../../components/NavBar';

export function ExemploUseEffect() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${contador} vezes`;
  }, [contador]); // Executa novamente apenas se `contador` mudar

  return (
    <div>
      <NavBar />
      <h1>ExemploUseEffect</h1>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
