import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutScreen from './views/AboutScreen';
import ContactScreen from './views/ContactScreen';
import GunEditScreen from './views/GunEditScreen';
import GunScreen from './views/GunScreen';
import HomeScreen from './views/HomeScreen';
import NerfGunsScreen from './views/NerfGunsScreen';
import './styles/main.scss';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className='py-3 container'>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/contact' element={<ContactScreen />} />
          <Route path='/nerfguns' element={<NerfGunsScreen />} />
          <Route path='/nerfguns/:id' element={<GunScreen />} />
          <Route path='/nerfguns/:id/edit' element={<GunEditScreen />} />
          <Route path='*' element={<h3>Ups! No nerf gun here...</h3>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
