import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

import { DecimaTerceiraAula } from './aulas/DecimaTerceiraAula'
import { QuartaAula } from './aulas/QuartaAula'
import { QuintaAula } from './aulas/QuintaAula'
import { SegundaAula } from './aulas/SegundaAula'
import { TerceiraAula } from './aulas/TerceiraAula'
import { Login } from './pages/Login'



function App() {

  const router = createBrowserRouter([
    {
      path: 'home',
      element: <div>hello world</div>
    }
  ])

  return (
    <>
      <RouterProvider />

      {/* <Login/> */}
      {/* <SegundaAula/> */}
      {/*<TerceiraAula/>*/}
      {/*<QuartaAula/>*/}
      {/*<QuintaAula/>*/}
      {/*<DecimaTerceiraAula />*/}
    </>
  )
}

export default App
