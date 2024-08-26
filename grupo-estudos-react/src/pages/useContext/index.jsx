import React, { useState } from 'react';

export const TemaContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema((temaAtual) => (temaAtual === 'claro' ? 'escuro' : 'claro'));
  }

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      <div style={{ background: tema === 'claro' ? '#f3f3' : '#000' }}>
        {children}
      </div>
    </TemaContext.Provider>
  )
}