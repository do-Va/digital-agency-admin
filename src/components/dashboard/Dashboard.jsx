import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';
import SideMenu from './side-menu/SideMenu';

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <div className="max-container">
        <SideMenu />
        <Outlet />
      </div>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: var(--red);

  .max-container {
    display: flex;
    gap: 20px;
    padding: 50px 0;
  }
`;

export default Dashboard;
