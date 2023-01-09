import styled from 'styled-components/macro';
import { Button, InputGroup, Logo } from '../_custom';
import { mediaQuery } from '../../utils/styles-values';

const Form = () => {
  return (
    <FormWrapper>
      <Logo />
      <InputGroup name="email" title="Email" type="email" />
      <InputGroup name="password" type="password" title="Password" />
      <Button
        content="Login"
        minWidth="100px"
        maxWidth="150px"
        minHeight="50px"
        maxHeight="70px"
      />
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  width: 90%;
  max-width: 500px;
  height: 500px;
  background-color: var(--white);
  padding: 50px 10px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  & > :first-child {
    margin-bottom: 10px;
  }

  @media ${mediaQuery.md} {
    padding: 50px 30px;
  }
`;

export default Form;
