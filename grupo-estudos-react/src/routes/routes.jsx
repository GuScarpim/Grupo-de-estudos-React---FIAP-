import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ExemploUseCallBack } from '../pages/useCallback'
import { ExemploUseContext } from '../pages/useContext'
import { ExemploUseEffect } from '../pages/useEffect'
import { ExemploUseMemo } from '../pages/useMemo'
import { ContadorUseReducer } from '../pages/useReducer'
import { ExemploUseRef } from '../pages/useRef'
import ExemploUseState from '../pages/useState'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExemploUseCallBack />
  },
  {
    path: "/ExemploUseContext",
    element: <ExemploUseContext />,
  },
  {
    path: "/ExemploUseEffect",
    element: <ExemploUseEffect />,
  },
  {
    path: "/ExemploUseMemo",
    element: <ExemploUseMemo />,
  },
  {
    path: "/ContadorUseReducer",
    element: <ContadorUseReducer />,
  },
  {
    path: "/ExemploUseRef",
    element: <ExemploUseRef />,
  },
  {
    path: "/ExemploUseState",
    element: <ExemploUseState />,
  },
]);

export const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}