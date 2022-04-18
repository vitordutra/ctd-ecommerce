import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { MdShoppingCart, MdHome } from 'react-icons/md';
import logoImage from '../assets/images/logo.png';
import searchIcon from '../assets/icons/search.png';
import { AuthModal } from './AuthModal';
import { useState } from 'react';

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
    transition: color 0.2s;

    &:hover {
      color: #45b77d;
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

  button {
    background-color: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    transition: color 0.2s;
    cursor: pointer;

    &:hover {
      color: #45b77d;
    }
  }
`;

const Navbar = styled.nav`
  background-color: #ffffff;
  border-radius: 3px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  transform: translateY(50%);
  position: relative;
  z-index: 1;
  overflow: hidden;

  a {
    display: flex;
    align-items: center;
    padding: 30px 0;
    color: #666a6c;
    transition: color 0.2s;
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

const NavLinks = styled.div`
  display: flex;
  align-items: stretch;
`;

const Search = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  display: flex;
  align-items: center;
  border-left: 1px solid #cbcbcb;

  img {
    position: absolute;
    left: 16px;
    color: #b7b7b7;
    width: 18px;
    height: 18px;
    z-index: 1;
    pointer-events: none;
  }

  input {
    border: none;
    outline: none;
    position: absolute;
    inset: 0;
    padding-left: 48px;
    font-size: 14px;
    background-color: #eeeeee;
    transition: background-color 0.3s;

    &:focus {
      background-color: #ffffff;
    }
  }
`;

export function Header() {
  const [authModalIsOpen, setAuthModalIsOpen] = useState(false);

  return (
    <Wrapper>
      <AuthModal
        isOpen={authModalIsOpen}
        onRequestClose={() => setAuthModalIsOpen(false)}
      />
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
            <Link to="/carrinho">
              <MdShoppingCart />
              <span>0 itens no carrinho</span>
            </Link>
            <div />
            <button onClick={() => setAuthModalIsOpen(true)}>
              Login / Register
            </button>
          </Menu>
        </Topbar>
        <Navbar>
          <NavLinks>
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
          </NavLinks>
          <Search>
            <img src={searchIcon} alt="" />
            <input type="text" placeholder="Buscar..." />
          </Search>
        </Navbar>
      </div>
    </Wrapper>
  );
}
