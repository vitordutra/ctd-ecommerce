import { Link } from 'react-router-dom';
import styled from 'styled-components';
import killzoneCapa from '../assets/images/capa1.png'
import { Button } from './Button';

const Wrapper = styled.section`
    background-color: #ffffff;
    padding: 30px;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgb(0 0 0 / 30%);

    img {
      width: 190px;
      margin-bottom: 30px;
      border: 4px solid #dedede;
      border-radius: 3px;
    }

    h3 {
      font-size: 18px;
      a {
        color: rgb(102, 106, 108);
        transition: color .3s;
        &:hover {
          color: #45b77d;
        }
      }
    }
    
    small {
      display: block;
      font-weight: 300;
      font-size: 16px;
      color: #45b77d;
      margin-bottom: 20px;
    }

    p {
      color: #898e90;
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 14px;
    }
}
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    width: 100%;
  }
`;

export function ProductCard() {
  return (
    <Wrapper>
      <div>
        <img src={killzoneCapa} alt="" />
      </div>
      <div>
        <h3>
          <a href="/">Kill Zone 3</a>
        </h3>
        <small>R$ 190,00</small>
        <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor...</p>
        <Actions>
          <Button color="primary">Adicionar ao carrinho</Button>
          <Link to="/produtos/teste">
            <Button color="secondary">Ver detalhes</Button>
          </Link>
        </Actions>
      </div>
    </Wrapper>
  )
}