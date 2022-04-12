import styled from 'styled-components';
import { ProductCard } from '../../components/ProductCard';

const Wrapper = styled.section`
  padding: 20px 0 80px;

  h2 {
    font-size: 30px;
    color: #898e90;
    font-weight: 300;
    margin-bottom: 30px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
`;

export function SimilarProducts() {
  return <Wrapper>
      <h2>Produtos Relacionados</h2>
      <ul>
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
        </ul>
  </Wrapper>
}