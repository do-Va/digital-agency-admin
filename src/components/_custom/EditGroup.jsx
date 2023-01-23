import styled from 'styled-components/macro';

const EditGroup = ({ method, name, value, isEdit, textarea }) => {
  return (
    <EditGroupWrapper textarea={textarea}>
      {isEdit ? (
        textarea ? (
          <textarea
            value={value}
            name={name}
            onChange={evn =>
              method(prevState => ({
                ...prevState,
                [evn.target.name]: evn.target.value,
              }))
            }
          ></textarea>
        ) : (
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
        )
      ) : (
        <p>{value}</p>
      )}
    </EditGroupWrapper>
  );
};

const EditGroupWrapper = styled.div`
  width: 100%;

  input {
    width: 100%;
    border: none;
    padding: 5px;
  }

  input::placeholder {
    opacity: 0.3;
  }

  textarea {
    min-width: 100%;
    height: 50px;
    padding: 10px;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
    border: none;
    background-color: #ffcdd7;
    outline: 1px solid var(--gray-light);
    border-radius: 3px;
    min-height: 100px;
    resize: vertical;
  }
`;

export default EditGroup;
