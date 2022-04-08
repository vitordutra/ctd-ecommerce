import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { SocialShareButton } from './SocialShareButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Description = styled.div`
  h2 {
    color: #898e90;
    font-size: 60px;
    font-weight: 100;
    margin-bottom: 10px;
  }

  small {
    font-size: 30px;
    color: #45b77d;
    display: block;
    margin-bottom: 30px;
    font-weight: 300;
  }

  p {
    color: #898e90;
    font-size: 14px;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 14px;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 20px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  margin-top: 50px;
`;

const Buy = styled.div`
  label {
    color: #898e90;
    font-size: 14px;
    font-weight: 300;
    margin-right: 10px;
  }

  input {
    background-color: #e9e9e9;
    padding: 10px;
    border: none;
    outline: none;
    width: 80px;
    border-radius: 4px;
    margin-right: 4px;
  }

  button {
    padding: 10px;
  }
`;

const Share = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
  strong {
    color: #898e90;
    font-size: 14px;
  }

  div {
    display: flex;
    gap: 4px;
  }
`;

export function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleQuantityChange(event) {
    const newValue = event.target.value;
    if (newValue > 0) {
      setQuantity(newValue);
    }
  }

  return (
    <Wrapper>
      <Description>
        <h2>Kill Zone 3</h2>
        <small>R$ 190,00</small>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
      </Description>
      <Actions>
        <Buy>
          <form onSubmit={handleSubmit}>
            <label htmlFor="quantity">Quantidade</label>
            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <Button type="submit">Adicionar ao carrinho</Button>
          </form>
        </Buy>
        <Share>
          <strong>Compartilhar</strong>
          <div>
            <SocialShareButton socialMedia="facebook" shareUrl="/"/>
            <SocialShareButton socialMedia="twitter" shareUrl="/" />
            <SocialShareButton socialMedia="whatsapp" shareUrl="" />
          </div>
        </Share>
      </Actions>
    </Wrapper>
  )
}