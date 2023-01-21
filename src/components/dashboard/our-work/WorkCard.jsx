import { useState } from 'react';
import styled from 'styled-components/macro';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';
import { BsUpload, BsXLg } from 'react-icons/bs';
import { EditGroup, ModalUpload } from '../../_custom';
import { uploadWorkItemImage } from '../../../redux/dashboard/ourWorkSlice';

const WorkCard = ({
  _id,
  alt,
  image,
  updateMethod,
  deleteMethod,
  uploadLoader,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [value, setValue] = useState({
    alt,
    image,
  });

  return (
    <WorkCardWrapper>
      <div className="image-container">
        <img src={image} alt={alt} />
      </div>

      <div className="content">
        <EditGroup
          method={setValue}
          isEdit={isEdit}
          name="alt"
          value={value.alt}
        />

        {isEdit && (
          <>
            <div className="upload-button" onClick={() => setIsShowModal(true)}>
              <BsUpload />
            </div>

            {isShowModal && (
              <div className="modal">
                <div className="modal-container">
                  <ModalUpload
                    method={uploadWorkItemImage}
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

        <div className="button-container">
          {!isEdit ? (
            <div className="btn btn-green" onClick={() => setIsEdit(true)}>
              <AiOutlineEdit />
            </div>
          ) : (
            <div
              className="btn btn-orange"
              onClick={() => updateMethod(_id, value)}
            >
              <AiOutlineSave />
            </div>
          )}
          <div className="btn btn-red" onClick={() => deleteMethod(_id)}>
            <AiOutlineDelete />
          </div>
        </div>
      </div>
    </WorkCardWrapper>
  );
};

const WorkCardWrapper = styled.div`
  border-radius: var(--radius);
  box-shadow: var(--box-shadow);

  .content {
    padding: 10px;
  }

  position: relative;
  .image-container {
    display: flex;
    height: 300px;

    img {
      flex: 1;
      border-radius: var(--radius) var(--radius) 0 0;
    }
  }

  .upload-button {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 0 var(--radius) 0 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: grid;
    place-content: center;
    background-color: var(--white);
    padding: 3px;
    box-shadow: inset 1px -1px 3px rgba(0, 0, 0, 0.2);

    right: 0;
    top: 0;
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

  .button-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;

    .btn {
      cursor: pointer;
      background-color: var(--white);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      padding: 5px;
      border-radius: 50%;
      color: var(--white);
      font-size: 20px;
      flex-shrink: 0;

      &-green {
        color: darkgreen;
      }

      &-orange {
        color: darkkhaki;
      }

      &-red {
        color: darkred;
      }
    }
  }
`;

export default WorkCard;
