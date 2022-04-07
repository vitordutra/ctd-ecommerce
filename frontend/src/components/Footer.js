import styled from 'styled-components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Wrapper = styled.footer`
  background-color: #111111;
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

const TopContent = styled.div``;

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
