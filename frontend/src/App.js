import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/global';
import { Cart } from './views/Cart';
import { Home } from './views/Home';
import { Product } from './views/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/categorias/:categoriaId" element={<Home />} />
        <Route path="/produtos/:produtoId" element={<Product />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
