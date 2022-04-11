import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { ProductsTable } from './components/ProductsTable';
import { CategoriesTable } from './components/CategoriesTable';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/produtos" replace />} />
        <Route
          path="/produtos"
          element={
            <DashboardLayout>
              <ProductsTable />
            </DashboardLayout>
          }
        />
        <Route
          path="/categorias"
          element={
            <DashboardLayout>
              <CategoriesTable />
            </DashboardLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
