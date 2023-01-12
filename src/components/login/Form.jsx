import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { mediaQuery } from '../../utils/styles-values';
import { Button, InputGroup, Logo } from '../_custom';
import { changeUserState, loginUser } from '../../redux/user/userSlice';

const Form = () => {
  const { email, password, userSuccess } = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = evn => {
    evn.preventDefault();

    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    userSuccess && navigate('/admin-dashboard');
  }, [userSuccess, navigate]);

  return (
    <FormWrapper>
      <Logo />
      <InputGroup
        method={changeUserState}
        name="email"
        title="Email"
        type="email"
      />
      <InputGroup
        method={changeUserState}
        name="password"
        type="password"
        title="Password"
      />
      <Button
        type="submit"
        content="Login"
        minWidth="100px"
        maxWidth="150px"
        minHeight="50px"
        maxHeight="70px"
        method={handleSubmit}
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
  box-shadow: var(--box-shadow);
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
