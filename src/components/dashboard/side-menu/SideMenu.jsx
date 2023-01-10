import styled from 'styled-components/macro';
import sideMenus from '../../../constants/side-menus';
import { SideMenuItem, SideMenuTitle } from '.';
import { Button } from '../../_custom';

const SideMenu = () => {
  return (
    <SideMenuWrapper>
      <SideMenuTitle />
      {sideMenus.map(item => (
        <SideMenuItem key={item.id} {...item} />
      ))}
      <Button
        content="logout"
        minWidth="100%"
        maxWidth="100%"
        minHeight="50px"
        maxHeight="50px"
        radius="3px"
      />
    </SideMenuWrapper>
  );
};

const SideMenuWrapper = styled.aside`
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  padding: 20px 20px;
  height: max-content;

  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: var(--radius);

  & > :last-child {
    margin-top: 30px;
  }
`;

export default SideMenu;
