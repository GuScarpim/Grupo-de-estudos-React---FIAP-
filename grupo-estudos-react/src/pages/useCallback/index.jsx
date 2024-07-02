import { useState, useCallback } from 'react';
import { NavBar } from '../../components/NavBar';

export const ExemploUseCallBack = () => {
  const [contador, setContador] = useState(0);

  const incrementar = useCallback(() => {
    setContador(c => c + 1);
  }, []);

  return (
    <div>
      <NavBar />
      <h1>ExemploUseCallBack</h1>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};
