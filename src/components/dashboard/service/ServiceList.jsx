import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { ListControl, FormControl, SubTitle, InputGroup } from '../../_custom';
import {
  createListItem,
  changeServiceListState,
  resetValue,
  getAllServiceList,
} from '../../../redux/dashboard/serviceListSlice';
import ControlItem from './ControlItem';
import { mediaQuery } from '../../../utils/styles-values';

const ServiceList = () => {
  const {
    serviceList,
    title,
    description,
    serviceListLoader,
    createSuccess,
    deleteSuccess,
    updateSuccess,
  } = useSelector(store => store.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServiceList('/service/list'));
  }, [dispatch, createSuccess, deleteSuccess, updateSuccess]);

  const handleSubmit = () => {
    dispatch(
      createListItem({ url: '/service/list', value: { title, description } })
    );
    dispatch(resetValue());
  };

  return (
    <ServiceListWrapper>
      <FormControl method={handleSubmit}>
        <SubTitle title="Create List Item" />
        <div className="vertical-container">
          <InputGroup
            name="title"
            title="Title"
            value={title}
            method={changeServiceListState}
            placeHolder="List Item title"
          />
          <InputGroup
            name="description"
            title="Description"
            value={description}
            method={changeServiceListState}
            placeHolder="Description"
          />
        </div>
      </FormControl>

      <ListControl>
        <SubTitle title="Service List" />
        {serviceListLoader ? (
          <div>loading</div>
        ) : (
          <div className="list">
            {serviceList.length > 0 ? (
              serviceList.map((item, idx) => (
                <ControlItem key={item._id} {...item} idx={idx} />
              ))
            ) : (
              <p>Add service to List</p>
            )}
          </div>
        )}
      </ListControl>
    </ServiceListWrapper>
  );
};

const ServiceListWrapper = styled.section`
  flex: 1;

  .vertical-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 20px;

    & > *:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  &:last-child > :last-child {
    margin-top: 50px;
  }

  @media ${mediaQuery.sm} {
    .vertical-container {
      flex-direction: row;
    }
  }
`;

export default ServiceList;
