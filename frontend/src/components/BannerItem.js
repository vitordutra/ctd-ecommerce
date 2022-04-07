import styled from 'styled-components';
import killzoneCapa from '../assets/images/capa1.png'
import { Button } from './Button';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  max-width: 1140px;
  margin: 0 auto;
  padding: 140px 24px;


  h2 {
    font-size: 64px;
    font-weight: 300;
    color: #ffffff;
    margin-bottom: 10px;
  }

  span {
    display: block;
    font-size: 24px;
    color: #45b77d;
    margin-bottom: 30px;
  }

  p {
    font-size: 14px;
    color: rgb(137, 142, 144);
    max-width: 465px;
    margin-bottom: 30px;
  }

  img {
    max-width: 300px;
    margin-left: auto;
    border: 4px solid #ffffff;
    border-radius: 4px;
  }
`;


export function BannerItem() {
  return (
    <Wrapper>
      <div>
        <h2>Kill Zone 3</h2>
        <span>R$ 190,00</span>
        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
          et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
        </p>
        <Button color="primary">Adicionar ao carrinho</Button>
      </div>
      <div>
        <img src={killzoneCapa} alt="Killzone" />
      </div>
    </Wrapper>
  )
}