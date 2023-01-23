import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { SubTitle } from '../../_custom';
import ContactUsMember from './ContactUsMember';

const ContactUsList = () => {
  const { contactUsList } = useSelector(store => store.contactUs);

  return (
    <ContactUsListWrapper>
      <SubTitle title="Contact Us List" />

      {contactUsList.map((item, idx) => (
        <ContactUsMember key={item._id} idx={idx} {...item} />
      ))}
    </ContactUsListWrapper>
  );
};

const ContactUsListWrapper = styled.div``;

export default ContactUsList;
