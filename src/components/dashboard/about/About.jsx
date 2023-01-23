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
  updateAbout,
  uploadAboutImage,
  getAbout,
  changeAboutState,
  changeImage,
} from '../../../redux/dashboard/aboutSlice';

const About = () => {
  const { image, about, aboutLoader, updateSuccess, uploadSuccess } =
    useSelector(store => store.about);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAbout('/about'));
  }, [dispatch, updateSuccess]);

  useEffect(() => {
    dispatch(changeImage(about.image));
  }, [dispatch, about]);

  const handleSubmit = evn => {
    dispatch(
      updateAbout({
        url: `/about/${about._id}`,
        value: {
          title: about.title,
          description: about.description,
          buttonContent: about.buttonContent,
          image: image,
        },
      })
    );
  };

  return (
    <AboutWrapper>
      <Title title="About Control" />

      <div className="content-container">
        <FormControl
          method={handleSubmit}
          isDisabled={uploadSuccess}
          upload="true"
        >
          <SubTitle title="Update About" />
          <InputGroup
            name="title"
            title="Title"
            value={about.title || ''}
            method={changeAboutState}
            placeHolder="About title"
          />

          <InputGroup
            textarea="true"
            name="description"
            title="Description"
            value={about.description || ''}
            method={changeAboutState}
            placeHolder="Description"
          />

          <InputGroup
            name="buttonContent"
            title="Button Content"
            value={about.buttonContent || ''}
            method={changeAboutState}
            placeHolder="Button content"
          />

          <UploadContainer method={uploadAboutImage} />
        </FormControl>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  flex: 1;
`;

export default About;
