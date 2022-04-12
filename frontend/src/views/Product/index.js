import styled from 'styled-components';
import { MainLayout } from '../../layouts/MainLayout';
import { ProductSlider } from './ProductSlider';
import { Container } from '../../components/Container';
import { ProductDetails } from './ProductDetails';
import { SimilarProducts } from './SimilarProducts';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-gap: 32px;
  padding: 40px 0;
`;

export function Product() {
  return (
    <MainLayout>
      <Container>
        <Grid>
          <ProductSlider />
          <ProductDetails />
        </Grid>
        <SimilarProducts />
      </Container>
    </MainLayout>
  )
}