import styled from 'styled-components';
import { MainLayout } from '../../layouts/MainLayout';
import { Container } from '../../components/Container';
import killzoneCapa from '../../assets/images/capa1.png'
import { Button } from '../../components/Button';
import { FaTimes as FaTimesIcon } from 'react-icons/fa';

const Wrapper = styled.div`
  padding: 50px 0;
`;

const CartTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 20px;
  width: 100%;
  margin: 0 0 30px;
  padding: 0;

  th, td {
    background: #ffffff;
    padding: 20px;
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    color: #898e90;
    font-size: 14px;
  }


  th:first-child {
    text-align: left;
  }

  td:first-child {
    display: flex;
    gap: 20px;

    h3 {
      color: #898e90;
      font-weight: 400;
      margin-bottom: 20px;
    }
    
    p {
      color: #898e90;
      font-size: 14px;
    }
  }

  td:last-child {
    button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }
    svg {
      color: #da7e7e;
    }
  }

  img {
    width: 120px;
    border: 3px solid #e9e9e9;
    border-radius: 3px;
  }
`;

const CartTotal = styled.div`
    background: white;
    padding: 20px;
    width: 370px;
    margin-bottom: 50px;
    border-radius: 3px;
    margin-left: auto;

    p {
      font-weight: 700;
      color: #898e90;
      font-size: 14px;
      margin-bottom: 14px;
      
      strong {
        font-weight: 300;
      }
      
      &:last-of-type {
        font-size: 30px;
        margin-bottom: 30px;

        span {
          color: #45b77d;
          margin-left: 20px;
        }
      }
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 4px;

      button {
        width: 100%;
      }
    }
`;

export function Cart() {
  function handleRemoveProduct() {
    alert('TODO');
  }

  return <MainLayout>
    <Container>
      <Wrapper>
        <CartTable>
          <thead>
            <tr>
              <th>Nome do Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={killzoneCapa} alt="" />
                <div>
                  <h3>GTA V</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nobis architecto dolorum, alias laborum sit odit, saepe expedita similique eius enim quasi obcaecati voluptates, autem eveniet ratione veniam omnis modi.</p>
                </div>
              </td>
              <td>$150.00</td>
              <td>
                <select name="#">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </td>
              <td>$150.00</td>
              <td>
                <button onClick={handleRemoveProduct}>
                  <FaTimesIcon />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img src={killzoneCapa} alt="" />
                <div>
                  <h3>GTA V</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nobis architecto dolorum, alias laborum sit odit, saepe expedita similique eius enim quasi obcaecati voluptates, autem eveniet ratione veniam omnis modi.</p>
                </div>
              </td>
              <td>$150.00</td>
              <td>
                <select name="#">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </td>
              <td>$150.00</td>
              <td>
                <button onClick={handleRemoveProduct}>
                  <FaTimesIcon />
                </button>
              </td>
            </tr>
          </tbody>
        </CartTable>
        <CartTotal>
          <p><strong>Subtotal:</strong> $650.00</p>
          <p><strong>Shipment:</strong> $15.00</p>
          <p><strong>Total</strong><span>$665.00</span></p>
          <div>
            <a href="/">
              <Button color="secondary">Continuar Comprando</Button>
            </a>
            <a href="/">
              <Button color="primary">Finalizar e Pagar</Button>
            </a>
          </div>
        </CartTotal>
      </Wrapper>
    </Container>
  </MainLayout>
}