import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import sideMenus from '../../../constants/side-menus';
import { SideMenuItem, SideMenuTitle } from '.';
import { Button } from '../../_custom';
import { logoutUser } from '../../../redux/user/userSlice';

const SideMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };

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
        method={handleClick}
      />
    </SideMenuWrapper>
  );
};

const SideMenuWrapper = styled.aside`
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  padding: 20px 20px;
  height: max-content;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: var(--radius);

  & > :last-child {
    margin-top: 30px;
  }
`;

export default SideMenu;
