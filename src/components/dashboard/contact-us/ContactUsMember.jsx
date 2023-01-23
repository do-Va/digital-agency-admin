import styled from 'styled-components/macro';
import { mediaQuery } from '../../../utils/styles-values';

const ContactUsMember = ({ idx, name, email, message }) => {
  return (
    <ContactUsMemberWrapper>
      <p className="number">{idx}</p>

      <div>
        <p className="name">{name}</p>
        <p className="email">{email}</p>
      </div>

      <p className="message">{message}</p>
    </ContactUsMemberWrapper>
  );
};

const ContactUsMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 20px;

  & > *:not(:first-child) {
    flex: 1;
  }

  .number {
    font-size: 20px;
  }

  .name {
    font-weight: var(--fw-bold);
  }

  .email {
    color: var(--gray-light);
  }

  .message {
    position: relative;
    padding-left: 10px;

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 5px;
      border-radius: 2px;
      background-color: var(--red);
      top: 0;
      left: 0;
    }
  }

  @media ${mediaQuery.md} {
    flex-direction: row;
  }
`;

export default ContactUsMember;
