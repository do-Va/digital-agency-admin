import styled from 'styled-components/macro';

const Title = ({ title }) => {
  return <TitleWrapper>{title}</TitleWrapper>;
};

const TitleWrapper = styled.h3`
  margin-bottom: 20px;
  color: var(--white);
`;

export default Title;
