import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import {
  Title,
  FormControl,
  SubTitle,
  InputGroup,
  UploadContainer,
} from '../../_custom';
import {
  updateService,
  uploadServiceImage,
  getService,
  changeServiceState,
  changeImage,
} from '../../../redux/dashboard/serviceSlice';
import ServiceList from './ServiceList';

const Service = () => {
  const { image, service, updateSuccess, uploadSuccess } = useSelector(
    store => store.service
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getService('/service'));
  }, [dispatch, updateSuccess]);

  useEffect(() => {
    dispatch(changeImage(service.image));
  }, [dispatch, service]);

  const handleSubmit = evn => {
    dispatch(
      updateService({
        url: `/service/${service._id}`,
        value: {
          title: service.title,
          title2: service.title2,
          description: service.description,
          buttonContent: service.buttonContent,
          image: image,
        },
      })
    );
  };

  return (
    <ServiceWrapper>
      <Title title="Service Control" />

      <div className="content-container">
        <FormControl
          method={handleSubmit}
          isDisabled={uploadSuccess}
          upload="true"
        >
          <SubTitle title="Update Service" />
          <InputGroup
            name="title"
            title="Title"
            value={service.title || ''}
            method={changeServiceState}
            placeHolder="Service title"
          />

          <InputGroup
            name="title2"
            title="Title 2"
            value={service.title2 || ''}
            method={changeServiceState}
            placeHolder="Service title2"
          />

          <InputGroup
            textarea="true"
            name="description"
            title="Description"
            value={service.description || ''}
            method={changeServiceState}
            placeHolder="Service description"
          />

          <InputGroup
            name="buttonContent"
            title="Button Content"
            value={service.buttonContent || ''}
            method={changeServiceState}
            placeHolder="Button content"
          />

          <UploadContainer method={uploadServiceImage} />
        </FormControl>

        <ServiceList />
      </div>
    </ServiceWrapper>
  );
};

const ServiceWrapper = styled.section`
  width: 100%;
`;

export default Service;
