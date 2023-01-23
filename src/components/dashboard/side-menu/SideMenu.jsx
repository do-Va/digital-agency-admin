import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import sideMenus from '../../../constants/side-menus';
import { SideMenuItem, SideMenuTitle } from '.';
import { Button } from '../../_custom';
import { logoutUser } from '../../../redux/user/userSlice';
import { mediaQuery } from '../../../utils/styles-values';
import { AiFillSetting } from 'react-icons/ai';

const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };

  return (
    <SideMenuWrapper showMenu={showMenu}>
      <div className="float-button" onClick={() => setShowMenu(!showMenu)}>
        <div className="button">
          <AiFillSetting />
        </div>
      </div>

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
  width: 170px;

  flex-direction: column;
  gap: 5px;
  border-radius: var(--radius);
  position: absolute;
  transition: all 0.2s linear;
  left: ${props => (props.showMenu ? '-170px' : '10px')};

  & > :last-child {
    margin-top: 30px;
  }

  .float-button {
    position: relative;
    width: 100%;
    cursor: pointer;

    .button {
      position: absolute;
      right: -50px;
      top: 10px;
      width: 30px;
      height: 30px;
      background-color: var(--white);
      font-size: 17px;
      display: grid;
      place-content: center;
      border-radius: 0 10px 10px 0;
      box-shadow: var(--box-shadow);
      color: var(--dark-blue);
    }
  }

  @media ${mediaQuery.sm} {
    position: relative;
    left: 0;

    .float-button {
      display: none;
    }
  }
`;

export default SideMenu;
