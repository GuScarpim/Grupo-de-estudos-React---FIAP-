import React, { useState, useMemo } from 'react';
import { NavBar } from '../../components/navBar';

export const TemaContext = React.createContext();

export const ExemploUseMemo = () => {
  const [contador, setContador] = useState(0);

  const valorMemorizado = useMemo(() => {
    return contador * 2;
  }, [contador]);

  return (
    <div>
      <NavBar />
      <h1>ExemploUseMemo</h1>
      <p>Contagem: {contador}</p>
      <p>Valor memorizado: {valorMemorizado}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
};