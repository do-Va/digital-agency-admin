import styled from 'styled-components/macro';
import { Logo } from '../../_custom';

const SideMenuTitle = () => {
  return (
    <SideMenuTitleWrapper>
      <Logo size="100px" />
    </SideMenuTitleWrapper>
  );
};

const SideMenuTitleWrapper = styled.h5`
  margin-bottom: 30px;
`;

export default SideMenuTitle;
