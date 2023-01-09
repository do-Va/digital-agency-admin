import styled from 'styled-components/macro';
import logoUrl from '../../assets/Logo.svg';

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={logoUrl} alt="" />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: var(--logo-size);
`;

export default Logo;
