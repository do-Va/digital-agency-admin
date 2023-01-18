import styled from 'styled-components/macro';
import Button from './Button';

const FormControl = ({ children, method, isDisabled, upload }) => {
  const handleSubmit = evn => {
    evn.preventDefault();

    method();
  };

  return (
    <FormControlWrapper onSubmit={handleSubmit}>
      {children}

      <Button
        type="submit"
        content="save"
        minWidth="100px"
        maxWidth="100px"
        minHeight="50px"
        maxHeight="50px"
        radius="3px"
        isDisabled={isDisabled}
        upload={upload}
      />
    </FormControlWrapper>
  );
};

const FormControlWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > :last-child {
    margin-top: 20px;
  }
`;

export default FormControl;
