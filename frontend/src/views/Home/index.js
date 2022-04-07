import { MainLayout } from '../../layouts/MainLayout';
import { Banner } from '../../components/Banner';
import { Products } from './Products';


export function Home() {
  return (
    <MainLayout>
      <Banner />
      <Products />
    </MainLayout>
  );
}
