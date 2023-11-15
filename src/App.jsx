import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MovieContextProvider } from './contexts/MovieContext'

import './App.css'
import Home from './components/Home'
import Movie from './components/Movie'
import Layout from './components/Layout'
import Contact from './components/Contact'
function App() {
  return (
    <>
    < MovieContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout/> }>
            <Route path='' element={ <Home/> }></Route>
            <Route path='/contact' element={ <Contact/> }></Route>
            <Route path='/movie/:id' element={ <Movie/> }></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MovieContextProvider>
    </>
  )
}

export default App
