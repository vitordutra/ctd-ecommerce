import styled from 'styled-components';
import { RiFacebookFill, RiTwitterFill, RiWhatsappLine } from 'react-icons/ri';

const colors = {
  facebook: '#4267B2',
  twitter: '#1DA1F2',
  whatsapp: '#25D366'
}

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: ${props => colors[props.socialMedia]};
  border-radius: 4px;

  svg {
    width: 18px;
    height: 18px;
    color: #ffffff;
  }
`;

export function SocialShareButton({ socialMedia, shareUrl }) {
  return (
    <Wrapper socialMedia={socialMedia} href={shareUrl}>
      {socialMedia === 'facebook' && <RiFacebookFill />}
      {socialMedia === 'twitter' && <RiTwitterFill />}
      {socialMedia === 'whatsapp' && <RiWhatsappLine />}
    </Wrapper>
  )
}
