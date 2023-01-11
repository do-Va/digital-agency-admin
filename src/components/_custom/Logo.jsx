import styled from 'styled-components/macro';
import logoUrl from '../../assets/Logo.svg';

const Logo = ({ size }) => {
  return (
    <LogoWrapper size={size}>
      <img src={logoUrl} alt="" />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: ${props => props.size || 'var(--logo-size)'};
`;

export default Logo;
