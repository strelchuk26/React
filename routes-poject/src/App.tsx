import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Biography from './pages/Biography'
import Painting from './pages/Painting'
import Paintings from './pages/Paintings'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<><h1>Home page!</h1></>} />
          <Route path="biography" element={<Biography />} />
          <Route path="painting" element={<Painting />} />
          <Route path="paintings" element={<Paintings />} />
          <Route path="*" element={<><h1>404</h1></>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
