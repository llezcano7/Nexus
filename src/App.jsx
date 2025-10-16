import './reset.css';
import './library.css'; 
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Inicio from './pages/inicio';
import Contacto from './pages/contacto';
import Nosotros from './pages/nosotros';
import Servicios from './pages/servicios';



function App() {

  return (
    <>
 <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/servicios' element={<Servicios />} />
      </Routes>
  <Footer />
      </>
  )
}

export default App
