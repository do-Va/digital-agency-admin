import styled from 'styled-components/macro';

const EditGroup = ({ method, name, value, isEdit }) => {
  return (
    <EditGroupWrapper>
      {isEdit ? (
        <input
          type="text"
          value={value}
          name={name}
          onChange={evn =>
            method(prevState => ({
              ...prevState,
              [evn.target.name]: evn.target.value,
            }))
          }
        />
      ) : (
        <p>{value}</p>
      )}
    </EditGroupWrapper>
  );
};

const EditGroupWrapper = styled.div`
  flex: 1;

  input {
    width: 100%;
    border: none;
    padding: 5px;
  }
`;

export default EditGroup;
