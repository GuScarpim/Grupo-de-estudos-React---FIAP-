import { useState, useMemo } from 'react';
import { NavBar } from '../../components/NavBar';

export function ExemploUseMemo() {
  const [contagem, setContagem] = useState(0);

  const valorMemorizado = useMemo(() => {
    return contagem * 2;
  }, [contagem]);

  return (
    <div>
      <NavBar />
      <h1>ExemploUseMemo</h1>
      <p>Contagem: {contagem}</p>
      <p>Valor memorizado: {valorMemorizado}</p>
      <button onClick={() => setContagem(contagem + 1)}>Incrementar</button>
    </div>
  );
}
