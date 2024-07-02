import { useRef } from 'react';
import { NavBar } from '../../components/NavBar';

export function ExemploUseRef() {
  const inputRef = useRef(null);

  const focoInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <NavBar />
      <h1>ExemploUseRef</h1>
      <input ref={inputRef} type="text" />
      <button onClick={focoInput}>Focar no Input</button>
    </div>
  );
}
