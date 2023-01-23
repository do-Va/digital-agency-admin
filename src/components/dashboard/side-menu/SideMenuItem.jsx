import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useLocation } from 'react-router-dom';

const SideMenuItem = ({ name, Icon, url }) => {
  const path = useLocation().pathname;

  return (
    <SideMenuItemWrapper to={url} path={path}>
      <Icon />

      <p className="name">{name}</p>
    </SideMenuItemWrapper>
  );
};

const SideMenuItemWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 0;
  color: ${props =>
    props.to === props.path ? 'var(--red)' : 'var(--gray-light)'};
  position: relative;
  text-transform: capitalize;
  font-size: var(--fs-md);

  &::after,
  &::before {
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    transform-origin: left;
    transform: ${props => (props.to === props.path ? 'scale(1)' : 'scale(0)')};
  }

  &::after {
    width: 12px;
    background-color: var(--red);
    left: -20px;
    border-radius: 0 3px 3px 0;
    transition: all 0.1s 0.2s linear;
  }

  &::before {
    height: 70%;
    width: 5px;
    background-color: var(--white);
    left: -20px;
    border-radius: 3px;
    z-index: 1;
    top: 7px;
    transition: all 0.2s linear;
  }

  &:hover {
    color: var(--red);
  }

  &:hover::after,
  &:hover::before {
    transform: scale(1);
  }

  &:hover::after {
    transition: all 0.2s linear;
  }

  &:hover::before {
    transition: all 0.1s 0.2s linear;
  }
`;

export default SideMenuItem;
