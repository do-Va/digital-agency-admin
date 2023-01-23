import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { SubTitle } from '../../_custom';
import NewsLetterMember from './NewsLetterMember';

const NewsLetterList = () => {
  const { newsLetterList } = useSelector(store => store.newsLetter);

  return (
    <NewsLetterListWrapper>
      <SubTitle title="NewsLetter List" />

      {newsLetterList.map((item, idx) => (
        <NewsLetterMember key={item._id} idx={idx} {...item} />
      ))}
    </NewsLetterListWrapper>
  );
};

const NewsLetterListWrapper = styled.div``;

export default NewsLetterList;
