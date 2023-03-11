import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home/Home';
import Reviews from './components/Pages/Reviews/Reviews';
import Blogs from './components/Pages/Blogs/Blogs';
import Login from './components/Pages/LogIn/Login';
import Footer from './components/Pages/Shared/Footer';
import Navbar from './components/Pages/Shared/Navbar';
import AllProduct from './components/Pages/Products/AllProducts';
import NotFound from './components/Pages/Shared/NotFound';

function App() {
  return (
    <main className=''>
      <Navbar />
      <section className='md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="all-products" element={<AllProduct />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      <Footer/>
    </main>
  );
}

export default App;
