import { useState } from 'react';
import styled from 'styled-components/macro';
import { BsUpload, BsXLg } from 'react-icons/bs';
import { ModalUpload } from '.';

const ImageContainer = ({ image, isEdit, uploadMethod, uploadLoader }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <ImageContainerWrapper>
      <div className="image">
        <img src={image} alt="" />
      </div>

      {isEdit && (
        <>
          <div className="upload-button" onClick={() => setIsShowModal(true)}>
            <BsUpload />
          </div>

          {isShowModal && (
            <div className="modal">
              <div className="modal-container">
                <ModalUpload
                  uploadMethod={uploadMethod}
                  uploadLoader={uploadLoader}
                />

                <div className="float" onClick={() => setIsShowModal(false)}>
                  <BsXLg />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </ImageContainerWrapper>
  );
};

const ImageContainerWrapper = styled.div`
  position: relative;

  .image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;

    img {
      flex: 1;
    }
  }

  .upload-button {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: grid;
    place-content: center;
    background-color: var(--white);
    padding: 3px;

    right: -10px;
    bottom: 0;
    cursor: pointer;
  }

  .modal {
    position: absolute;
    top: 0;
    left: 5px;

    background-color: var(--white);
    z-index: 10;
    box-shadow: var(--box-shadow);
    border: 1px solid var(--red);
    border-radius: var(--radius);

    &-container {
      position: relative;
      padding: 20px;

      .float {
        background-color: var(--white);
        font-size: 17px;
        position: absolute;
        top: -10px;
        right: -10px;
        padding: 5px;
        border-radius: 50%;
        display: grid;
        place-content: center;
        border: 1px solid var(--dark-blue);
        cursor: pointer;
      }
    }
  }
`;

export default ImageContainer;
