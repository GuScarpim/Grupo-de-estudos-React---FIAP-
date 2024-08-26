import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">
          ExemploUseContext
        </Link>
      </li>
      <li>
        <Link to="/useEffect">
          ExemploUseEffect
        </Link>
      </li>
      <li>
        <Link to="/useCallback">
          ExemploUseCallback
        </Link>
      </li>
      <li>
        <Link to="/useMemo">
          ExemploUseMemo
        </Link>
      </li>
      <li>
        <Link to="/useReducer">
          ExemploUseReducer
        </Link>
      </li>
      <li>
        <Link to="/ExemplouseRef">
          ExemplouseRef
        </Link>
      </li>
    </ul>
  )
}