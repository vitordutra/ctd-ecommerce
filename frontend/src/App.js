import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/global';
import { Home } from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias/:categoriaId" element={<Home />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
