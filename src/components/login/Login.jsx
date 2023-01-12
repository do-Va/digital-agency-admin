import styled from 'styled-components/macro';
import Form from './Form';

const Login = () => {
  return (
    <LoginWrapper>
      <Form />
    </LoginWrapper>
  );
};

const LoginWrapper = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--red);
`;

export default Login;
