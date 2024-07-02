import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">
          ExemploUseCallBack
        </Link>
      </li>
      <li>
        <Link to="/ExemploUseContext">
          ExemploUseContext
        </Link>
      </li>
      <li>
        <Link to="/ExemploUseEffect">
          ExemploUseEffect
        </Link>
      </li>
      <li>
        <Link to="/ExemploUseMemo">
          ExemploUseMemo
        </Link>
      </li>
      <li>
        <Link to="/ContadorUseReducer">
          ContadorUseReducer
        </Link>
      </li>
      <li>
        <Link to="/ExemploUseRef">
          ExemploUseRef
        </Link>
      </li>
      <li>
        <Link to="/ExemploUseState">
          ExemploUseState
        </Link>
      </li>
    </ul>
  );
};