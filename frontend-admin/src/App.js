import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Categories } from './views/Categories';
import { Products } from './views/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
