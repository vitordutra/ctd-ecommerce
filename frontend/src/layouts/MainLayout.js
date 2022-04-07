import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
