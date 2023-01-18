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
} from '../../../redux/dashboard/aboutSlice';

const About = () => {
  const { image, about, aboutLoader, updateSuccess, uploadSuccess } =
    useSelector(store => store.about);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAbout('/about'));
  }, [dispatch, updateSuccess]);

  const handleSubmit = evn => {
    dispatch(
      updateAbout({
        url: `/about/${about._id}`,
        value: {
          title: about.title,
          description: about.description,
          buttonContent: about.buttonContent,
          image: image.url,
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
            value={about.title}
            method={changeAboutState}
            placeHolder="Menu title"
          />

          <InputGroup
            textarea="true"
            name="description"
            title="Description"
            value={about.description}
            method={changeAboutState}
            placeHolder="Menu title"
          />

          <InputGroup
            name="buttonContent"
            title="Button Content"
            value={about.buttonContent}
            method={changeAboutState}
            placeHolder="Menu url (#home)"
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
