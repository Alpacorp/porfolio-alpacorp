import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/index'
import Home from './components/Home'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
