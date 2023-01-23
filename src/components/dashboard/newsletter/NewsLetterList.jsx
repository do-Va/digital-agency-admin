import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { SubTitle } from '../../_custom';
import NewsLetterMember from './NewsLetterMember';

const NewsLetterList = () => {
  const { newsLetterList } = useSelector(store => store.newsLetter);

  return (
    <NewsLetterListWrapper>
      <SubTitle title="NewsLetter List" />

      <div className="list">
        {newsLetterList.map((item, idx) => (
          <NewsLetterMember key={item._id} idx={idx} {...item} />
        ))}
      </div>
    </NewsLetterListWrapper>
  );
};

const NewsLetterListWrapper = styled.div`
  .list {
    & > *:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`;

export default NewsLetterList;
