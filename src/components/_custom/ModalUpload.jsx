import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { MdAddPhotoAlternate } from 'react-icons/md';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import { UpLoading } from '../Loader';

const ModalUpload = ({ method, uploadLoader }) => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();

  const handleSave = () => {
    const data = new FormData();

    data.append('file', file);
    data.append('upload_preset', 'upload');

    dispatch(method(data));
  };

  return (
    <ModalUploadWrapper>
      <div className="upload">
        <label htmlFor="file2">
          <MdAddPhotoAlternate /> Select
        </label>
        <input
          type="file"
          id="file2"
          onChange={evn => setFile(evn.target.files[0])}
          style={{ display: 'none' }}
        />
      </div>

      <button className="send" type="button" onClick={handleSave}>
        {uploadLoader ? (
          <UpLoading />
        ) : (
          <>
            <BsFillCloudUploadFill />
            Send
          </>
        )}
      </button>
    </ModalUploadWrapper>
  );
};

const ModalUploadWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .upload {
    border: none;
    background-color: transparent;
  }

  label,
  .send {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 50px;
    font-size: 18px;
    text-transform: uppercase;
    gap: 10px;
  }

  label {
    border: 1px solid var(--red);
    border-radius: var(--radius);
    color: var(--red);
    cursor: pointer;
  }

  .send {
    background-color: transparent;
    color: var(--dark-blue);
    border: 1px solid var(--dark-blue);
    border-radius: var(--radius);
    cursor: pointer;
  }
`;

export default ModalUpload;
