import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import {
  Title,
  FormControl,
  SubTitle,
  InputGroup,
  UploadContainer,
} from '../../_custom';
import {
  updateContactUs,
  uploadContactUsImage,
  getContactUs,
  changeContactUsState,
  changeImage,
  getAllContactMembers,
} from '../../../redux/dashboard/contactUsSlice';
import ContactUsList from './ContactUsList';

const ContactUs = () => {
  const { image, contactUs, updateSuccess, uploadSuccess } = useSelector(
    store => store.contactUs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactUs('/contact-us'));
  }, [dispatch, updateSuccess]);

  useEffect(() => {
    dispatch(getAllContactMembers('/contact-us/list'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(changeImage(contactUs.image));
  }, [dispatch, contactUs]);

  const handleSubmit = evn => {
    dispatch(
      updateContactUs({
        url: `/contact-us/${contactUs._id}`,
        value: {
          title: contactUs.title,
          buttonContent: contactUs.buttonContent,
          image: image || contactUs.image,
        },
      })
    );
  };

  return (
    <ContactUsWrapper>
      <Title title="ContactUs Control" />

      <div className="content-container">
        <FormControl
          method={handleSubmit}
          isDisabled={uploadSuccess}
          upload="true"
        >
          <SubTitle title="Update Contact Us" />
          <InputGroup
            name="title"
            title="Title"
            value={contactUs.title || ''}
            method={changeContactUsState}
            placeHolder="Contact Us title"
          />

          <InputGroup
            name="buttonContent"
            title="Button Content"
            value={contactUs.buttonContent || ''}
            method={changeContactUsState}
            placeHolder="Contact Us"
          />

          <UploadContainer method={uploadContactUsImage} />
        </FormControl>

        <ContactUsList />
      </div>
    </ContactUsWrapper>
  );
};

const ContactUsWrapper = styled.section`
  flex: 1;
`;

export default ContactUs;
