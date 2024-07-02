import { useReducer } from 'react';
import { NavBar } from '../../components/NavBar';

const inicial = { contagem: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'incrementar':
      return { contagem: state.contagem + 1 };
    case 'decrementar':
      return { contagem: state.contagem - 1 };
    default:
      throw new Error();
  }
}

export function ContadorUseReducer() {
  const [state, dispatch] = useReducer(reducer, inicial);

  return (
    <div>
      <NavBar />
      <h1>ContadorUseReducer</h1>
      <p>Contagem: {state.contagem}</p>
      <button onClick={() => dispatch({ type: 'incrementar' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>-</button>
    </div>
  );
}
