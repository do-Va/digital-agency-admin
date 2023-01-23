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
  updateHero,
  uploadHeroImage,
  getHero,
  changeHeroState,
  changeImage,
} from '../../../redux/dashboard/heroSlice';

const Hero = () => {
  const { image, hero, heroLoader, updateSuccess, uploadSuccess } = useSelector(
    store => store.hero
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHero('/hero'));
  }, [dispatch, updateSuccess]);

  useEffect(() => {
    dispatch(changeImage(hero.image));
  }, [dispatch, hero]);

  const handleSubmit = evn => {
    dispatch(
      updateHero({
        url: `/hero/${hero._id}`,
        value: {
          title: hero.title,
          buttonContent: hero.buttonContent,
          image: image,
        },
      })
    );
  };

  return (
    <HeroWrapper>
      <Title title="Hero Control" />

      <div className="content-container">
        <FormControl
          method={handleSubmit}
          isDisabled={uploadSuccess}
          upload="true"
        >
          <SubTitle title="Update Hero" />
          <InputGroup
            name="title"
            title="Title"
            value={hero.title || ''}
            method={changeHeroState}
            placeHolder="Hero title"
          />

          <InputGroup
            name="buttonContent"
            title="Button Content"
            value={hero.buttonContent || ''}
            method={changeHeroState}
            placeHolder="Hero Button"
          />

          <UploadContainer method={uploadHeroImage} />
        </FormControl>
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  width: 100%;
`;

export default Hero;
