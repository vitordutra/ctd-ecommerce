import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdShoppingCart, MdHome } from 'react-icons/md';
import logoImage from '../assets/images/logo.png';

const Wrapper = styled.header`
  background-color: #111;

  > div {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 56px 24px 0;
  }
`;

const Topbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 45px;
    height: 45px;
  }

  h1 {
    font-size: 16px;
    color: #ffffff;
  }

  small {
    font-size: 10px;
    color: #45b77d;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  
  a {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 300;
    transition: color .2s;

    &:hover {
      color:  #45b77d;
    }

    svg {
      width: 24px;
      height: 24px;
      color: #45b77d;
    }
  }

  > div {
    width: 1px;
    height: 18px;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Navbar = styled.nav`
  background-color: #ffffff;
  border-radius: 3px;
  display: flex;
  align-items: stretch;
  transform: translateY(50%);
  position: relative;
  z-index: 1;

  a {
    display: flex;
    align-items: center;
    padding: 30px 0;
    color: #666a6c;
    transition: color .2s;
    border-bottom: 2px solid transparent;
    font-weight: 300;

    & + a {
      span {
        border-left: 1px solid #ddd;
      }
    }

    span {
      padding: 0 15px;
    }
    
    svg {
      width: 24px;
      height: 24px;
      margin: 0 20px;
    }

    &:hover {
      color: #45b77d;
      border-color: #45b77d;
    }
    
    &.active {
      border-color: #45b77d;
      svg {
        color: #45b77d;
      }
    }
  }
`;

export function Header() {
  return (
    <Wrapper>
      <div>
        <Topbar>
          <Logo>
            <img src={logoImage} alt="" />
            <div>
              <h1>Checkpoint</h1>
              <small>Uma frase de efeito</small>
            </div>
          </Logo>
          <Menu>
            <a href="/">
              <MdShoppingCart />
              <span>0 itens no carrinho</span>
            </a>
            <div />
            <a href="/">Login / Register</a>
          </Menu>
        </Topbar>
        <Navbar>
          <NavLink to="/">
            <MdHome />
          </NavLink>
          <NavLink to="/categorias/promocoes">
            <span>Promoções</span>
          </NavLink>
          <NavLink to="/categorias/pc">
            <span>PC</span>
          </NavLink>
          <NavLink to="/categorias/playstation">
            <span>PlayStation</span>
          </NavLink>
          <NavLink to="/categorias/xbox">
            <span>XBOX</span>
          </NavLink>
          <NavLink to="/categorias/wii">
            <span>Wii</span>
          </NavLink>
        </Navbar>
      </div>
    </Wrapper>
  );
}
