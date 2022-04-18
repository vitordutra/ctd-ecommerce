import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/global';
import { Cart } from './views/Cart';
import { Home } from './views/Home';
import { Product } from './views/Product';
import { Category } from './views/Category';
import AboutUs from './views/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/produtos/:produtoId" element={<Product />} />
        <Route path="/categorias/:categoriaId" element={<Category />} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
