import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Outlet />
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.section``;

export default Dashboard;
