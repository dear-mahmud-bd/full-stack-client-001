import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Pages/Home/Blogs/Blogs';
import Home from './components/Pages/Home/Home/Home';
import Products from './components/Pages/Home/Products/Products';
import Reviews from './components/Pages/Home/Reviews/Reviews';
import Login from './components/Pages/LogIn/Login';
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
          <Route path="blogs" element={<Blogs />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </section>
      <Footer/>
    </main>
  );
}

export default App;
