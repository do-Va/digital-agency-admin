import styled from 'styled-components/macro';

const InputGroup = ({ name, title, textarea, type }) => {
  return (
    <InputGroupWrapper>
      <label htmlFor={name}>{title}</label>

      {textarea ? (
        <textarea name={name} id={name}></textarea>
      ) : (
        <input type={type || 'text'} name={name} id={name} />
      )}
    </InputGroupWrapper>
  );
};

const InputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  label {
    font-size: var(--fs-md);
  }

  input,
  textarea {
    min-width: 100%;
    height: 50px;
    padding: 10px;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
    border: none;
    background-color: #ffcdd7;
    outline: 1px solid var(--gray-light);
    border-radius: 3px;
  }

  textarea {
    min-height: 156px;
    resize: vertical;
  }
`;

export default InputGroup;
