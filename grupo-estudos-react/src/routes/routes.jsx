import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TemaAtual } from '../pages/theme';
import { ExemploUseEffect } from '../pages/useEffect';
import { ExemploUseCallback } from '../pages/useCallback';
import { ExemploUseMemo } from '../pages/useMemo';
import { ExemploUseReducer } from '../pages/useReducer';
import { ExemplouseRef } from '../pages/useRef';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TemaAtual />
  },
  {
    path: '/useEffect',
    element: <ExemploUseEffect />
  },
  {
    path: '/useCallback',
    element: <ExemploUseCallback />
  },
  {
    path: '/useMemo',
    element: <ExemploUseMemo />
  },
  {
    path: '/useReducer',
    element: <ExemploUseReducer />
  },
  {
    path: '/ExemplouseRef',
    element: <ExemplouseRef />
  }
]);

export const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}