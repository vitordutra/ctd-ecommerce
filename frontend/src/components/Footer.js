import styled from 'styled-components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Button } from '../components/Button';

const Wrapper = styled.footer`
  background-color: #222222;
  color rgb(137, 142, 144);
  font-size: 12px;
`;

const Content = styled.div`
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    margin: 0 auto;
    padding: 56px 24px;
`;

const TopContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 80px;

  > div:nth-child(1) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  h3 {
    font-size: 17px;
    font-weight: 400;
    color: #ffffff;
    margin-bottom: 20px;
  }

  li {
    line-height: 1.5; 
  }

  form {
    display: flex;
    gap: 8px;

    input {
      color: #ffffff;
      padding: 10px 20px;
      border-radius: 4px;
      background-color: transparent;
      border: 2px solid #424242;
      transition: border-color .3s;
      outline: none;
      
      &:hover, &:focus {
        border-color: #45b77d;
      }
    }
  }

  
  > div:nth-child(2) {
    justify-self: end;
  }
`;

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 8px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export function Footer() {
  return (
    <Wrapper>
      <Content>
        <TopContent>
          <div>
            <div>
              <h3>Information</h3>
              <ul>
                <li><a href="/">Site map</a></li>
                <li><a href="/">About us</a></li>
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3>Consumer Service</h3>
              <ul>
                <li><a href="/">Secure</a></li>
                <li><a href="/">Shipping &amp; Returns</a></li>
                <li><a href="/">Shipping</a></li>
                <li><a href="/">Orders &amp; Returns</a></li>
                <li><a href="/">Group Sales</a></li>
              </ul>
            </div>
            <div>
              <h3>My Account</h3>
              <ul>
                <li><a href="#">Login/Register</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Cart</a></li>
                <li><a href="#">Order Tracking</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h3>Assine nossa newsletter</h3>
            <form>
              <input type="text" placeholder="Digite seu e-mail" />
              <Button color="primary">Assinar</Button>
            </form>
          </div>
       
        </TopContent>
        <BottomContent>
          <p>Copyright 2022 Checkpoint. All rights reserved.</p>
          <div>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </BottomContent>
      </Content>
    </Wrapper>
  );
}
