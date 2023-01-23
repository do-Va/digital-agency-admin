import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { SubTitle } from '../../_custom';
import ContactUsMember from './ContactUsMember';

const ContactUsList = () => {
  const { contactUsList } = useSelector(store => store.contactUs);

  return (
    <ContactUsListWrapper>
      <SubTitle title="Contact Us List" />

      <div className="list">
        {contactUsList.map((item, idx) => (
          <ContactUsMember key={item._id} idx={idx} {...item} />
        ))}
      </div>
    </ContactUsListWrapper>
  );
};

const ContactUsListWrapper = styled.div`
  .list {
    & > *:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`;

export default ContactUsList;
