import { useEffect } from 'react';
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
  updateNewsLetter,
  uploadNewsLetterImage,
  getNewsLetter,
  changeNewsLetterState,
  changeImage,
  getAllNewsLetterMembers,
} from '../../../redux/dashboard/newsLetterSlice';
import NewsLetterList from './NewsLetterList';

const NewsLetter = () => {
  const { image, newsLetter, updateSuccess, uploadSuccess } = useSelector(
    store => store.newsLetter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsLetter('/newsletter'));
  }, [dispatch, updateSuccess]);

  useEffect(() => {
    dispatch(getAllNewsLetterMembers('/newsletter/list'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(changeImage(newsLetter.image));
  }, [dispatch, newsLetter]);

  const handleSubmit = evn => {
    dispatch(
      updateNewsLetter({
        url: `/newsletter/${newsLetter._id}`,
        value: {
          title: newsLetter.title,
          buttonContent: newsLetter.buttonContent,
          image: image || newsLetter.image,
        },
      })
    );
  };

  return (
    <NewsLetterWrapper>
      <Title title="NewsLetter Control" />

      <div className="content-container">
        <FormControl
          method={handleSubmit}
          isDisabled={uploadSuccess}
          upload="true"
        >
          <SubTitle title="Update NewsLetter" />
          <InputGroup
            name="title"
            title="Title"
            value={newsLetter.title || ''}
            method={changeNewsLetterState}
            placeHolder="NewsLetter title"
          />

          <InputGroup
            name="buttonContent"
            title="Button Content"
            value={newsLetter.buttonContent || ''}
            method={changeNewsLetterState}
            placeHolder="Button content"
          />

          <UploadContainer method={uploadNewsLetterImage} />
        </FormControl>

        <NewsLetterList />
      </div>
    </NewsLetterWrapper>
  );
};

const NewsLetterWrapper = styled.section`
  width: 100%;
`;

export default NewsLetter;
