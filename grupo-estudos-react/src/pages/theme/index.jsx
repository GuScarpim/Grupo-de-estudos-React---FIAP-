import { useContext } from 'react';
import { TemaContext } from '../useContext';
import { NavBar } from '../../components/navBar';

export const TemaAtual = () => {
  const { tema, alternarTema } = useContext(TemaContext);

  return (
    <div>
      <NavBar />
      <span>O tema atual é {tema}</span>
      <button onClick={alternarTema}>
        Trocar tema {tema === 'claro' ? 'escuro' : 'claro'}
      </button>
    </div>
  )
}