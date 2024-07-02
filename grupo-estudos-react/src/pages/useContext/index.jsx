import React, { useContext } from 'react';
import { NavBar } from '../../components/NavBar';

const TemaContext = React.createContext('claro');

export const ExemploUseContext = () => {
  const tema = useContext(TemaContext);
  return (
    <>
      <NavBar />
      <h1>ExemploUseContext</h1>
      <div>O tema atual é {tema}</div>
    </>
  );
};
