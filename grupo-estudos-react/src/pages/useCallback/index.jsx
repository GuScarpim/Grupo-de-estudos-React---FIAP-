import React, { useCallback, useState } from 'react';
import { NavBar } from '../../components/navBar';

export const TemaContext = React.createContext();

export const ExemploUseCallback = () => {
  const [contador, setContador] = useState(0);

  const incrementar = useCallback(() => {
    setContador(c => c + 1);
  }, [setContador])

  return (
    <div>
      <NavBar />
      <h1>ExemploUseCallback</h1>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>
        Incrementar
      </button>
    </div>
  );
};