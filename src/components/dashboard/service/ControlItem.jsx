import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';

import {
  updateListItem,
  deleteListItem,
} from '../../../redux/dashboard/serviceListSlice';
import EditGroup from '../../_custom/EditGroup';

const ControlItem = ({ _id, idx, title, description }) => {
  const [value, setValue] = useState({
    title,
    description,
  });
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateListItem({ url: `/service/list/${_id}`, value }));
  };

  return (
    <ControlItemWrapper>
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
        name="description"
        value={value.description}
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
        <div
          className="btn btn-red"
          onClick={() => dispatch(deleteListItem(`/service/list/${_id}`))}
        >
          <AiOutlineDelete />
        </div>
      </div>
    </ControlItemWrapper>
  );
};

const ControlItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  height: max-content;
  padding-bottom: 10px;

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
