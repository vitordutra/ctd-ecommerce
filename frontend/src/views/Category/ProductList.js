import styled from 'styled-components';
import { ProductCard } from '../../components/ProductCard';

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

export function ProductList() {
  return (
    <Wrapper>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
    </Wrapper>
  )
}