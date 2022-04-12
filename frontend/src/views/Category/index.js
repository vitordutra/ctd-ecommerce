import styled from 'styled-components';
import { MainLayout } from '../../layouts/MainLayout';
import { Container } from '../../components/Container';
import { FilterBar } from './FilterBar';
import { ProductList } from './ProductList';

const Wrapper = styled.div`
  padding: 0 0 80px;
`;

export function Category() {
  return (
    <MainLayout>
      <Container>
        <Wrapper>
          <FilterBar />
          <ProductList />
        </Wrapper>
      </Container>
    </MainLayout>
  )
}