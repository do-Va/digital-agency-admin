import styled from 'styled-components/macro';

const NewsLetterMember = ({ idx, name, email, message }) => {
  return (
    <NewsLetterMemberWrapper>
      <p className="number">{idx}</p>
      <p className="name">{name}</p>
      <p className="email">{email}</p>
    </NewsLetterMemberWrapper>
  );
};

const NewsLetterMemberWrapper = styled.div`
  display: flex;
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
`;

export default NewsLetterMember;
