import { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { Button } from './Button';

const Wrapper = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  input {
    color: #333;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: transparent;
    border: 2px solid #424242;
    transition: border-color 0.3s;
    outline: none;

    &:focus {
      border-color: #45b77d;
    }
  }

  a {
    display: block;
    font-size: 14px;
    margin: 0 auto;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #45b77d;
    }
  }
`;

const modalStyles = {
  overlay: { zIndex: 2, backgroundColor: 'rgba(0,0,0,0.8)' },
  content: {
    maxWidth: 400,
    maxHeight: 'fit-content',
    margin: 'auto'
  }
};

function LoginForm({ setScreen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button>Entrar</Button>
      <a onClick={() => setScreen('register')}>Não tem conta? Cadastre-se</a>
    </form>
  );
}

function RegisterForm({ setScreen }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <h2>Cadastro</h2>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button>Cadastrar</Button>
      <a onClick={() => setScreen('login')}>Já tem conta? Faça login</a>
    </form>
  );
}

export function AuthModal({ isOpen, onRequestClose }) {
  const [screen, setScreen] = useState('login');

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyles}
    >
      <Wrapper>
        {screen === 'login' && <LoginForm setScreen={setScreen} />}
        {screen === 'register' && <RegisterForm setScreen={setScreen} />}
      </Wrapper>
    </ReactModal>
  );
}
