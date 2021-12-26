import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutScreen from './views/AboutScreen';
import ContactScreen from './views/ContactScreen';
import GunScreen from './views/GunScreen';
import HomeScreen from './views/HomeScreen';
import NerfGunsScreen from './views/NerfGunsScreen';
import './styles/main.scss';

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      const { data } = await axios.get('data.json', config);

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <Navbar />
      <main className='py-3 container'>
        <Routes>
          <Route path='/' element={<HomeScreen data={data} />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/contact' element={<ContactScreen />} />
          <Route path='/nerfguns' element={<NerfGunsScreen data={data} />} />
          <Route path='/nerfguns/:id' element={<GunScreen />} />
          <Route path='*' element={<h3>Ups! No nerf gun here...</h3>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
