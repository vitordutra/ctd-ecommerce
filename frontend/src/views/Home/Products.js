import styled from 'styled-components'
import { ProductCard } from '../../components/ProductCard';

const Wrapper = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  h2 {
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 30px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }

`;


export function Products() {
  return (
    <Wrapper>
      <div>
        <h2>Novos Produtos</h2>
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
      </div>
      <div>
        <h2>Promoções</h2>
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
      </div>
    </Wrapper>
  );
}
