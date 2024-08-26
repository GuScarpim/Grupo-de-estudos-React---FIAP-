import { useRef } from 'react';
import { NavBar } from '../../components/navBar';

export const ExemplouseRef = () => {
  const inputRef = useRef(5);

  const focoInput = () => {
    inputRef.current.focus();
    inputRef.current.value = '18';
    console.log(inputRef.current.value)
  }

  const onValue = (event) => {
    console.log('aasdas', event);
    inputRef.current.value = event.target.value
  }

  return (
    <div>
      <NavBar />
      <h1>ExemplouseRef</h1>
      <input ref={inputRef} type='text' value={inputRef.current.value} onChange={(event) =>  onValue(event)} />
      <button onClick={focoInput}>Focar</button>
    </div>
  );
};