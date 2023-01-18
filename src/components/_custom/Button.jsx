import styled from 'styled-components/macro';

const Button = ({
  method,
  type,
  content,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  radius,
  isDisabled,
  upload,
}) => {
  return (
    <ButtonWrapper
      disabled={upload && !isDisabled}
      upload={upload}
      type={type || 'button'}
      radius={radius}
      style={{
        '--min-width': minWidth,
        '--max-width': maxWidth,
        '--min-height': minHeight,
        '--max-height': maxHeight,
      }}
      onClick={method}
    >
      {content}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  display: grid;
  place-content: center;
  width: clamp(var(--min-width), 26vw, var(--max-width));
  height: clamp(var(--min-height), 10vw, var(--max-height));
  background-color: ${props =>
    props.upload
      ? props.disabled
        ? 'var(--gray)'
        : 'var(--dark-blue)'
      : 'var(--dark-blue)'};
  color: var(--white);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: ${props => props.radius};
  cursor: ${props =>
    props.upload ? (props.disabled ? 'not-allowed' : 'pointer') : 'pointer'};
  transition: all 0.1s linear;
  text-transform: capitalize;
`;

export default Button;
