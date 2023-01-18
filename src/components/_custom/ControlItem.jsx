import { useState } from 'react';
import styled from 'styled-components/macro';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';

import { EditGroup, ImageContainer } from '.';

const ControlItem = ({
  _id,
  idx,
  name,
  title,
  image,
  url,
  desc,
  updateMethod,
  deleteMethod,
  testimonial,
}) => {
  const [value, setValue] = useState({
    name,
    title,
    url,
    desc,
    image,
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleUpdate = () => {
    updateMethod(_id, value);
  };

  return (
    <ControlItemWrapper>
      <div className="section-1">
        <p className="number">{idx}</p>

        <ImageContainer image={value.image} isEdit={isEdit} />

        <EditGroup
          method={setValue}
          isEdit={isEdit}
          name="name"
          value={value.name}
        />

        <EditGroup
          method={setValue}
          isEdit={isEdit}
          name="title"
          value={value.title}
        />

        <div className="button-container">
          {!isEdit ? (
            <div className="btn btn-green" onClick={() => setIsEdit(true)}>
              <AiOutlineEdit />
            </div>
          ) : (
            <div className="btn btn-orange" onClick={handleUpdate}>
              <AiOutlineSave />
            </div>
          )}
          <div className="btn btn-red" onClick={() => deleteMethod(_id)}>
            <AiOutlineDelete />
          </div>
        </div>
      </div>

      <div className="section-2">
        {testimonial && (
          <EditGroup
            method={setValue}
            isEdit={isEdit}
            name="desc"
            value={value.desc}
          />
        )}
      </div>
    </ControlItemWrapper>
  );
};

const ControlItemWrapper = styled.div`
  min-height: 40px;
  padding-bottom: 10px;

  .section-1 {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .section-2 {
    width: 100%;
  }

  .button-container {
    display: flex;
    align-items: center;
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

export default ControlItem;
