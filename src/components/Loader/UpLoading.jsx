import styled from 'styled-components/macro';

const UpLoading = () => {
  return <UpLoadingWrapper></UpLoadingWrapper>;
};

const UpLoadingWrapper = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border-top: 3px solid var(--dark-blue);
  animation: rotate 1s infinite;
  position: relative;

  &::after {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: inherit;
    background-color: var(--dark-blue);
    position: absolute;
    bottom: 4px;
    right: 0px;

    transform: translate(-50%, -50%);
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export default UpLoading;
