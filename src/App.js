import './styles/main.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutScreen from './views/AboutScreen';
import ContactScreen from './views/ContactScreen';
import HomeScreen from './views/HomeScreen';
import NerfGunsScreen from './views/NerfGunsScreen';
import data from './data.js';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className='py-3 container'>
        <Routes>
          <Route path='/' element={<HomeScreen data={data} />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/contact' element={<ContactScreen />} />
          <Route path='/nerfguns' element={<NerfGunsScreen data={data} />} />
          <Route path='/nerfguns/:id' element={<h3>Nerf gun</h3>} />
          <Route path='*' element={<h3>Ups! No nerf gun here...</h3>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
