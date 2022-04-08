import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 56px 24px 0;
`;

export function Container({ children }) {
  return <Wrapper>{children}</Wrapper>
}