import styled from 'styled-components/macro';

const Button = ({ content, minWidth, maxWidth, minHeight, maxHeight }) => {
  return (
    <ButtonWrapper
      style={{
        '--min-width': minWidth,
        '--max-width': maxWidth,
        '--min-height': minHeight,
        '--max-height': maxHeight,
      }}
    >
      {content}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.a`
  display: grid;
  place-content: center;
  width: clamp(var(--min-width), 26vw, var(--max-width));
  height: clamp(var(--min-height), 10vw, var(--max-height));
  background-color: var(--dark-blue);
  color: var(--white);
  box-shadow: 0px 20px 40px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export default Button;
