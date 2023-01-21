import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { IoChevronDown } from 'react-icons/io5';

const SelectGroup = ({ objects, value, name, title, method }) => {
  const dispatch = useDispatch();

  const selectHandler = evn => {
    dispatch(method({ name: evn.target.name, value: evn.target.value }));
  };

  return (
    <SelectGroupWrapper>
      <label htmlFor={name}>{title}</label>

      <select
        className="native-select"
        value={value}
        onChange={selectHandler}
        name={name}
        id={name}
      >
        {objects.map(obj => (
          <option key={obj.id} value={obj.name}>
            {obj.name}
          </option>
        ))}
      </select>

      <div className="presentational-bit">
        <p>{value}</p>
        <IoChevronDown />
      </div>
    </SelectGroupWrapper>
  );
};

const SelectGroupWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  label {
    font-size: var(--fs-md);
  }

  .native-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    padding: 0px 15px;
  }

  .presentational-bit {
    min-width: 100%;
    height: 50px;
    padding: 10px;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
    border: none;
    background-color: #ffcdd7;
    outline: 1px solid var(--gray-light);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 15px;
      height: 15px;
      pointer-events: none;
    }
  }
`;

export default SelectGroup;
