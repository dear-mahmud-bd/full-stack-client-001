import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home/Home';
import Products from './components/Pages/Home/Products/Products';
import Reviews from './components/Pages/Home/Reviews/Reviews';
import Footer from './components/Pages/Shared/Footer';
import Navbar from './components/Pages/Shared/Navbar';

function App() {
  return (
    <main className=''>
      <Navbar />
      <section className='md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </section>
      <Footer/>
    </main>
  );
}

export default App;
