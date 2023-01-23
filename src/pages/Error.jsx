import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import img from '../assets/not-found.svg';

const Error = () => {
  return (
    <ErrorWrapper className="full-page">
      <div className="content-container">
        <div className="image-container">
          <img src={img} alt="not found" />
        </div>
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page your're looking for</p>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: none;
    text-align: center;

    .image-container {
      max-width: 500px;
    }

    .btn {
      background-color: var(--dark-blue);
      width: 100px;
      height: 50px;
      color: var(--white);
      display: grid;
      place-content: center;
      font-weight: var(--fw-bold);
      text-transform: uppercase;
    }
  }
`;

export default Error;
