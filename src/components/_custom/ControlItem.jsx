import { useState } from 'react';
import styled from 'styled-components/macro';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';

import { EditGroup, ImageContainer } from '.';
import { mediaQuery } from '../../utils/styles-values';

const ControlItem = ({
  _id,
  idx,
  name,
  title,
  image,
  url,
  description,
  updateMethod,
  deleteMethod,
  uploadMethod,
  uploadLoader,
  testimonial,
}) => {
  const [value, setValue] = useState({
    name,
    title,
    url,
    description,
    image,
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleUpdate = () => {
    updateMethod(_id, value);
  };

  return (
    <ControlItemWrapper testimonial={testimonial}>
      <div className="section-1">
        <p className="number">{idx}</p>

        <ImageContainer
          image={value.image}
          isEdit={isEdit}
          uploadMethod={uploadMethod}
          uploadLoader={uploadLoader}
        />

        <div className="row-container">
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
        </div>

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
            name="description"
            value={value.description}
            textarea="true"
          />
        )}
      </div>
    </ControlItemWrapper>
  );
};

const ControlItemWrapper = styled.div`
  min-height: 40px;
  padding: 10px 0px;

  .section-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .row-container {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 10px;
    }
  }

  .section-2 {
    width: 100%;
    margin-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }

  .button-container {
    display: flex;
    flex-direction: row;
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

  @media ${mediaQuery.sm} {
    .section-1 {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      .row-container {
        flex: 1;
        flex-direction: ${props => (props.testimonial ? 'column' : 'row')};
        text-align: left;
      }
    }

    .section-2 {
      text-align: left;
    }

    .button-container {
      flex-direction: column;
    }
  }
`;

export default ControlItem;
