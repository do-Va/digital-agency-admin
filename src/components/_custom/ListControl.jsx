import styled from 'styled-components/macro';

const ListControl = ({ children }) => {
  return <ListControlWrapper>{children}</ListControlWrapper>;
};

const ListControlWrapper = styled.div`
  width: 100%;
`;

export default ListControl;
