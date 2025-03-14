import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Rotas
