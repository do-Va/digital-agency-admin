import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';

import { updateMenu, deleteMenu } from '../../../redux/dashboard/menuSlice';
import EditGroup from '../../_custom/EditGroup';
import { mediaQuery } from '../../../utils/styles-values';

const ControlItem = ({ _id, idx, title, url }) => {
  const [value, setValue] = useState({
    title,
    url,
  });
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateMenu({ url: `/menus/${_id}`, value }));
  };

  return (
    <ControlItemWrapper>
      <div className="row-container">
        <p className="number">{idx}</p>

        <EditGroup
          method={setValue}
          isEdit={isEdit}
          name="title"
          value={value.title}
        />

        <EditGroup
          method={setValue}
          isEdit={isEdit}
          name="url"
          value={value.url}
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
        <div
          className="btn btn-red"
          onClick={() => dispatch(deleteMenu(`/menus/${_id}`))}
        >
          <AiOutlineDelete />
        </div>
      </div>
    </ControlItemWrapper>
  );
};

const ControlItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;

  .row-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    height: 40px;
  }

  .button-container {
    width: 100%;
    display: flex;
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
    flex-direction: row;
  }
`;

export default ControlItem;
