import styled from 'styled-components/macro';

const SubTitle = ({ title }) => {
  return <SubTitleWrapper>{title}</SubTitleWrapper>;
};

const SubTitleWrapper = styled.h4`
  margin-bottom: 10px;
  color: var(--red);
`;

export default SubTitle;
