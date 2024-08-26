import React, { useState, useEffect } from 'react';
import { NavBar } from '../../components/navBar';

export const TemaContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ExemploUseEffect = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${contador} vezes`
  }, [contador])

  return (
    <div>
      <NavBar />
      <h1>ExemploUseEffect</h1>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Contar
      </button>
    </div>
  );
};